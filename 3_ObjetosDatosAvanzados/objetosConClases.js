

class Persona {

    // Un constructor es aquel quien nos permite construir el objeto
    constructor(nombre, edad) { // argumentos
      this.nombre = nombre; // propiedades -> atributos
      this.edad = edad;
    }
    // los metodos: que ejecutan acciones tipicas de la clase en cuestion
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

  }


  // construir un objeto a partir de la clase

// Instanciar la clase Persona
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("María", 25);

persona1.saludar()
persona2.saludar()