/* ============================================================
   LA LUDOTHÈQUE DU TEMPLE — Serveur local de prévisualisation
   ============================================================
   Sert le dossier courant en HTTP pour voir le rendu comme un client
   du bar le verra.

   Pourquoi un serveur plutôt qu'un double-clic sur index.html : ouvrir le
   fichier directement passe par le protocole `file://`, où les règles de
   sécurité du navigateur diffèrent (les chemins relatifs et le cache se
   comportent autrement). Ce que tu vois ici correspond à ce que servira
   GitHub Pages.

   Aucune dépendance : uniquement les modules livrés avec Node, donc rien
   à installer et rien à télécharger. Le site reste strictement statique,
   ce serveur n'existe QUE pour la prévisualisation locale et n'a pas
   vocation à être déployé.
============================================================ */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const RACINE = resolve(process.argv[2] || ".");
const PORT_SOUHAITE = Number(process.env.PORT) || 8080;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const serveur = createServer(async (req, res) => {
  try {
    let chemin = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (chemin === "/") chemin = "/index.html";

    // Garde-fou anti-traversée : `normalize` résout les "..", et on refuse
    // tout ce qui sortirait du dossier servi. Le serveur reste local, mais
    // autant ne pas exposer le disque à un lien mal formé.
    const cible = normalize(join(RACINE, chemin));
    if (cible !== RACINE && !cible.startsWith(RACINE + sep)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Accès refusé.");
      return;
    }

    const infos = await stat(cible);
    if (infos.isDirectory()) {
      res.writeHead(302, { Location: chemin.replace(/\/?$/, "/") + "index.html" });
      res.end();
      return;
    }

    const contenu = await readFile(cible);
    res.writeHead(200, {
      "Content-Type": TYPES[extname(cible).toLowerCase()] || "application/octet-stream",
      // Pas de cache : on modifie data.js ou styles.css et on rafraîchit,
      // sans jamais se demander si le navigateur montre l'ancienne version.
      "Cache-Control": "no-store",
    });
    res.end(contenu);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end('<h1>404</h1><p>Fichier introuvable. <a href="/">Retour à l\'accueil</a></p>');
  }
});

// Si le port est déjà pris (une autre fenêtre du serveur restée ouverte),
// on en essaie un autre au lieu de planter avec une erreur illisible.
let port = PORT_SOUHAITE;
serveur.on("error", (e) => {
  if (e.code === "EADDRINUSE" && port < PORT_SOUHAITE + 20) {
    port += 1;
    serveur.listen(port, "127.0.0.1");
  } else {
    console.error("\n  Impossible de démarrer le serveur :", e.message, "\n");
    process.exit(1);
  }
});

serveur.listen(port, "127.0.0.1", () => {
  const url = `http://localhost:${port}/`;
  console.log("");
  console.log("  ==========================================");
  console.log("    LA LUDOTHEQUE DU TEMPLE - apercu local");
  console.log("  ==========================================");
  console.log("");
  console.log("    " + url);
  console.log("");
  console.log("    Modifie data.js, app.js ou styles.css, puis");
  console.log("    rafraichis la page (F5) pour voir le resultat.");
  console.log("");
  console.log("    Ctrl+C pour arreter le serveur.");
  console.log("");
  // Ouvre le navigateur par défaut, sans dépendance externe.
  import("node:child_process").then(({ exec }) => {
    exec(`start "" "${url}"`, { shell: "cmd.exe" }, () => {});
  });
});
