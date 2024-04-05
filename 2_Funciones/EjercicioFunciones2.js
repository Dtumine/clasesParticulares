/*
Ejercicio: Sistema de Gestión de Pedidos en una Cafetería Virtual

Desarrolle un programa en JavaScript que simule un sistema de gestión de pedidos en una cafetería virtual.
El programa debe incluir las siguientes funciones:

Una función llamada saludarCliente que tome dos parámetros, nombre y apellido, y muestre un mensaje de bienvenida
personalizado junto con un saludo.

Una función llamada mostrarMenu que presente un menú de opciones para que el cliente pueda realizar su pedido. 
Este menú debe incluir una variedad de bebidas y alimentos disponibles en la cafetería.

Funciones específicas para cada opción del menú, por ejemplo:

Una función llamada hacerPedidoBebida que permita al cliente seleccionar y realizar un pedido de bebidas.
Una función llamada hacerPedidoComida que permita al cliente seleccionar y realizar un pedido de alimentos.
Otras funciones similares para opciones adicionales del menú.
El programa debe comenzar solicitando al cliente que ingrese su nombre y apellido.
 Luego, debe saludar al cliente utilizando la función saludarCliente y mostrar el menú de opciones utilizando 
 la función mostrarMenu. Posteriormente, el cliente podrá seleccionar y realizar pedidos según sus preferencias.

Después de cada pedido, el programa debe mostrar un resumen del pedido y ofrecer al cliente
la posibilidad de agregar más artículos o finalizar el pedido. 
El total del pedido debe calcularse y actualizarse después de cada adición.

El programa debe ejecutarse en un bucle hasta que el cliente decida finalizar el pedido.
Una vez que el cliente haya terminado de hacer sus pedidos, 
el programa debe mostrar un mensaje de confirmación y agradecimiento.

Bebidas: 
Café: $2.50
Té: $1.80
Jugo de naranja: $3.00

Comidas: 
Sándwich de jamón y queso: $5.50
Ensalada César: $4.75
Croissant de chocolate: $3.25
*/

/*

function pedirBebida(dinero)  // 100
{
    alert("Bebidas: \n1. Cafe \n2.Te \n3.Jugo")
    let costoCafe = 2.5;
    let costoTe = 1.8;
    let costoJugo = 3.0;
    let opcionBebidas = Number(prompt("Ingrese la bebida: "))
    switch(opcionBebidas)
    {
        case 1:
            let cantidadCafe =  Number(prompt("Ingrese la cantidad: ")) //
            let costoFinalCafe = cantidadCafe * costoCafe;
            dinero -= costoFinalCafe;
        break;
        case 2:
            let cantidadTe =  Number(prompt("Ingrese la cantidad: "))
            let costoFinalTe = cantidadTe * costoTe;
            dinero -= costoFinalTe;
        break;
    }
    return dinero;

}

*/





/*
1 - Tema: Calculadora de Descuentos


Escribe una función llamada mostrarDescuento que tome 
un parámetro descuento. Dentro de la función,
muestra un mensaje de alerta que incluya 
el texto "¡Tienes un descuento del 
" seguido del valor de descuento
y la palabra " % de descuento!" 
Luego, solicita al usuario que ingrese el porcentaje de descuento que posee
y almacena este valor en una variable llamada porcentajeDescuento. 
Finalmente, llama a la función mostrarDescuento pasando porcentajeDescuento como argumento.

Entrada: Ingrese el porcentaje de descuento: 
Ejemplo: 20
Salida: ¡Tienes un descuento del 20 % de descuento!

*/ 

/*

let descuento

function mostrarDescuento(a){
    alert("tienes un descuento del " + a)
} 

do { descuento = prompt("ingrese su descuento") 
     mostrarDescuento(descuento)
     
     continuidad == prompt("desea continuar?...y/n")
} while (continuidad == "y");

*/






/*
function mostrarDescuento(descuento){
    alert("tienes un descuento del % " + descuento) 
}

do {  porcentajeDeDescuento = Number(prompt("INGRESE EL DESCUENTO QUE POSEE"))
    mostrarDescuento(porcentajeDeDescuento);
    continuidad=prompt("desea continuar?...y/n")
} while (continuidad=="y");

*/




/*
2- Tema: Gestión de Reservas en un Hotel

Escribe una función llamada mostrarDetallesReserva que 
tome dos parámetros: nombreCliente y tipoHabitacion. 
Dentro de la función, muestra dos mensajes de alerta.
El primero incluirá el texto "¡Bienvenido, " seguido del valor de nombreCliente y la palabra "!" 
El segundo mensaje mostrará "Ha reservado una habitación de tipo " seguido del valor de tipoHabitacion. 
Luego, solicita al usuario que ingrese su nombre y tipo de habitación deseada, 
almacenando estos valores en variables llamadas nombre y tipo, respectivamente. 
Finalmente, llama a la función mostrarDetallesReserva pasando nombre como el primer 
argumento y tipo como el segundo.

Entrada: Ingrese el nombre: 
Ejemplo: Juan
Entrada: Ingrese el tipo: 
Ejemplo: A
Salida: ¡Bienvenido, Juan!
 Ha reservado una habitación de tipo A

 */


 /*

function mostrarDetallesReserva(nombreCliente, tipoHabitacion){
    alert("Bienvenido " + nombreCliente + " !")
    alert("ha reservado una habitacion de tipo " + tipoHabitacion)
}

do {     nombre = prompt("INGRESE SU NOMBRE")
         tipo = prompt("INGRESE EL TIPO DE HABITACION DESEADA")
         mostrarDetallesReserva(nombre,tipo)
         continuidad=prompt("desea continuar?...y/n")    
} while (continuidad=="y");
alert("FIN DE LA RESERVA")

*/




/*


/*

3 - Tema: Registro de Actividades en un Gimnasio

Imagina que estás desarrollando un sistema de registro para un gimnasio. Escribe dos funciones:
La primera función se llama registrarEntrada, que toma un parámetro nombreCliente. 
Dentro de esta función, muestra un mensaje de alerta que incluya el texto
"¡Bienvenido al gimnasio, " seguido del valor de nombreCliente y la palabra "!"
La segunda función se llama registrarActividad, que toma un parámetro actividadCliente.
 Dentro de esta función, muestra un mensaje de alerta que incluya el texto
"¡La actividad de hoy es " seguido del valor de actividadCliente y la palabra "!"
Luego, solicita al usuario que ingrese su nombre y la actividad que realizará en el gimnasio, 
almacenando estos valores en las variables nombre y actividad, respectivamente. 
Finalmente, llama a ambas funciones registrarEntrada y registrarActividad,
pasando nombre como argumento para la primera y actividad como argumento para la segunda.

*/

/*

function registrarEntrada(nombreCliente){
        alert("Bienvenido al gimnasio " + nombreCliente + " !")
}

function registrarActividad(actividadCliente){
    alert("la actividad de hoy es " + actividadCliente)
}

do { let nombre =prompt("ingrese su nombre")
     let actividad = prompt("ingrese la actividad que va a realizar")
     registrarEntrada(nombre);
     registrarActividad(actividad);

    continuidad=prompt("desea continuar?...y/n")
} while (continuidad=="y");
alert("GRACIAS POR REGISTRARSE")

*/


/*

4 - Tema: Calculadora Astronómica

Escribe una función llamada calcularDistancia que tome dos parámetros: 
distancia1 y distancia2, que representan las distancias entre dos cuerpos celestes en unidades astronómicas.
Dentro de la función, realiza una operación matemática entre distancia1 y distancia2, 
que podría representar la diferencia o la suma de distancias, dependiendo de la situación astronómica.
Luego, solicita al usuario que ingrese dos distancias en unidades astronómicas 
y almacena estos valores en las variables distancia1 y distancia2. 
Finalmente, llama a la función calcularDistancia pasando distancia1 como 
el primer argumento y distancia2 como el segundo, y muestra el resultado.

Ejemplo: 
Entrada estrella 1: 40 años luz
Entrada estrella 2: 12 años luz
Distancia entre ellas: 28 años luz

*/


/*
function calcularDistancia(distancia1,distancia2){
    let distancia =  distancia1 - distancia2;
    if(distancia >=0)
    {
        return distancia;
    }
    else
    {
        return distancia * (-1);
    }
 
}

do { 
    let distancia1 = Number(prompt("ingrese la distancia 1"))
    let distancia2 = Number(prompt("ingrese la distancia 2"))
    
    let resultado = calcularDistancia(distancia1,distancia2)
    alert("Las estrellas se encuentran a " + resultado + " años luz de distancia")
    
    continuidad=prompt("desea continuar?....y/n")
} while (continuidad=="y");
alert("FIN DEL PROGRAMA");


*/


/*

5 Tema: Informacion Empleado
Desarrollar un programa que tenga una función calcularInformacionEmpleado()
que permita el ingreso de los siguientes datos (variables):

nombre. Ej: “Juan”
salarioBase Ej: “450000”
horasExtras Ej: “10”
bonificaciones Ej: “60000”
impuestos: Ej: 0.20 (20% de impuestos)
seguroSocial Ej 0.10 (10% de seguro social)

Luego realizar estas funciones para permitir los siguientes calculos:


calcularSalarioTotal():
 salarioTotal = salarioBase + (horasExtras * 1.5) + bonificaciones;

calcularDeducciones():
 deducciones = salarioTotal * (impuestos + seguroSocial);

calcularSalarioNeto():
 salarioNeto= salarioTotal - Deducciones

mostrarInformacion()
Debe mostrar este alert:

*/

/*

let impuestos = 0.20
let seguroSocial = 0.10
let nombre
let salarioBase
let horasExtras
let bonificaciones
let salarioTotal
let salarioNeto
let deducciones


function calcularInformacionEmpleado(){
nombre = prompt("ingrese su nombre")
salarioBase = Number(prompt("ingrese su salario base"))
horasExtras = Number(prompt("ingrese el total de horas extras"))
bonificaciones = Number(prompt("ingrese sus bonificaciones")) 
}

function calcularSalarioTotal(){
 
salarioTotal = salarioBase + (horasExtras * 1.5) + bonificaciones;

}

function calcularDeducciones(){
 deducciones = salarioTotal * (impuestos + seguroSocial)

}

function calcularSalarioNeto(){
 salarioNeto= salarioTotal - deducciones

}

function mostrarInformacion()
{    
    alert("Información del empleado:\n" +
    "Nombre: " + nombre + "\n" +
    "Salario Base: $" + salarioBase + "\n" +
    "Horas Extras: " + horasExtras + "\n" +
    "Bonificaciones: $" + bonificaciones + "\n\n" +
    "Salario Total: $" + salarioTotal.toFixed(2) + "\n" +
    "Deducciones: $" + deducciones.toFixed(2) + "\n" +
    "Salario Neto: $" + salarioNeto.toFixed(2)
    )
}


do {  
    calcularInformacionEmpleado()
    calcularSalarioTotal() 
    calcularDeducciones()
    calcularSalarioNeto()
    mostrarInformacion()

    continuar = prompt("desea continuar?....y/n")
} while (continuar =="y");


*/



/*

function pedirNombre()
{
    return prompt("ingrese su nombre")
}

function pedirSalarioBase()
{
    return Number(prompt("ingrese su salario base"))
}
function pedirHorasExtras(horasExtras)
{
    horasExtras = Number(prompt("ingrese el total de horas extras"))
    return horasExtras
}
function pedirBonificaciones(bonificaciones)
{
    bonificaciones = Number(prompt("ingrese sus bonificaciones")) 
    return bonificaciones
}


function calcularSalarioTotal(salarioTotal,salarioBase,horasExtras,bonificaciones){
 
salarioTotal = salarioBase + (horasExtras * 1.5) + bonificaciones;
return salarioTotal

}

function calcularDeducciones(salarioTotal,impuestos,seguroSocial){
 deducciones = salarioTotal * (impuestos + seguroSocial)
 return deducciones

}

function calcularSalarioNeto(salarioTotal,deducciones){
 salarioNeto= salarioTotal - deducciones
 return salarioNeto

}

function mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones,salarioNeto)
{    
    alert("Información del empleado:\n" +
    "Nombre: " + nombre + "\n" +
    "Salario Base: $" + salarioBase + "\n" +
    "Horas Extras: " + horasExtras + "\n" +
    "Bonificaciones: $" + bonificaciones + "\n\n" +
    "Salario Total: $" + salarioTotal.toFixed(2) + "\n" +
    "Deducciones: $" + deducciones.toFixed(2) + "\n" +
    "Salario Neto: $" + salarioNeto.toFixed(2)
    )
}

/*
function programa()
{
 
    const impuestos = 0.20
    const seguroSocial = 0.10
    let nombre
    let salarioBase
    let horasExtras
    let bonificaciones
    let salarioTotal
    let salarioNeto
    let deducciones
    
    do {  
        nombre = pedirNombre(nombre);
        salarioBase = pedirSalarioBase(salarioBase);
        horasExtras = pedirHorasExtras(horasExtras);
        bonificaciones = pedirBonificaciones(bonificaciones);
        salarioTotal = calcularSalarioTotal(salarioTotal,salarioBase,horasExtras,bonificaciones);
        deducciones = calcularDeducciones(salarioTotal,impuestos,seguroSocial);
        salarioNeto = calcularSalarioNeto(salarioTotal,deducciones);

        mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones,salarioNeto)

        continuar = prompt("desea continuar?....y/n")
    } while (continuar =="y");
}

*/

/*
function programa()
{
 
    const impuestos = 0.20
    const seguroSocial = 0.10
    let horasExtras
    let bonificaciones
    let salarioTotal
    let salarioNeto
    let deducciones
    
    do {  
        let nombre = pedirNombre();
        let salarioBase = pedirSalarioBase();
        horasExtras = pedirHorasExtras(horasExtras);
        bonificaciones = pedirBonificaciones(bonificaciones);
        salarioTotal = calcularSalarioTotal(salarioTotal,salarioBase,horasExtras,bonificaciones);
        deducciones = calcularDeducciones(salarioTotal,impuestos,seguroSocial);
        salarioNeto = calcularSalarioNeto(salarioTotal,deducciones);

        mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones,salarioNeto)

        continuar = prompt("desea continuar?....y/n")
    } while (continuar =="y");
}
programa()


*/

/*
5 Tema: Informacion Empleado
Desarrollar un programa que tenga una función calcularInformacionEmpleado()
que permita el ingreso de los siguientes datos (variables):

nombre. Ej: “Juan”
salarioBase Ej: “450000”
horasExtras Ej: “10”
bonificaciones Ej: “60000”
impuestos: Ej: 0.20 (20% de impuestos)
seguroSocial Ej 0.10 (10% de seguro social)

Luego realizar estas funciones para permitir los siguientes calculos:


calcularSalarioTotal():
 salarioTotal = salarioBase + (horasExtras * 1.5) + bonificaciones;

calcularDeducciones():
 deducciones = salarioTotal * (impuestos + seguroSocial);

calcularSalarioNeto():
 salarioNeto= salarioTotal - Deducciones

mostrarInformacion()
Debe mostrar este alert:

*/ 






function pedirNombre(){
    return prompt("ingrese su nombre")
} 

function salarioBase(){
    return prompt("ingrese su salario base")
} 

function horasExtras(){
    return prompt("ingrese sus horas extras")
} 

function bonificaciones(){
    return prompt("ingrese sus bonificaciones")
} 


function calcularSalarioTotal(){
 salarioTotal = salarioBase + (horasExtras * 1.5) + bonificaciones
} 

function calcularDeducciones(){
 deducciones = salarioTotal * (impuestos + seguroSocial)

}

function calcularSalarioNeto(){
 salarioNeto= salarioTotal - Deducciones
} 

function mostrarInformacion(){
    alert("hola " + nombre + "su salario base es de " + salarioBase + "sus horas extras son " +
    horasExtras + "sus bonificaciones son " + bonificaciones + "su salario total es " + 
    salarioTotal + "sus deducciones son " + deducciones)
}


function programa(){
       const seguroSocial = 0.10
       const impuestos = 0.20
       
     let nombre 
       let salarioBase

       let salarioTotal 
       let deducciones 

       do { 

          nombre = pedirNombre(nombre)
          salarioBase = salarioBase(salarioBase)
          horasExtras = horasExtras(horasExtras)
          bonificaciones = bonificaciones(bonificaciones)
          salarioTotal = salarioTotal(salarioBase,horasExtras,bonificaciones)
          deducciones = deducciones(salarioTotal, impuestos,seguroSocial)

          mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones)

          continuidad = prompt("desea continuar?...y/n")
       } while (continuidad == "y")
  
      }

      programa() 













