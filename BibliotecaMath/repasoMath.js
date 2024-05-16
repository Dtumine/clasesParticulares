

let arrayAleatorios = [] 

for(let i=0; i<=10; i++){
    arrayAleatorios[i] = Math.round(Math.random()*100)
} 

console.log(arrayAleatorios) 
console.log(...arrayAleatorios) 
 


let numero = -8.5 
let numeroAbsoluto = Math.abs(numero)
let numeroMaximo = Math.max(20,30,70,10,4,88,345,24)
console.log(numeroMaximo)

let potencia = Math.pow(5,4)
console.log(potencia) 

let raiz = Math.sqrt(625)
console.log(raiz)

let numeroAl = Math.random() * (5) + 20
console.log(Math.round(numeroAl)) 

 

let ruleta = Math.round(Math.random()*100) 
console.log(ruleta)
let apuesta = 0 
let conteo = 0

do {

let apuesta = parseInt(prompt("ingrese su numero")) 

if(apuesta<ruleta){
    alert("el numero ingresado es menor" + " llevas " + conteo + " intentos")
    conteo++
    
    
} else if(apuesta>ruleta){
    alert("el numero ingresado es mayor" + " llevas " + conteo + " intentos")
    conteo++

} else{
    alert("ACERTASTE")
} 
} while (apuesta!==ruleta);

console.log(ruleta)



let arrayAl = [] 

for(let i=0;i<10;i++){
    arrayAl[i] = Math.round(Math.random() * 100)
}

console.log(...arrayAl) 

for(let i=0;i<10;i++){
    console.log(Math.sqrt(arrayAl[i]))
}


























