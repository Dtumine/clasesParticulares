
class Producto
{
    constructor(nombre, precio, categoria, fechaCaducidad, descripcion)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.fechaCaducidad = fechaCaducidad;
        this.descripcion = descripcion; 

    }
}




function crearObjetoProducto(){
    let nombreProducto = document.getElementById('nombreProducto').value 
    let precioProducto = document.getElementById('precioProducto').value
    let categoriaProducto = document.getElementById('categoriaProducto').value 
    let fechaCaducidad = document.getElementById('fechaCaducidad').value 
    let descripcionProducto = document.getElementById('descripcionProducto').value
    //alert("\n Nombre del Producto: " + nombreProducto + "\n Precio del Producto" + precioProducto + "\ncategoria del producto: " + categoriaProducto +  "\nfecha de caducidad: " + fechaCaducidad + "\ndescripcion: " + descripcionProducto)
 
    let productoObjeto = new Producto(nombreProducto,precioProducto,categoriaProducto,fechaCaducidad,descripcionProducto) 

    console.log(productoObjeto) 

    

}