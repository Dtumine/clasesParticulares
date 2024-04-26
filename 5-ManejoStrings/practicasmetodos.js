let string = "Hola, Mundo"

console.log(string.length) 
if(string.length<10){
    console.log("los caracteres deben ser mayores que 10")
} 
 
console.log(string.charAt(2))

let string2 = "Buenas Tardes"

let concat = string.concat(string2)
console.log(concat)
console.log(concat.toUpperCase()) 

let info = "temperatura = 30"
let infoB = info.replace("30", "28")
let array = string.split(",")
console.log(array)

let datoSucio = "     hola mundo, buenas tardes     " 
let datoLimpio = datoSucio.trim()
console.log(concat) 

console.log(info.repeat(8))
let frase = "las feroces antenas"
let frase2 = frase.padEnd(50," pueden")
console.log(frase2)






