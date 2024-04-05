// Definición de un objeto que representa un libro
let numero = 8

// FUNCTION
function saludar()
{
    console.log("HOLA");
}

let libro = { 
    // clave:valor
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    añoPublicacion: 1943,
    genero: "Fábula",
    paginas: 96,
  // clave:funcion
    mostrarDetalles: function() {    // METODO
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Año de Publicación: " + this.añoPublicacion);
        console.log("Género: " + this.genero);
        console.log("Número de páginas: " + this.paginas);
    }
  };
  

libro.mostrarDetalles()
console.log("aplicando cambios")
libro.paginas = 120
libro.añoPublicacion = 1950
libro.mostrarDetalles()


