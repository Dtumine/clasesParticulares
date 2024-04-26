// Crear una clase Guitarra con las propiedades: 
// 1 - Tipo DE CUERPO (solido, semi solido, hueco)
// 2 - Tipo de madera (arce, palisandro, etc)
// 3 - pastillas (single-coil, hambuckers, etc)
// 4 - Escala (25.5, 24.75, etc)

// methods: Mencionar escala actual
// cambiar escala +0.25
// cambiar escala -0.25


class guitarra{
    
    constructor(cuerpo,madera,pastillas){
        this.cuerpo = cuerpo;
        this.madera = madera;
        this.pastillas = pastillas;
        this.escala = 24;
    }
    
    imprimirEscala(){
        console.log(`Escala: ${this.escala}`);
    }

    bajarEscala()
    {
        this.escala-=0.25
    }

    subirEscala()
    {
        this.escala+=0.25
    }


}

// crear 2 guitarras

let guitarra1 = new guitarra("strato","caoba","ds"); 
let guitarra2 = new guitarra("les paul","roble","dual");


guitarra1.subirEscala()
guitarra1.subirEscala()
guitarra1.subirEscala()
guitarra1.subirEscala()
guitarra1.subirEscala()
guitarra2.imprimirEscala()
guitarra1.imprimirEscala()

