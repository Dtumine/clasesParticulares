class Coche {
    // propiedades ? - > 6
    constructor(marca, modelo, año, color, velocidadMaxima) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.color = color;
      this.velocidadMaxima = velocidadMaxima;
      this.velocidadActual = 0;
    }
 
    // methods
    acelerar(velocidad) {
      if (this.velocidadActual + velocidad > this.velocidadMaxima) {
        console.log("¡Velocidad máxima alcanzada!");
        this.velocidadActual = this.velocidadMaxima;
      } else {
        this.velocidadActual += velocidad;
        console.log(`El coche aceleró a ${this.velocidadActual} km/h.`);
      }
    }
 
    frenar(velocidad) {
      if (this.velocidadActual - velocidad < 0) {
        console.log("El coche ya está detenido.");
        this.velocidadActual = 0;
      } else {
        this.velocidadActual -= velocidad;
        console.log(`El coche frenó a ${this.velocidadActual} km/h.`);
      }
    }
 
    pintar(nuevoColor) {
      this.color = nuevoColor;
      console.log(`El coche ahora es de color ${this.color}.`);
    }
 
    informacion() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Velocidad Máxima: ${this.velocidadMaxima} km/h, Velocidad Actual: ${this.velocidadActual} km/h.`);
    }
  }
 
  // Crear instancias de la clase Coche
  let coche1 = new Coche("Toyota", "Corolla", 2020, "Negro", 200);
  let coche2 = new Coche("Ford", "Mustang", 2019, "Rojo", 250);
  let coche3 = new Coche("Honda", "Civic", 2021, "Azul", 180);
 
  // Mostrar información de las instancias
  coche1.informacion();
  coche2.informacion();
  coche3.informacion();


  // Utilizar métodos de las instancias
  coche1.acelerar(20); // Output: El coche aceleró a 20 km/h.
  coche2.frenar(20); // Output: El coche frenó a 230 km/h.
  coche3.pintar("Verde"); // Output: El coche ahora es de color Verde.
  coche1.acelerar(60); // Output: El coche aceleró a 60 km/h.
  coche1.frenar(30);
  coche1.frenar(60);

    // Mostrar información de las instancias
    coche1.informacion();
    coche2.informacion();
    coche3.informacion();

