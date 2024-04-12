let listaPeliculas = []

function agregarPelicula(nuevaPelicula){
    listaPeliculas.push(nuevaPelicula)
}

function leerListaPeliculas(){
    for(i=0;i<listaPeliculas.length;i++)
    {    
        let pelicula = listaPeliculas[i]
        console.log(" Titulo:" + pelicula.titulo + 
        "\n genero:" + pelicula.genero +
        "\n año:" + pelicula.año +
        "\n director:" + pelicula.director +
        "\n puntaje:" + pelicula.puntaje)
    }
}


function actualizarListaPeliculas(indicePeliculaActualizar,valorAActualizar){

    switch (valorAActualizar) {
        case "1": 
        listaPeliculas[indicePeliculaActualizar].titulo = prompt("Ingrese el nuevo titulo")
        break;
        case "2": 
        listaPeliculas[indicePeliculaActualizar].genero = prompt("ingrese el nuevo genero")
        break;
        case "3": 
        listaPeliculas[indicePeliculaActualizar].año = parseInt(prompt("ingrese el nuevo año"))
        break;
        case "4":
        listaPeliculas[indicePeliculaActualizar].director = prompt("ingrse el nuevo director")
        break;
        default:
            break;
    }

}

function eliminarPelicula(indiceAEliminar){
    listaPeliculas.splice(indiceAEliminar,1)
}

function mostrarPromedioPuntajes(){
    let sumaPuntajes = 0
    for(i=0;i<listaPeliculas.length;i++)
    {
        sumaPuntajes += listaPeliculas[i].puntaje
    }
    promedioPuntajes = sumaPuntajes/listaPeliculas.length
    alert("el promedio de los puntajes es $ " + promedioPuntajes)
}

do { let opcion = prompt("1-INGRESAR NUEVA PELICULA \n 2-LEER LISTA DE PELICULAS \n 3-ACTUALIZAR PELICULA DE LISTA \n 4-ELIMINAR PELICULA \n 5-MOSTRAR PROMEDIOS PUNTAJES")
    switch (opcion) {
            
            case "1": let nuevaPelicula = {
                titulo: prompt("Ingrese el titulo"),
                genero: prompt("ingrese el género"),
                año: prompt("ingrese el año"),
                director: prompt("ingrese el director"),
                puntaje: parseInt(prompt("Ingrese el puntaje de la pelicula")),
            }

            agregarPelicula(nuevaPelicula)
            break;
            case "2": leerListaPeliculas()
            
            break;

            case "3": let indicePeliculaActualizar = parseInt(prompt("ingrese el indice que desea actualizar"))
                      let valorAActualizar = prompt("1-ACTUALIZAR TITULO \n 2-ACTUALIZAR GENERO \n 3-ACTUALIZAR AÑO \n 4-ACTUALIZAR DIRECTOR \n 4-ACTUALIZAR PUNTAJE")
                      actualizarListaPeliculas(indicePeliculaActualizar,valorAActualizar)
            break;

             case "4": let indiceAEliminar = prompt("Ingrese el indice a eliminar")
            eliminarPelicula(indiceAEliminar)
            
            break;

            case "5": mostrarPromedioPuntajes()
            
            break;
    
        default:
            break;
    }
    continuar = prompt("desea continuar? y/n")
} while (continuar == "y" || continuar == "y");
alert("FIN DEL PROGRAMA")
