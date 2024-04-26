

import CarritoDeCompra from "./carritoDeCompra.js"
import Producto from "./producto.js"

let carritoDeCompra1 = new CarritoDeCompra()              

let producto1 = new Producto("Buzo Adidas",49000)
let producto2 = new Producto("Buzo Nike",53000)
let producto3 = new Producto("Buzo Reebok",42000)
let producto4 = new Producto("Buzo Fila",46000)
let producto5 = new Producto("Buzo Quicksilver",62000)
let producto6 = new Producto("Buzo Rusty",46000)

carritoDeCompra1.agregarProducto(producto1)
carritoDeCompra1.agregarProducto(producto4)
carritoDeCompra1.mostrarProductos()
carritoDeCompra1.calcularPrecioTotal()

 
  

   