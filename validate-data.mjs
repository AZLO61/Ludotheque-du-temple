/**
 * validate-data.mjs
 * ------------------------------------------------------------------
 * Contrôle de cohérence de data.js, exécutable en local ou en CI
 * (voir .github/workflows/validate.yml), sans dépendance externe.
 *
 * Usage : node scripts/validate-data.mjs
 * Sort avec le code 1 si une incohérence bloquante est détectée
 * (échoue le build GitHub Actions), sinon 0.
 * ------------------------------------------------------------------
 */
import fs from "node:fs";
import vm from "node:vm";

const dataSource = fs.readFileSync(new URL("../data.js", import.meta.url), "utf-8");

// data.js utilise `console` (avertissements) mais aucune API DOM : on peut
// l'exécuter tel quel dans un contexte vm minimal.
const sandbox = { console };
vm.createContext(sandbox);

// Les déclarations top-level `let`/`const` de data.js ne deviennent pas des
// propriétés du contexte vm (comportement standard JS) : on les exporte
// explicitement à la fin du script exécuté, depuis la même portée lexicale.
const sourceAvecExport = dataSource + `
  globalThis.__EXPORTS__ = { JEUX, COVERS, CASES, RECOMMENDATIONS, JEUX_A_VENDRE };
`;

try {
  vm.runInContext(sourceAvecExport, sandbox, { filename: "data.js" });
} catch (e) {
  console.error("❌ data.js ne s'exécute pas correctement :", e.message);
  process.exit(1);
}

const { JEUX, COVERS, CASES, RECOMMENDATIONS, JEUX_A_VENDRE } = sandbox.__EXPORTS__;
const erreurs = [];
const infos = [];

// --- Contrôles bloquants (font échouer la CI) ---

const nomsVus = new Set();
JEUX.forEach(j => {
  if (nomsVus.has(j.nom)) erreurs.push(`Jeu en double dans JEUX : "${j.nom}"`);
  nomsVus.add(j.nom);
});

const caseIds = new Set(CASES.map(c => c.id));
JEUX.forEach(j => {
  if (j.case && !caseIds.has(j.case)) {
    erreurs.push(`Jeu "${j.nom}" référence une case inconnue : "${j.case}"`);
  }
  if (j.case && j.emplacement) {
    const c = CASES.find(c => c.id === j.case);
    if (c && !c.emplacements[j.emplacement]) {
      erreurs.push(`Jeu "${j.nom}" référence un emplacement inconnu (${j.emplacement}) dans ${j.case}`);
    }
  }
});

RECOMMENDATIONS.forEach(profil => {
  profil.jeux.forEach(nomJeu => {
    if (!nomsVus.has(nomJeu)) {
      erreurs.push(`Recommandation de ${profil.nom} : jeu introuvable dans JEUX -> "${nomJeu}"`);
    }
  });
});

// --- Avertissements (informatifs, ne font pas échouer la CI) ---

JEUX.forEach(j => {
  if (!COVERS[j.nom]) infos.push(`Jeu sans jaquette : "${j.nom}"`);
});

JEUX_A_VENDRE.forEach(item => {
  if (!nomsVus.has(item.nom) && !COVERS[item.nom]) {
    infos.push(`Jeu à vendre "${item.nom}" : ni dans JEUX ni dans COVERS.`);
  }
});

console.log(`Jeux au catalogue : ${JEUX.length}`);
console.log(`Jaquettes disponibles : ${Object.keys(COVERS).length}`);

if (infos.length > 0) {
  console.log(`\nℹ️  ${infos.length} information(s) (non bloquant) :`);
  infos.forEach(m => console.log("  - " + m));
}

if (erreurs.length > 0) {
  console.error(`\n❌ ${erreurs.length} erreur(s) de cohérence détectée(s) :`);
  erreurs.forEach(m => console.error("  - " + m));
  process.exit(1);
}

console.log("\n✅ data.js est cohérent.");
