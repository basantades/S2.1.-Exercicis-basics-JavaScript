"use strict"


// Rest & Spread operators

const array1 = ["Alejandro", "Oscar", "Juan"];
const array2 = ["Berta", "Lali", "Varos", "Alberto"];

const array3 = [...array1, ...array2];
console.log(array3);


function suma(...numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    console.log(`La suma de ${numeros.join(" + ")} es ${total}`);
}

suma(1, 2, 3, 4, 5);


// Nivell 2

const objecte1 = {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    };

const objecte2 = {...objecte1};

objecte2.nombre = "Juan Carlos";

console.log(objecte1.nombre);
console.log(objecte2.nombre);


const ciudades = ["Barcelona", "Madrid", "Sevilla", "Valencia", "Zaragoza"];

const [ciudad1, ciudad2, ...otrasCiudades] = ciudades;

console.log(ciudad1);
console.log(ciudad2);
console.log(otrasCiudades);



// Nivell 3

function fecha(dia, mes, anyo) {
    console.log(`${dia}/${mes}/${anyo}`);
}

const arrayFecha = [15, "agosto", 2022];

fecha(...arrayFecha);