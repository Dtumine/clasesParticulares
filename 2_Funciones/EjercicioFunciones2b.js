/*

Desarrollar un programa que tenga una función llamada principal() 
que permita el ingreso de los siguientes datos (variables) relacionados con un automóvil:

Marca del automóvil. Ejemplo: "Toyota"
Modelo del automóvil. Ejemplo: "Corolla"
Año de fabricación. Ejemplo: "2020"
Precio de compra. Ejemplo: "25000000"
Kilometraje actual. Ejemplo: "35000"
Descuento por antigüedad. Ejemplo: "0.10" (10% de descuento por cada año)
Impuestos sobre la compra. Ejemplo: "0.05" (5% de impuestos)
Luego, implementar las siguientes funciones para permitir los siguientes cálculos:

calcularDescuentoAntiguedad():
descuentoAntiguedad = precioCompra * (descuentoPorAntiguedad * (añoActual - añoFabricacion));

calcularImpuestos():
impuestos = precioCompra * impuestosSobreCompra;

calcularPrecioVenta():
precioVenta = precioCompra - descuentoAntiguedad + impuestos;

mostrarInformacion():
Debe mostrar la siguiente información en un mensaje de alerta:

alert("Información del automóvil:\n" +
"Marca: " + marcaAutomovil + "\n" +
"Modelo: " + modeloAutomovil + "\n" +
"Año de Fabricación: " + añoFabricacion + "\n" +
"Precio de Compra: $" + precioCompra + "\n" +
"Kilometraje Actual: " + kilometrajeActual + "\n\n" +
"Descuento por Antigüedad: $" + descuentoAntiguedad.toFixed(2) + "\n" +
"Impuestos sobre la Compra: $" + impuestos.toFixed(2) + "\n\n" +
"Precio de Venta: $" + precioVenta.toFixed(2)
);

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




*/

/*
 
function pedirNombre(){ 
    return prompt("ingrese su nombre")
    }

 function pedirSalarioBase(){
    return Number(prompt("ingrese salario base"))
}

 function pedirHorasExtras(){
    return Number(prompt("ingrese horas extras"))
}

 function pedirBonificaciones(){
    return Number(prompt("ingrese bonificaciones"))
    
 }

 function calcularSalarioTotal(salarioBase,horasExtras,bonificaciones){
 
    return salarioBase + (horasExtras * 1.5) + bonificaciones;
     
    }

 function calcularDeducciones(salarioTotal,impuestos,seguroSocial){
        return salarioTotal * (impuestos + seguroSocial)
    }
       
  function calcularSalarioNeto(salarioTotal,deducciones){
        return salarioTotal - deducciones 
    }
    
  function mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones,salarioNeto){
    alert("Información del empleado:\n" +
    "Nombre: " + nombre + "\n" +
    "Salario Base: $" + salarioBase + "\n" +
    "Horas Extras: " + horasExtras + "\n" +
    "Bonificaciones: $" + bonificaciones + "\n\n" +
    "Salario Total: $" + salarioTotal.toFixed(2) + "\n" +
    "Deducciones: $" + deducciones.toFixed(2) + "\n" +
    "Salario Neto: $" + salarioNeto.toFixed(2)) } 



function programa(){ 

let impuestos = 0.20
let seguroSocial = 0.10


 do { 
   let nombre = pedirNombre()
   let salarioBase = pedirSalarioBase()
   let horasExtras = pedirHorasExtras()
    let bonificaciones = pedirBonificaciones()
    let salarioTotal = calcularSalarioTotal(salarioBase,horasExtras,bonificaciones)
    let deducciones = calcularDeducciones(salarioTotal,impuestos,seguroSocial)
    let salarioNeto = calcularSalarioNeto(salarioTotal,deducciones)   
    
    mostrarInformacion(nombre,salarioBase,horasExtras,bonificaciones,salarioTotal,deducciones,salarioNeto) 

        continuar = prompt("desea continuar?   y/n")
} while (continuar == "y")
} 

programa()

*/ 

/*

Desarrollar un programa que tenga una función llamada principal() 
que permita el ingreso de los siguientes datos (variables) relacionados con un automóvil:

Marca del automóvil. Ejemplo: "Toyota"
Modelo del automóvil. Ejemplo: "Corolla"
Año de fabricación. Ejemplo: "2020"
Precio de compra. Ejemplo: "25000000"
Kilometraje actual. Ejemplo: "35000"
Descuento por antigüedad. Ejemplo: "0.10" (10% de descuento por cada año)
Impuestos sobre la compra. Ejemplo: "0.05" (5% de impuestos)
Luego, implementar las siguientes funciones para permitir los siguientes cálculos:

calcularDescuentoAntiguedad():
descuentoAntiguedad = precioCompra * (descuentoPorAntiguedad * (añoActual - añoFabricacion));

calcularImpuestos():
impuestos = precioCompra * impuestosSobreCompra;

calcularPrecioVenta():
precioVenta = precioCompra - descuentoAntiguedad + impuestos;

mostrarInformacion():
Debe mostrar la siguiente información en un mensaje de alerta:

alert("Información del automóvil:\n" +
"Marca: " + marcaAutomovil + "\n" +
"Modelo: " + modeloAutomovil + "\n" +
"Año de Fabricación: " + añoFabricacion + "\n" +
"Precio de Compra: $" + precioCompra + "\n" +
"Kilometraje Actual: " + kilometrajeActual + "\n\n" +
"Descuento por Antigüedad: $" + descuentoAntiguedad.toFixed(2) + "\n" +
"Impuestos sobre la Compra: $" + impuestos.toFixed(2) + "\n\n" +
"Precio de Venta: $" + precioVenta.toFixed(2)
);

*/ 


function solicitarMarca(){
    return prompt("ingrese la marca del auto")
}

function solicitarModelo(){
    return prompt("ingrese el model del auto")
}
function solicitarAñoFabricacion(){
    return Number(prompt("ingrese el año de fabricacion del auto"))
}
function solicitarKmActual(){
    return Number(prompt("ingrese los km actuales del auto"))
}

function solicitarPrecioCompra(){
    return Number(prompt("ingrese el precio de compra"))
}

function calcularDescuento(precioAlComprar,descuentoPorAntiguedad,añoActual,añodelAuto){
    return  precioAlComprar * (descuentoPorAntiguedad * (añoActual - añodelAuto));
}
function calcularImpuestos(precioAlComprar,impuestos){
    return  precioAlComprar * impuestos

}
function calcularPrecioFinal(precioAlComprar,descuentoTotal,impuestosTotal){
    return precioAlComprar - descuentoTotal + impuestosTotal
} 

function mostrarAlert(marcaAut,modeloAut,añodelAuto,kmDelAuto,precioAlComprar,descuentoTotal,impuestosTotal,precioFinal){
    alert("marca: " + marcaAut + "modelo: " + modeloAut + "año del auto: " + añodelAuto + "km del auto: " + kmDelAuto + "precio al comprar: "+
    precioAlComprar + "total descuentos: " + descuentoTotal.toFixed(3) + "total impuestos: " + impuestosTotal.toFixed(3) + "precio final: " + precioFinal.toFixed(3))
}


function principal(){

      const descuentoPorAntiguedad = 0.10
      const impuestos = 0.05 
      const añoActual = 2024 

     
      do {
        let marcaAut = solicitarMarca()
        let modeloAut = solicitarModelo()
        let añodelAuto = solicitarAñoFabricacion()
        let kmDelAuto = solicitarKmActual()
        let precioAlComprar = solicitarPrecioCompra()
        let descuentoTotal = calcularDescuento(precioAlComprar,descuentoPorAntiguedad,añoActual,añodelAuto)
        let impuestosTotal = calcularImpuestos(precioAlComprar,impuestos)
        let precioFinal = calcularPrecioFinal(precioAlComprar,descuentoTotal,impuestosTotal) 
        
        mostrarAlert(marcaAut,modeloAut,añodelAuto,precioAlComprar,kmDelAuto,descuentoTotal,impuestosTotal,precioFinal)
        

        continuar = prompt("desea continuar? y/n")
      } while (continuar == "y");
}

// principal()
solicitarMarca()






































/*

function mensajeBienvenida()
{
    alert("Bienvenido al sistema de calculo de Automovil")
}

function solicitarMarca()
{
    return prompt("Ingrese Marca") 
}

function solicitarModelo()
{
    return prompt("ingrese el modelo: ")
}

function solicitarAño()
{
    let anioIngreso
    do{
        anioIngreso = Number(prompt("ingrese el año de fabricacion: ")) 
        if(anioIngreso<1972 || anioIngreso>2024)
        {
            alert("Año equivocado")
        }
    }while(anioIngreso<1972 || anioIngreso>2024);
    
    return anioIngreso
}

function solicitarPrecio()
{
    return Number(prompt("ingrese el precio del automovil"))
} 

function solicitarKmActual()
{ 
  return Number(prompt("ingrese el kilometraje actual del automovil: "))
} 

function aplicarDescuentoAntiguedad(precioCompra,descuentoPorAntiguedad,añoActual,añoFabricacion)
{
    return  precioCompra * (descuentoPorAntiguedad * (añoActual - añoFabricacion))
} 

function aplicarImpuestos(precioCompra,impuestos)
{
    return precioCompra * impuestos
} 

function precioVenta(precioCompra,descuentoAntiguedad,impuestos)
{
    return precioCompra - descuentoAntiguedad + impuestos
}


function principal()
{
    const descuentoPorAntiguedad = 0.10
    const impuestos = 0.05
    const añoActual = 2024

    do
    {
        mensajeBienvenida()
        let marca = solicitarMarca()
        let modelo = solicitarModelo()
        let añoFabricacion = solicitarAño()
        let precioCompra = solicitarPrecio() 
        let kmActual = solicitarKmActual()
        let descuentoAntiguedad = aplicarDescuentoAntiguedad(precioCompra,descuentoPorAntiguedad,añoActual,añoFabricacion)
        let impuestosAutomovil = aplicarImpuestos(precioCompra,impuestos)
        let precioDeVenta = precioVenta(precioCompra,descuentoAntiguedad,impuestosAutomovil)


        mostrarInformacion(marca,modelo,añoFabricacion,precioCompra,kmActual,descuentoAntiguedad,
            impuestosAutomovil,precioDeVenta)
        continuar = prompt("desea continuar?....y/n")
    } while (continuar ==="y" || continuar === "Y") ;
}



principal()


*/ 




