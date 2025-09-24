// Exercice 7
// Écrivez votre code ici
// 1) Age de l'enfant
let ageEnfant = 10; 

// 2) Age du père = double de l'âge de l'enfant
let agePere = ageEnfant * 2;

// 3) Age de la mère = âge du père moins 5
let ageMere = agePere - 5;

// 4) Age du grand-père = double de l'âge de la mère plus moitié de l'âge de l'enfant
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2);

// 5) Age de l'oncle = âge du père plus 10
let ageOncle = agePere + 10;

// Affichage pour vérifier
console.log("Enfant :", ageEnfant);
console.log("Père :", agePere);
console.log("Mère :", ageMere);
console.log("Grand-père :", ageGrandPere);
console.log("Oncle :", ageOncle);
