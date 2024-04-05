/*
Ejercicio: Creación de un sistema de gestión de cuenta bancaria

Escriba un programa en JavaScript que simule un sistema de gestión de cuenta bancaria.
El programa debe incluir las siguientes funciones:

Una función llamada generarSaludo que tome dos parámetros, nombre y apellido,
y muestre un mensaje de saludo personalizado junto con la bienvenida al sistema.

Una función llamada mostrarMenu que muestre un menú de opciones que incluya:

Opción 1: Depositar en Caja
Opción 2: Extraer de Caja
Opción 3: Ver Saldo

Una función llamada deposito que permita al usuario ingresar la cantidad de dinero
que desea depositar en su cuenta.

Una función llamada extraccion que permita al usuario ingresar
la cantidad de dinero que desea extraer de su cuenta.

El programa debe solicitar al usuario que ingrese su nombre, apellido, edad y saldo inicial.
Luego, debe saludar al usuario utilizando la función generarSaludo y mostrar el menú de opciones
utilizando la función mostrarMenu. 
Después, el programa debe permitir al usuario realizar operaciones como:
depositar dinero, extraer dinero o verificar su saldo, según la opción seleccionada en el menú.
El saldo debe actualizarse después de cada transacción.

El programa debe ejecutarse en un bucle hasta que el usuario decida salir.
Después de cada transacción, el programa debe preguntar al usuario si desea realizar otra acción.
Una vez que el usuario decide salir, el programa debe mostrar un mensaje de despedida.
*/

// --------- CON VARIABLES GLOBALES -----------


/*

function generarSaludo()
{
    alert("Hola "+ nombre + " " + apellido+"! \n BIENVENIDO AL SISTEMA")
}

function mostrarMenu()
{
    alert("MENU DE OPCIONES \n1. Depositar en Caja \n 2. Extrar de Caja \n 3. Ver Saldo")
    
}

function deposito()
{
    let dineroDepositado = Number(prompt("Ingrese lo que desea depositar"))
    dinero += dineroDepositado
    return dinero

} 

function extraccion()
{
   let dineroextraido = Number(prompt("Ingrese cuanto dinero desea extraer"))
   dinero -= dineroextraido
   return dinero 
}



let nombre = prompt("Ingrese su nombre")

let apellido = prompt("Ingrese su apellido")

let edad = Number(prompt("Ingrese su edad"))

let dinero = Number(prompt("Ingrese su saldo inicial"))

let repetir 

generarSaludo()

do
{
  mostrarMenu();
  let opcion = Number(prompt("Ingrese opcion"))
  switch(opcion)
  {
    case 1:
        deposito()
        break;
    case 2:  
        extraccion()
        break;
    case 3:
        alert("Su saldo es: "+ dinero)
        break;
  }
 repetir= prompt("Desea generar otra accion? (y/n)")
} while(repetir === "y");

alert("FIN DE PROGRMA")

*/



// ---------- SIN USAR VARIABLES GLOBALES ---------------


/*
function generarSaludo(nombre, apellido)
{
    alert("Hola "+ nombre + " " + apellido+"! \n BIENVENIDO AL SISTEMA")
}

function mostrarMenu()
{
    alert("MENU DE OPCIONES \n1. Depositar en Caja \n 2. Extrar de Caja \n 3. Ver Saldo")
    
}

function deposito(dinero) // 74000
{
    let dineroDepositado = Number(prompt("Ingrese lo que desea depositar")) // 26000
    dinero += dineroDepositado // 100000
    return dinero // 100000

} 

function extraccion(dinero)
{
   let dineroextraido = Number(prompt("Ingrese cuanto dinero desea extraer"))
   dinero -= dineroextraido
   return dinero 
}


function programaPrincipal()
{

let nombre = prompt("Ingrese su nombre")

let apellido = prompt("Ingrese su apellido")

let edad = Number(prompt("Ingrese su edad"))

let dinero = Number(prompt("Ingrese su saldo inicial"))

let repetir 

generarSaludo(nombre, apellido)

do
{
  mostrarMenu();
  let opcion = Number(prompt("Ingrese opcion"))
  switch(opcion)
  {
    case 1:
        dinero = deposito(dinero) // 74000
        break;
    case 2:  
        dinero = extraccion(dinero)
        break;
    case 3:
        alert("Su saldo es: "+ dinero)
        break;
  }
 repetir= prompt("Desea generar otra accion? (y/n)")
} while(repetir === "y");

alert("FIN DE PROGRMA")

}


programaPrincipal()




*/
























/*
A la velocidad que ya se encuentra constante, le sumara la velocidad que el usuario requiera. 
Ej: Si la velocidad es de 60 y se acelera 35 la nueva velocidad es de 95.
*/



/*

function mostrarMenu()
{
    alert("MENU DE OPCIONES \n1. Acelerar \n2. Desacelerar")
    
}
function acelerar(velocidad)
{
    let sumaVelocidad = Number(prompt("Ingrese la cantidad acelerada: "))
    velocidad += sumaVelocidad
    return velocidad
}


function desacelerar(velocidad){
    let restaVelocidad =  Number(prompt("ingrese la cantidad desacelerada: "))
    velocidad -= restaVelocidad
    return velocidad
}



function encenderMotor()
{
let velocidad = 0;

do
{
    mostrarMenu();
    let opcion = Number(prompt("Ingrese opcion"))
  switch(opcion)
  {
    case 1:
       velocidad = acelerar(velocidad)
        break;
    case 2:
       velocidad = desacelerar(velocidad)
        break;    
  }
  alert("La velocidad es: " + velocidad)
    repetir = prompt("Desea generar otra accion? (y/n)")
}while(repetir === "y");

}


encenderMotor()

*/




/*
Una funcion principal que se llama calculos triangulo. 
Se le solictara al usuario ingresar la base y la altura. 
luego otra funcion se encarga de calcular el area y retornara el valor de ese area y el resultado se mostrara en la funcion
prinpcipañ "calculosTriangulo"
Agregar la funcionalidad de calcular la hipotenusa
*/


/*

function calcularHipotenusa(cateto1, cateto2)
{
    let hipotenusa = Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2))
    return hipotenusa
}

function calculoArea(base, altura){
    let area = ((base * altura) / 2)
    return area
} 

function calcularPerimetro(base,altura,hipotenusa){
    let perimetro = (base + altura + hipotenusa)
    return perimetro
}


function mostrarResultado(resultado1, resultado2, resultado3){
     alert("el area es de " + resultado1 +" \n La hipotenusa es de "+ resultado2 + "\n El perimetro es de " + resultado3)
     
}


function calculosTriangulo(){

let base = Number(prompt("ingrese la base"))
let altura = Number(prompt("ingrese la altura"))

 let resultado1 = calculoArea(base,altura)
 let resultado2 = calcularHipotenusa(base,altura)
 let resultado3 = calcularPerimetro(base,altura,resultado2)
 mostrarResultado(resultado1,resultado2,resultado3)

} 


calculosTriangulo()

*/