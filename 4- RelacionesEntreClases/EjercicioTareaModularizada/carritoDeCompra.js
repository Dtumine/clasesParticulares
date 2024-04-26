
class CarritoDeCompra{
    constructor(){

        this.productos = [] 
    } 
 

    agregarProducto(producto){              // CREATE 
        this.productos.push(producto)
    } 


    mostrarProductos(){
        for(let i=0;i<this.productos.length;i++){               // READ
         console.log(this.productos[i].mostrarInformacion())
        } 
    } 


    eliminarProducto(indice){             // DELETE 
        this.productos.splice(indice,1)
    }


   
    calcularPrecioTotal(){ 
        let total = 0;
        for(let i=0;i<this.productos.length;i++){
            total += this.productos[i].precio
        }
        console.log(`el total de su compra es de $` + total)

    }
}
  

 export default CarritoDeCompra; 