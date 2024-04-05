
let accesoAZonaVip = false 
let boletosComprados = 4
let suscriptorPremium = true 
let cantidadDeEventosCompartidos = 2
let puntuacionDeInfluencia = 60 


accesoAZonaVip = ( ((boletosComprados > 5) || 
(suscriptorPremium == true && cantidadDeEventosCompartidos >= 2))
                        // true 
&& (puntuacionDeInfluencia > 70))
           // true



if(boletosComprados > 5)
{
    console.log("Cumple con boletos comprados")
}
else
{
    console.log("No cumple con boletos comprados")
}

if(cantidadDeEventosCompartidos>=2)
{
    console.log("Cantidad de Eventos compartidos es mayor a 2")
} 
else{
    console.log("no cumple con la cantidad de eventos requeridos")
}

if(puntuacionDeInfluencia > 70){
    console.log("cumple con la puntuacion requerida")
}
else{
    console.log("no cumple con l puntuacion requerida")
}

if(accesoAZonaVip){
    console.log("tiene acceso a zona vip")
}
else{
    console.log("no tiene acceso a la zona vip")
}
