'use strict';

//1. funcion clasica

function sumar(var1,var2){
    return var1 + var2;
}

//Invocacion de funciones 

console.log(sumar(3,20000));


//2. Funcion tipo flecha 
const restar = (var1, var2) => {
    return var1 - var2;
}

//const restar2 = (var1, var2) => var1 - var2;

console.log(restar(8,10));

//3. Funcion anonima o expresada

const multiplicar = function(num1,num2,num3){
    //Template string
    let mensaje = `La multiplicacion de ${num1} * ${num2} * ${num3} es: ${num1*num2*num3}`;
    console.log(mensaje);
}

multiplicar(2,5,10);


//4. Función tipo objeto

let nume1 = 45;
let nume2 = 54;

const multiplicacion = new Function("num1","num2","return num1*num2");

let result = multiplicacion(nume1,nume2);
console.log("La multiplicacion es: "+result);


//5. Callback

let msn = " UE";
const saludo = function(mensaje){
    console.log("Hola Mundo"+mensaje);
}
function saludar(callback, message){
    callback(message);
}

saludar(saludo,msn); //funcion por parámetro





