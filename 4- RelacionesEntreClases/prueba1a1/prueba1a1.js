
let objetoAlumno = [] 
let objetoRegistro = []

   
class Alumno{    
    constructor(alumnoNumero,contrasena)
    {
        this.alumnoNum = alumnoNumero
        this.contrasena = contrasena
        this.registroSalud = null 
    } 

    asignarRegistroDeSalud(registro){
<<<<<<< HEAD
        this.registroSalud = registro  
    }
} 

=======
        this.registroSalud = registro
    }
}
>>>>>>> a01159d8c498baa4f28bbc8450b885c4f7a5a0a0



class Registro{
    constructor(nombreYApellido,email,fechaNacimiento)
    {
        this.nombreApellido = nombreYApellido
        this.email = email
        this.fechaNac = fechaNacimiento
    }
}


function enviar1(){ 

    let formulario1Valido = true         // VALIDACION DE FORMULARIO

    let inputs = document.getElementsByClassName("campo")

    for(let i=0; i<inputs.length; i++){
        inputs[i].classList.remove("error")                       
    }

    for(let i=0; i<inputs.length;i++)
    {
        if(inputs[i].value.trim() === "")                // CONDICIONES
            {
                inputs[i].classList.add("error")
                formulario1Valido = false;
            }
        }  

    let alumnoNumeroReg = /^\d+$/  
    let contrasenaReg = /^[a-zA-Z0-9]+$/

    if(alumnoNumeroReg.test(alumno.value)==false){             // CONDICIONES REG 
        alumno.classList.add("error") 
        formulario1Valido = false}
   
    if(contrasenaReg.test(contrasena.value)==false){
        contrasena.classList.add("error")  
        formulario1Valido = false}  

    if(formulario1Valido == true)     // CONDICIONES      
    {
        crearObjetoAlumno() 
        console.log(objetoAlumno)
    } 
} 


function enviar2(){ 

let formulario2valido = true
 
let inputs2 = document.getElementsByClassName("campo2") 

for(let i=0; i<inputs2.length; i++){
inputs2[i].classList.remove("error")
} 

for(let i=0; i<inputs2.length; i++)
    {
        if(inputs2[i].value.trim() === "") 
        {
        inputs2[i].classList.add("error")
        formulario2valido = false
        }
    } 

    let nomYApellidoReg = /^[a-zA-Z\s]+$/ 

    if(nomYApellidoReg.test(nombreCompleto.value)==false){
        nombreCompleto.classList.add("error")
        formulario2valido=false
    } 
    let emailReg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/


    if(emailReg.test(email.value)==false){
        email.classList.add("error")
        formulario2valido=false 
    } 

    let fechaNacReg = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

    if(fechaNacReg.test(fechaNacimiento.value)==false){
        fechaNacimiento.classList.add("error")
        formulario2valido = false 
    }

    if(formulario2valido === true){
        crearObjetoRegistro() 
        console.log(objetoRegistro)
    } 
}



function crearObjetoAlumno(){
    let numeroDeAlumno = document.getElementById("alumno").value
    let contrasenaAlumno = document.getElementById("contrasena").value 
    
    let nuevoAlumno = new Alumno(numeroDeAlumno,contrasenaAlumno) 
    objetoAlumno.push(nuevoAlumno)
}  


function crearObjetoRegistro(){

    let nombreApellido = document.getElementById("nombreCompleto").value
    let casilla = document.getElementById("email").value
    let fechaDeNacimiento = document.getElementById("fechaNacimiento").value
    let registroNuevo = new Registro(nombreApellido,casilla,fechaDeNacimiento) 
    objetoRegistro.push(registroNuevo)
}



/*function asignar(){ 
   
let alumnoCompleto = new Alumno(objetoAlumno[0].alumnoNum,objetoAlumno[0].contrasena)
let registroCompleto = new Registro(objetoRegistro[0].nombreApellido, objetoRegistro[0].email, objetoRegistro[0].fechaNac)

alumnoCompleto.asignarRegistroDeSalud(registroCompleto)
console.log(alumnoCompleto) 
alert(" Alumno Número: " + objetoAlumno[0].alumnoNum + "\n Nombre y Apellido: " + objetoRegistro[0].nombreApellido + "\n Email: " + objetoRegistro[0].email + "\n Fecha de Nacimiento: " + objetoRegistro[0].fechaNac)
}
*/





function asignar() {
    if (objetoAlumno.length > 0 && objetoRegistro.length > 0) {
        // Itera sobre ambos arreglos para asignar registros a alumnos
        for (let i = 0; i < objetoAlumno.length; i++) {
            if (i < objetoRegistro.length) {
                objetoAlumno[i].asignarRegistroDeSalud(objetoRegistro[i]);
            } else {
                console.log("No hay suficiente registros para el alumno con número:" , objetoAlumno[i].alumnoNumero);
            }
        }
        console.log(objetoAlumno);
    } else {
        console.log("Debe completar ambos formularios antes de asignar.");
    }
}





