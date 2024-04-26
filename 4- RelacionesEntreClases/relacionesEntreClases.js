// RELACION DE AGREGACION

class Equipo
{
    constructor(nombre,club)
    {
        this.nombre = nombre;
        this.club = club;
        this.jugadores = []
    }

    agregarJugador(jugador)
    {
        this.jugadores.push(jugador)
    }

    mostrarJugadores()
    {
        for(let i = 0;i<this.jugadores.length;i++)
        {
            console.log(this.jugadores[i].mostrarInfo())
        }
    }
    calcularPrecioJugadores()
    {
        let sumaTotal = 0
        for(let i = 0;i<this.jugadores.length;i++)
        {
            sumaTotal += this.jugadores[i].precio
        }
        console.log("El precio del equipo es: "+ sumaTotal)
    }

}


class Jugador
{
    constructor(nombre, puesto, numero){
        this.nombre = nombre;
        this.puesto = puesto;
        this.numero = numero;
        this.precio = 800000;
    }

    mostrarInfo()
    {
        console.log("Nombre: "+ this.nombre + " puesto: "+ this.puesto+ " numero: "+ this.numero);
    }
    aumentarPrecio()
    {
        this.precio += 500000;
    }
}



let equipo1 = new Equipo("Equipo A", "Estudiantes de la plata")
let jug1 = new Jugador("Cetre", "delantero", "9")
jug1.aumentarPrecio()
let jug2 = new Jugador("Carrillo", "delantero", "10")
let jug3 = new Jugador("Correa", "delantero", "11")

equipo1.agregarJugador(jug1)
equipo1.agregarJugador(jug2)
equipo1.agregarJugador(jug3)

equipo1.mostrarJugadores()
equipo1.calcularPrecioJugadores()
