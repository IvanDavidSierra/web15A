'use strict';

//1. Objeto literal

let course = {
    name : "",
    time : 0,
    level : ""
}
course.name = "JAVA CODE";
course.time = 45;
course.level = "Basic";

//2. Objeto por constructor

function Person(name,lastName,age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

let myPerson = new Person("Juanito","Polla",25);

//Otra forma de trabajar con objetos
const nameBook = "Cien años de soledad";
const author = "Gabriel Garcia Marquez";
const year = 1967;

const book = {
    nameBook,
    author,
    year,
    //propiedad o atributo compuesto
    genre: ["Realismo Mágico","Drama","Misterio"],
    printing: function(){
        return `El libro ${this.nameBook} fue escrito por ${this.author} en el año ${this.year}`;	
    }

};

console.log(book.printing());

//Valores del objeto
console.log(Object.values(book));
//Atributos 
console.log(Object.keys(book));
//Como volver iterable un objeto
Object.entries(book).forEach(([key,value]) => console.log(key,value));

