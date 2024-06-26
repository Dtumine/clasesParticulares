/*
Enunciado 2: Inventario de Productos
Crea un Map para gestionar el inventario de una tienda. 
Las claves del mapa serán los nombres de los productos y los valores serán la cantidad en stock. 
Implementa funciones para añadir productos al inventario,
 actualizar la cantidad de un producto y mostrar el inventario completo.
*/



let productos = new Map() 

function añadirProducto(key,value){
    productos.set(key,value) 
} 

//ACTUALIZAR LA CANTIDAD DE UN PRODUCTO



function mostrarInventario(){
productos.forEach((value,key)=>
{
    console.log('producto: ' + key + ' - cantidad: ' + value)
}
)} 

