let variable = "PLO"

nombre = "Santiago"

const usuario = {
    // CLAVE:VALOR
    // KEY:VALUE
    nombre: "Juan",  // propiedad 1
    edad: 30,     // propiedad2
    email: "juan@example.com",
    isAdmin: false,

    // key : function
    // clave : funcion
    saludar: function() {
        console.log("¡Hola! Mi nombre es " + this.nombre);

    }
  };

  console.log(variable)
  console.log(usuario.email) 

  usuario.saludar()

  

  