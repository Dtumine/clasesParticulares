// declarar un objeto de nombre "codigo"
// debe tener 4 propiedades, lenguaje, lineas de codigo, autor y lanzamiento (fecha)
// luego mostrar las propiedades por medio de un metodo de nombre "mostrarCaracteristicas"- 

let codigo = { 
    lenguaje: "javascript",
    lineasdecodigo: 860,
    autor: "damian",
    fecha: "130324",  

    mostrarCaracteristicas: function(){
        console.log("lenguaje " + this.lenguaje)
        console.log("lineas de codigo " + this.lineasdecodigo)
        console.log("autor " + this.autor)
        console.log("fecha " + this.fecha)

},

    aumentarLineasDeCodigo: function(lineasNuevas)
    {
        this.lineasdecodigo+=lineasNuevas
    }
}

codigo.mostrarCaracteristicas()
let lineas = 20
codigo.aumentarLineasDeCodigo(lineas)
codigo.mostrarCaracteristicas()
