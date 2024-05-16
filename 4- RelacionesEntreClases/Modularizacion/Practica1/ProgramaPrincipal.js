import Equipo from './Equipo.js';
import Jugador from './Jugador.js'; 
  

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


