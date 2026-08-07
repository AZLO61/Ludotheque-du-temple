/**
 * app.js — La ludothèque du Temple
 * ------------------------------------------------------------------
 * Toute la logique de l'application : thème jour/nuit, recherche et
 * filtres, rendu des cartes de jeux, lightbox photo, recommandations
 * de l'équipe, onglet "à vendre", navigation entre onglets.
 *
 * Ce fichier dépend de data.js (chargé avant lui dans index.html) qui
 * expose : COVERS, CASES, JEUX, RECOMMENDATIONS, JEUX_A_VENDRE.
 * Aucune donnée du catalogue ne doit être modifiée ici.
 * ------------------------------------------------------------------
 */

  // Mode jour / nuit — le mode sombre est le thème par défaut du site
  // (voir <html data-theme="dark"> et le CSS associé), mais le visiteur
  // garde la main : son choix est mémorisé (localStorage) et réappliqué
  // à sa prochaine visite sur ce navigateur.
  function appliquerTheme(theme){
    const boutonTheme = document.getElementById("themeToggle");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (boutonTheme) boutonTheme.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      if (boutonTheme) boutonTheme.textContent = "☀️";
    }
  }

  function basculerTheme(){
    const estSombre = document.documentElement.getAttribute("data-theme") === "dark";
    const nouveauTheme = estSombre ? "light" : "dark";
    appliquerTheme(nouveauTheme);
    try { localStorage.setItem("ludotheque-theme", nouveauTheme); } catch(e) {}
  }

  // Au chargement : on respecte un choix déjà mémorisé, sinon le mode
  // sombre (déjà posé par défaut sur <html>) reste actif tel quel.
  (function initTheme(){
    let themeSauvegarde = null;
    try { themeSauvegarde = localStorage.getItem("ludotheque-theme"); } catch(e) {}
    if (themeSauvegarde === "light" || themeSauvegarde === "dark") {
      appliquerTheme(themeSauvegarde);
    }
  })();

  // Écran d'accueil "Comment trouver un jeu ?" — s'affiche en premier à chaque
  // chargement de page ; le bouton "C'est parti !" laisse place à l'application.
  const welcomeScreen = document.getElementById("welcomeScreen");
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", function(){
      if (welcomeScreen) welcomeScreen.hidden = true;
    });
  }

  // Jaquettes des jeux, saisies à la main.
  function renderItemAVendre(item){
    const cover = COVERS[item.nom];
    const vignette = cover
      ? '<div class="game-item__cover-wrap"><img class="game-item__cover" src="' + echapperHTML(cover) + '" alt="" loading="lazy"></div>'
      : '';
    let html = '<div class="card__game-item">';
    html += vignette;
    html += '<div class="game-item__info">';
    html += '<div class="game-item__row">';
    html += '<span class="game-item__name" style="cursor:default;">' + echapperHTML(item.nom) + '</span>';
    html += '<span class="chip--new chip--sale">À vendre</span>';
    html += '</div>';
    html += '<div class="game-item__meta">';
    html += '<span class="sale-item__price">' + echapperHTML(item.prix) + '</span>';
    if (item.etat){
      html += '<span class="game-item__meta-text">' + echapperHTML(item.etat) + '</span>';
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  function afficherVente(){
    const venteListEl = document.getElementById("vente-list");
    if (!venteListEl) return;

    if (!JEUX_A_VENDRE || JEUX_A_VENDRE.length === 0){
      venteListEl.innerHTML =
        '<div class="state state--none">' + dieSVG +
        '<p><strong>Aucun jeu à vendre pour l\'instant.</strong></p>' +
        '<p>Reviens jeter un œil un peu plus tard !</p></div>';
      return;
    }

    let html = '<article class="card"><div class="card__body">';
    JEUX_A_VENDRE.forEach(function(item){
      html += renderItemAVendre(item);
    });
    html += '</div></article>';
    venteListEl.innerHTML = html;
  }

  function chercherJeu(nomJeu) {
    // Naviguer vers l'onglet Recherche
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.querySelector('[data-tab="search"]').classList.add("active");
    document.getElementById("search-tab").classList.add("active");

    // Remplir la recherche
    // (pas de scrollTo ici : la barre de recherche est collante en haut de l'écran,
    // remonter en haut de la page à chaque clic serait redondant et gênant.)
    searchInput.value = nomJeu;
    clearBtn.hidden = false;
    afficher();
  }

  function normaliser(texte){
    return texte
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function echapperHTML(texte){
    const div = document.createElement("div");
    div.textContent = texte;
    return div.innerHTML;
  }

  // Icônes associées à chaque catégorie/type de jeu (spec §4B : icône avant le libellé)
  const CATEGORY_ICONS = {
    "Ambiance": "😂",
    "Cartes": "🃏",
    "Plateau": "♟️",
    "Dés": "🎲",
    "Énigme": "🔍",
    "Identité cachée": "🕵️",
    "Pose de tuiles": "🧩",
    "Adresse": "🎯",
    "Dessin": "✏️",
    "Stratégie": "🧠",
    "Coopératif": "🤝",
    "Rapidité": "⚡",
    "Enfants": "👶",
    "Deck-building": "🎴",
    "Jeu à 2": "👥",
    "Jeu à 4": "👨‍👩‍👧‍👦",
    "Stop ou encore": "🛑",
    "Quiz": "❓",
    "+6 joueurs": "🎉",
    "Déduction": "🕵",
    "Jeu de mot": "🔤",
    "Fourberie": "😈",
    "Solo":"👤"
  };

  function iconePourCategorie(cat){
    return CATEGORY_ICONS[cat] ? CATEGORY_ICONS[cat] + ' ' : '';
  }

  // Détermine si un jeu correspond à une étiquette de filtre donnée.
  // Pour "Nouveauté" et les tranches de joueurs, on calcule directement à partir
  // des données du jeu (jeu.isNew, jeu.joueurs) plutôt que de dépendre d'une
  // catégorie renseignée à la main : ça évite les oublis/incohérences.
  function jeuCorrespondATag(jeu, tag){
    if (tag === "Nouveauté"){
      return !!jeu.isNew;
    }
    const min = jeu.joueurs ? jeu.joueurs[0] : null;
    const max = jeu.joueurs ? jeu.joueurs[1] : null;
    if (tag === "Jeu à 2"){
      // Le jeu doit pouvoir se jouer à 2 : 2 doit être compris dans son spectre de joueurs
      return min !== null && max !== null && min <= 2 && max >= 2;
    }
    if (tag === "Jeu à 4"){
      // Le jeu doit pouvoir se jouer à 4 : 4 doit être compris dans son spectre de joueurs
      return min !== null && max !== null && min <= 4 && max >= 4;
    }
    if (tag === "+6 joueurs"){
      // Le jeu doit pouvoir accueillir 6 joueurs ou plus
      return max !== null && max >= 6;
    }
    return jeu.categories ? jeu.categories.includes(tag) : false;
  }

  // Ouvre la vignette d'un jeu en grand dans la lightbox (spec §5B)
  function ouvrirLightboxImage(url){
    lightboxImg.src = url;
    lightboxMarkers.innerHTML = '';
    lightbox.hidden = false;
  }

  function renderGameItem(jeu, nomsAiment, categoriesEnChips) {
    const badgeNew = jeu.isNew ? '<span class="chip--new">Nouveauté</span>' : '';
    // Badge facultatif choisi à la main par l'équipe (voir jeu.badge dans JEUX) :
    // "pepite" = une pépite méconnue à faire découvrir.
    const badgePepite = jeu.badge === "pepite" ? '<span class="chip--new chip--badge-pepite">💎 Pépite méconnue</span>' : '';
    // Si ce jeu fait partie de la liste "Jeu à vendre", on le signale aussi
    // ici (recherche générale et recommandations), pas seulement dans son
    // propre onglet.
    const enVente = JEUX_A_VENDRE.some(function(item){ return item.nom === jeu.nom; });
    const badgeVente = enVente ? '<span class="chip--new chip--sale">À vendre</span>' : '';
    let coeur = '';
    if (nomsAiment && nomsAiment.length > 0){
      const liste = nomsAiment.map(echapperHTML).join(', ');
      coeur = '<span class="chip--heart" tabindex="0" role="button" aria-label="Aimé par ' + liste + '">'
            + '<span class="chip--heart__icon" aria-hidden="true">❤</span> ' + nomsAiment.length
            + '<span class="chip--heart__tooltip">' + liste + '</span>'
            + '</span>';
    }

    // Certaines jaquettes ont un fond blanc non retirable à la source : on le neutralise en fondu
    const COUVERTURES_FOND_BLANC = new Set(["TTMC – Tu Te Mets Combien ? musique"]);
    const cover = COVERS[jeu.nom];
    const classeCouverture = COUVERTURES_FOND_BLANC.has(jeu.nom) ? "game-item__cover game-item__cover--sans-fond" : "game-item__cover";
    const vignette = cover
      ? '<div class="game-item__cover-wrap">'
      + '<img class="' + classeCouverture + '" src="' + echapperHTML(cover) + '" alt="" loading="lazy" onclick="event.stopPropagation(); ouvrirLightboxImage(\'' + echapperHTML(cover).replace(/'/g, "\\'") + '\');">'
      + '</div>'
      : '';

    let html = '<div class="card__game-item">';
    html += vignette;
    html += '<div class="game-item__info">';

    // Ligne du nom : nom du jeu + badge Nouveauté (au-dessus des infos joueurs/durée)
    html += '<div class="game-item__row">';
    html += '<span class="game-item__name" onclick="event.stopPropagation(); chercherJeu(\'' + echapperHTML(jeu.nom).replace(/'/g, "\\'") + '\')">' + echapperHTML(jeu.nom) + '</span>';
    html += badgeNew;
    html += badgePepite;
    html += badgeVente;
    html += '</div>';

    // Ligne joueurs / durée en texte simple (+ cœur si aimé par d'autres profils) : sous la ligne du nom
    if (jeu.joueurs || jeu.duree || coeur){
      html += '<div class="game-item__meta">';
      let metaTexte = [];
      if (jeu.joueurs){
        const min = jeu.joueurs[0];
        const max = jeu.joueurs[1];
        const joueurText = min === max ? min + ' j' : min + '-' + max + ' j';
        metaTexte.push('👥 ' + joueurText);
      }
      if (jeu.duree){
        metaTexte.push('⏱ ' + jeu.duree + ' min');
      }
      if (metaTexte.length > 0){
        html += '<span class="game-item__meta-text">' + metaTexte.join(' · ') + '</span>';
      }
      html += coeur;
      html += '</div>';
    }

    if (jeu.categories && jeu.categories.length > 0){
      if (categoriesEnChips) {
        html += '<div class="game-item__tags-chips">';
        jeu.categories.forEach(function(cat){
          html += '<span class="chip--category-reco">' + iconePourCategorie(cat) + echapperHTML(cat) + '</span>';
        });
        html += '</div>';
      } else {
        html += '<p class="game-item__tags">' + jeu.categories.map(function(cat){ return iconePourCategorie(cat) + echapperHTML(cat); }).join(' <span class="game-item__tags-sep">·</span> ') + '</p>';
      }
    }

    html += '</div>'; // fin .game-item__info
    html += renderDifficulte(jeu);
    html += '</div>';
    return html;
  }

  // Difficulté des règles (échelle maison à 4 points, 1 = très simple,
  // 4 = complexe), saisie à la main par l'équipe directement sur chaque
  // jeu via jeu.difficulte dans le tableau JEUX (aucune estimation
  // automatique par durée ou par poids BGG : uniquement une valeur choisie
  // par l'équipe). Pour ajouter/corriger une note, éditer jeu.difficulte
  // (1 à 4) sur la ligne du jeu concerné dans le tableau JEUX.
  function estimerDifficulte(jeu){
    return jeu.difficulte || 0;
  }

  // Affiche l'échelle de difficulté des règles (1 à 4) pour un jeu.
  // N'affiche rien si jeu.difficulte n'est pas renseigné.
  function renderDifficulte(jeu){
    const niveau = Math.round(Number(estimerDifficulte(jeu)));
    if (!niveau || niveau < 1 || niveau > 4) return '';
    let points = '';
    for (let i = 1; i <= 4; i++){
      points += '<span class="difficulty__dot' + (i <= niveau ? ' is-filled' : '') + '"></span>';
    }
    return '<div class="game-item__difficulty" title="Difficulté des règles : ' + niveau + '/4" aria-label="Difficulté des règles : ' + niveau + ' sur 4">' + points + '</div>';
  }

  const resultsEl = document.getElementById("results");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const recommendationsListEl = document.getElementById("recommendations-list");
  const brandLink = document.getElementById("brandLink");

  let selectedTags = [];

  let filtresActifs = {
    joueursMin: null,
    joueursMax: null,
    dureeMax: null
  };
  
  let filtresRecommandations = {
    categories: []
  };

  const dieSVG = '<svg class="state__die" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<rect x="2" y="2" width="44" height="44" rx="10" fill="#FF5500" stroke="#FF5500" stroke-width="2"/>'
    + '<circle cx="16" cy="16" r="3.5" fill="#FFFFFF"/>'
    + '<circle cx="32" cy="32" r="3.5" fill="#FFFFFF"/>'
    + '<circle cx="24" cy="24" r="3.5" fill="#FFFFFF"/>'
    + '</svg>';

  function estExclusivementDeux(jeu){
    return !!jeu.joueurs && jeu.joueurs[0] === 2 && jeu.joueurs[1] === 2;
  }

  function meFiltreGlobal() {
    let result = JEUX;

    // Filtre texte
    if (searchInput.value.trim().length > 0) {
      const q = normaliser(searchInput.value);
      result = result.filter(function(j) {
        const nomMatch = normaliser(j.nom).includes(q);
        const catMatch = j.categories && j.categories.some(c => normaliser(c).includes(q));
        return nomMatch || catMatch;
      });
    }

    // Filtre multi-catégories (Intersection STRICTE)
    if (selectedTags.length > 0) {
      result = result.filter(function(j) {
        return selectedTags.every(function(tag) {
          return jeuCorrespondATag(j, tag);
        });
      });
    }

    // Filtre nb joueurs
    if (filtresActifs.joueursMin !== null || filtresActifs.joueursMax !== null) {
      result = result.filter(function(j) {
        const gameMin = j.joueurs ? j.joueurs[0] : 1;
        const gameMax = j.joueurs ? j.joueurs[1] : 100;
        if (filtresActifs.joueursMin !== null && filtresActifs.joueursMin < gameMin) return false;
        if (filtresActifs.joueursMax !== null && filtresActifs.joueursMax > gameMax) return false;
        return true;
      });
    }

    // Filtre durée max
    if (filtresActifs.dureeMax !== null) {
      result = result.filter(function(j) {
        return j.duree && j.duree <= filtresActifs.dureeMax;
      });
    }

    return result;
  }

  function afficher() {
    const jeuxFiltres = meFiltreGlobal();
    // Les spot markers ne s'affichent que lors d'une recherche textuelle précise
    // (nom tapé ou jeu cliqué) : sans ça, l'affichage devient illisible.
    const rechercheTexteActive = searchInput.value.trim().length > 0;

    if (jeuxFiltres.length === 0) {
      resultsEl.innerHTML =
        '<div class="state state--none">' + dieSVG +
        '<p><strong>Aucun jeu ne correspond à ta recherche/filtrage.</strong></p>' +
        '<p>Essaie de modifier ou réinitialiser tes critères.</p></div>';
      return;
    }

    let html = '<p class="count">' + jeuxFiltres.length + ' jeu(x) affiché(s) sur ' + JEUX.length + '</p>';
    html += '<p class="hint">Clique sur un jeu pour repérer son emplacement</p>';

    // Quand le filtre "Jeu à 2" est actif : on veut TOUS les jeux exclusivement
    // à 2 joueurs (min ET max = 2) tout en haut de la liste, avant absolument
    // tout le reste — donc on abandonne le regroupement par case (qui mélangerait
    // sinon un jeu exclusif d'une case avec des dizaines de jeux non-exclusifs
    // d'une autre case affichée avant elle) et on affiche une liste unique et plate,
    // triée : exclusifs à 2 d'abord, puis les jeux jouables de 2 à X, chacun par
    // ordre alphabétique. Cliquer sur un jeu retrouve sa case comme d'habitude.
    if (selectedTags.includes("Jeu à 2")) {
      const tri = jeuxFiltres.slice().sort(function(a, b) {
        const aExclusif = estExclusivementDeux(a) ? 0 : 1;
        const bExclusif = estExclusivementDeux(b) ? 0 : 1;
        if (aExclusif !== bExclusif) return aExclusif - bExclusif;
        return a.nom.localeCompare(b.nom, "fr");
      });
      html += '<article class="card">';
      html += '<div class="card__body">';
      tri.forEach(function(jeu){
        html += renderGameItem(jeu, profilsAimant(jeu.nom), true);
      });
      html += '</div></article>';
      resultsEl.innerHTML = html;
      return;
    }

    const resultatsParCase = {};
    jeuxFiltres.forEach(function(j) {
      const caseId = j.case || "non_classe";
      if (!resultatsParCase[caseId]) resultatsParCase[caseId] = [];
      resultatsParCase[caseId].push(j);
    });

    const caseIds = Object.keys(resultatsParCase);

    caseIds.forEach(function(caseId) {
      const jeuxDeLaCase = resultatsParCase[caseId].sort(function(a, b) {
        return a.nom.localeCompare(b.nom, "fr");
      });

      if (caseId === "non_classe") {
        html += '<article class="card card--attente">';
        html += '<div class="card__body">';
        html += '<p class="card__attente-label">📦 Emplacement non renseigné</p>';
        jeuxDeLaCase.forEach(function(jeu) {
          html += renderGameItem(jeu, profilsAimant(jeu.nom), true);
        });
        html += '</div></article>';
        return;
      }

      const c = CASES.find(item => item.id === caseId);
      if (!c) return;

      html += '<article class="card">';
      html += '<div style="position: relative;">';
      html += '<button class="card__photo-wrap" data-photo="' + c.photo + '" aria-label="Agrandir la photo">';
      html += '<img class="card__photo" src="' + c.photo + '" alt="Case de rangement">';

      // Marqueurs cœur : indiquent les emplacements contenant au moins un jeu
      // coup de cœur d'un profil, toujours visibles (même sans recherche active).
      const emplacementsCoeur = {};
      if (c.emplacements) {
        jeuxDeLaCase.forEach(function(jeu) {
          if (!jeu.emplacement || !c.emplacements[jeu.emplacement]) return;
          const fans = profilsAimant(jeu.nom);
          if (fans.length === 0) return;
          if (!emplacementsCoeur[jeu.emplacement]) emplacementsCoeur[jeu.emplacement] = [];
          emplacementsCoeur[jeu.emplacement].push({ nom: jeu.nom, fans: fans });
        });
      }
      Object.keys(emplacementsCoeur).forEach(function(emplacement, index) {
        const pos = c.emplacements[emplacement];
        const left = (pos.x / 800) * 100;
        const top = (pos.y / 800) * 100;
        const decalage = -((index * 0.9) % 4).toFixed(2) + 's'; // désynchronise la pulsation entre les cœurs
        const tooltip = emplacementsCoeur[emplacement].map(function(j){
          return echapperHTML(j.nom) + ' (' + j.fans.map(echapperHTML).join(', ') + ')';
        }).join('<br>');
        html += '<span class="spot-marker spot-marker--heart" style="left:' + left + '%; top:' + top + '%; --pulse-delay:' + decalage + ';" tabindex="0" role="button" aria-label="Coup de cœur à cet emplacement">'
              + '<svg class="spot-marker--heart__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.9 1.4 5.2 4.9 4.3c2-.5 4 .3 5.1 2 .3.4.7.9 1 1.3.3-.4.7-.9 1-1.3 1.1-1.7 3.1-2.5 5.1-2 3.5.9 4.7 4.6 3.1 7.4C19.5 16.4 12 21 12 21z"/></svg>'
              + '<span class="spot-marker__tooltip">' + tooltip + '</span>'
              + '</span>';
      });

      // Génération des spot markers pour les emplacements de cette case
      // (uniquement si une recherche textuelle précise est active, et pas déjà
      // signalés par un cœur pour éviter deux marqueurs superposés)
      if (c.emplacements && rechercheTexteActive) {
        const emplacementsAffiches = new Set();
        jeuxDeLaCase.forEach(function(jeu) {
          if (jeu.emplacement && c.emplacements[jeu.emplacement] && !emplacementsAffiches.has(jeu.emplacement) && !emplacementsCoeur[jeu.emplacement]) {
            emplacementsAffiches.add(jeu.emplacement);
            const pos = c.emplacements[jeu.emplacement];
            // Conversion coordonnées (sur une base 800x800) en pourcentages
            const left = (pos.x / 800) * 100;
            const top = (pos.y / 800) * 100;
            html += '<span class="spot-marker" style="left:' + left + '%; top:' + top + '%;" title="Emplacement ' + jeu.emplacement + '"></span>';
          }
        });
      }

      html += '</button>';
      html += '</div>';
      html += '<div class="card__body">';
      
      jeuxDeLaCase.forEach(function(jeu) {
        html += renderGameItem(jeu, profilsAimant(jeu.nom), true);
      });
      
      html += '<p class="card__hint">Touche la photo pour l\'agrandir.</p></div>';
      html += '</article>';
    });

    resultsEl.innerHTML = html;
  }

  // Transforme un prénom en identifiant CSS ("Pénélope" -> "penelope") pour
  // pouvoir cibler chaque profil avec une classe .profile-header--{slug} et
  // choisir sa couleur de bannière directement dans styles.css (voir la
  // section "Couleurs de bannière par profil" du fichier CSS).
  function slugifierNom(nom){
    return nom
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-+|-+$)/g, '');
  }

  // Silhouette de meeple réutilisée pour chaque avatar de profil (voir .profile-avatar en CSS)
  // Silhouette de meeple en "défonce" (juste le contour, la lettre vient s'inscrire dedans) :
  // une tête ronde + un corps avec bras écartés et jambes fendues, comme le pion de jeu classique.
  // Silhouette de meeple : UN SEUL contour continu (tête et corps ne font qu'un,
  // comme sur le modèle fourni), pas de tête en cercle séparé du corps.
  const MEEPLE_PATH = 'M21.97,41.5 L21.29,44.43 L21.78,46.09 L23.14,47.75 L27.44,49.8 L32.03,50.68 L27.93,57.62 L24.12,66.11 L22.85,72.07 L24.22,74.02 L25.49,74.41 L43.07,74.12 L44.34,73.14 L49.9,64.75 L55.18,72.66 L57.03,74.22 L74.41,74.41 L76.66,73.14 L77.05,70.51 L75.49,65.33 L67.97,50.68 L73.14,49.61 L76.56,47.95 L78.42,45.51 L78.32,42.29 L76.46,39.84 L73.83,38.09 L62.3,33.5 L60.06,26.46 L58.79,24.61 L55.76,22.07 L51.27,20.61 L47.36,20.8 L44.04,22.07 L41.21,24.41 L39.65,26.66 L37.7,33.5 L26.27,37.99 L23.44,39.84 Z';

  // Renvoie la liste des profils qui aiment ce jeu (hors nomProfilAExclure, s'il est fourni)
  function profilsAimant(nomJeu, nomProfilAExclure){
    return RECOMMENDATIONS.filter(function(p){
      return p.nom !== nomProfilAExclure && p.jeux.indexOf(nomJeu) !== -1;
    }).map(function(p){ return p.nom; });
  }

  function afficherRecommandations(){
    let html = '';
    let nbProfilsAffiches = 0;

    RECOMMENDATIONS.forEach(function(profil, index){
      let jeuxProfil = profil.jeux.map(function(nomJeu){
        return JEUX.find(j => j.nom === nomJeu);
      }).filter(Boolean);

      if (filtresRecommandations.categories.length > 0){
        jeuxProfil = jeuxProfil.filter(function(jeu){
          return filtresRecommandations.categories.some(function(cat){
            return jeuCorrespondATag(jeu, cat);
          });
        });
      }

      if (jeuxProfil.length > 0) {
        nbProfilsAffiches++;
        const slug = slugifierNom(profil.nom);
        html += '<article class="recommendation-panel">';
        html += '<div class="card__body">';

        // En-tête profil : la couleur vient uniquement de la classe .profile-header--{slug}
        // définie dans styles.css (voir "Couleurs de bannière par profil"), pas d'un style inline.
        html += '<div class="profile-header profile-header--' + slug + '">';
        html += '<span class="profile-avatar">'
              + '<svg class="profile-avatar__shape" viewBox="18.3 17.6 63.4 59.9" aria-hidden="true">'
              + '<path class="profile-avatar__shape-fill" d="' + MEEPLE_PATH + '"/>'
              + '<path class="profile-avatar__shape-outline" d="' + MEEPLE_PATH + '"/>'
              + '</svg>'
              + '<span class="profile-avatar__letter">' + echapperHTML(profil.initiales) + '</span>'
              + '</span>';
        html += '<span class="profile-info"><span class="profile-name">' + echapperHTML(profil.nom) + '</span>';
        html += '<span class="profile-role">' + echapperHTML(profil.role) + '</span></span>';
        html += '</div>';

        // Ligne de jeu recommandée : même rendu que sur la page de recherche
        html += '<div class="recommendation-games">';
        jeuxProfil.forEach(function(jeu){
          html += renderGameItem(jeu, profilsAimant(jeu.nom, profil.nom), true);
        });
        html += '</div>';

        html += '</div>';
        html += '</article>';
      }
    });

    if (nbProfilsAffiches === 0){
      recommendationsListEl.innerHTML =
        '<div class="state state--none">' + dieSVG +
        '<p><strong>Aucun profil ne recommande de jeu dans cette catégorie.</strong></p>' +
        '<p>Essaie de modifier tes filtres.</p></div>';
      return;
    }

    recommendationsListEl.innerHTML = html;
  }

  // Événements Recherche & Effacement
  searchInput.addEventListener("input", function(){
    clearBtn.hidden = searchInput.value.length === 0;
    afficher();
  });

  clearBtn.addEventListener("click", function(){
    searchInput.value = "";
    clearBtn.hidden = true;
    searchInput.focus();
    afficher();
  });

  // Gestion du multi-filtrage par étiquettes (tags)
  document.querySelectorAll(".search-tag").forEach(function(tagBtn){
    tagBtn.addEventListener("click", function(){
      if (searchInput.value.length > 0) {
        searchInput.value = "";
        clearBtn.hidden = true;
      }

      const tagName = this.getAttribute("data-tag");
      const index = selectedTags.indexOf(tagName);
      
      if (index > -1) {
        selectedTags.splice(index, 1);
        this.classList.remove("active");
      } else {
        selectedTags.push(tagName);
        this.classList.add("active");
      }
      afficher();
    });
  });

  const lightboxMarkers = document.getElementById("lightboxMarkers");

  resultsEl.addEventListener("click", function(e){
    if (e.target.closest(".spot-marker--heart")) return; // le cœur gère son propre tap (tooltip), pas de zoom
    const btn = e.target.closest(".card__photo-wrap");
    if (!btn) return;
    lightboxImg.src = btn.getAttribute("data-photo");
    // On reprend tel quel les mêmes spot markers que sur la vignette,
    // pour que le point orange reste au bon endroit une fois la photo agrandie.
    lightboxMarkers.innerHTML = "";
    btn.querySelectorAll(".spot-marker").forEach(function(marker){
      lightboxMarkers.appendChild(marker.cloneNode(true));
    });
    lightbox.hidden = false;
  });

  // Cœurs : clic/tap pour ouvrir la bulle listant les profils (utile au tactile, en plus du survol souris)
  document.addEventListener("click", function(e){
    const coeur = e.target.closest(".chip--heart");
    const markerCoeur = e.target.closest(".spot-marker--heart");
    document.querySelectorAll(".chip--heart--open").forEach(function(el){
      if (el !== coeur) el.classList.remove("chip--heart--open");
    });
    document.querySelectorAll(".spot-marker--heart--open").forEach(function(el){
      if (el !== markerCoeur) el.classList.remove("spot-marker--heart--open");
    });
    if (coeur) {
      coeur.classList.toggle("chip--heart--open");
    }
    if (markerCoeur) {
      markerCoeur.classList.toggle("spot-marker--heart--open");
    }
  });

  function fermerLightbox(){
    lightbox.hidden = true;
    lightboxImg.src = "";
    lightboxMarkers.innerHTML = "";
  }

  lightboxClose.addEventListener("click", fermerLightbox);
  lightbox.addEventListener("click", function(e){
    if (e.target === lightbox) fermerLightbox();
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") fermerLightbox();
  });

  // Filtres Dynamiques (Joueurs, Durée)
  const joueursMinInput = document.getElementById("joueursMin");
  const joueursMaxInput = document.getElementById("joueursMax");
  const dureeMaxInput = document.getElementById("dureeMax");

  function reinitialiserFiltresRecherche() {
    searchInput.value = "";
    clearBtn.hidden = true;
    selectedTags = [];
    document.querySelectorAll(".search-tag").forEach(t => t.classList.remove("active"));
    joueursMinInput.value = "";
    joueursMaxInput.value = "";
    dureeMaxInput.value = "";
    filtresActifs.joueursMin = null;
    filtresActifs.joueursMax = null;
    filtresActifs.dureeMax = null;
  }

  [joueursMinInput, joueursMaxInput, dureeMaxInput].forEach(function(input){
    input.addEventListener("input", function(){
      filtresActifs.joueursMin = joueursMinInput.value ? parseInt(joueursMinInput.value) : null;
      filtresActifs.joueursMax = joueursMaxInput.value ? parseInt(joueursMaxInput.value) : null;
      filtresActifs.dureeMax = dureeMaxInput.value ? parseInt(dureeMaxInput.value) : null;
      afficher();
    });
  });

  document.querySelector("[data-filter-clear]").addEventListener("click", function(){
    reinitialiserFiltresRecherche();
    afficher();
  });

  // Action Retour Accueil au clic sur le titre/logo : revient simplement à la
  // page de recherche générale (l'écran d'accueil ne réapparaît plus ici).
  brandLink.addEventListener("click", function(e){
    e.preventDefault();
    reinitialiserFiltresRecherche();

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.querySelector('[data-tab="search"]').classList.add("active");
    document.getElementById("search-tab").classList.add("active");
    
    afficher();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Filtres Recommandations
  document.querySelectorAll("[data-filter-rec]").forEach(function(btn){
    btn.addEventListener("click", function(){
      const category = this.getAttribute("data-filter-rec");
      if (filtresRecommandations.categories.indexOf(category) === -1){
        filtresRecommandations.categories.push(category);
      } else {
        filtresRecommandations.categories.splice(filtresRecommandations.categories.indexOf(category), 1);
      }
      this.classList.toggle("active");
      afficherRecommandations();
    });
  });

  document.querySelector("[data-filter-rec-clear]").addEventListener("click", function(){
    filtresRecommandations.categories = [];
    document.querySelectorAll("[data-filter-rec]").forEach(function(btn){
      btn.classList.remove("active");
    });
    afficherRecommandations();
  });

  // Navigation Onglets
  document.querySelectorAll(".tab-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      const tabName = this.getAttribute("data-tab");
      
      document.querySelectorAll(".tab-btn").forEach(function(b){
        b.classList.remove("active");
      });
      document.querySelectorAll(".tab-content").forEach(function(c){
        c.classList.remove("active");
      });

      btn.classList.add("active");
      document.getElementById(tabName + "-tab").classList.add("active");

      if (tabName === "recommendations") {
        afficherRecommandations();
      }
      if (tabName === "vente") {
        afficherVente();
      }
    });
  });

  // Bouton "Je ne sais pas quoi choisir" : tire un jeu au hasard parmi les
  // résultats actuellement filtrés (tags/joueurs/durée), et le révèle avec
  // le même mécanisme que le clic sur un jeu depuis les recommandations
  // (chercherJeu), avec une petite mise en avant visuelle sur sa case.
  const randomGameBtn = document.getElementById("randomGameBtn");
  if (randomGameBtn) {
    randomGameBtn.addEventListener("click", function(){
      // On repart d'une recherche texte vide pour piocher dans tout le pool filtré
      // (sinon, après un premier tirage, le champ contiendrait déjà un nom de jeu
      // et le pool se retrouverait limité à ce seul jeu au clic suivant).
      if (searchInput.value.length > 0) {
        searchInput.value = "";
        clearBtn.hidden = true;
      }

      const pool = meFiltreGlobal();
      if (pool.length === 0) {
        afficher();
        return;
      }

      const pioche = pool[Math.floor(Math.random() * pool.length)];
      chercherJeu(pioche.nom);

      // Petite pulsation visuelle sur la case révélée, pour bien marquer "c'est elle !"
      // (chercherJeu ne remonte plus en haut de page vu que la recherche est collante ;
      // ici on amène juste la case tirée dans le champ de vision, en douceur.)
      setTimeout(function(){
        const carte = resultsEl.querySelector(".card");
        if (carte) {
          if (typeof carte.scrollIntoView === "function") {
            carte.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          carte.classList.add("is-surprise");
          setTimeout(function(){ carte.classList.remove("is-surprise"); }, 2500);
        }
      }, 50);
    });
  }

  // Hauteur réelle de l'en-tête (variable selon la taille d'écran) : sert de
  // point d'ancrage à la barre de recherche collante juste en dessous.
  function ajusterStickySearch(){
    const header = document.querySelector(".app__header");
    if (!header) return;
    document.documentElement.style.setProperty("--sticky-search-top", header.offsetHeight + "px");
  }
  window.addEventListener("resize", ajusterStickySearch);
  ajusterStickySearch();

  // Initialisation
  afficher();
