// Exercice 5
// Écrivez votre code ici
// Déclaration de la température en Celsius
// Fonction demandée par le test
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Exemple avec une variable comme l’énoncé
let temperatureCelsius = 25;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureFahrenheit); // 77

// Export pour Jest
module.exports = celsiusToFahrenheit;

