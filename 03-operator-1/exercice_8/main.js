// Exercice 8
// Écrivez votre code ici
// 1) Salaire mensuel
let salaireMensuel = 500;

// 2) Loyer = 30% du salaire
let loyer = salaireMensuel * 0.3;

// 3) Nourriture = 20% du salaire
let nourriture = salaireMensuel * 0.2;

// 4) Transport = 10% du salaire
let transport = salaireMensuel * 0.1;

// 5) Autres dépenses = 50 + 25
let autresDepenses = 50 + 25;

// 6) Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7) Reste après dépenses
let reste = salaireMensuel - totalDepenses;

// Affichage des résultats
console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste :", reste);
