// Exercice 6
// Écrivez votre code ici
// Exercice 6 : Déclaration de variables de différents types

let age = 20;                  // 1. Valeur numérique
let nom = "Alju";              // 2. Chaîne de caractères
let estConnecte = true;        // 3. Booléen
let valeurNulle = null;        // 4. null
let inconnue;                  // 5. Déclarée sans valeur

// Affichage pour vérification manuelle
console.log(age);
console.log(nom);
console.log(estConnecte);
console.log(valeurNulle);
console.log(inconnue);

// Exportation pour Jest (tests)
module.exports = { age, nom, estConnecte, valeurNulle, inconnue };
