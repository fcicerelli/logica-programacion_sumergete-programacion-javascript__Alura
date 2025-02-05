// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log("Valor del intento:", numeroUsuario);
    console.log("El resultado de la comparación es:", numeroUsuario == numeroSecreto);
    /*
        Este codigo realiza
        la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        // No acertamos, la condición no fue verdadera
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secrto es mayor");
        }
        // Incrementamos el contador cuando no acierta
        intentos++;
        palabraVeces = 'veces';
        // console.log('Valor del número secreto:', numeroSecreto);
        // alert('Lo siento! No acertaste, el numero era ' + numeroSecreto);
    }
}