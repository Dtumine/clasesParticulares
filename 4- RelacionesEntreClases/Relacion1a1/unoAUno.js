/*class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.pasaporte = null
    }

    asignarPasaporte(pasaporte)
    {
        this.pasaporte = pasaporte
    }
}

class Pasaporte {
    constructor(numero, fechaExpiracion) {
        this.numero = numero;
        this.fechaExpiracion = fechaExpiracion;
    }
}


let persona1 = new Persona("Juan Perez", 42);
let persona2 = new Persona("Rodrigo Martinez", 48);

let pasaporte1 = new Pasaporte(663344, "1/07/2026");
let pasaporte2 = new Pasaporte(884411, "1/08/2026");



persona1.asignarPasaporte(pasaporte1)


console.log(persona1.edad)
console.log(persona1.pasaporte)
*/


class Usuario {
    constructor(nombreUsuario, contraseña) {
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.perfil = null;
    }

    asignarPerfil(perfil) {
        this.perfil = perfil;
    }
}

class Perfil {
    constructor(nombreCompleto, email, fechaNacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
        this.pasaporte = null;
    }

    asignarPasaporte(pasaporte) {
        this.pasaporte = pasaporte;
    }
}

class Pasaporte {
    constructor(numero, fechaExpiracion) {
        this.numero = numero;
        this.fechaExpiracion = fechaExpiracion;
    }
}

let usuario1 = new Usuario("jperez", "1234");
let usuario2 = new Usuario("rmartinez", "5678");

let perfil1 = new Perfil("Juan Perez", "juan.perez@example.com", "1980-05-15");
let perfil2 = new Perfil("Rodrigo Martinez", "rodrigo.martinez@example.com", "1975-08-20");

let pasaporte1 = new Pasaporte(663344, "1/07/2026");
let pasaporte2 = new Pasaporte(884411, "1/08/2026");

usuario1.asignarPerfil(perfil1);
usuario2.asignarPerfil(perfil2);

perfil1.asignarPasaporte(pasaporte1);
perfil2.asignarPasaporte(pasaporte2);

console.log("Solo nombre del usuario 1")
console.log(usuario1.nombreUsuario); // Imprime el nombre de usuario del Usuario 1
console.log("Solo perfil del usuario 1")
console.log(usuario1.perfil); // Imprime los detalles del perfil del Usuario 1
console.log("Pasaporte del perfil1 del usuario 1")
console.log(usuario1.perfil.pasaporte); // Imprime los detalles del pasaporte del perfil del Usuario 1
console.log("Solo vemos el usuario 1")
console.log(usuario1); // Imprime los detalles del pasaporte del perfil del Usuario 1
