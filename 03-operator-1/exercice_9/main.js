// Exercice 9
// Écrivez votre code ici
// Exercice 9 : Répartition de l'héritage de Monsieur Jean MUKUNA

// Patrimoine total
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

// Valeur totale du patrimoine
let patrimoine = maison + terrains + liquidites; // 120.000.000 CDF

// Première catégorie : 75% pour les enfants
let partEnfants = patrimoine * 0.75;
let partParEnfant = partEnfants / 3;

// Paul
let paul = partParEnfant;

// Marie
let marie = partParEnfant;

// Alain (décédé, représenté par Eric et Claire)
let alain = partParEnfant;
let eric = alain / 2;
let clair = alain / 2; // utiliser "clair" pour correspondre au test

// Deuxième catégorie : 25% pour conjoint + frère vivant + nièce
let partCategorie2 = patrimoine * 0.25;
let partParPersonne = partCategorie2 / 3;

// Madame MUKUNA (épouse)
let madameMukuna = partParPersonne;

// Joseph (frère vivant)
let joseph = partParPersonne;

// Sarah (nièce, représentant Daniel)
let sarah = partParPersonne;

// Affichage pour vérification
console.log("Paul :", paul);
console.log("Marie :", marie);
console.log("Eric :", eric);
console.log("Clair :", clair);
console.log("Madame MUKUNA :", madameMukuna);
console.log("Joseph :", joseph);
console.log("Sarah :", sarah);

// Export pour Jest
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};

