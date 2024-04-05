// AND (&&)  OR (||)  NOT (!)
// solamente trabaja con booleanos

let operador1 = true
let operador2 = false
let operador3 = false

let resultadoAND = operador1 && operador2  // Si operador 1 "Y" operador 2 son verdaderos
console.log(resultadoAND)

let resultadoOR = operador1 || operador2 // Si operador 1 "O" operador 2 son verdaderos
console.log(resultadoOR)

let resultadoNOT = !operador2  // Invierte el valor booleano 
console.log(resultadoNOT)


let resultado1 = !(operador1 && operador3)  // !(false) = true
console.log(resultado1)

let resultado2 = !operador1 && operador3

let resultadoComplejo = !(operador2 == operador3) || (operador3 && operador1)
//                      ! (true) || (false)
//                       false || false
//                        false

//  operador2 es igual a operador3 y luego invierte su valor a false. operador3 y operador1 no son iguales a true
// por lo que devuelve false. Por ende la comparacion del OR FINAL ES FALSE || FALSE = false

let resultadoComplejo2 = !((!(operador2 == operador3) || (operador3 || operador1)) && (operador2 == false))
//                       ! (!(true) || (true) && true) 
//     La prioridad de los operadores lógicos es NOT (!) > AND (&&) > OR (||).
//                           !(false || true && true)
//                              !(false || true)
//                              !true = false

