let numero = 10

// se desea saber si el numero es, mayor , menor o igual a 10. Solamente imprimir un mensaje final (1 de los 3)





if(numero > 10){
    console.log ("el numero es mayor a 10")
}
else{

    if(numero<10)
    {
        console.log ("el numero es menor a 10")
    }
    else
    {
        console.log ("el numero es igual a 10")
    }

  
}


let x = 10;
let y = 20;


if (x > 5) {
    if (y > 15) {
        console.log("x es mayor que 5 y y es mayor que 15");
    } else {
        console.log("x es mayor que 5 pero y no es mayor que 15");
    }
} else {
    console.log("x no es mayor que 5");
}


/*
Si la presion es mayor a 400 y la tempertura es mayor a 85 y el volumen es mayor a 400
El globo podra despegar-
Si al menos una de esas condiciones no se cumple
informar cual o cuales no cumple- 
*/
console.log("GLOBO AEROSTATICO")

let presion = 420
let temperatura = 80
let volumen = 400


if(presion>400 && temperatura >85 && volumen>400)
{
    console.log("El globo puede despegar")
}
else
{
    console.log("El globo no puede despegar por: ")
    if(presion<400)
    {
        console.log("Hay problemas en la presion. ")
    }
    if(temperatura<85)
    {
        console.log("Hay problemas en la temperatura. ")
    }
    if(volumen<400)
    {
        console.log("Hay problemas en el volumen. ")
    }
}







console.log("SECCION ELECTORAL")

let seccion1 = 23
let seccion2 = 9
let seccion3 = 10 

/*
Solamente que se le informe la seccion que menor porcentaje tiene
"La seccion 1 es la de menor porcentaje"
"que pueda informar si hay dos menores"

*/


if((seccion1<seccion2)&&(seccion1<seccion2)){
    console.log("la seccion 1 es la de menor porcentaje")
} else if((seccion2<seccion1)&&(seccion2<seccion3)){
    console.log("la seccion 2 es la de menor porcentaje")
} else{
    console.log("la seccion 3 es la de menor porcentaje")
} 





































/*
if((seccion1<seccion2)&&(seccion1<seccion3)){
console.log("la seccion 1 es la de menor porcentaje")
}

if((seccion2<seccion1)&&(seccion2<seccion3)){
    console.log("la seccion 2 es la de menor porcentaje")
}

if((seccion3<seccion1)&&(seccion3<seccion2)){
    console.log("la seccion 3 es la de menor porcentaje")
}




if((seccion1 < seccion2) && (seccion1<seccion3)) 
{   
    console.log("la seccion 1 es la de menor porcentaje")
}

if((seccion2 < seccion1) &&(seccion2<seccion3)) 
{
    console.log("la seccion 2 es la de menor porcentaje")
}

if((seccion3 < seccion1) &&(seccion3<seccion2)) 
{
    console.log("la seccion 3 es la de menor porcentaje")
}


*/