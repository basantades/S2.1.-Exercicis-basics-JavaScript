"use strict"


// Exercici 1.7: Promises & Async/Await

// Exercici 1

const miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});


// Exercici 2
miPromesa.then((mensaje) => {
    console.log(mensaje);
});


// Exercici 3



function saludovalido() {
    let input = document.getElementById("inputSaludo").value;
    let contenedorResultado = document.getElementById("resultadoSaludo");

    const miPromesa2 = new Promise((resolve, reject) => {
        if (input === 'Hola') {
            setTimeout(() => {
            resolve("✅ La promesa s'ha resolt correctament.");
        }, 2000);
        } else {
            reject("❌ La promesa s'ha rebutjat perquè l'input no és 'Hola'.");
        }
    });

miPromesa2.then((mensaje) => {
    contenedorResultado.innerHTML = mensaje;
}).catch((error) => {
    contenedorResultado.innerHTML = error;
});
}



// Exercici 4
async function esperaPromesa() {

    let resultado = await miPromesa;
  
    console.log(resultado);
  }
  
  esperaPromesa();



// Nivell 2

async function esperaPromesa2() {

    try {
        let resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
  }
  
  esperaPromesa2();



// Nivell 3

const promesa2s = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resuelto en 2 segundos');
    }, 2000);
});

const promesa3s = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resuelto en 3 segundos');
    }, 2000);
});

Promise.all([promesa2s, promesa3s]).then((values) => {
    console.log(values);
  });