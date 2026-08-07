# La ludothèque du Temple

Site statique consultable par les clients du bar pour trouver un jeu de société,
repérer son emplacement en photo, et découvrir les coups de cœur de l'équipe.

Aucune donnée personnelle n'est collectée : tout tourne côté navigateur, sans serveur.

## Structure du projet

```
index.html   → structure de la page (ne contient plus de données ni de logique)
styles.css   → tout le style visuel
data.js      → LE fichier à modifier pour gérer le catalogue (voir ci-dessous)
app.js       → logique de l'application (recherche, filtres, rendu, onglets…)
scripts/validate-data.mjs → contrôle de cohérence de data.js (voir CI)
```

`index.html` charge `data.js` puis `app.js` via deux balises `<script src>` ;
il n'y a plus de JavaScript inline à modifier pour gérer le catalogue.

## Ajouter / modifier un jeu

Tout se passe dans **`data.js`**, dans le tableau `JEUX` :

```js
{ nom: "Nom du jeu", case: "caseA", emplacement: 3, joueurs: [2, 4], duree: 30,
  categories: ["Cartes", "Ambiance"], difficulte: 2 },
```

- `case` doit être l'id d'une case existante dans `CASES` (`caseA`, `caseB`, `caseC`).
- `emplacement` doit correspondre à un numéro défini dans `CASES` pour cette case.
- `difficulte` va de 1 (très simple) à 4 (complexe) ; à choisir à la main, pas de calcul automatique.
- `categories` doit reprendre des libellés déjà utilisés (voir `CATEGORY_ICONS` dans `app.js`) pour que l'icône s'affiche.

Pour ajouter une jaquette, ajouter une entrée dans `COVERS` avec **exactement** le
même texte que `nom` dans `JEUX` (attention aux espaces en début/fin, aux accents).

Pour ajouter un coup de cœur d'équipe, ajouter le nom du jeu dans le tableau
`jeux` du profil concerné, dans `RECOMMENDATIONS`.

Pour mettre en vente un jeu, ajouter une entrée dans `JEUX_A_VENDRE`.

## Filet de sécurité : validation automatique

Comme `COVERS`, `JEUX_A_VENDRE` et `RECOMMENDATIONS` référencent des jeux par leur
nom exact, une faute de frappe casse silencieusement un lien (pas de jaquette,
pas de coup de cœur affiché…) sans erreur visible à l'écran.

Pour éviter ça :

- **En local**, avant de pousser une modification : `node scripts/validate-data.mjs`
- **Automatiquement** à chaque push touchant `data.js`, via GitHub Actions
  (`.github/workflows/validate.yml`) — la CI échoue si une incohérence bloquante
  est détectée (jeu en double, case/emplacement inconnu, recommandation vers un
  jeu inexistant).
- **Dans le navigateur**, ouvrir la console (F12) : tout avertissement de
  cohérence y est affiché au chargement du site (sans jamais bloquer l'affichage
  pour les visiteurs).

## Développement local

Aucune installation nécessaire : ouvrir `index.html` dans un navigateur, ou
servir le dossier avec un serveur statique quelconque, par exemple :

```bash
python3 -m http.server 8000
```

## Tests

`node scripts/validate-data.mjs` vérifie uniquement les données. Pour un test
d'intégration plus complet (rendu réel du DOM), voir l'historique du projet /
demander l'ajout d'une suite de tests jsdom si besoin.
