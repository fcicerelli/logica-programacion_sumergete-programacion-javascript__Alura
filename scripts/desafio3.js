/* 
  Desafío: Hora de practicar
  
    Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? 
    
    Desafíos: 
*/

/* 1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número. */

let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

/* 2 - Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. */

let contadorRestando = 10;
while (contadorRestando >= 0) {
  console.log(contadorRestando);
  contadorRestando--;
}

/* 3 - Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

/* 4 - Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */

let contadorPersonalizado = 0;
let objetivo = prompt("ingrese un numero positivo, pero menor a 30");
while (contadorPersonalizado <= objetivo) {
  console.log(contadorPersonalizado);
  contadorPersonalizado++;
}