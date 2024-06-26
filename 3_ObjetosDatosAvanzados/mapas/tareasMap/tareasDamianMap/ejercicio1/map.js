





 
/*
Enunciado 1: Registro de Estudiantes y sus Calificaciones
Crea un Map para almacenar las calificaciones de los estudiantes.
 Las claves del mapa serán los nombres de los estudiantes y los valores serán sus calificaciones. 
 Implementa funciones para añadir nuevas calificaciones, 
 obtener la calificación de un estudiante específico y mostrar todas las calificaciones.

 */


// [ ]   


let calificaciones = new Map()   


function cargarEstudiante(nombre,calificacion){  
    let nuevoEstudiante = document.getElementById('alumno').value

    calificaciones.set(nombre,calificacion) 

} 

function consultarCalificacionPorNombre(nombre){
    console.log(calificaciones.get(nombre))
}  


function actualizarCalificacion(nombre,calificacion){   //// HAY OTRA MANERA ?????
    calificaciones.set(nombre,calificacion)
}

function borrarEstudiante(nombre){
    calificaciones.delete(nombre) 
} 

function verListaEstudiantes(){
    for(let key of calificaciones.keys())
        console.log('alumnos: ' + key)
} 

function verSoloCalificaciones(){
    for(let value of calificaciones.values())
        console.log(value) 
       }

function mostrarListaCompleta(){
    calificaciones.forEach((calificacion,nombre) => { 
        console.log('nombre: ' + nombre + ' - calificación: ' + calificacion)
    })

    calificaciones.forEach()
}  

function mostrarMapa(){
    console.log(calificaciones)
}


cargarEstudiante('damianTumine',9)
cargarEstudiante('ernestHemingway',8)
cargarEstudiante('ignatiusReilly',7) 
console.log(calificaciones)
consultarCalificacionPorNombre('ignatiusReilly')
actualizarCalificacion('damianTumine',7) 
borrarEstudiante('ignatiusReilly') 
console.log(calificaciones) 
verListaEstudiantes() 
verSoloCalificaciones()
mostrarListaCompleta() 
mostrarMapa()
cargarEstudiante('edisonTrent',8)
mostrarMapa()






