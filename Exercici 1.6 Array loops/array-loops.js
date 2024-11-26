"use strict"


// Array transformations

let noms = ['Anna', 'Bernat', 'Clara'];

// Exercici 1

noms.forEach(nom => {
    console.log(nom);
});

// Exercici 2

for (const nom of noms) {
    console.log(nom);
}

// Exercici 3

let numeros = [1, 2, 3, 4, 5, 6];

let nomerosPares = numeros.filter(elemento => elemento % 2 == 0);
console.log(nomerosPares);

// Nivell 2

// Exercici 4
let obj = { 
    nom: "Ona",  //faltaban las comillas del string
    edat: 25, 
    ciutat: 'Barcelona' 
};
  
  for (const propiedad in obj) {
    console.log(`${propiedad}: ${obj[propiedad]}`);
  }


// Exercici 5

for (const numero of numeros) {
    console.log(numero);
    if (numero == 5) {
        break;
    }
}


// Nivell 3
for (const nom of noms) {
    console.log(`${noms.indexOf(nom)}: ${nom}`);
}