// Variables
let numeroSecreto = 0; 
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;
let numeroMaximo = 10;

numeroMaximo = prompt(`Desea jugar de 1 hasta qué número?`);
numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
console.log(`El número secreto es: ${numeroSecreto}`);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo}, por favor:`));

    console.log("Valor del intento:", numeroUsuario);
    console.log("El resultado de la comparación es:", numeroUsuario == numeroSecreto);
    /*
        Este codigo realiza
        la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        // No acertamos, la condición no fue verdadera
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // Incrementamos el contador cuando no acierta
        intentos++;
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos. El número secreto era: ${numeroSecreto}`);
            break;
        }
    }
}