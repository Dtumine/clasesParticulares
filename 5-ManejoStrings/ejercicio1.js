

let telefono = "1154654654"

// la salida = +(54) 9 11-5465-4654  

let parte1 = telefono.padStart(18,"+(54) 9 ")
console.log(parte1)
let parte2 = parte1.substring(0,10)
console.log(parte2)
let parte3 = parte2.padEnd(11,"-")
console.log(parte3)
let parte4 = telefono.substring(2,6)
console.log(parte4)
let parte5 = parte4.padEnd(5,"-")
console.log(parte5)
let parte6 = parte3.concat(parte5)
console.log(parte6)
let parte7 = telefono.substring(6,10)
console.log(parte7)
let telefonoCompleto = parte6.concat(parte7)
console.log(telefonoCompleto)
 









