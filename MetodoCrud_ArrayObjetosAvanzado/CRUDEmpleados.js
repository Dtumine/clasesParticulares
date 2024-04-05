let personas = [];

function cargarPersonaEnLista(nuevaPersona) {
  personas.push(nuevaPersona);
}
function mostrarLasPersonasEnLista() {
  for (i = 0; i < personas.length; i++) {
    let persona = personas[i];
    console.log(
      i +
        " - Nombre: " +
        persona.nombre +
        " - Edad: " +
        persona.edad +
        " - Cargo: " +
        persona.cargo +
        " - Salario: $" +
        persona.salario
    );
  }
}
function eliminarPersonaDeListaPorIndice(indice) {
  personas.splice(indice, 1);
  alert("Eliminacion Exitosa!");
}
function actualizarPersonaDeLista(indice, opcion) {
  switch (opcion) {
    case "1":
      personas[indice].nombre = prompt("Ingrese el nuevo nombre: ");
      break;
    case "2":
      personas[indice].edad = parseInt(prompt("Ingrese la edad actualizada"));
      break;

    case "3":
      personas[indice].cargo = prompt("Ingrese el cargo a actualizar");
      break;
    case "4":
      personas[indice].salario = parseFloat(
        prompt("Ingrese el salario actualizado")
      );
      break;

    default:
      alert("valor incorrcto");
  }
}
function mostrarPromedioSalarios()
{
    let sumaTodosSalarios = 0
    for (i = 0; i < personas.length; i++) 
    {
        sumaTodosSalarios+=personas[i].salario
    }
    promedioSalarios = sumaTodosSalarios/personas.length
    alert("El promedio de los salarios es: $"+promedioSalarios)
}
condition = true;
do {
  let menuIngreso = prompt(
    "1-Agregar Persona \n 2-Leer \n 3-Actualizar \n 4-Eliminar \n 5-Promedio Salarios\n 6-Salir \n"
  );

  switch (menuIngreso) {
    case "1":
      let nuevaPersona = {
        nombre: prompt("Ingrese el nombre de la persona"),
        edad: parseInt(prompt("Ingrese la edad de la persona: ")),
        cargo: prompt("Ingrese el cargo de la persona:"),
        salario: parseFloat(prompt("Ingrese el salario de la persona")),
      };
      cargarPersonaEnLista(nuevaPersona);
      break;
    case "2":
      mostrarLasPersonasEnLista();
      break;
    case "3":
      let indiceActualizar = parseInt(
        prompt("Ingrese el indice de la persona que desea actualizar: ")
      );
      let opcionActualizar = prompt(
        "1-Actualizar Nombre \n 2-Actualizar Edad \n 3-Actualizar Cargo \n 4-Actualizar Salario"
      );
      actualizarPersonaDeLista(indiceActualizar, opcionActualizar);
      break;

      break;
    case "4":
      let indiceEliminar = parseInt(
        prompt("Ingrese el indice de la persona que desea eliminar: ")
      );
      eliminarPersonaDeListaPorIndice(indiceEliminar);
      break;
    case "5":
        mostrarPromedioSalarios()
        break;
    case "6":
      1;
      condition = false;
      break;
  }
} while (condition);
alert("FIN DE PROGRAMA");
