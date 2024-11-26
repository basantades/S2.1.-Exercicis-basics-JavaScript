"use strict"


// Callbacks
function processar(nombre, callback) {
    callback(nombre);
} 

function mitad(nombre) {
    console.log(`La mitad de ${nombre} es ${nombre / 2}`) ;
}

mitad(7, mitad);




function calculadora(num1, num2, callback) {
    callback(num1, num2);
}

function suma(num1, num2) {
    console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
}

calculadora(13, 9, suma);




// Nivell 2


function esperarISaludar(nom, callback) {
    callback(nom);
} 

function saludar(nom) {
    setTimeout(() => console.log(`Hola ${nom}`), 2000);
}

esperarISaludar("Alberto", saludar);




function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
} 

function dupllicar(num) {
    console.log(`El doble de ${num} es ${num * 2}`);
}

const arrayNumeros = [34, 5, 12, 7, 23];

processarElements(arrayNumeros, dupllicar);



// Nivell 3

function processarCadena(array, callback) {
    const arrayMayusculas = array.map(elemento => elemento.toUpperCase());
    callback(arrayMayusculas);
} 

function aleatorio(array) {
    let randomNumber = Math.floor (Math.random() * array.length);
    console.log(`Le ha tocado a ${array[randomNumber]}`);
}

const arrayClase = ["Alejandro", "Oscar", "Juan", "Berta", "Lali", "Varos", "Alberto"];

processarCadena(arrayClase, aleatorio);
