"use strict"


// Función flecha
const add = (a, b) => a + b;
console.log(add(1, 2));


const randomNumber = () => Math.floor (Math.random() * 101); // 101 para que exista la posibilidad de que salga el numero 100 
console.log(randomNumber());


class person {
    constructor(name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);
}

const Alberto = new person("Alberto");
Alberto.greet();


// Nivell 2
const printNumbers = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

let numerosArray = [1, 5, 13, 43, 59];
console.log(printNumbers(numerosArray));


// Nivell 3
setTimeout(() => console.log("Retrasado por 2 segundo."), 2000);