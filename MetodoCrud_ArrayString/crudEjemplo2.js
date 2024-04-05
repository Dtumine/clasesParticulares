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



function programaPrincipal()
{
    let opcion;
    do
    {
        opcion = prompt("MENU: \n 1 - AGREGAR \n 2- MOSTRAR \n 3 - ELIMINAR \n 4 -ACTUALIZAR \n 5-SALIR")
        switch(opcion)
        {
            case "1":
                let nombreFruta = prompt("Ingrese la fruta: ")
                agregarFruta(nombreFruta)
                break;
            case "2":
                mostrarDetalles()
                break;
            case "3":
                let ubicacionFrutaAEliminar = parseInt(prompt("ingrese la fruta a eliminar: "))
            
                eliminarUnaFruta(ubicacionFrutaAEliminar)
                  break;

            case  "4":
                let ubicacion = parseInt(prompt("ingrese la ubicacion"))
                let nuevoNombre = prompt("ingrese el nuevo nombre: ")
                actualizarFruta(ubicacion,nuevoNombre)
                break;      
            case "5":
                alert("Gracias por usar nuestros servicios")
                break;

            default:
                alert("Opcion Incorrecta")
                break;
        }
    }while(opcion != "5");

    alert("FIN DE PROGRAMA")
}

programaPrincipal()