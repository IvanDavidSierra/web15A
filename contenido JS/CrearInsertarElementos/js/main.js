'use strict';

const miParrafo = document.createElement('p');
const sectionUno = document.createElement('section');
const h1 = document.querySelector('h1');

//Asignar elementos a las etiquetas creadas
miParrafo.id = "mi-parrafo";
miParrafo.className = "otro-parrafo";
miParrafo.style="border-radius: 5%;";
miParrafo.textContent = "Hola fui creado desde JavaScript";
miParrafo.innerHTML = "<strong><h2>Texto en negrita<</h2>/strong>";
/*miParrafo.textContent = "<strong>Hola fui creado desde JavaScript</strong>";*/

//Insertar en el DOM
document.body.appendChild(miParrafo);

//Section
sectionUno.style="font-size:25px; text-align:center; background-color: lightblue; padding: 20px;";
sectionUno.textContent = "Soy un section";
h1.appendChild(sectionUno);



