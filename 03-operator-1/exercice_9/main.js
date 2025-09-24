// Exercice 9
// Écrivez votre code ici
// Patrimoine total
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let patrimoineTotal = maison + terrains + liquidites; // 120.000.000 CDF

// Première catégorie : enfants = 75% de l'héritage
let heritageEnfants = patrimoineTotal * 0.75;

// Répartition entre Paul, Marie et Alain (1/3 chacun)
let partPaul = heritageEnfants / 3;
let partMarie = heritageEnfants / 3;
let partAlain = heritageEnfants / 3;

// Répartition d'Alain entre ses enfants Éric et Claire
let partEric = partAlain / 2;
let partClaire = partAlain / 2;

// Deuxième catégorie : conjoint et frères = 25% de l'héritage
let heritageConjointFreres = patrimoineTotal * 0.25;

// Répartition entre Madame MUKUNA, Joseph, Sarah (1/3 chacun)
let partMadame = heritageConjointFreres / 3;
let partJoseph = heritageConjointFreres / 3;
let partSarah = heritageConjointFreres / 3;

// Affichage des résultats
console.log("Héritage de Paul :", partPaul.toLocaleString("fr-FR"), "CDF");
console.log("Héritage de Marie :", partMarie.toLocaleString("fr-FR"), "CDF");
console.log("Héritage d'Éric :", partEric.toLocaleString("fr-FR"), "CDF");
console.log("Héritage de Claire :", partClaire.toLocaleString("fr-FR"), "CDF");
console.log("Héritage de Madame MUKUNA :", partMadame.toLocaleString("fr-FR"), "CDF");
console.log("Héritage de Joseph :", partJoseph.toLocaleString("fr-FR"), "CDF");
console.log("Héritage de Sarah :", partSarah.toLocaleString("fr-FR"), "CDF");
