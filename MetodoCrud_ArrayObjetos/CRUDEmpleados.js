/*
let Persona = {
    nombre: "Luis",
    edad: 50,
    cargo: "contador"
};
*/

let personas = [];

function cargarPersonaEnLista(nuevaPersona)
{
    personas.push(nuevaPersona)
}

function mostrarLasPersonasEnLista()
{
    for(i=0;i<personas.length;i++)
    {
        let persona = personas[i];
        console.log(i+" - Nombre: "+persona.nombre+ " - Edad: "+persona.edad + " - Cargo: "+persona.cargo);
    }
}
function eliminarPersonaDeListaPorIndice(indice)
{
    personas.splice(indice,1);
    alert("Eliminacion Exitosa!")
}
condition = true
do { 
   let menuIngreso = prompt("1-Agregar Persona \n 2-Leer \n 3-Actualizar \n 4-Eliminar \n 5-Salir \n")
    
   switch(menuIngreso)
   {
    case "1": 
    let nuevaPersona = {
        nombre: prompt("Ingrese el nombre de la persona"),
        edad: parseInt(prompt("Ingrese la edad de la persona: ")),
        cargo: prompt("Ingrese el cargo de la persona:")
    };
    cargarPersonaEnLista(nuevaPersona);
    break;
    case "2":
        mostrarLasPersonasEnLista()
        break;
    case "3":
        let indiceActualizar = parseInt(prompt("Ingrese el indice de la persona que desea eliminar: "))
        let opcionActualizar = prompt("1-Actualizar Nombre \n 2-Actualizar Edad \n 3-Actualizar Cargo \n")
        switch (opcionActualizar) {
            case "1":
                
            personas[indiceActualizar].nombre = prompt("Ingrese el nuevo nombre: ")
                break;
            case "2":
                personas[indiceActualizar].edad = parseInt(prompt("Ingrese la edad actualizada"))
            break;

            case "3":
                personas[indiceActualizar].cargo = prompt("Ingrese el cargo a actualizar")

            break;
        
            default: alert("valor incorrcto")
                break;
        }

    
        break;
    case "4":
        let indiceEliminar = parseInt(prompt("Ingrese el indice de la persona que desea eliminar: "))
        eliminarPersonaDeListaPorIndice(indiceEliminar)
        break;
    case "5":1
        condition = false
        break;
   }
   

    
} while (condition);
alert("FIN DE PROGRAMA")
