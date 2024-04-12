
// array de objetos 
let tareasSemanales = []

function agregarTarea(nuevaTarea){
   tareasSemanales.push(nuevaTarea)
}

function leerListaDeTareas(){
    for(i=0;i<tareasSemanales.length;i++){
        let tarea = tareasSemanales[i]
        console.log( i + " - " 
        + "Titulo:" + tarea.titulo 
        + "Area:"+ tarea.area 
        + "Nivel de Importancia " + tarea.nivelDeImportancia)
    }
}

function actualizarTarea(indiceParaActualizar,indiceObjeto){

    switch (indiceObjeto) {
        case "1":
            tareasSemanales[indiceParaActualizar].titulo
            break;
        case "2":
            tareasSemanales[indiceParaActualizar].area
         break;
            
        case "3":
            tareasSemanales[indiceParaActualizar].nivelDeImportancia

            break;
    
        default:
            break;
    }
}


 

do { let menuIngreso = prompt("1-AGREGAR TAREA SEMANAL \n 2-LEER LISTA DE TAREAS SEMANALES \n 3-ACUTALIZAR TAREA \n 4-ELIMINAR TAREA \n 5-SALIR")

switch (menuIngreso) {

        case "1": let nuevaTarea = {
            titulo: prompt("Ingrese el título de la tarea"),
            area : prompt("Ingrese el area al que pertenece"),
            nivelDeImportancia: parseInt(prompt("Ingrese el nivel de importancia del 1 al 10"))
        }; 

        agregarTarea(nuevaTarea)
        
        break;

        case "2": leerListaDeTareas()
        
        break;
        case "3": let indiceParaActualizar = parseInt(prompt("Ingrese el indice de la tarea que desea actualizar"))
                  let indiceObjeto = prompt("1-ACTUALIZAR TITULO 2-ACTUALIZAR AREA 3-ACTUALIZAR NIVEL DE IMPORTANCIA")
                  actualizarTarea(indiceParaActualizar,indiceObjeto)
        
        break;
        case "4":
        
        break;
        case "5":
        
        break;    
    default:
        break;
}
    continuar = prompt("desea continuar? y/n")
} while (continuar == "y"); 
