
/*

class Automovil{
    constructor(marca,modelo,color,año,velocidadMaxima){
        this.marca = marca 
        this.modelo = modelo 
        this.color = color
        this.añoFabricacion = año 
        this.velocidadMaxima = velocidadMaxima
        this.velocidadActual = 0
    } 

    mostrar(){
        for(let i=0;i<Automovil.length;i++){
            console.log(`marca: ${this.marca} modelo: ${this.modelo} color: ${this.color} año: ${this.añoFabricacion} velocidad maxima: ${this.velocidadMaxima}`)
        }
    }
    


    pintar(nuevoColor){
        this.color = nuevoColor
    } 


    acelerar(velocidad){ 
        if(this.velocidadActual + velocidad > this.velocidadMaxima){
            console.log("Velocidad Máxima Alcanzada!")
        } else{
            this.velocidadActual += velocidad 
            console.log("El coche aceleró a " + this.velocidadActual)
        } 
    } 
    
    frenar(velocidadFrenado){
        if(this.velocidadActual - velocidadFrenado < 0){
            console.log("el auto ya está detenido")
        } else{
            this.velocidadActual -= velocidadFrenado 
            console.log("la velocidad actual del auto es de " + this.velocidadActual)
        }
    } 
      



} 

let auto1 = new Automovil("FORD","F100","AZUL", 1991,140)
let auto2 = new Automovil("TOYOTA","COROLLA","VERDE",2010,190,) 

auto1.mostrar()
auto2.mostrar()
auto1.acelerar(80)
auto1.frenar(20)

*/ 



class Carrito{
    constructor(){
        this.carrito = []
    }
    

    agregarAlCarro(producto){
        this.carrito.push(producto)
    }
   
    mostrarProducto(){
        for(let i=0;i<this.carrito.length;i++){
            console.log(this.carrito[i].mostrarInformacion())
        }
    }

} 


class Producto{
    constructor(nombre,marca,precio){
        this.nombre = nombre  
        this.marca = marca 
        this.precio = precio 
    }  
  
     
    mostrarInformacion(){ 
        console.log(`nombre: ${this.nombre} marca: ${this.marca} precio: ${this.precio}`)
    }


}  

let producto1 = new Producto("BUZO","NIKE",90000)
let producto2 = new Producto("BUZO","ADIDAS",110000) 


let carro1 = new Carrito() 

carro1.agregarAlCarro(producto2)
carro1.mostrarProducto()


