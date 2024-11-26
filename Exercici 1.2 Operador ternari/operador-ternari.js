"use strict"


// Operador ternari

// Exercici 1
function potConduir() {
    let edad = parseInt(document.getElementById("edadForm").value);
    let contenedorResultado = document.getElementById("resultadoConduir");

    (edad >= 18) ? contenedorResultado.innerHTML = 'Pots conduir' : contenedorResultado.innerHTML = 'No pots conduir';
} 


// Exercici 2
function comparacion() {
    let num1 = parseInt(document.getElementById("cifra1").value);
    let num2 = parseInt(document.getElementById("cifra2").value);
    let contenedorResultado = document.getElementById("resultadoComparacion");

    (num1 > num2) ? contenedorResultado.innerHTML = `${num1} és més gran` : contenedorResultado.innerHTML = `${num2} és més gran`;
} 



// Nivell 2

function positivoNegativo() {
    let num = parseInt(document.getElementById("num").value);
    let contenedorResultado = document.getElementById("resultadoNum");

    (num > 0) ? contenedorResultado.innerHTML = `Positivo` 
    : (num < 0) ? contenedorResultado.innerHTML = `Negativo` : contenedorResultado.innerHTML = `Zero` ;

}

function trobarMaxim(a, b, c) {
    let contenedorResultado = document.getElementById("resultadoMaxim");

    (a > b) ? (a > c) ? contenedorResultado.innerHTML = `El mayor es ${a}` : contenedorResultado.innerHTML = `El mayor es ${c}`
    : (b > c) ? contenedorResultado.innerHTML = `El mayor es ${b}` : contenedorResultado.innerHTML = `El mayor es ${c}`;
}

function capturarValoresYBuscarMayor(){
    let parametro1 = parseInt(document.getElementById("parametro1").value);
    let parametro2 = parseInt(document.getElementById("parametro2").value);
    let parametro3 = parseInt(document.getElementById("parametro3").value);

    trobarMaxim(parametro1, parametro2, parametro3)
}



// Nivell 3

function parOImpar(arrayNumeros) {
    let contenedorResultado = document.getElementById("resultadoParesImpares");
    let resultado = ``;

    for (let i = 0; i < arrayNumeros.length; i++) {
        (arrayNumeros[i] % 2 == 0) ? resultado += `${arrayNumeros[i]} es par <br>`: resultado += `${arrayNumeros[i]} es impar <br>` ;
    }

    contenedorResultado.innerHTML = resultado;
}


function capturarValoresArray() {
    let stringForm = document.getElementById("arrayNumeros").value;
    let arrayNumeros = stringForm.split(','); 

    parOImpar(arrayNumeros)
}