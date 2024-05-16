import Carrito from "./carrito.js"
import Libros from "./libros.js"   


let libro1 = new Libros("todos los fuegos el fuego",8200,2)
let libro2 = new Libros("el flaco",11200,0)
let libro3 = new Libros("la voluntad",9000,8)
let libro4 = new Libros("la caida",7500,7)
let libro5 = new Libros("ficciones",9300,0)
let libro6 = new Libros("matadero cinco",7800,2) 


let carritoCompra1 = new Carrito()
let carritoCompra2 = new Carrito()



carritoCompra1.agregarCompra(libro2)   
carritoCompra1.agregarCompra(libro1)
carritoCompra1.agregarCompra(libro4)
carritoCompra1.agregarCompra(libro5)
carritoCompra1.mostrarCarrito()

carritoCompra2.agregarCompra(libro2)
carritoCompra2.agregarCompra(libro1)
carritoCompra2.mostrarCarrito()
