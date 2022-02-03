/*
comentarios multilinea 
*/



// comentario de una linea
console.log("hello petter");

/*
VARIABLES

tipo let: 'es un valor que se ´puede sobre escribit'
*/

let nombreVariable = 10;
let edad = 35;
let nombre = "edgar";
let sexo = "M";

console.log("nombreVariable ",nombreVariable);

/*
VARIABLES

tipo const: 'es un tipo de valor que no se ´puede sobre escribit'
*/

const pi = 3.14;
const url = "http://www.google.com";
console.log("PI",pi);


/*
TIPOS DE DATOS
*/
let nombre2 = "sebastian"; //string
let edad2 = 35; //number
let bool= true; // boolean
let indefinido; //undefinid
let nulo = null; // null
let dataUnico = Symbol("123456"); //symbol
let sebastian = {
    nacionalidad: "peruana",
    sexo: "m",
    edad: 35,
    profesion: "sistemas",
    especialidad: "frontend",
    //objeto
};
console.log("")
console.log('//////////////////');
console.log('//////tipo de datos');
console.log('///////////////////');
console.log('nombre2', typeof nombre2);
console.log('edad2', typeof edad2);
console.log('bool', typeof bool);
console.log('indefinido', typeof indefinido);
console.log('nulo', typeof nulo);
console.log('dataUnico', typeof dataUnico);
console.log('sebastian', typeof sebastian);

// CAMBIAR  TIPO DE DATOS
console.log("")
console.log('//////////////////');
console.log('//////tipo de datos');
console.log('///////////////////');

console.log('numero', typeof 7);
console.log('numero', typeof "7");
// De string a numero
console.log(typeof parseInt("7"));// number
console.log(parseFloat("3.14"));//mu,ber
console.log(typeof Number("10"));//number

// De numero a string
let numberData = 10;
console.log(typeof String(10));//number -> String
console.log(typeof numberData.toString());//number ->string


let numero1 = prompt("ingresa un numero"); //retorna el valor ingresado del
let numero2 = prompt("ingresa otro numero"); //retorna el valor ingresado

console.log(Number(numero1) + Number(numero2));

