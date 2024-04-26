
/*

class Pelicula{ 

    constructor (titulo,genero,director,año,espectadores,recordEspectadores){
        this.titulo = titulo
        this.genero = genero
        this.director = director
        this.año = año
        this.espectadoresActuales = espectadores 
        this.recordEspectadores = recordEspectadores 
        this.totalEspectadores = totalEspectadores

    } 

    darPuntaje(nuevoPuntaje){
    
        this.puntaje = nuevoPuntaje
        
    }

    mostrar(){
        console.log(`TITULO: ${this.titulo} GENERO: ${this.genero} DIRECTOR: ${this.director} AÑO: ${this.año} ESPECTADORES: ${this.espectadoresActuales} RECORD ESPECTADORES: ${this.recordEspectadores} `   )
    } 

    sumarEspectadores(nuevosEspectadores){
        if(this.espectadoresActuales + nuevosEspectadores > this.recordEspectadores){
            console.log(`han batido el nuevo record de espectadores`)
            this.espectadoresActuales = 
        }
            else{
                this.espectadoresActuales += nuevosEspectadores
                console.log(`el total de espectadores a la fecha es de ${this.espectadoresActuales}`)
            }
        }
    }



let pelicula1 = new Pelicula("CONAIR","ACCIÓN","SIMON WEST", 1997,20000,2000000) 
let pelicula2 = new Pelicula("HEAT","ACCIÓN","SIMON WEST",1998,8)
let pelicula3 = new Pelicula("NAUFRAGO","DRAMA","SIMON WEST",2001,8)


pelicula1.sumarEspectadores(3000000)



class Directores{
    constructor(nombreYApellido,nacionalidad,generos,edad,premios){
        this.nombreYApellido = nombreYApellido
        this.nacionalidad = nacionalidad
        this.generos = generos
        this.edad = edad 
        this.premios = premios 
    }; 
    
    mostrar(){ 
        console.log(`Nombre y Apellido: ${this.nombreYApellido} Nacionalidad: ${this.nacionalidad} Generos: ${this.generos} Edad: ${this.edad} Premios: ${this.premios}`)
    } 

}


let director1 = new Directores("Wes Anderson","USA","Drama",53,"Mejor Direccion") 

director1.mostrar()

*/ 


/*

class Automovil{
    constructor(marca,modelo,año,color,velocidadMaxima){
        this.marca = marca 
        this.modelo = modelo
        this.año = año 
        this.color = color 
        this.velocidadMaxima = velocidadMaxima 
        this.velocidadActual = 0
    } 

    mostrarInformacionAutos(){
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.año} Color: ${this.color} Velocidad Maxima: ${this.velocidadMaxima} Velocidad Actual: ${this.velocidadActual} `)
    } 

    pintar(nuevoColor){
        this.color = nuevoColor
        console.log(`el auto cambió su color a ${this.color}`)
    }

    acelerar(velocidad){
        if(this.velocidadActual + velocidad > this.velocidadMaxima){
            console.log(`ha alcando su velocidad maxima: ${this.velocidadMaxima} km/h`)
            this.velocidadActual = this.velocidadMaxima
        } else{
            this.velocidadActual += velocidad 
            console.log(`el auto aceleró a ${this.velocidadActual}`)
        } 
    } 

    frenar(velocidadFrenado){
        if(this.velocidadActual - velocidadFrenado < 0){
            console.log(`el auto ya está detenido`)
        } else{
            this.velocidadActual -= velocidadFrenado
            console.log(`el auto frenó a ${this.velocidadActual} km/h`)
        }
    }
    
}

let auto1 = new Automovil("Mercedes","GF",2022,"AZUL",240)
let auto2 = new Automovil("FORD","F100",1986,"GRIS",140)
let auto3 = new Automovil("TOYOTA","COROLLA",2000,"VERDE",220)

auto1.mostrarInformacionAutos()
auto2.mostrarInformacionAutos()
auto2.frenar(50)
auto2.mostrarInformacionAutos()


*/




class Equipo{
    constructor(nombre,club){
        this.nombre = nombre
        this.club = club 
        this.jugadores = []
    }

    
    agregarJugador(jugador){
        this.jugadores.push(jugador)
    } 

    mostrarJugadores(){
        for(let i=0;i<this.jugadores.length;i++){
            console.log(this.jugadores[i].mostrarInfo())
        }
    } 
    

    calcularPrecioJugadores(){
        let sumaTotal = 0
        for(let i=0;i<this.jugadores.length;i++){
         sumaTotal += this.jugadores[i].precio
        }
        console.log(`el precio total del equipo es ` + sumaTotal)
    }
 }


class Jugador{
    constructor(nombre,puesto,numero){
        this.nombre = nombre 
        this.puesto = puesto 
        this.numero = numero 
        this.precio = 800000
    }  
    
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} Puesto: ${this.puesto} Numero: ${this.numero} Precio: ${this.precio}`)
    } 

    aumentarPrecio(incrementoValor){
        this.precio += incrementoValor
    }
}


let equipo1 = new Equipo("Equipo1","River Plate")  
let jugador1 = new Jugador("Julian Alvarez", "delantero",9)
let jugador2 = new Jugador("Enzo Fernandez", "mediocampista",5)


equipo1.agregarJugador(jugador1)
equipo1.agregarJugador(jugador2)
equipo1.mostrarJugadores()    
equipo1.calcularPrecioJugadores()

