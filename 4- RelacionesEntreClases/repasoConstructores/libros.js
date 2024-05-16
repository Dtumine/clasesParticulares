

class Libros{
    constructor(titulo,precio,stock){   
        this.titulo = titulo
        this.precio = precio                     // CONSTRUCTOR DE OBJETO LIBRO
        this.stock = stock
    } 

    mostrarInfo(){
        {
        console.log("Título:" + this.titulo + " Precio: " + this.precio + ". Hay " + this.stock + " unidades disponibles")
        }
    }

    actualizarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio
    } 

}    

export default Libros;
