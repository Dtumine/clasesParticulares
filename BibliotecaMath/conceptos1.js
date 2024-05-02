let numNegativo = -5.5;
let num = 6.51;

let valorAbsoluto = Math.abs(numNegativo)
console.log(valorAbsoluto)


// Redondeo hacia arriba
let ceilNumero = Math.ceil(num);
console.log("Redondeo hacia arriba:", ceilNumero);


// Redondeo hacia abajo
let floorNumero = Math.floor(num);
console.log("Redondeo hacia abajo:", floorNumero);


// Redondeo al entero más cercano
let roundNumero = Math.round(num);
console.log("Redondeo al entero más cercano:", roundNumero)


// Número máximo
let maxNumero = Math.max(10, 20, 30);
console.log("Número máximo:", maxNumero);

// Número mínimo
let minNumero = Math.min(10, 20, 30);
console.log("Número mínimo:", minNumero);


// Potencia
let potencia = Math.pow(2, 3); // 2 * 2 * 2 = (2^3)
console.log("Potencia:", potencia);


// Raíz cuadrada
let raizCuadrada = Math.sqrt(25);
console.log("Raíz cuadrada:", raizCuadrada);

// Número aleatorio entre 0 y 1
let numeroAleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", numeroAleatorio);


// Número aleatorio entre 10 y 100
let numeroEntre0Y100 = Math.random() * (90) + 10;
console.log("Número aleatorio entre 0 y 100:", Math.round(numeroEntre0Y100))


let constantePI = Math.PI;
console.log(constantePI) 

// Generar un número aleatorio dentro de un rango específico
const min = 10;
const max = 20;
const numeroAleatorioRango = Math.random() * (max - min) + min;
console.log("Número aleatorio entre 10 y 20:", numeroAleatorioRango);