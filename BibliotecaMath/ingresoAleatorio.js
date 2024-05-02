let numeroAleatorio = Math.round(Math.random()*100)

//console.log(numeroAleatorio
let numeroIngresado = 0
let conteo = 0
do{
    let numeroIngresado = parseInt(prompt("Ingrese el numero"))
if (numeroIngresado<numeroAleatorio)
{
    alert("El numero ingresado es menor que el numero Aleatorio, llevas "+ conteo+ " intentos")
    conteo++
}
else if(numeroIngresado>numeroAleatorio)
{
    alert("El numero ingresado es mayor que el numero Aleatorio, llevas "+ conteo+ " intentos")
    conteo++
}
else
{
    alert("ACERTASTE")
}
}while(numeroIngresado!=numeroAleatorio);


