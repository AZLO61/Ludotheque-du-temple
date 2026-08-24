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

## Système visuel (à connaître avant de toucher au CSS)

- **Couleurs** : l'orange (`--orange`) est réservé à la marque et aux actions
  prioritaires (bouton "Je ne sais pas quoi choisir", CTA d'accueil). L'état
  "filtre actif" (tags de recherche, filtres de recommandations) utilise une
  couleur dédiée, `--filter-active-bg` (teal), pour ne pas se confondre avec
  la marque.
- **Typographie** : 7 tailles de texte (`--text-2xs` à `--text-xl`) définies
  dans `:root`, à réutiliser plutôt que d'introduire une nouvelle valeur en
  `rem` — c'est ce qui garde une vraie hiérarchie visuelle dans l'interface.
- **Accessibilité clavier** : tout élément interactif doit avoir un état
  `:focus-visible` visible (voir le bloc dédié en haut de `styles.css`) et,
  s'il n'est pas nativement focusable (`<span>`, `<img>`...), un `tabindex="0"`
  + une gestion `Entrée`/`Espace` équivalente au clic (voir `game-item__name`
  et la jaquette cliquable dans `app.js`).
- La navigation par onglets utilise `role="tablist"`/`aria-selected`, géré
  par la fonction unique `activerOnglet()` dans `app.js` (ne pas dupliquer
  cette logique ailleurs).

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

Pour mettre à jour le programme du mois, modifier `PROGRAMME_DU_MOIS` : chaque
entrée prend un `titre`, une `description` facultative, et un `lien` vers la
publication Instagram de la soirée. Liste vide = rien ne s'affiche.

Côté visiteur, ça se présente en deux temps : une petite bulle carrée apparaît
en bas à droite **5 secondes** après être passé de l'écran d'accueil à
l'application (délai réglable via `DELAI_PROGRAMME_MS` dans `app.js`), et
c'est le clic sur cette bulle qui ouvre le panneau détaillé. Rien ne recouvre
l'écran sans geste du client. Les liens Instagram sont de simples liens
sortants : aucun script Instagram n'est chargé, donc la promesse "aucune
donnée enregistrée" du pied de page reste vraie.

## Filtre "Nombre de joueurs" (règle tranchée le 24 août 2026)

La fourchette saisie décrit **le groupe**, et un jeu prévu pour accueillir bien
plus de monde que ce groupe ne doit pas être proposé : demander « 2 à 4 » ne
remonte donc pas un jeu 2-6 ou 2-10. Concrètement, un jeu passe le filtre si :

- il peut se jouer dans la fourchette demandée, et
- son maximum ne dépasse pas le maximum demandé.

Chaque borne agit seule (remplir Min sans Max, ou l'inverse, est permis).

⚠️ Ne pas « corriger » ça en une contenance stricte sur les deux bornes
(`gameMin >= min`) : mesuré sur le catalogue réel, ça donne **0 jeu** pour
« min 6 » comme pour « 4 à 4 », aucun jeu n'ayant un minimum supérieur à 5.
La logique vit à un seul endroit, `jeuPasseFiltresNonTextuels()` dans `app.js`.

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
