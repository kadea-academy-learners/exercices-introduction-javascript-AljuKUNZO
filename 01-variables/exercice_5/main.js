// Exercice 5
// Écrivez votre code ici
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let temperatureCelsius = 25;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);

console.log(temperatureFahrenheit);


module.exports = { celsiusToFahrenheit };
