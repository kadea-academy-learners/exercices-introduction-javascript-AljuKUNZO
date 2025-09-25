// Exercice 7
// Écrivez votre code ici
// 1) Age de l'enfant
// Exercice 7 : Calcul des âges

// 1. Âge de l’enfant
let ageEnfant = 10;

// 2. Âge du père = double de l’âge de l’enfant
let agePere = ageEnfant * 2;

// 3. Âge de la mère = âge du père - 5
let ageMere = agePere - 5;

// 4. Âge du grand-père = (2 × âge de la mère) + (½ × âge de l’enfant)
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2);

// 5. Âge de l’oncle = âge du père + 10
let ageOncle = agePere + 10;

// Affichage console (optionnel pour vérifier)
console.log("Enfant:", ageEnfant);
console.log("Père:", agePere);
console.log("Mère:", ageMere);
console.log("Grand-père:", ageGrandPere);
console.log("Oncle:", ageOncle);

// Exportation pour Jest
module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };
