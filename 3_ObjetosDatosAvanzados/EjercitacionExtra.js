/**
 * EJERCICIO 1: "Se define un objeto llamado 'producto' en el contexto de una tienda en línea. 
 * Este objeto tiene cuatro propiedades: 'nombre', 'precio', 'cantidadDisponible' y 'categoria',
 *  que representan respectivamente el nombre del producto, su precio, la cantidad disponible en stock y
 *  la categoría a la que pertenece. Además, el objeto tiene dos métodos: 'mostrarDetalles', 
 * que imprime por consola las características del producto, y 'actualizarStock',
 *  que permite modificar la cantidad disponible del producto en el inventario."
 * 
*/



  let producto = {
    nombre: "riñonera", 
    precio: 19000,
    cantidadDisponible: 46,
    categoria: "accesorios",

 mostrarDetalles: function(){
    console.log("nombre: " + this.nombre)
    console.log("precio: " + this.precio)
    console.log("cantidad Disponible: " + this.cantidadDisponible)
    console.log("categoria: " + this.categoria)
},

 actualizarStock: function(ingresoRiñonera){
     this.cantidadDisponible+=ingresoRiñonera
 } 
}
producto.mostrarDetalles()
producto.actualizarStock(30)    // se puede hacer así? 
producto.mostrarDetalles()





/*

 * 
 * 
 * EJERCICIO 2: "Se define un objeto llamado 'telefonoMovil' en el contexto de un dispositivo móvil.
 *  Este objeto tiene cuatro propiedades: 'marca', 'modelo', 'almacenamiento' y 'color', 
 * que representan respectivamente la marca del teléfono, su modelo, la capacidad de almacenamiento 
 * y el color del dispositivo. Además, el objeto tiene dos métodos: 'mostrarDetalles',
 *  que imprime por consola las características del teléfono móvil, y 'actualizarAlmacenamiento', 
 * que permite modificar la capacidad de almacenamiento del dispositivo."
 * */


let telefonoMovil ={
    marca: "samsung",
    modelo: "xr9",
    almacenamiento: 4,
    color: "negro", 

    mostrarDetalles: function(){
        console.log("marca: " + this.marca)
        console.log("modelo: " + this.modelo)
        console.log("almacenamiento: " + this.almacenamiento)
        console.log("color: " + this.color)
    },

    actualizarAlmacenamiento: function(nuevoAlmacenamiento){
        this.almacenamiento+=nuevoAlmacenamiento

    }
}

telefonoMovil.mostrarDetalles()
let nuevoAlmacenamiento = 2
telefonoMovil.actualizarAlmacenamiento(nuevoAlmacenamiento) 
telefonoMovil.mostrarDetalles()





/*
 * 
 * EJERCICIO 3: "Se define un objeto llamado 'edificio' que representa una estructura arquitectónica.
 *  Este objeto tiene cuatro propiedades: 'nombre', 'altura', 'ubicacion' y 'anioConstruccion',
 *  que describen respectivamente el nombre del edificio, su altura, la ubicación y el año de construcción.
 *  Además, el objeto tiene tres métodos: 'mostrarInformacion', que imprime por consola los detalles del edificio,
 * 'calcularAntiguedad', que calcula cuántos años han pasado desde su construcción, y 'cambiarUbicacion',
 * que permite actualizar la ubicación del edificio."
 * 
 * 
 * */ 



 
 let edificio={
    nombre:"Gran Resort",
    altura:68,
    ubicacion:"Callao 1965",
    anioConstruccion:"2004",

    mostrarInformacion: function(){
        console.log("nombre: " + this.nombre)
        console.log("altura: " + this.altura)
        console.log("ubicacion: " + this.ubicacion)
        console.log("anioConstruccion: " + this.anioConstruccion) 
       },

    calcularAntiguedad: function(anioActual){
        let antiguedad = anioActual -= this.anioConstruccion
        console.log("la antiguedad del edificio es de " + antiguedad + " años")
    }, 

    cambiarUbicacion: function(ubicacion){
        this.ubicacion = prompt("ingresar nueva ubicacion: ")
    }
}

edificio.mostrarInformacion()
let anioActual=2024
edificio.calcularAntiguedad(anioActual) // porque no es necesario cargar el argumento anioconstruccion?  






/*
 * 
 * EJERCICIO 4: "Se define un objeto llamado 'campañaPolitica' que representa una estrategia de campaña política.
 *  Este objeto tiene cinco propiedades: 'candidato', 'partido', 'plataforma', 'fechaInicio' y 'fechaFin', 
 * que describen respectivamente el nombre del candidato, el partido político al que pertenece,
 *  la plataforma electoral que promueve, la fecha de inicio y la fecha de finalización de la campaña.
 *  Además, el objeto tiene cuatro métodos: 'mostrarDetalles', 
 * que imprime por consola los detalles de la campaña política, 'definirPlataforma',
 *  que permite establecer o modificar la plataforma electoral, 'calcularDuracion',
 *  que calcula la duración total de la campaña en días, y 'actualizarFechaFin',
 *  que permite extender la fecha de finalización de la campaña en caso necesario."
 * 
 */ 



 let campañaPolitica = {
    candidato: "sergio massa",
    partido: "justicialista",
    plataforma: "upp",
    fechaInicio: "14/05/2024",
    fechaFin: "11/08/2024",

   mostrarDetalles: function(){
    console.log("candidato " + this.candidato)
    console.log("partido " + this.partido)
    console.log("plataforma " + this.plataforma)
    console.log("fecha de inicio " + this.fechaInicio)
    console.log("fecha de finalizacion " + this.fechaFin)
},

   definirPlataforma: function(nuevaPlataforma){
     this.plataforma = nuevaPlataforma
   },


   calcularDuracion: function(){
     
   }, 

    actualizarFechaFin: function(nuevaFechaFin){
    this.fechaFin = nuevaFechaFin
   }
  
}


campañaPolitica.mostrarDetalles()
   let nuevaPlataforma = "uc"
   campañaPolitica.definirPlataforma(nuevaPlataforma) 
   campañaPolitica.mostrarDetalles()
   let nuevaFechaFin="12/12/2024" 
   campañaPolitica.actualizarFechaFin(nuevaFechaFin)
   campañaPolitica.mostrarDetalles()

   
  
 





