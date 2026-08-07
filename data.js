/**
 * data.js — La ludothèque du Temple
 * ------------------------------------------------------------------
 * Toutes les données du site : jaquettes, plan des cases de rangement,
 * catalogue des jeux, coups de cœur de l'équipe, jeux à vendre.
 *
 * C'est le SEUL fichier à modifier pour :
 *   - ajouter/retirer un jeu du catalogue (tableau JEUX)
 *   - ajouter/retirer une jaquette (objet COVERS)
 *   - mettre à jour les recommandations de l'équipe (RECOMMENDATIONS)
 *   - mettre à jour la liste des jeux à vendre (JEUX_A_VENDRE)
 *
 * Aucune logique d'affichage ici : voir app.js pour le rendu et les
 * interactions. Ce découpage permet de modifier les données sans
 * risquer de casser une fonction, et de garder des diffs Git lisibles.
 * ------------------------------------------------------------------
 */

  let COVERS = {
    "Sea Salt & Paper": "https://www.myludo.fr/img/jeux/1772980479/160/ch/59020.png",
    "Draftosaurus": "https://www.myludo.fr/img/jeux/1730370265/160/bc/28590.png",
    "Mot Malin": "https://www.myludo.fr/img/jeux/1753036381/160/bu/46289.png",
    "Esquissé ?": "https://www.myludo.fr/img/jeux/1777958438/160/be/30018.png",
    "Complices": "https://www.myludo.fr/img/jeux/1774881261/160/cd/55654.png",
    "La Colline aux Feux Follets": "https://www.myludo.fr/img/jeux/1747309497/160/cf/57768.png",
    "Clefs Magiques": "https://www.myludo.fr/img/jeux/1772980351/160/cg/58908.png",
    "Kiki va sortir les poubelles ?": "https://www.myludo.fr/img/jeux/1736981817/160/bk/36811.png",
    "Villainous L'Assemblée des Vilains": "https://www.myludo.fr/img/jeux/1762164053/160/bg/32630.png",
    "Museum Suspects": "https://www.myludo.fr/img/jeux/1766064843/160/cd/55581.png",
    "Blanc Manger Coco": "https://www.myludo.fr/img/jeux/1699608316/160/ab/1303.png",
    "Monique": "https://www.myludo.fr/img/jeux/1753908765/160/cb/53042.png",
    "Harry Potter – Potions Magiques": "https://www.myludo.fr/img/jeux/1735419568/160/cg/58219.png",
    "Similo – Harry Potter": "https://www.myludo.fr/img/jeux/1776244107/160/bw/48750.png",
    "Uno": "https://www.myludo.fr/img/jeux/1741827319/160/cr/69586.png",
    "Escape The Room – Mystère au Manoir de L'Astrologue": "https://www.myludo.fr/img/jeux/1768761069/160/ax/23087.png",
    "Rainbow": "https://www.myludo.fr/img/jeux/1722866235/160/cb/53711.png",
    "5-Minute Dungeon": "https://www.myludo.fr/img/jeux/1761683603/160/bj/35135.png",
    "Cranium Black": "https://www.myludo.fr/img/jeux/1748274367/160/ai/8554.png",
    "Le Mistigri": "https://www.myludo.fr/img/jeux/1657876717/160/ay/24277.png",
    "Jeu du Loup": "https://www.myludo.fr/img/jeux/1707667011/160/bb/27445.png",
    "Mixamatou": "https://www.myludo.fr/img/jeux/1645282704/160/bb/27428.png",
    "Bata-Waf": "https://www.myludo.fr/img/jeux/1725462839/160/ak/10928.png",
    "Trivial Pursuit – Classic Edition": "https://www.myludo.fr/img/jeux/1689359326/160/bc/28211.png",
    "Trivial Pursuit : Poitou-Charentes": "https://www.myludo.fr/img/jeux/1675436826/160/af/5941.png",
    "Trivial Pursuit Voyage : Friends": "https://www.myludo.fr/img/jeux/1675350265/160/bj/35341.png",
    "Scrabble": "https://www.myludo.fr/img/jeux/1663020249/160/ar/17984.png",
    "Échecs": "https://www.myludo.fr/img/jeux/1619463728/160/bv/47150.png",
    "Similo – Animaux": "https://www.myludo.fr/img/jeux/1776244054/160/bq/42004.png",
    "Harry Potter – Le Jeu des Sortilèges": "https://www.myludo.fr/img/jeux/1773487562/160/ba/26787.png",
    "Fun Facts": "https://www.myludo.fr/img/jeux/1725486225/160/ch/59785.png",
    "Monopoly – Europe": "https://www.myludo.fr/img/jeux/1755118697/160/af/5566.png",
    "Cluedo": "https://www.myludo.fr/img/jeux/1742034561/160/as/18737.png",
    "Crazy Cups": "https://www.myludo.fr/img/jeux/1685292851/160/bb/27240.png",
    "Le Poing sur la Table !": "https://www.myludo.fr/img/jeux/1725973549/160/ch/59491.png",
    "Tornaloco": "https://www.myludo.fr/img/jeux/1781625781/160/cq/68861.png",
    "Mind Up !": "https://www.myludo.fr/img/jeux/1741895939/160/cl/63974.png",
    "Les Tours Ambulantes": "https://www.myludo.fr/img/jeux/1765667068/160/ci/60693.png",
    "Vers l'Infini mais pas Au-delà": "https://www.myludo.fr/img/jeux/1770723391/160/cl/63846.png",
    "Blocs en Fête": "https://www.myludo.fr/img/jeux/1744559908/160/cl/63872.png",
    "Jenga": "https://www.myludo.fr/img/jeux/1774426878/160/ba/26239.png",
    "Speedbac – Drôle & Rapide": "https://www.myludo.fr/img/jeux/1740754174/160/ci/60505.png",
    "Trio": "https://www.myludo.fr/img/jeux/1772792739/160/cj/61611.png",
    "The Number": "https://www.myludo.fr/img/jeux/1754627557/160/cl/63666.png",
    "OléMains !": "https://www.myludo.fr/img/jeux/1769606591/160/by/50523.png",
    "Flamecraft": "https://www.myludo.fr/img/jeux/1772980847/160/bz/51279.png",
    "Dessino Presto !": "https://www.myludo.fr/img/jeux/1725460852/160/ch/59502.png",
    "Kites": "https://www.myludo.fr/img/jeux/1772980158/160/cl/63851.png",
    "Nekojima": "https://www.myludo.fr/img/jeux/1785050335/160/cm/64160.png",
    "Unlock ! – Star Wars": "https://www.myludo.fr/img/jeux/1750908739/160/bn/39994.png",
    "Unlock ! – Timeless Adventures": "https://www.myludo.fr/img/jeux/1775426895/160/bg/32027.png",
    "Unlock ! – Supernatural Adventures": "https://www.myludo.fr/img/jeux/1775426866/160/cr/69914.png",
    "Unlock ! – Exotic Adventures": "https://www.myludo.fr/img/jeux/1775426901/160/ay/24738.png",
    "Unlock ! – Epic Adventures": "https://www.myludo.fr/img/jeux/1780565627/160/bj/35051.png",
    "Unlock ! – Mythic Adventures": "https://www.myludo.fr/img/jeux/1775426891/160/bo/40964.png",
    "TTMC 2 – Tu Te (re)mets Combien ?": "https://www.myludo.fr/img/jeux/1759139128/160/cg/58301.png",
    "TTMC – Tu Te Mets Combien ?": "https://www.myludo.fr/img/jeux/1770303721/160/bc/28269.png",
    "The Mind": "https://www.myludo.fr/img/jeux/1780502327/160/ax/23301.png",
    "Texto 2.0": "https://www.myludo.fr/img/jeux/1678071421/160/bx/49231.png",
    "Texto !": "https://www.myludo.fr/img/jeux/1652964392/160/aw/22256.png",
    "Sushi Go Party !": "https://www.myludo.fr/img/jeux/1747498177/160/cd/55684.png",
    "Spicy": "https://www.myludo.fr/img/jeux/1743765976/160/by/50117.png",
    "Sobek 2 Joueurs": "https://www.myludo.fr/img/jeux/1690635758/160/bu/46597.png",
    "So Clover": "https://www.myludo.fr/img/jeux/1742157756/160/bv/47856.png",
    "Skull King": "https://www.myludo.fr/img/jeux/1775209134/160/cg/58121.png",
    "Secret Identity": "https://www.myludo.fr/img/jeux/1740754802/160/cc/54732.png",
    "Salade 2 Points": "https://www.myludo.fr/img/jeux/1777902022/160/bk/36568.png",
    "Saboteur": "https://www.myludo.fr/img/jeux/1739602143/160/al/11082.png",
    "Qui Paire Gagne": "https://www.myludo.fr/img/jeux/1725475017/160/aa/360.png",
    "Privacy – No Limit ?!": "https://www.myludo.fr/img/jeux/1635586821/160/ae/4617.png",
    "Papayoo": "https://www.myludo.fr/img/jeux/1726139714/160/bj/35247.png",
    "Oriflamme": "https://www.myludo.fr/img/jeux/1741724216/160/bj/35222.png",
    "Olé ! Guacamolé": "https://www.myludo.fr/img/jeux/1737222009/160/bu/46579.png",
    "Mille Sabords": "https://www.myludo.fr/img/jeux/1732882597/160/ac/2734.png",
    "Mes Amis Sont...": "https://www.myludo.fr/img/jeux/1758913216/160/ca/52095.png",
    "Maudit Mot Dit": "https://www.myludo.fr/img/jeux/1772980501/160/ce/56028.png",
    "Little Secret": "https://www.myludo.fr/img/jeux/1753268027/160/cg/58390.png",
    "Infernal Wagon": "https://www.myludo.fr/img/jeux/1761831946/160/ce/56069.png",
    "Hit !": "https://www.myludo.fr/img/jeux/1753051294/160/bx/49386.png",
    "Galèrapagos": "https://www.myludo.fr/img/jeux/1767792886/160/at/19255.png",
    "Fiesta De Los Muertos": "https://www.myludo.fr/img/jeux/1762111638/160/bh/33071.png",
    "Detective Club": "https://www.myludo.fr/img/jeux/1705619299/160/bb/27222.png",
    "Zéro à 1000": "https://www.myludo.fr/img/jeux/1704994129/160/cl/63897.png",
    "City Chase": "https://www.myludo.fr/img/jeux/1664740873/160/cf/57146.png",
    "Bazar Bizarre 2.0": "https://www.myludo.fr/img/jeux/1769632844/160/ac/2298.png",
    "Akropolis": "https://www.myludo.fr/img/jeux/1753048416/160/cd/55664.png",
    "6 Qui Surprend !": "https://www.myludo.fr/img/jeux/1772151823/160/bg/32238.png",
    "101 – Le Match": "https://www.myludo.fr/img/jeux/1696488735/160/bq/42137.png",
    "Five Tribes – Les Djinns de Naqala": "https://www.myludo.fr/img/jeux/1776757793/160/ab/1581.png",
    "Small World": "https://www.myludo.fr/img/jeux/1735137079/160/ai/8156.png",
    "Wingspan – À Tire d'Ailes": "https://www.myludo.fr/img/jeux/1753523933/160/bc/28349.png",
    "Clank ! – Les Aventuriers du Deck-Building": "https://www.myludo.fr/img/jeux/1747310002/160/at/19410.png",
    "Champ D'Honneur": "https://www.myludo.fr/img/jeux/1766473239/160/bi/34427.png",
    "Les Aventuriers du Rail – Europe": "https://www.myludo.fr/img/jeux/1768210949/160/ao/14083.png",
    "7 Wonders": "https://www.myludo.fr/img/jeux/1709818397/160/ae/4680.png",
    "Azul": "https://www.myludo.fr/img/jeux/1767520669/160/at/19467.png",
    "Pandemic": "https://www.myludo.fr/img/jeux/1779833351/160/ba/26543.png",
    "Abyss": "https://www.myludo.fr/img/jeux/1741790264/160/ab/1616.png",
    "7 Wonders Architects": "https://www.myludo.fr/img/jeux/1776755569/160/bz/51868.png",
    "King of Tokyo": "https://www.myludo.fr/img/jeux/1749303146/160/aa/575.png",
    "Takenoko": "https://www.myludo.fr/img/jeux/1785454655/160/bw/48826.png",
    "Sagrada": "https://www.myludo.fr/img/jeux/1769810242/160/ax/23810.png",
    "Les Charlatans de Belcastel": "https://www.myludo.fr/img/jeux/1721375390/160/az/25727.png",
    "Karuba": "https://www.myludo.fr/img/jeux/1757928486/160/au/20037.png",
    "La Maison des Souris": "https://www.myludo.fr/img/jeux/1634726665/160/bp/41869.png",
    "Splendor": "https://www.myludo.fr/img/jeux/1773056489/160/ab/1875.png",
    "Splendor Duel": "https://www.myludo.fr/img/jeux/1781517093/160/cf/57838.png",
    "Similo – Mythes": "https://www.myludo.fr/img/jeux/1776424193/160/bk/36955.png",
    "Dixit": "https://www.myludo.fr/img/jeux/1694429281/160/cj/61162.png",
    "Kingdomino": "https://www.myludo.fr/img/jeux/1727001870/160/aa/397.png",
    "Cryptide": "https://www.myludo.fr/img/jeux/1771178251/160/bi/34004.png",
    "Chronicles of Crime": "https://www.myludo.fr/img/jeux/1711743546/160/at/19974.png",
    "Nom d'un Renard !": "https://www.myludo.fr/img/jeux/1653394878/160/at/19195.png",
    "When I Dream": "https://www.myludo.fr/img/jeux/1747309779/160/at/19546.png",
    "Citadelles – Quatrième Édition": "https://www.myludo.fr/img/jeux/1775922761/160/at/19557.png",
    "IQ Fit": "https://www.myludo.fr/img/jeux/1778317325/160/bl/37706.png",
    "Mr Troove": "https://www.myludo.fr/img/jeux/1615901764/160/bw/48167.png",
    "Mes Premiers Jeux – Premier Verger": "https://www.myludo.fr/img/jeux/1758789448/160/bc/28751.png",
    "Munchkin": "https://www.myludo.fr/img/jeux/1740584642/160/af/5447.png",
    "7 Wonders Duel": "https://www.myludo.fr/img/jeux/1777629538/160/ab/1005.png",
    "Celestia": "https://www.myludo.fr/img/jeux/1766745242/160/aa/817.png",
    "Hanabi": "https://www.myludo.fr/img/jeux/1781267785/160/by/50823.png",
    "Not Alone": "https://www.myludo.fr/img/jeux/1741868894/160/aa/408.png",
    "MicroMacro Crime City – Full House": "https://www.myludo.fr/img/jeux/1735280392/160/by/50055.png",
    "Magic Maze": "https://www.myludo.fr/img/jeux/1711723632/160/at/19913.png",
    "Chakra": "https://www.myludo.fr/img/jeux/1766156264/160/bc/28191.png",
    "Time's Up ! Party – Version Jaune": "https://www.myludo.fr/img/jeux/1653209753/160/au/20870.png",
    "Codenames": "https://www.myludo.fr/img/jeux/1768208418/160/aa/629.png",
    "Welcome To Your Perfect Home": "https://www.myludo.fr/img/jeux/1753053404/160/at/19524.png",
    "Avalon": "https://www.myludo.fr/img/jeux/1762873938/160/bw/48077.png",
    "Perudo Jumbo": "https://www.myludo.fr/img/jeux/1663387744/160/cf/57742.png",
    "Monza": "https://www.myludo.fr/img/jeux/1689441321/160/ao/14751.png",
    "Attrape Rêves": "https://www.myludo.fr/img/jeux/1756063304/160/bj/35798.png",
    "Zombie Kidz Évolution": "https://www.myludo.fr/img/jeux/1732779829/160/ba/26666.png",
    "Dragomino": "https://www.myludo.fr/img/jeux/1776011650/160/bl/37503.png",
    "Cartographers – Heroes": "https://www.myludo.fr/img/jeux/1784166914/160/by/50041.png",
    "Bang ! – Le Jeu de Dés": "https://www.myludo.fr/img/jeux/1722942346/160/au/20021.png",
    "Jaipur": "https://www.myludo.fr/img/jeux/1771974279/160/bg/32937.png",
    "Happy City": "https://www.myludo.fr/img/jeux/1780133628/160/bp/41745.png",
    "Roi & Compagnie": "https://www.myludo.fr/img/jeux/1651764070/160/at/19483.png",
    "Skull": "https://www.myludo.fr/img/jeux/1773968597/160/ac/2181.png",
    "6 Qui Prend !": "https://www.myludo.fr/img/jeux/1756246739/160/ad/3809.png",
    "The Crew": "https://www.myludo.fr/img/jeux/1785423015/160/bl/37695.png",
    "Skyjo": "https://www.myludo.fr/img/jeux/1777749055/160/bf/31249.png",
    "Schotten Totten": "https://www.myludo.fr/img/jeux/1776764549/160/aa/553.png",
    "Twin It !": "https://www.myludo.fr/img/jeux/1695057703/160/au/20210.png",
    "Loup-Garou Pour Une Nuit": "https://www.myludo.fr/img/jeux/1756241340/160/aa/670.png",
    "Poule Poule": "https://www.myludo.fr/img/jeux/1731827654/160/bh/33140.png",
    "Le Poker des Cafards": "https://www.myludo.fr/img/jeux/1771699209/160/bl/37042.png",
    "Échecs (2001)": "https://www.myludo.fr/img/jeux/1741869078/160/as/18277.png",
    "Love Letter": "https://www.myludo.fr/img/jeux/1777535681/160/bd/29240.png",
    "Timeline – Découvertes": "https://www.myludo.fr/img/jeux/1691420512/160/be/30609.png",
    "Taco Chat Bouc Cheese Pizza": "https://www.myludo.fr/img/jeux/1756070880/160/bl/37354.png",
    "Longueur D'Onde": "https://www.myludo.fr/img/jeux/1766954929/160/bu/46020.png",
    "Top Ten": "https://www.myludo.fr/img/jeux/1721375862/160/bl/37542.png",
    "Mysterium": "https://www.myludo.fr/img/jeux/1761919632/160/ab/1066.png",
    "L'Île au Trésor": "https://www.myludo.fr/img/jeux/1691561675/160/az/25082.png",
    "Just One": "https://www.myludo.fr/img/jeux/1729162972/160/az/25929.png",
    "Dice Forge": "https://www.myludo.fr/img/jeux/1741723701/160/aa/43.png",
    "Concept": "https://www.myludo.fr/img/jeux/1759090918/160/ac/2120.png",
    "Colt Express": "https://www.myludo.fr/img/jeux/1775325421/160/ab/1467.png",
    "Opération zébre": "https://www.myludo.fr/img/jeux/1778835370/160/df/83778.png",
    "Russian Roulette": "https://www.myludo.fr/img/jeux/1753050039/160/ch/59568.png",
    "Jeu de cochons": "https://www.myludo.fr/img/jeux/1729277859/160/bf/31443.png",
    "Cascadia": "https://www.myludo.fr/img/jeux/1776255418/160/bz/51951.png",
    "Toy battle": "https://www.myludo.fr/img/jeux/1784118339/160/df/83145.png",
    "Diamant": "https://www.myludo.fr/img/jeux/1770292801/160/cz/77523.png",
    "Dingo Disc": "https://www.myludo.fr/img/jeux/1763654471/160/do/92596.png",
    "La Bagarre": "https://www.myludo.fr/img/jeux/1747689234/160/dj/87648.png",
    "Pina coladice": "https://www.myludo.fr/img/jeux/1772443456/160/cw/74894.png",
    "Restart": "https://www.myludo.fr/img/jeux/1769284609/160/dq/94493.png",
    "Behind": "https://www.myludo.fr/img/jeux/1751746039/160/da/78600.png",
    "Captain flip": "https://www.myludo.fr/img/jeux/1769088829/160/ct/71438.png",
    "The gang": "https://www.myludo.fr/img/jeux/1779280759/160/db/79285.png",
    "Dracula vs Van helsing": "https://www.myludo.fr/img/jeux/1745768769/160/ct/71917.png",
    "Planche pirate": "https://www.myludo.fr/img/jeux/1740754557/160/cf/57952.png",
    "Link city": "https://www.myludo.fr/img/jeux/1781038707/160/cx/75456.png",
    "L'ile des mots dits": "https://www.myludo.fr/img/jeux/1780504367/160/di/86207.png",
    "Captain Sonar": "https://www.myludo.fr/img/jeux/1756063861/160/ch/59563.png",
    "Unlock ! – Game Adventures": "https://www.myludo.fr/img/jeux/1781438363/160/cb/53023.png",
    "Unlock ! – Heroic Adventures": "https://www.myludo.fr/img/jeux/1775426897/160/ba/26920.png",
    "Pigeon pigeon": "https://www.myludo.fr/img/jeux/1756069702/160/bj/35175.png",
    "Cancre": "https://www.myludo.fr/img/jeux/1760433627/160/dn/91833.png",
    "Flip 7": "https://www.myludo.fr/img/jeux/1779449098/160/dc/80750.png",
    "Camarades": "https://www.myludo.fr/img/jeux/1755681946/160/dj/87312.png",
    "Jungo": "https://www.myludo.fr/img/jeux/1765047651/160/da/78952.png",
    "Crack list": "https://www.myludo.fr/img/jeux/1768549035/160/cc/54187.png",
    "Left Right": "https://www.myludo.fr/img/jeux/1745053462/160/ch/59573.png",
    "Sky team": "https://www.myludo.fr/img/jeux/1772980134/160/cm/64645.png",
    "Back Stories": "https://www.myludo.fr/img/jeux/1737802048/160/cx/75629.png",
    "Time bomb Undercover": "https://www.myludo.fr/img/jeux/1757184344/160/cx/75469.png",
    "Cambrouillolage": "https://m.media-amazon.com/images/I/61iz2w6iNIL._AC_SX679_.jpg",
    "Order Overload": "https://www.myludo.fr/img/jeux/1727944501/160/cj/61961.png",
    "Unmatched": "https://www.myludo.fr/img/jeux/1757490916/160/cg/58574.png",
    "Time bomb Evolution": "https://www.myludo.fr/img/jeux/1768758323/160/bk/36667.png",
    "Pic Together": "https://www.myludo.fr/img/jeux/1732963418/160/db/79991.png",
    "2 pommes 3 pains": "https://www.myludo.fr/img/jeux/1753051801/160/cx/75231.png",
    "Kronologic": "https://www.myludo.fr/img/jeux/1764535824/160/ct/71194.png",
    "Pixies": "https://www.myludo.fr/img/jeux/1751635844/160/cw/74105.png",
    "TTMC – Tu Te Mets Combien ? musique": "https://www.myludo.fr/img/jeux/1770303867/160/cz/77768.png",
    "Catan": "https://www.myludo.fr/img/jeux/1733906574/160/at/19279.png",
    "Team 3": "https://www.myludo.fr/img/jeux/1776855520/160/bj/35664.png",
    "La bonne paye": "https://www.myludo.fr/img/jeux/1729379032/160/ag/6591.png",
    "Carcassonne": "https://www.myludo.fr/img/jeux/1734194849/160/ci/60991.png",
    "Catan marin": "https://www.myludo.fr/img/jeux/1763126769/160/cb/53265.png",
    "Monopoly deal": "https://www.myludo.fr/img/jeux/1771096161/160/cz/77366.png",
    "Mito": "https://www.myludo.fr/img/jeux/1776762646/160/bv/47318.png",
    "Betrayal at Baldur's Gate": "https://www.myludo.fr/img/jeux/1697745808/160/ct/71347.png"

  };

 const CASES = [
    {
      id: "caseA",
      nom: "Case A",
      photo: "Case-a.jpg",
      emplacements: {
        1: { x: 365, y: 210 },
        2: { x: 370, y: 320 },
        3: { x: 470, y: 470 },
        4: { x: 500, y: 650 },
        5: { x: 170, y: 685 }
      }
    },
    {
      id: "caseB",
      nom: "Case B",
      photo: "Case-b.jpg",
      emplacements: {
        1: { x: 190, y: 370 },
        2: { x: 410, y: 536 },
        3: { x: 420, y: 410 },
        4: { x: 520, y: 250 },
        5: { x: 520, y: 80 },
        6: { x: 610, y: 420 },
        7: { x: 605, y: 560 },
        8: { x: 610, y: 720 }
      }
    },
    {
      id: "caseC",
      nom: "Case C",
      photo: "Case-c.jpg",
      emplacements: {
        1: { x: 140, y: 260 },
        2: { x: 130, y: 370 },
        3: { x: 130, y: 450 },
        4: { x: 135, y: 585 },
        5: { x: 460, y: 230 },
        6: { x: 460, y: 340 },
        7: { x: 470, y: 720 },
        8: { x: 630, y: 190 },
        9: { x: 650, y: 330 },
        10:{ x: 690, y: 480 },
        11:{ x: 760, y: 620 },
      }
    }
  ];

  const JEUX = [
    { nom: "Sea Salt & Paper", case: "caseA", emplacement: 1, joueurs: [2, 4], duree: 15, categories: ["Cartes"], difficulte: 3 },
    { nom: "Draftosaurus", case: "caseA", emplacement: 2, joueurs: [2, 5], duree: 15, categories: ["Plateau", "Rapidité"], difficulte: 2 },
    { nom: "Mot Malin", case: "caseA", emplacement: 3, joueurs: [2, 6], duree: 15, categories: ["Ambiance", "Coopératif", "Jeu de mot"], difficulte: 1 },
    { nom: "Esquissé ?", case: "caseA", emplacement: 3, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Dessin"], difficulte: 1 },
    { nom: "Skyjo", case: "caseC", emplacement: 1, joueurs: [2, 8], duree: 15, categories: ["Cartes"], difficulte: 1 },
    { nom: "Complices", case: "caseB", emplacement: 3, joueurs: [2, 4], duree: 20, categories: ["Dessin", "Coopératif"], difficulte: 1 },
    { nom: "Diamant", case: "caseB", emplacement: 1, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Plateau", "Stop ou encore"], isNew: true, difficulte: 2 },
    { nom: "La Colline aux Feux Follets", case: "caseA", emplacement: 4, joueurs: [1, 4], duree: 20, categories: ["Adresse", "Plateau", "Enfants"], difficulte: 1 },
    { nom: "Clefs Magiques", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 15, categories: ["Dés", "Plateau", "Enfants"], difficulte: 1 },
    { nom: "Kiki va sortir les poubelles ?", case: "caseC", emplacement: 2, joueurs: [3, 8], duree: 10, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "Museum Suspects", case: "caseC", emplacement: 8, joueurs: [2, 5], duree: 60, categories: ["Énigme", "Enfants"], difficulte: 2 },
    { nom: "Betrayal at Baldur's Gate", case: "caseC", emplacement: 7, joueurs: [3, 6], duree: 60, categories: ["Plateau", "Identité cachée", "Stratégie"], difficulte: 4 },
    { nom: "Blanc Manger Coco", case: "caseC", emplacement: 2, joueurs: [3, 20], duree: 45, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "Monique", case: "caseC", emplacement: 2, joueurs: [3, 8], duree: 45, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "Tornaloco", case: "caseA", emplacement: 1, joueurs: [2, 4], duree: 30, categories: ["Ambiance", "Rapidité", "Adresse"], difficulte: 1 },
    { nom: "Dingo Disc", case: "caseB", emplacement: 1, joueurs: [2, 4], duree: 20, categories: ["Ambiance", "Adresse"], isNew: true, difficulte: 1 },
    { nom: "Harry Potter – Potions Magiques", case: "caseA", emplacement: 1, joueurs: [2, 4], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "Similo – Harry Potter", case: "caseA", emplacement: 1, joueurs: [2, 8], duree: 15, categories: ["Cartes", "Énigme", "Coopératif"], difficulte: 1 },
    { nom: "La Bagarre", case: "caseB", emplacement: 1, joueurs: [3, 6], duree: 20, categories: ["Ambiance", "Cartes"], isNew: true, difficulte: 1 },
    { nom: "Uno", case: "caseC", emplacement: 6, joueurs: [2, 10], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "Escape The Room – Mystère au Manoir de L'Astrologue", case: "caseC", emplacement: 8, joueurs: [1, 5], duree: 60, categories: ["Énigme", "Coopératif"], difficulte: 2 },
    { nom: "Pina coladice", case: "caseB", emplacement: 1, joueurs: [2, 4], duree: 15, categories: ["Ambiance", "Dés"], isNew: true, difficulte: 1 },
    { nom: "Rainbow", case: "caseB", emplacement: 2, joueurs: [2, 2], duree: 20, categories: ["Cartes", "Jeu à 2"], difficulte: 1 },
    { nom: "5-Minute Dungeon", case: "caseB", emplacement: 7, joueurs: [2, 5], duree: 5, categories: ["Ambiance", "Cartes", "Rapidité"], difficulte: 1 },
    { nom: "Cranium Black", case: "caseC", emplacement: 4, joueurs: [2, 6], duree: 60, categories: ["Ambiance", "Dessin", "Quiz"], difficulte: 1 },
    { nom: "Le Mistigri", case: "caseA", emplacement: 4, joueurs: [2, 6], duree: 20, categories: ["Cartes", "Enfants"], difficulte: 1 },
    { nom: "Jeu du Loup", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Mixamatou", case: "caseA", emplacement: 4, joueurs: [3, 6], duree: 20, categories: ["Cartes", "Enfants"], difficulte: 1 },
    { nom: "Bata-Waf", case: "caseA", emplacement: 4, joueurs: [2, 5], duree: 15, categories: ["Cartes", "Enfants"], difficulte: 1 },
    { nom: "Trivial Pursuit – Classic Edition", case: "caseB", emplacement: 5, joueurs: [2, 6], duree: 90, categories: ["Plateau", "Quiz"], difficulte: 1 },
    { nom: "Trivial Pursuit : Poitou-Charentes", case: "caseB", emplacement: 5, joueurs: [2, 6], duree: 90, categories: ["Plateau", "Quiz"], difficulte: 2 },
    { nom: "Trivial Pursuit Voyage : Friends", case: "caseC", emplacement: 4, joueurs: [2, 6], duree: 90, categories: ["Cartes", "Quiz"], difficulte: 1 },
    { nom: "Scrabble", case: "caseB", emplacement: 5, joueurs: [2, 4], duree: 90, categories: ["Plateau", "Stratégie"], difficulte: 2 },
    { nom: "Échecs", case: "caseB", emplacement: 5, joueurs: [2, 2], duree: 60, categories: ["Plateau", "Stratégie", "Jeu à 2"], difficulte: 4 },
    { nom: "Similo – Animaux", case: "caseA", emplacement: 1, joueurs: [2, 8], duree: 15, categories: ["Cartes", "Énigme", "Enfants"], difficulte: 1 },
    { nom: "Similo – Mythes", case: "caseA", emplacement: 1, joueurs: [2, 8], duree: 15, categories: ["Cartes", "Énigme"], difficulte: 1 },
    { nom: "Harry Potter – Le Jeu des Sortilèges", case: "caseC", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Plateau", "Quiz"], difficulte: 1 },
    { nom: "Fun Facts", case: "caseC", emplacement: 3, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Coopératif"], difficulte: 1 },
    { nom: "Monopoly – Europe", case: "caseB", emplacement: 5, joueurs: [2, 6], duree: 180, categories: ["Plateau"], difficulte: 1 },
    { nom: "Cluedo", case: "caseB", emplacement: 5, joueurs: [2, 6], duree: 60, categories: ["Plateau", "Énigme"], difficulte: 2 },
    { nom: "Crazy Cups", case: "caseC", emplacement: 3, joueurs: [2, 4], duree: 10, categories: ["Ambiance", "Rapidité", "Adresse"], difficulte: 1 },
    { nom: "Le Poing sur la Table !", case: "caseC", emplacement: 2, joueurs: [3, 8], duree: 45, categories: ["Ambiance"], difficulte: 1 },
    { nom: "Mind Up !", case: "caseC", emplacement: 6, joueurs: [3, 6], duree: 20, categories: ["Cartes", "Stratégie"], difficulte: 1 },
    { nom: "Les Tours Ambulantes", case: "caseC", emplacement: 11, joueurs: [1, 6], duree: 45, categories: ["Plateau"], difficulte: 1 },
    { nom: "Vers l'Infini mais pas Au-delà", case: "caseC", emplacement: 4, joueurs: [2, 8], duree: 60, categories: ["Plateau", "Quiz"], difficulte: 1 },
    { nom: "Blocs en Fête", case: "caseC", emplacement: 3, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Adresse"], difficulte: 1 },
    { nom: "Jenga", case: "caseC", emplacement: 1, joueurs: [1, 8], duree: 15, categories: ["Ambiance", "Adresse"], difficulte: 1 },
    { nom: "Speedbac – Drôle & Rapide", case: "caseC", emplacement: 2, joueurs: [2, 6], duree: 30, categories: ["Ambiance", "Rapidité", "Cartes"], difficulte: 1 },
    { nom: "Trio", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 20, categories: ["Cartes"], difficulte: 1 },
    { nom: "The Number", case: "caseA", emplacement: 2, joueurs: [2, 4], duree: 20, categories: ["Ambiance"], difficulte: 1 },
    { nom: "OléMains !", case: "caseC", emplacement: 2, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Rapidité"], difficulte: 1 },
    { nom: "Flamecraft", case: "caseC", emplacement: 7, joueurs: [2, 5], duree: 40, categories: ["Plateau", "Stratégie"], difficulte: 3 },
    { nom: "Dessino Presto !", case: "caseA", emplacement: 3, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Dessin", "Rapidité"], difficulte: 1 },
    { nom: "Restart", case: "caseB", emplacement: 1, joueurs: [2, 4], duree: 30, categories: ["Pose de tuiles"], isNew: true, difficulte: 1 },
    { nom: "Kites", case: "caseC", emplacement: 3, joueurs: [2, 4], duree: 15, categories: ["Cartes", "Rapidité", "Coopératif"], difficulte: 1 },
    { nom: "Nekojima", case: "caseB", emplacement: 7, joueurs: [2, 5], duree: 30, categories: ["Adresse", "Ambiance"], difficulte: 1 },
    { nom: "Unlock ! – Star Wars", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Timeless Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Supernatural Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Exotic Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Epic Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Mythic Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Behind", case: "caseC", emplacement: 9, joueurs: [1, 4], duree: 60, categories: ["Énigme", "Solo"], difficulte: 2 },
    { nom: "TTMC 2 – Tu Te (re)mets Combien ?", case: "caseC", emplacement: 4, joueurs: [2, 20], duree: 60, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "TTMC – Tu Te Mets Combien ?", case: "caseC", emplacement: 4, joueurs: [2, 20], duree: 60, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "Toy battle", case: "caseB", emplacement: 3, joueurs: [2, 4], duree: 20, categories: ["Plateau", "Pose de tuiles"], difficulte: 2 },
    { nom: "The Mind", case: "caseC", emplacement: 6, joueurs: [2, 4], duree: 15, categories: ["Cartes", "Coopératif"], difficulte: 1 },
    { nom: "Texto 2.0", case: "caseC", emplacement: 6, joueurs: [2, 12], duree: 45, categories: ["Ambiance", "Cartes", "Rapidité"], difficulte: 1 },
    { nom: "Texto !", case: "caseC", emplacement: 6, joueurs: [2, 12], duree: 45, categories: ["Ambiance", "Cartes", "Rapidité"], difficulte: 1 },
    { nom: "Sushi Go Party !", case: "caseC", emplacement: 11, joueurs: [2, 8], duree: 20, categories: ["Cartes"], difficulte: 2 },
    { nom: "Captain flip", case: "caseB", emplacement: 7, joueurs: [2, 5], duree: 20, categories: ["Pose de tuiles"], difficulte: 1 },
    { nom: "Spicy", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Ambiance"], difficulte: 1 },
    { nom: "Sobek 2 Joueurs", case: "caseB", emplacement: 3, joueurs: [2, 2], duree: 20, categories: ["Plateau", "Cartes", "Jeu à 2"], difficulte: 3 },
    { nom: "So Clover", case: "caseC", emplacement: 3, joueurs: [2, 6], duree: 30, categories: ["Ambiance", "Énigme", "Coopératif"], difficulte: 1 },
    { nom: "Skull King", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Ambiance"], difficulte: 2 },
    { nom: "Secret Identity", case: "caseB", emplacement: 4, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Salade 2 Points", case: "caseA", emplacement: 1, joueurs: [2, 6], duree: 15, categories: ["Cartes"], difficulte: 1 },
    { nom: "Saboteur", case: "caseB", emplacement: 4, joueurs: [3, 10], duree: 45, categories: ["Cartes", "Identité cachée"], difficulte: 1 },
    { nom: "The gang", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Dracula vs Van helsing", case: "caseB", emplacement: 2, joueurs: [2, 2], duree: 30, categories: ["Cartes", "Jeu à 2", "Stratégie"], difficulte: 2 },
    { nom: "Qui Paire Gagne", case: "caseC", emplacement: 3, joueurs: [2, 8], duree: 20, categories: ["Cartes", "Ambiance"], difficulte: 1 },
    { nom: "Privacy – No Limit ?!", case: "caseC", emplacement: 1, joueurs: [3, 8], duree: 45, categories: ["Ambiance"], difficulte: 1 },
    { nom: "Papayoo", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "Oriflamme", case: "caseB", emplacement: 4, joueurs: [2, 5], duree: 20, categories: ["Cartes", "Identité cachée"], difficulte: 3 },
    { nom: "Olé ! Guacamolé", case: "caseA", emplacement: 1, joueurs: [3, 6], duree: 20, categories: ["Ambiance", "Rapidité"], difficulte: 1 },
    { nom: "Planche pirate", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Ambiance", "Adresse", "Stop ou encore"], difficulte: 1 },
    { nom: "Mille Sabords", case: "caseB", emplacement: 6, joueurs: [2, 5], duree: 20, categories: ["Dés", "Stop ou encore"], difficulte: 2 },
    { nom: "Mes Amis Sont...", case: "caseC", emplacement: 3, joueurs: [3, 6], duree: 30, categories: ["Ambiance"], difficulte: 1 },
    { nom: "Maudit Mot Dit", case: "caseC", emplacement: 3, joueurs: [2, 8], duree: 30, categories: ["Ambiance", "Énigme"], difficulte: 1 },
    { nom: "Little Secret", case: "caseB", emplacement: 4, joueurs: [3, 8], duree: 20, categories: ["Identité cachée", "Ambiance"], difficulte: 1 },
    { nom: "Villainous L'Assemblée des Vilains", case: "caseC", emplacement: 7, joueurs: [2, 6], duree: 45, categories: ["Plateau", "Stratégie"], difficulte: 4  },
    { nom: "Infernal Wagon", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Cartes", "Rapidité", "Coopératif"], difficulte: 1 },
    { nom: "Hit !", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 20, categories: ["Cartes"], difficulte: 1 },
    { nom: "Galèrapagos", case: "caseB", emplacement: 4, joueurs: [2, 8], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 2 },
    { nom: "Fiesta De Los Muertos", case: "caseC", emplacement: 3, joueurs: [2, 8], duree: 20, categories: ["Ambiance", "Dessin", "Coopératif"], difficulte: 1 },
    { nom: "Detective Club", case: "caseC", emplacement: 11, joueurs: [3, 8], duree: 45, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Zéro à 1000", case: "caseC", emplacement: 4, joueurs: [2, 10], duree: 60, categories: ["Ambiance", "Énigme"], difficulte: 1 },
    { nom: "Link city", case: "caseC", emplacement: 3, joueurs: [2, 5], duree: 45, categories: ["Plateau", "Coopératif"], difficulte: 1 },
    { nom: "City Chase", case: "caseA", emplacement: 4, joueurs: [2, 6], duree: 30, categories: ["Déduction", "Enfants", "Plateau"], difficulte: 1 },
    { nom: "Bazar Bizarre 2.0", case: "caseA", emplacement: 4, joueurs: [2, 8], duree: 30, categories: ["Adresse", "Rapidité", "Ambiance"], difficulte: 1 },
    { nom: "L'ile des mots dits", case: "caseC", emplacement: 3, joueurs: [2, 6], duree: 30, categories: ["Ambiance"], difficulte: 2 },
    { nom: "Akropolis", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 45, categories: ["Pose de tuiles", "Stratégie"], difficulte: 2 },
    { nom: "6 Qui Surprend !", case: "caseC", emplacement: 5, joueurs: [2, 6], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "101 – Le Match", case: "caseA", emplacement: 2, joueurs: [2, 4], duree: 30, categories: ["Cartes", "Pose de tuiles"], difficulte: 1 },
    { nom: "Five Tribes – Les Djinns de Naqala", case: "caseC", emplacement: 7, joueurs: [2, 4], duree: 60, categories: ["Plateau", "Stratégie"], difficulte: 4 },
    { nom: "Small World", case: "caseC", emplacement: 7, joueurs: [2, 5], duree: 80, categories: ["Plateau", "Stratégie"], difficulte: 4 },
    { nom: "Wingspan – À Tire d'Ailes", case: "caseC", emplacement: 7, joueurs: [1, 5], duree: 120, categories: ["Plateau", "Cartes", "Stratégie"], difficulte: 4 },
    { nom: "Clank ! – Les Aventuriers du Deck-Building", case: "caseC", emplacement: 7, joueurs: [2, 4], duree: 45, categories: ["Plateau", "Deck-building", "Cartes"], difficulte: 4 },
    { nom: "Champ D'Honneur", case: "caseB", emplacement: 8, joueurs: [2, 4], duree: 60, categories: ["Plateau", "Stratégie"], difficulte: 4 },
    { nom: "Les Aventuriers du Rail – Europe", case: "caseC", emplacement: 10, joueurs: [2, 5], duree: 60, categories: ["Plateau"], difficulte: 2 },
    { nom: "7 Wonders", case: "caseC", emplacement: 11, joueurs: [2, 7], duree: 45, categories: ["Cartes", "Plateau", "Stratégie"], difficulte: 3 },
    { nom: "Azul", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 30, categories: ["Pose de tuiles"], difficulte: 3 },
    { nom: "Pandemic", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 45, categories: ["Plateau", "Coopératif"], difficulte: 3 },
    { nom: "Captain Sonar", case: "caseB", emplacement: 7, joueurs: [2, 8], duree: 45, categories: ["Ambiance", "Plateau", "Rapidité"], difficulte: 3 },
    { nom: "Abyss", case: "caseC", emplacement: 7, joueurs: [2, 4], duree: 45, categories: ["Cartes", "Plateau", "Stratégie"], difficulte: 4 },
    { nom: "7 Wonders Architects", case: "caseC", emplacement: 11, joueurs: [2, 7], duree: 45, categories: ["Cartes", "Plateau"], difficulte: 2 },
    { nom: "King of Tokyo", case: "caseB", emplacement: 7, joueurs: [2, 6], duree: 45, categories: ["Dés", "Plateau", "Ambiance"], difficulte: 2 },
    { nom: "Takenoko", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 45, categories: ["Plateau", "Pose de tuiles"], difficulte: 3 },
    { nom: "Sagrada", case: "caseC", emplacement: 10, joueurs: [1, 4], duree: 30, categories: ["Dés"], difficulte: 2 },
    { nom: "Les Charlatans de Belcastel", case: "caseC", emplacement: 7, joueurs: [2, 4], duree: 60, categories: ["Plateau"], difficulte: 4 },
    { nom: "Karuba", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 45, categories: ["Pose de tuiles"], difficulte: 2 },
    { nom: "La Maison des Souris", case: "caseA", emplacement: 4, joueurs: [2, 5], duree: 40, categories: ["Énigme", "Enfants"], difficulte: 1 },
    { nom: "Unlock ! – Game Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Unlock ! – Heroic Adventures", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Splendor", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 30, categories: ["Cartes", "Stratégie"], difficulte: 2 },
    { nom: "Splendor Duel", case: "caseC", emplacement: 10, joueurs: [2, 2], duree: 30, categories: ["Cartes", "Stratégie", "Jeu à 2"], difficulte: 3 },
    { nom: "Dixit", case: "caseC", emplacement: 10, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Cartes", "Déduction"], difficulte: 1 },
    { nom: "Kingdomino", case: "caseC", emplacement: 10, joueurs: [2, 4], duree: 15, categories: ["Pose de tuiles"], difficulte: 2 },
    { nom: "Cryptide", case: "caseC", emplacement: 10, joueurs: [2, 5], duree: 45, categories: ["Énigme", "Plateau", "Stratégie"], difficulte: 4 },
    { nom: "Chronicles of Crime", case: "caseC", emplacement: 8, joueurs: [1, 5], duree: 60, categories: ["Énigme", "Coopératif"], difficulte: 2 },
    { nom: "Nom d'un Renard !", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Énigme", "Enfants", "Coopératif"], difficulte: 1 },
    { nom: "When I Dream", case: "caseC", emplacement: 11, joueurs: [4, 10], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Citadelles – Quatrième Édition", case: "caseB", emplacement: 4, joueurs: [2, 8], duree: 45, categories: ["Cartes", "Identité cachée"], difficulte: 2 },
    { nom: "IQ Fit", case: "caseA", emplacement: 2, joueurs: [1, 1], duree: 20, categories: ["Énigme"], difficulte: 1 },
    { nom: "Mr Troove", case: "caseC", emplacement: 4, joueurs: [2, 8], duree: 30, categories: ["Ambiance", "Quiz"], badge: "pepite" , difficulte: 1 },
    { nom: "Mes Premiers Jeux – Premier Verger", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 15, categories: ["Plateau", "Enfants"], difficulte: 1 },
    { nom: "Munchkin", case: "caseC", emplacement: 5, joueurs: [3, 6], duree: 60, categories: ["Cartes", "Ambiance", "Fourberie"], difficulte: 2 },
    { nom: "7 Wonders Duel", case: "caseB", emplacement: 2, joueurs: [2, 2], duree: 45, categories: ["Cartes", "Jeu à 2", "Stratégie"], difficulte: 3 },
    { nom: "Celestia", case: "caseC", emplacement: 11, joueurs: [2, 6], duree: 30, categories: ["Ambiance", "Cartes"], difficulte: 3 },
    { nom: "Hanabi", case: "caseA", emplacement: 2, joueurs: [2, 5], duree: 25, categories: ["Cartes", "Coopératif"], difficulte: 1 },
    { nom: "Not Alone", case: "caseB", emplacement: 4, joueurs: [2, 7], duree: 45, categories: ["Identité cachée", "Cartes"], difficulte: 2 },
    { nom: "MicroMacro Crime City – Full House", case: "caseC", emplacement: 9, joueurs: [1, 4], duree: 60, categories: ["Énigme", "Coopératif"], difficulte: 1 },
    { nom: "Magic Maze", case: "caseB", emplacement: 7, joueurs: [1, 8], duree: 30, categories: ["Ambiance", "Plateau", "Rapidité"], difficulte: 2 },
    { nom: "Pigeon pigeon", case: "caseC", emplacement: 3, joueurs: [2, 10], duree: 30, categories: ["Ambiance"], difficulte: 1 },
    { nom: "Chakra", case: "caseB", emplacement: 7, joueurs: [2, 4], duree: 30, categories: ["Plateau"], difficulte: 2 },
    { nom: "Time's Up ! Party – Version Jaune", case: "caseC", emplacement: 1, joueurs: [4, 12], duree: 60, categories: ["Ambiance", "Rapidité"], difficulte: 1 },
    { nom: "Codenames", case: "caseC", emplacement: 3, joueurs: [2, 8], duree: 15, categories: ["Ambiance", "Déduction"], difficulte: 1 },
    { nom: "Welcome To Your Perfect Home", case: "caseB", emplacement: 6, joueurs: [1, 100], duree: 30, categories: ["Cartes", "Stratégie"], difficulte: 2 },
    { nom: "Avalon", case: "caseB", emplacement: 4, joueurs: [5, 10], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Perudo Jumbo", case: "caseC", emplacement: 1, joueurs: [2, 6], duree: 20, categories: ["Dés", "Ambiance"], difficulte: 1 },
    { nom: "Monza", case: "caseA", emplacement: 4, joueurs: [2, 6], duree: 20, categories: ["Dés", "Enfants"], difficulte: 1 },
    { nom: "Attrape Rêves", case: "caseA", emplacement: 4, joueurs: [2, 5], duree: 20, categories: ["Ambiance", "Enfants"], difficulte: 1 },
    { nom: "Zombie Kidz Évolution", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 30, categories: ["Plateau", "Coopératif", "Enfants"], difficulte: 1 },
    { nom: "Cancre", case: "caseC", emplacement: 2, joueurs: [2, 4], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "Dragomino", case: "caseA", emplacement: 4, joueurs: [2, 4], duree: 15, categories: ["Pose de tuiles", "Enfants"], difficulte: 1 },
    { nom: "Cartographers – Heroes", case: "caseB", emplacement: 6, joueurs: [1, 100], duree: 30, categories: ["Dessin", "Stratégie"], difficulte: 2 },
    { nom: "Bang ! – Le Jeu de Dés", case: "caseB", emplacement: 4, joueurs: [3, 8], duree: 30, categories: ["Dés", "Identité cachée"], difficulte: 1 },
    { nom: "Jaipur", case: "caseB", emplacement: 3, joueurs: [2, 2], duree: 30, categories: ["Cartes", "Jeu à 2"], difficulte: 2 },
    { nom: "Happy City", case: "caseA", emplacement: 2, joueurs: [1, 4], duree: 45, categories: ["Cartes"], difficulte: 2 },
    { nom: "Roi & Compagnie", case: "caseA", emplacement: 4, joueurs: [2, 5], duree: 40, categories: ["Dés", "Enfants"], difficulte: 1 },
    { nom: "Skull", case: "caseA", emplacement: 2, joueurs: [3, 6], duree: 15, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "6 Qui Prend !", case: "caseC", emplacement: 6, joueurs: [2, 10], duree: 45, categories: ["Cartes"], difficulte: 1 },
    { nom: "The Crew", case: "caseC", emplacement: 6, joueurs: [2, 5], duree: 20, categories: ["Cartes", "Coopératif"], difficulte: 2 },
    { nom: "Schotten Totten", case: "caseB", emplacement: 3, joueurs: [2, 2], duree: 20, categories: ["Cartes", "Jeu à 2"], difficulte: 1 },
    { nom: "Twin It !", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Ambiance", "Rapidité", "Adresse"], difficulte: 1 },
    { nom: "Loup-Garou Pour Une Nuit", case: "caseB", emplacement: 4, joueurs: [3, 10], duree: 30, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Poule Poule", case: "caseA", emplacement: 2, joueurs: [2, 8], duree: 20, categories: ["Ambiance", "Rapidité", "Cartes"], difficulte: 1 },
    { nom: "Le Poker des Cafards", case: "caseC", emplacement: 6, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Ambiance"], difficulte: 1 },
    { nom: "Échecs (2001)", case: "caseB", emplacement: 5, joueurs: [2, 2], duree: 60, categories: ["Plateau", "Stratégie", "Jeu à 2"], difficulte: 4 },
    { nom: "Love Letter", case: "caseB", emplacement: 4, joueurs: [2, 6], duree: 20, categories: ["Cartes"], difficulte: 2 },
    { nom: "Timeline – Découvertes", case: "caseA", emplacement: 2, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Énigme"], difficulte: 1 },
    { nom: "Taco Chat Bouc Cheese Pizza", case: "caseC", emplacement: 5, joueurs: [2, 6], duree: 30, categories: ["Ambiance", "Rapidité", "Cartes"], difficulte: 1 },
    { nom: "Longueur D'Onde", case: "caseC", emplacement: 4, joueurs: [2, 12], duree: 60, categories: ["Ambiance", "Coopératif"], difficulte: 1 },
    { nom: "Top Ten", case: "caseC", emplacement: 3, joueurs: [4, 10], duree: 45, categories: ["Ambiance", "Coopératif"], difficulte: 1 },
    { nom: "Mysterium", case: "caseC", emplacement: 8, joueurs: [3, 7], duree: 45, categories: ["Ambiance", "Déduction", "Coopératif"], difficulte: 4 },
    { nom: "L'Île au Trésor", case: "caseC", emplacement: 7, joueurs: [2, 5], duree: 60, categories: ["Plateau", "Dessin"], difficulte: 3 },
    { nom: "Just One", case: "caseC", emplacement: 3, joueurs: [3, 7], duree: 30, categories: ["Ambiance", "Coopératif"], difficulte: 1 },
    { nom: "Dice Forge", case: "caseC", emplacement: 7, joueurs: [2, 4], duree: 45, categories: ["Dés", "Plateau"], difficulte: 3 },
    { nom: "Concept", case: "caseC", emplacement: 10, joueurs: [2, 12], duree: 45, categories: ["Ambiance", "Déduction"], difficulte: 1 },
    { nom: "Colt Express", case: "caseC", emplacement: 7, joueurs: [2, 6], duree: 40, categories: ["Plateau"], difficulte: 3 },
    { nom: "Flip 7", case: "caseC", emplacement: 6, joueurs: [2, 8], duree: 20, categories: ["Cartes", "Stop ou encore"], difficulte: 1 },
    { nom: "Camarades", case: "caseB", emplacement: 6, joueurs: [3, 8], duree: 30, categories: ["Ambiance", "Dés"], difficulte: 1 },
    { nom: "Jungo", case: "caseC", emplacement: 6, joueurs: [2, 4], duree: 25, categories: ["Cartes"], difficulte: 1 },
    { nom: "Crack list", case: "caseC", emplacement: 2, joueurs: [2, 8], duree: 30, categories: ["Ambiance", "Cartes"], difficulte: 1 },
    { nom: "Cambrouillolage", case: "caseB", emplacement: 4, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Fourberie"], difficulte: 2 },
    { nom: "Left Right", case: "caseC", emplacement: 2, joueurs: [3, 6], duree: 20, categories: ["Ambiance"], difficulte: 1 },
    { nom: "Sky team", case: "caseB", emplacement: 2, joueurs: [2, 2], duree: 15, categories: ["Plateau", "Dés", "Jeu à 2"], difficulte: 3 },
    { nom: "Back Stories", case: "caseC", emplacement: 9, joueurs: [1, 6], duree: 60, categories: ["Énigme", "Cartes"], difficulte: 2 },
    { nom: "Time bomb Undercover", case: "caseB", emplacement: 4, joueurs: [4, 8], duree: 15, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Order Overload", case: "caseA", emplacement: 1, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Coopératif", "Ambiance"], difficulte: 1 },
    { nom: "Unmatched", case: "caseC", emplacement: 11, joueurs: [2, 4], duree: 30, categories: ["Plateau", "Stratégie"], difficulte: 3 },
    { nom: "Time bomb Evolution", case: "caseB", emplacement: 4, joueurs: [4, 6], duree: 25, categories: ["Ambiance", "Identité cachée"], difficulte: 1 },
    { nom: "Pic Together", case: "caseA", emplacement: 3, joueurs: [2, 7], duree: 45, categories: ["Ambiance", "Dessin"], difficulte: 1 },
    { nom: "Cascadia", case: "caseC", emplacement: 10, joueurs: [1, 4], duree: 30, categories: ["Pose de tuiles", "Solo"], difficulte: 3 },
    { nom: "2 pommes 3 pains", case: "caseA", emplacement: 1, joueurs: [2, 6], duree: 15, categories: ["Ambiance", "Cartes", "Rapidité"], difficulte: 1 },
    { nom: "Kronologic", case: "caseC", emplacement: 8, joueurs: [1, 4], duree: 60, categories: ["Déduction", "Stratégie", "Solo"], difficulte: 2 },
    { nom: "Jeu de cochons", case: "caseA", emplacement: 1, joueurs: [2, 7], duree: 20, categories: ["Dés", "Ambiance"], difficulte: 1 },
    { nom: "Russian Roulette", case: "caseB", emplacement: 4, joueurs: [2, 6], duree: 30, categories: ["Cartes", "Ambiance", "Stop ou encore"], difficulte: 2 },
    { nom: "Pixies", case: "caseA", emplacement: 1, joueurs: [2, 5], duree: 30, categories: ["Cartes"], difficulte: 1 },
    { nom: "TTMC – Tu Te Mets Combien ? musique", case: "caseC", emplacement: 4, joueurs: [2, 20], duree: 30, categories: ["Ambiance", "Quiz"], difficulte: 1 },
    { nom: "Catan", case: "caseC", emplacement: 7, joueurs: [3, 4], duree: 60, categories: ["Plateau"], difficulte: 4 },
    { nom: "Catan marin", case: "caseC", emplacement: 7, joueurs: [3, 4], duree: 60, categories: ["Plateau"], difficulte: 4 },
    { nom: "Team 3", case: "caseC", emplacement: 3, joueurs: [3, 6], duree: 45, categories: ["Ambiance", "Adresse"], difficulte: 1 },
    { nom: "La bonne paye", case: "caseB", emplacement: 5, joueurs: [2, 6], duree: 120, categories: ["Plateau"], difficulte: 1 },
    { nom: "Carcassonne", case: "caseC", emplacement: 10, joueurs: [2, 5], duree: 45, categories: ["Pose de tuiles"], difficulte: 3 },
    { nom: "Monopoly deal", case: "caseB", emplacement: 1, joueurs: [2, 5], duree: 15, categories: ["Ambiance", "Fourberie"], difficulte: 1 },
    { nom: "Opération zébre", case: "caseC", emplacement: 10, joueurs: [2, 12], duree: 45, categories: ["Ambiance", "Quiz"], difficulte: 2 },
    { nom: "Mito", case: "caseC", emplacement: 6, joueurs: [3, 5], duree: 20, categories: ["Ambiance", "Cartes", "Fourberie"], difficulte: 1 },

  ];

  let RECOMMENDATIONS = [
    { nom: "Guillaume", initiales: "G", role: "Casquette man", jeux: ["Jeu de cochons", "Mille Sabords", "Russian Roulette", "Hanabi", "Mito"] },
    { nom: "Pénélope", initiales: "P", role: "Madame expression française", jeux: ["Mysterium", "OléMains !", "Speedbac – Drôle & Rapide", "Sky team", "Codenames"] },
    { nom: "Niko", initiales: "N", role: "Adore skyjo (c'est faux)", jeux: ["Cascadia", "Akropolis", "Secret Identity", "Karuba", "Nekojima"] },
    { nom: "Astrid", initiales: "A", role: "Ne sait pas faire de wheeling", jeux: ["Munchkin", "Nekojima", "Camarades", "Dracula vs Van helsing", "Crack list"] },
    { nom: "Chloé", initiales: "C", role: "Se déplace à dos de kangourou", jeux: ["Pina coladice", "Monopoly deal", "Codenames", "So Clover", "Concept"] },
    { nom: "Serena", initiales: "S", role: "", jeux: [] },
    { nom: "Morgane", initiales: "M", role: "BTS FAN", jeux: ["La bonne paye", "Skyjo", "Unlock ! – Epic Adventures", "Opération zébre", "Mr Troove"] },
    { nom: "Jade", initiales: "J", role: "", jeux: [] },
    { nom: "Romane", initiales: "R", role: "", jeux: [] },
    { nom: "Alix", initiales: "A", role: "", jeux: [] },
    { nom: "Solenne", initiales: "S", role: "Elle vous fera craquer... vu qu'elle est ostéopathe", jeux: ["Abyss", "Flamecraft", "Order Overload", "Link city", "Dracula vs Van helsing"] },
  ];

  // Jeux actuellement à vendre (collection en double, jeux non gardés, etc.)
  // Chaque entrée : nom (peut reprendre un nom de COVERS pour afficher la jaquette),
  // prix (texte libre, ex: "10 €"), et un état facultatif.
  // ⚠️ EXEMPLES à remplacer/compléter par la vraie liste de l'équipe.
  let JEUX_A_VENDRE = [
    { nom: "Munchkin", prix: "8 €", etat: "Bon état, complet" },
    { nom: "Uno", prix: "3 €", etat: "Bon état" },
  ];

  // --------------------------------------------------------------
  // Identifiant stable par jeu (slug)
  // --------------------------------------------------------------
  // Généré automatiquement à partir du nom : sert de clé technique
  // stable en interne (ex : futures URLs #jeu=id, futur stockage).
  // L'affichage continue d'utiliser jeu.nom tel quel ; ceci n'impose
  // aucun renommage à l'équipe qui édite le tableau JEUX.
  function slugifierId(texte){
    return texte
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-+|-+$)/g, "");
  }

  JEUX.forEach(function(jeu){
    jeu.id = slugifierId(jeu.nom);
  });

  // --------------------------------------------------------------
  // Contrôle de cohérence des données (silencieux en usage normal)
  // --------------------------------------------------------------
  // Objectif : quand quelqu'un modifie ce fichier à la main (faute de
  // frappe dans un nom, espace en trop, jeu oublié...), le site continue
  // de fonctionner (aucun crash) mais un message clair apparaît dans la
  // console développeur (F12) pour repérer et corriger l'erreur — au
  // lieu d'un jeu "silencieusement" sans jaquette ou sans coup de cœur.
  function validerCoherenceDonnees(){
    const avertissements = [];
    const nomsJeux = new Set(JEUX.map(j => j.nom));

    // Doublons de nom dans le catalogue
    const vus = new Set();
    JEUX.forEach(function(j){
      if (vus.has(j.nom)) avertissements.push('Jeu en double dans JEUX : "' + j.nom + '"');
      vus.add(j.nom);
    });

    // Jeux sans case de rangement valide
    const caseIds = new Set(CASES.map(c => c.id));
    JEUX.forEach(function(j){
      if (j.case && !caseIds.has(j.case)){
        avertissements.push('Jeu "' + j.nom + '" référence une case inconnue : "' + j.case + '"');
      }
      if (j.case && j.emplacement){
        const c = CASES.find(c => c.id === j.case);
        if (c && !c.emplacements[j.emplacement]){
          avertissements.push('Jeu "' + j.nom + '" référence un emplacement inconnu (' + j.emplacement + ') dans ' + j.case);
        }
      }
    });

    // Recommandations pointant vers un jeu absent du catalogue
    RECOMMENDATIONS.forEach(function(profil){
      profil.jeux.forEach(function(nomJeu){
        if (!nomsJeux.has(nomJeu)){
          avertissements.push('Recommandation de ' + profil.nom + ' : jeu introuvable dans JEUX -> "' + nomJeu + '"');
        }
      });
    });

    // Jeux à vendre pointant vers un jeu absent du catalogue (juste informatif :
    // un jeu à vendre peut très bien ne pas être dans le catalogue courant)
    JEUX_A_VENDRE.forEach(function(item){
      if (!nomsJeux.has(item.nom) && !COVERS[item.nom]){
        avertissements.push('Jeu à vendre "' + item.nom + '" : ni dans JEUX ni dans COVERS (pas de jaquette, pas de fiche liée).');
      }
    });

    if (avertissements.length > 0 && typeof console !== "undefined"){
      console.warn(
        "[ludotheque] " + avertissements.length + " incohérence(s) détectée(s) dans data.js :\n- " +
        avertissements.join("\n- ")
      );
    }
  }

  validerCoherenceDonnees();
