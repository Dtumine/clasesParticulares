// objeto que tiene 3 metodos
let Automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    velocidadActual: 0,
   
    acelerar: function(velocidadIncremento) {
        this.velocidadActual += velocidadIncremento;
        console.log("El automóvil aceleró a " + this.velocidadActual + " km/h.");
    },
   
    frenar: function(velocidadDecremento) {
        if (this.velocidadActual - velocidadDecremento >= 0) {
            this.velocidadActual -= velocidadDecremento;
            console.log("El automóvil frenó a " + this.velocidadActual + " km/h.");
        } else {
            console.log("El automóvil ya está detenido.");
        }
    },
   
    detener: function() {
        this.velocidadActual = 0;
        console.log("El automóvil se detuvo completamente.");
    }
  };
  
  
  // Ejemplo de uso de los métodos del objeto Automovil
  console.log("Marca:", Automovil.marca); // Output: Toyota
  console.log("Modelo:", Automovil.modelo); // Output: Corolla
  console.log("Año:", Automovil.año); // Output: 2022
  
  
  Automovil.acelerar(50); // Output: El automóvil aceleró a 50 km/h.
  Automovil.frenar(20); // Output: El automóvil frenó a 30 km/h.
  Automovil.detener(); // Output: El automóvil se detuvo completamente.