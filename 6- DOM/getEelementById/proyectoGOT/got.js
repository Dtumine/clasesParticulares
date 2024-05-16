let personajes = [];
 
class Personaje{
    constructor(nombre,casa,locacion,profesion){
        this.nombre = nombre
        this.casa = casa
        this.locacion = locacion 
        this.profesion = profesion
    }
} 

function crearObjetoPersonaje(){ 

    let nombrePersonaje = document.getElementById('nombre').value
    let casaPersonaje = document.getElementById('casa').value
    let locacionPersonaje = document.getElementById('locacion').value
    let profesionPersonaje = document.getElementById('profesion').value


    let personajeObjeto = new Personaje(nombrePersonaje,casaPersonaje,locacionPersonaje,profesionPersonaje)
    
    personajes.push(personajeObjeto) 

    document.getElementById('nombre').value = ""
    document.getElementById('casa').value = ""
    document.getElementById('locacion').value = ""
    document.getElementById('profesion').value = "" 
} 



function mostrarPersonaje(){ 
    
    console.log(personajes)
}

function mostrarUltimoPorAlert(){
    alert(" Nombre: " + personajes[personajes.length-1].nombre + "\n Casa: " + personajes[personajes.length-1].casa + "\n Locación: " + personajes[personajes.length-1].locacion + "\n Profesión: " + personajes[personajes.length-1].profesion )
}


function mostrarPorAlert(){ 

    for(let i=0; i<personajes.length; i++){
        alert(" Nombre: " + personajes[i].nombre + "\n Casa: " + personajes[i].casa + "\n Locación: " + personajes[i].locacion + "\n Profesión: " + personajes[i].profesion )
    }

}
