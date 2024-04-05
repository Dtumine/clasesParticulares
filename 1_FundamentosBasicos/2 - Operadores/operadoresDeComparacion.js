let x = 5   // number
let y = "5" // string
let z = 4

// Igualdad debil ==
let resultado = (x==y) // la igualdad observa el valor
console.log(resultado)

// Igualdad estricta ===
let resultado2 = (x===y) // false  , la igualdad observa el valor y el tipo
console.log(resultado2)

// Distinto debil
let resultado3 = (y!=z)
console.log(resultado3)  // true, porque son distintos en valor
// Distinto estricto
let resultado4 = (y!=x) // true, porque son en tipo, distintos. 
console.log(resultado4)   

let resultado5 = (x>z)
console.log(resultado5)

let resultado6 = (y>z) // true, porque compara string con number
console.log(resultado6)

let resultado7 = (x>=y) // true

let resultadoComplejo = (x>=y) == (x<10)  // true dado que true == true


let nombre1 = "damian" // D = 4
let nombre2 = "tomas"  // T = 21
let marca1 = "abeder"
let marca2 = "abedel"

let resutladoNombres = (nombre1<nombre2)  // true damian, es mas chico que tomas
console.log(resutladoNombres)


let resultadoMarcas = (marca1>marca2) // 
console.log(resultadoMarcas)






