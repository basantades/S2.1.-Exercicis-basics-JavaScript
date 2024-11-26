"use strict"


// Array transformations

const numeros = [1, 2, 3, 4];

// Exercici 1

const numerosCuadrado = numeros.map(elemento => elemento * elemento);
console.log(numerosCuadrado);

// Exercici 2

const numerospares = numeros.filter(elemento => elemento % 2 == 0);
console.log(numerospares);


// Exercici 3
const numeros2 = [1, 10 , 8, 11];
let primerMayor = numeros2.find(elemento => elemento > 10);

console.log(primerMayor); 

// Exercici 4
const numeros3 = [13, 7, 8, 21];
let sumaArray = numeros3.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(sumaArray);


// Nivell 2

const numeros4 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

const filtradoYSuma = (array) => array.filter(elemento => elemento >= 10).reduce((acumulador, elemento) => acumulador + elemento * 2, 0);

console.log(`La suma de los numeros mayores a 10 y multiplicados por 2 es: ${filtradoYSuma(numeros4)}`);


// Nivell 3

const numeros5 = [11, 12, 13, 14];

console.log(`Todos los numeros son mayores a 10: ${numeros5.every(elemento => elemento >= 10)}`);
console.log(`Algún numero es mayor a 10: ${numeros5.some(elemento => elemento >= 10)}`);