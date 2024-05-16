
let productos = []; 

class Producto
{
    constructor(nombre,precio,categoria,caducidad,descripcion)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.fechaCaducidad = caducidad;
        this.descripcionProducto = descripcion;

    }
}


function crearObjetoProducto(){
    let nombre = document.getElementById('nombreProducto').value
    let precio = document.getElementById('precioProducto').value
    let categoria = document.getElementById('categoriaProducto').value
    let fechaCaducidad = document.getElementById('fechaCaducidad').value
    let descripcionProducto = document.getElementById('descripcionProducto').value
    
    
    let productoObjeto = new Producto(nombre,precio,categoria,fechaCaducidad,descripcionProducto)

    productos.push(productoObjeto)
    alert("Objeto Agregado!")


    document.getElementById('nombreProducto').value = ""
    document.getElementById('precioProducto').value= ""
    document.getElementById('categoriaProducto').value
    document.getElementById('fechaCaducidad').value = ""
    document.getElementById('descripcionProducto').value = ""

} 


function verListaProductos(){
    console.log(productos)
}
