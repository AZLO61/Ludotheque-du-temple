@echo off
REM ============================================================
REM  LA LUDOTHEQUE DU TEMPLE - Apercu local
REM ============================================================
REM  Double-clique sur ce fichier : il demarre un petit serveur
REM  local et ouvre le site dans ton navigateur.
REM
REM  Laisse la fenetre noire OUVERTE pendant que tu regardes.
REM  La fermer arrete le serveur et la page ne repondra plus.
REM
REM  Pour voir tes modifications : enregistre le fichier
REM  (data.js, styles.css, app.js) puis rafraichis la page (F5).
REM  Inutile de relancer ce .bat a chaque changement.
REM ============================================================

cd /d "%~dp0"
title Ludotheque du Temple - apercu local (garder ouvert)

echo.
echo   ==========================================
echo     LA LUDOTHEQUE DU TEMPLE - apercu local
echo   ==========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo   [ERREUR] Node.js est introuvable sur cette machine.
  echo.
  echo   Installe-le depuis https://nodejs.org  ^(version LTS^)
  echo   puis relance ce fichier.
  echo.
  pause
  exit /b 1
)

if not exist "serveur-local.mjs" (
  echo   [ERREUR] serveur-local.mjs est introuvable.
  echo   Ce fichier .bat doit rester dans le dossier du site.
  echo.
  pause
  exit /b 1
)

REM Aucune dependance a installer : le serveur n'utilise que les
REM modules livres avec Node. Il choisit un autre port tout seul
REM si 8080 est deja occupe, et ouvre le navigateur sur le bon.
node serveur-local.mjs

echo.
echo   Le serveur s'est arrete.
pause
