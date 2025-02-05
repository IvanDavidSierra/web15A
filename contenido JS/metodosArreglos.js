'use strict';

//1. Cadena en un arreglo
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let myArray = cadenaDias.split("_");

console.log(myArray);

//2. Buscar un valor, si no lo encuentra retorna un undefined

const result = myArray.find((e) =>{
    return e === "jueves";
});

// const result = myArray.find((e) => e === "jueves"); otra forma mas corta

console.log(result);

//3. Buscar indice de un valor en un arreglo, sino lo consigue -1

const indice = myArray.findIndex((e) => e === "tontolon");
console.log(indice);


//4. Verificar si existe un elemento dentro del arreglo, con includes retorna true o false

console.log("Includes: "+ myArray.includes("sabado"));

//5. Filtrar elementos segun una condicion 

const miArray = [1,,3,4,5,6,7,8,9,10,11,12,13];
const filtrar =  miArray.filter((e) => e % 2 === 0);
console.log(filtrar);