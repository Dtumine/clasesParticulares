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
}; 

producto.mostrarDetalles()
producto.actualizarStock(30)    // se puede hacer así? 
producto.mostrarDetalles()
console-log(producto.nombre)
