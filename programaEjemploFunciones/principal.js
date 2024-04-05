
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