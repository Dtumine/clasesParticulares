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

export default Equipo;
