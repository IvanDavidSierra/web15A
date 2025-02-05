'use strict';

//Formas de seleccionar elementos del DOM
//1. Seleccion por ID
const parrafos = document.getElementById('parrafo');
console.log(parrafos);

//2. Seleccion por el atributo o propiedad name

const names = document.getElementsByName('respuesta');
console.log(names);

//3. Seleccion con querySelector
const parrafo = document.querySelector('#parrafo');

//Seleccion por etiqueta
const titulo = document.querySelector('h1');

//Seleccion por clase 
const indicacion = document.querySelector('.indicacion');
const todosParrafos = document.querySelectorAll('p');

function respuesta(){
    console.log(document.getElementById('respuesta').value);

}


const numero1 = parseFloat(prompt('Dame un número'));
const numero2 = parseFloat(prompt('Dame otro número'));


const sumar = (num1,num2)=>{
    return (num1 + num2);
}

alert('La suma de los números es: ' + sumar(numero1,numero2));