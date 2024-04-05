
/*

let respuesta;
let totalPesos;
let monedaAComprar;
let totalConversion;

do{ totalPesos=prompt("ingrese la cantidad de pesos con los que va a operar")
    if(totalPesos>=10000){   
    monedaAComprar=prompt("ingrese la moneda que desea comprar: euro/dolar/yen")

 switch (monedaAComprar) { 
    case "euro":
        totalConversion = (totalPesos*0.0011)
        break;

        case "dolar":
        totalConversion = (totalPesos*0.0012)
        break;

        case "yen":
        totalConversion = (totalPesos*0.68)
        break;
     default:
    }

} else{ alert("la cantidad de pesos minima para operar es de $10000")}

 alert("el total de su compra es de " + totalConversion.toFixed(2));
 respuesta = prompt("desea continuar?");  

} while(respuesta == "si")                  
  alert("FINAL DE LA COMPRA")


*/ 



/*

let monedaElegida;
let totalDePesos;
let opcionDeContinuidad;
let totalMonedaComprada; 

do{ 

    totalDePesos = prompt("cuantos pesos desea utilizar")
    
    if(totalDePesos>10000){
    monedaElegida = prompt("que moneda desea comprar?")

    switch (monedaElegida) {
            case "euro": 
            totalMonedaComprada = (totalDePesos*0.0011)
            
            break;

            case "dolar": 
            totalMonedaComprada = (totalDePesos*0.0012)
            
            break;
            
            case "yen": 
            totalMonedaComprada = (totalDePesos*0.68)
            
            break;
    
        default:
            
    } } else{alert("la cantidad de pesos debe ser mayor a 10000")}

    alert("EL TOTAL DE SU COMPRA EN " + monedaElegida + "es de" + totalMonedaComprada)

    opcionDeContinuidad = prompt("desea continuar? si/no") 


  } while (opcionDeContinuidad=="si") 

alert("SU COMPRA A FINALIZADO")

 

*/ 


/*

let temperaturaAConvertir;
let deseaContinuar;
let temperaturaEnCelsius;
let temperaturaEnFarenheit;
let conversionACelsius;
let conversionAFarenheit; 


do { 
    temperaturaAConvertir = prompt("qué tipo de conversion desea hacer?...A- celsius a farenheit o B-farenheit a celsius")
    switch (temperaturaAConvertir) {
    case "A": 
       
      temperaturaEnCelsius = prompt("Ingrese los grados en CELSIUS")
      conversionAFarenheit = ((temperaturaEnCelsius * 9/5) + 32)
      break;
     case "B":

      temperaturaEnFarenheit = prompt("Ingrese los grados en FARENHEIT")
      conversionACelsius = ((temperaturaEnFarenheit - 32) * 5/9)
      break;
     default:
  } 
    if(temperaturaAConvertir == "A"){
    alert("SU CONVERSION A FARENHEIT ES " + conversionAFarenheit )
  } else if(temperaturaAConvertir == "B"){
    alert("SU CONVERSION A CELSIUS ES " + conversionACelsius)
  } else{
    alert("VALOR INCORRECTOS")
  }
    deseaContinuar = prompt("desea continuar?...si/no")

} while (deseaContinuar == "si");
  alert("FIN DE LA CONVERSION")

*/



/*

2- Generador de tablas de multiplicar: 

Escribe un programa que solicite al usuario ingresar un número 
y luego genere la tabla de multiplicar de ese número del 1 al 10. 
Utiliza un bucle while para iterar sobre los números del 1 al 10
y muestra el resultado de la multiplicación en cada iteración.

*/

/*

 
let numero;
let resultado;
let multiplo=0;

numero = prompt("INGRESE EL NUMERO")

while (multiplo<=10){
  resultado = (numero*multiplo);
  console.log(numero + "X" + multiplo + "=" + resultado);
  multiplo++;

}

*/

/*
3- Calculadora de edad canina:
Desarrolla un programa que solicite al usuario 
ingresar la edad de su perro en años y luego calcule
su equivalente en años humanos, utilizando la fórmula 
comúnmente aceptada de que el primer año de vida de un 
perro equivale a 15 años humanos, el segundo año equivale
a 9 años humanos, y a partir del tercer año, 
cada año equivale a 5 años humanos. 
Utiliza estructuras condicionales para aplicar las 
conversiones adecuadas. Utiliza un bucle while para 
permitir al usuario realizar múltiples ingresos si lo desea.


 


Ejemplo 1:
Ingrese edad perro: 4
(15 + 9 + 5 + 5) = 34 

Ejemplo 2:
Ingrese edad perro: 2
(15 + 9 ) = 26


*/
/*

let edadPerro; 
let calculoDeEdad;
let continuidad;
let primerAnio = 15;
let segundoAnio = 9;
let multiplicadorAnios = 5;


do { 
   edadPerro = prompt("INGRESE LA EDAD DE SU PERRO")
   switch (edadPerro) {
    case "1":
      calculoDeEdad = (primerAnio);
      alert("LA EDAD HUMANA DE SU PERRO ES " + calculoDeEdad)
      break;
    case"2":
        calculoDeEdad = (primerAnio + segundoAnio)
        alert("LA EDAD HUMANA DE SU PERRO ES " + calculoDeEdad)
        break;  
  } 
    if(edadPerro>=3){
    calculoDeEdad = (primerAnio + segundoAnio) + (edadPerro * multiplicadorAnios)
    alert("LA EDAD HUMANA DE SU PERRO ES " + calculoDeEdad);
  }
  continuidad = prompt("DESEA CONTINUAR?...si/no")
} while (continuidad=="si");
alert("GRACIAS POR SU VISITA")



/*

4- Contador de números pares e impares:
Desarrolla un programa que solicite al usuario ingresar 
un número entero positivo y luego cuente la cantidad de números
pares e impares dentro del rango del 1 al número ingresado.
Utiliza un bucle while para iterar sobre cada número dentro del rango 
y una estructura if para determinar si es par o impar.

Ejemplo 1:
Ingrese numero: 10

Resultado:
Del 1 al 10 existen:
5 pares
5 impares


Ejemplo 2:
Ingrese numero: 17

Resultado:
Del 1 al 17 existen:
8 pares
9 impares

*/


/*

let numero;
 let contadorPares = 0;
  let contadorImpares = 0;
  let i = 1;
  

  numero = prompt("INGRESE EL NUMERO")

  while (i <= numero) {
    if (i % 2 === 0) {
      contadorPares++;
    } else {
      contadorImpares++;
    }
    i++;
  }

  console.log("total de numeros pares = " + contadorPares);
  console.log("total de numeros impares = " + contadorImpares);

*/

/*

3- Calculadora de edad canina:
Desarrolla un programa que solicite al usuario 
ingresar la edad de su perro en años y luego calcule
su equivalente en años humanos, utilizando la fórmula 
comúnmente aceptada de que el primer año de vida de un 
perro equivale a 15 años humanos, el segundo año equivale
a 9 años humanos, y a partir del tercer año, 
cada año equivale a 5 años humanos. 
Utiliza estructuras condicionales para aplicar las 
conversiones adecuadas. Utiliza un bucle while para 
permitir al usuario realizar múltiples ingresos si lo desea.

*/









