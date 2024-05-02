


class Carrito{
    constructor(){
        this.carrito = []
    }
                                  
    agregarCompra(libro){                               //CONSTRUCTOR DE ARRAY DE CARRITOS DE COMPRA 
        this.carrito.push(libro)
    } 

    mostrarCarrito(){
        for(let i=0;i<this.carrito.length;i++){
            console.log(this.carrito[i].mostrarInfo())
        }
    }

    sumarTotal(){
        let total = 0;
        for(let i=0;i<this.carrito.length;i++){
            total += this.carrito[i].precio 
        } 
        console.log("el total de su compra es de $" + total)
    }

}

export default Carrito;