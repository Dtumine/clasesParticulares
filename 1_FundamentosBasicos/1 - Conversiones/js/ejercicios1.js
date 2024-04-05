/*

1 - A) EJERCICIOS Variables y Tipos de Datos: 

1.	Declarar una variable numérica y convertirla a cadena. Mostrar ambas variables en la consola.
2.	Declarar una cadena que represente un número y convertirla a un valor numérico. Mostrar ambas variables en la consola.
3.	Declarar una variable booleana y convertirla a número. Mostrar ambas variables en la consola.
4.	Declarar una variable utilizando let e inicializarla como null. Luego, realizar la conversión a una cadena y mostrar el resultado.
5.	Declarar una constante con tu edad y otra variable que represente tu altura. Concatenarlas en una cadena y mostrar el resultado en la consola.

*/ 


// -1

let nroA = 10500; 
let cadenaA =  String(nroA);   // conviene declarar las variables de distinta manera? 

console.log(nroA);
console.log(cadenaA);


// -2 

let cadenaB = "1800";
let nroB = Number(cadenaB)

console.log(cadenaB);
console.log(nroB);


// -3

let variableBooleana = false; // porqué es un constructor? 


let nroC = Number(variableBooleana); 
//let booleana1 = Boolean(nroC);  // la variable de tipo Booleana solo puede aplicarse si está afectando a otro factor? 

console.log(nroC)
//  booleana = 1;  // reasigno su valor a 1 para convertir en Number 


//let booleana2 = Number(booleana1);
//console.log(booleana1);
//console.log(booleana2);




// -4
let nula = null; 
let cadenaC = String(nula);
console.log(typeof nula); 

console.log(typeof cadenaC); 



// -5

const edad = 38;   
let altura = 1.81;    

let cadenaD = String(edad) + String(altura)
console.log(cadenaD)



// prueba representando mi altura en String 

const edad2 = 38; 
let altura2 = " un metro y ochenta y uno centímetros ";
let datosDamian2 = String(edad2) + altura2;
console.log(datosDamian2);



let salario = 450000
let diaCobro = 5
let seccion = 40

// "Su salario es de 450000, puede cobrar a partir del dia 5 en la seccion 40"
let cadenaX = ("Su salario es de " + String(salario) + " puede cobrar a partir del dia " + String(diaCobro) + " en la seccion " + String(seccion));
console.log(cadenaX)

// muela

































