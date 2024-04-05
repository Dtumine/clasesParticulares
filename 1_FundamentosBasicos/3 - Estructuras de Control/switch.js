
let diaDeLaSemana = 3;
let nombreDelDia;

switch (diaDeLaSemana) {
  case 1:
    nombreDelDia = "Lunes";
    break;
  case 2:
    nombreDelDia = "Martes";
    break;
  case 3:
    nombreDelDia = "Miércoles";
    break;
  case 4:
    nombreDelDia = "Jueves";
    break;
  case 5:
    nombreDelDia = "Viernes";
    break;
  case 6:
    nombreDelDia = "Sábado";
    break;
  case 7:
    nombreDelDia = "Domingo";
    break;
  default:
    nombreDelDia = "Día no válido";
}


console.log("Hoy es " + nombreDelDia);






let dia = 3;
let nombreDia;



if(dia>=1 && dia<=5)
{
    nombreDia = "Día laboral"
}
else if(dia==6 || dia==7)
{
    nombreDia = "Fin de semana"
}
else
{
    nombreDia = "Dia no valido"
}


switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    nombreDia = "Día laboral";
    break;
  case 6:
  case 7:
    nombreDia = "Fin de semana";
    break;
  default:
    nombreDia = "Día no válido";
}



console.log("Hoy es " + nombreDia);




let color = "azul";
let  mensaje;

switch (color) {
  case "rojo":
    mensaje = "El color es rojo";
    break;
  case "verde":
    mensaje = "El color es verde";
    break;
  case "azul":
    mensaje = "El color es azul";
    break;
  default:
    mensaje = "Color desconocido";
}


console.log(mensaje);


/*
Escribe un programa que tome una cantidad en pesos y una moneda de destino 
(por ejemplo, "EUR" para euros, "GBP" para libras esterlinas, "JPY" para yenes)
y realice la conversión correspondiente. Utiliza un switch para determinar la tasa de cambio
según la moneda de destino.
*/


let monedaDeCompra = prompt("ingrese la moneda a comprar") 
let pesosComprador = prompt("Ingrese la cantidad de Pesos")
let conversionMoneda;

switch (monedaDeCompra) {
  case "EURO": 
    conversionMoneda = (pesosComprador*0.0011)
    break;

    case "DOLAR":
      conversionMoneda = (pesosComprador*0.0012)
    
    break;

    case "YEN":
        conversionMoneda = (pesosComprador*0.18)
    break;

  default: 
    alert("Valor incorrecto o Conversion no disponible")
    break;
} 
alert("el total en " + monedaDeCompra + "es de " + conversionMoneda.toFixed(2))










































let pesos = 10000
let tipoConversion = "eur"
let conversion;

switch (tipoConversion) {
    case "eur":
        conversion = (pesos*0.0011)
        break;
    case "gbp":
        conversion = (pesos*0.00096)
        break;
    case "jpy": 
        conversion = (pesos*0.18)
        
        break;    

    default:
        break;
}
 console.log("la conversion en " + tipoConversion + " es de " + conversion.toFixed(2)) 



