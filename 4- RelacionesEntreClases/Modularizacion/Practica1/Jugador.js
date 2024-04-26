
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


export default Jugador;