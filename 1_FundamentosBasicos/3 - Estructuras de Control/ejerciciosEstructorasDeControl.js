
/*

Ejercicio  1:

Escribe un programa que tome una calificación numérica (por ejemplo, 85) 
y la convierta a una calificación en letra (por ejemplo, "A", "B", "C", "D", "F").

*/

let nota = 85

if (nota >= 90){
    console.log("A")
 } else if(nota >= 80){
    console.log("B")
 } else if (nota >= 70){
    console.log("C")
 } else if (nota >=60){
    console.log("D")
 } else {
    console.log("F")
}


 



/*
let calificacionNumerica = 85

if(calificacionNumerica==100){
    console.log("A")
} else if(calificacionNumerica>80){
    console.log("B")
} else if(calificacionNumerica>60){
    console.log("C")
} else if(calificacionNumerica>50){
    console.log("D")
} else{
    console.log("F")
}

*/



/*
Ejercicio 2: Número positivo, negativo o cero

Escribe un programa que tome un número y determine si es positivo, negativo o cero.
*/


let numero = -4

if(numero>0){
    console.log("el numero es positivo")
} else if(numero<0){
    console.log("el numero es negativo")
} else{
    console.log("el numero es 0")
}

/*

Ejercicio 3: Determinar si un año es bisiesto

Escribe un programa que tome un año y determine si es bisiesto o no. 
Un año es bisiesto si es divisible entre 4, excepto si es divisible entre 100, 
a menos que también sea divisible entre 400.

*/



// modulo, resto. 


let año2024 = 2024 

if((año2024 % 4 === 0 && año2024 % 100 !== 0) || (año2024 % 400 === 0)){
    console.log("el año es bisiesto")
} else{
    console.log("el año no es bisiesto")
}



let año = 2024 
if((año % 4 === 0 && año % 100 !== 0)|| año % 400 === 0)
{
    console.log("Es bisiesto");
}
else
{
    console.log("No Es bisiesto");
}










/*

Ejercicio 4: Determinar el mayor de tres números

Escribe un programa que tome tres números y determine cuál es el mayor de ellos.
*/

let f = 40
let p = 51 
let q = 26

if((f>p)&&(f>q)){
    console.log("F ES EL MAYOR")
} else if((p>f) && (p>q)){
    console.log("P ES EL MAYOR")
} else{
    console.log("Q ES EL MAYOR")
} 

/*

let x = 83
let y = 35
let z = 2

if((x>y)&&(x>z)){
console.log("x es el numero mayor")
}   
    else if((y>x)&&(y>z)){
    console.log("y es el numero mayor")
}   else{
    console.log("z es el numero mayor")
}
*/

/*

Ejercicio 5: Calculadora de índice de masa corporal (IMC)

Escribe un programa que calcule el índice de masa corporal (IMC) de una persona. 
El IMC se calcula como el peso en kilogramos dividido por el cuadrado de la altura en metros. 
Luego, el programa debería mostrar un mensaje indicando si la persona está en peso bajo, peso normal, 
sobrepeso o obesidad.

*/ 
let kilogramos = 78
let altura = 1.81
let masaCorporal 

masaCorporal = kilogramos / (altura * altura)
console.log("tu masa corporal es de " + masaCorporal.toFixed(2))

if (masaCorporal < 16.9){
    console.log("muy bajo")
} else if(masaCorporal <= 18.4){
    console.log("bajo peso")
} else if(masaCorporal<= 24.9){
    console.log("normal")
} else if(masaCorporal<= 34.9){
    console.log("sobrepeso")
} else if(masaCorporal<= 39.9){
    console.log("obesidad")
} else if(masaCorporal<=40){
    console.log("obesidad marcada")
} else{
    console.log("obesidad morbida")
} 


/*


let peso = 78  // kg
let altura = 1.81  // met
let imc = peso/(altura*altura)   //  kg / met^2

console.log("tu índice de masa muscular es " + imc.toFixed(1))

if(imc<18.5){
    console.log("inferior al normal")
} else if(imc<24.9){
    console.log("normal")
} else if(imc<29.9){
    console.log("superior al normal")
} else{
    console.log("obesidad")
}

*/


