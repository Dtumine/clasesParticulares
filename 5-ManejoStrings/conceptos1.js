let frase = "Hola, mundo!"

console.log(frase.length)  

console.log(frase.charAt(0))


let palabra1 = "rino"
let palabra2 = "ceronte"
let palabraConcatenada = palabra1.concat(palabra2)
console.log(palabraConcatenada)

console.log(frase.indexOf("mundo")) // devuelve el 6 

console.log(frase.indexOf("ola"))// devuelve el 1

console.log(frase.indexOf("world")) // devuelve el -1 (siempre que no encuentra devuelve -1)

let datosConcatenados = "nombre:damian,tel:1156545656,dom:bsaslaplata"
let ruta = "c:/user/damian/desktop/carpeta/java"

console.log(datosConcatenados.indexOf("tel"))

let telefonoDato = datosConcatenados.substring(14,28)
console.log(telefonoDato) // corta la cantidad de caracteres y conforma un nuevo string

console.log(datosConcatenados.slice(-15))

let tipoEmpleado = "Contador"

console.log(tipoEmpleado.toLowerCase())
console.log(tipoEmpleado.toUpperCase())


let informacion = "Temperatura = 30°C"
let informacion_v = informacion.replace("30°C", "25°C")
console.log(informacion_v)

let arrayDatos = ruta.split("/") // adentro del split es el caracter separador
console.log(arrayDatos)
console.log(arrayDatos[2])

let datoSucio = "         informacion importante          "
let datoLimpio = datoSucio.trim()
console.log(datoLimpio)


console.log(datosConcatenados.startsWith("nombre"))
console.log(datosConcatenados.endsWith("laplata"))

console.log(informacion.repeat(5))

let telefono = "11156487989"
let telefonoRellenar = telefono.padStart(20,"-")
let telefonoRellenar2 = telefono.padEnd(20," ")
console.log(telefonoRellenar)
console.log(telefonoRellenar2)



