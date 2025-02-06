/* 
  Desafío: Hora de practicar

    Y vamos a poner en práctica nuestro conocimiento con otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje.

  Desafíos finales: 
*/

/* 1 - Crea un programa que utilice console.log para        mostrar un mensaje de bienvenida. 
*/

console.log("Bienvenidos al Curso de Alura!");

/* 2 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador. 
*/

let nombre = "José";
console.log(`¡Hola, ${nombre}!`);

/* 3 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!". 
*/

let tuNombre = "Fabio";
alert(`¡Hola, ${tuNombre}!`)

/* 4 - Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador. 
*/

let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Te gusta el lenguaje ${lenguaje}`);

/* 5 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola. */

let valor1 = 5;
let valor2 = 3;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

/* 6 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola. 
*/

let valor_1 = 5;
let valor_2 = 3;
let resultadoResta = valor_1 - valor_2;
console.log(`La diferencia entre ${valor_1} y ${valor_2} es igual a ${resultadoResta}.`);

/* 7 - Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. 
*/

let edad = prompt('Ingrese su edad:');
if (edad >= 18) {
  console.log('Ud. es mayor de edad');
} else {
  console.log('Ud. es menor de edad');
}

/* 8 - Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente. */

let numero = prompt('Ingrese un número:');
if (numero > 0) {
  console.log('El número es positivo');
} else if (numero == 0) {
  console.log('El número es cero');
} else {
  console.log('El número es negativo');
}

/* 9 - Utiliza un bucle while para mostrar los números del 1 al 10 en la consola. 
*/

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

/* 10 - Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. 
*/

let nota = 5;
if (nota >= 7) {
  console.log(`Te sacaste un ${nota}, aprobaste`);
} else {
  console.log(`Te sacaste un ${nota}, reprobaste`);
}

/* 11 - Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola. 
*/

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/* 12 - Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola. 
*/

let numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10 + 1);
console.log(numeroAleatorioEntre1y10);

/* 13 - Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. 
*/

let numeroAleatorioEntreUnoyMil = Math.floor(Math.random() * 10 + 1);
console.log(numeroAleatorioEntreUnoyMil);