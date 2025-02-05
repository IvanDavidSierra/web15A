'use strict';
export {buscarElementos, saludarA};

function buscarElementos(arreglo,dato){
    let result = arreglo.filter((item) => item > dato && item < 100);
    return result;
}

const saludarA = (nombre) => `Hola estudiante: ${nombre}. Bienvenido a la UE`;

 