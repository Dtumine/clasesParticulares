
class Usuario{
    constructor(nombre,contrasena){
        this.nombre = nombre 
        this.contrasena = contrasena 
        this.perfil = null 
    } 
    
    asignarPerfil(perfil){
        this.perfil = perfil
    }

} 


class Perfil{
    constructor(nombre,email,fechaNacimiento){
        this.nombre = nombre 
        this.email = email 
        this.fechaNacimiento = fechaNacimiento 


    }
}

let usuario1 = new Usuario ("jperez","1234") 
let usuario2 = new Usuario ("rmartinez","5678")




let perfil1 = new Perfil  ("Juan Perez","juan.perez@example.com","1980-05-15")
let perfil2 = new Perfil ("Rodrigo Martinez","rodrigo.martinez@example.com","1975-08-20")


usuario1.asignarPerfil(perfil1)
console.log(usuario1)
usuario2.asignarPerfil(perfil2)
console.log(usuario2) 
