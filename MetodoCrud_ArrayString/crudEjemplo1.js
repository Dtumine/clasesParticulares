// a partir de una lista de frutas
let frutas = ["manzana", "anana", "limon"];

// implementar la funcion de mostrar y mostrar con for (no con foreach)
// implementar la funcion de agregar, y agregar 3 frutas
// implementar la funcion eliminar y eliminar 1 fruta
// implementar la funcion actualizar y actualizar 2 frutas 

function mostrarDetalles(){
    console.log("-----LISTA FRUTAS-------")
    for(i=0; i<frutas.length; i++){
    console.log(frutas[i])}
 
}

function agregarFruta(elementoIngresado){
    frutas.push(elementoIngresado)
} 


function agregarFrutas(elementoIngresado1, elementoIngresado2){
    frutas.push(elementoIngresado1)
    frutas.push(elementoIngresado2)


} 

function eliminarUnaFruta(ubicacion){
    frutas.splice(ubicacion,1)
}

function eliminarVariasFrutas(ubicacion,cantidad){
    frutas.splice(ubicacion,cantidad)
}

function actualizarFruta(ubicacion, nuevoNombre)
{
    frutas[ubicacion] = nuevoNombre
}


mostrarDetalles()
agregarFruta("Naranja")
mostrarDetalles()
agregarFrutas("Durazno","Pera")
mostrarDetalles()
eliminarVariasFrutas(2,3)
mostrarDetalles()
actualizarFruta(0,"Manzana")
mostrarDetalles()




