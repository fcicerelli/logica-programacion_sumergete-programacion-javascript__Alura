// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log("Valor del intento:", numeroUsuario);
console.log("El resultado de la comparación es:", numeroUsuario == numeroSecreto);
/*
    Este codigo realiza
    la comparación
*/
if (numeroUsuario == numeroSecreto) {
    // Acertamos, fue verdadera la condición
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    // No acertamos, la condición no fue verdadera
    console.log('Valor del número secreto:', numeroSecreto);
    alert('Lo siento! No acertaste, el numero era ' + numeroSecreto);
}
