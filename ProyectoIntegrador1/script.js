let nombre = document.getElementById("nombre")
let direccion = document.getElementById("direccionJuridica") 
let telefono = document.getElementById("telefono") 
let presupuesto = document.getElementById("presupuesto") 
let fechaDeFinalizacion = document.getElementById("fechaFin") 
let formulario = document.getElementById("formulario") 




function enviarFormulario(){

    let elementos = document.getElementsByClassName("campo")  // PARA TODOS LOS CAMPOS
    
    for(i=0; i<elementos.length;i++){
        elementos[i].classList.remove("error")      // PARA TODOS LOS CAMPOS
    }

    for(let i=0; i<elementos.length; i++){                  
        if(elementos[i].value.trim() === ""){            // PARA TODOS LOS CAMPOS
            elementos[i].classList.add("error")        
        } 
    }  

    if(nombre.value.length<5){
        nombre.classList.add("error")
        // alert("El nombre debe contener más de 5 caracteres")  // NOMBRE - CONDICION MINIMA DE CARACTERES 
    } 
  

    if(presupuesto.value<1500000){
        presupuesto.classList.add("error")
        // alert("El Presupuesto debe superar los $1500000")  // CONDICION MINIMA DE PRESUPUESTO
    }
    
   document.getElementById("nombre").value = ""
   document.getElementById("direccionJuridica").value = "" 
   document.getElementById("telefono").value = "" 
   document.getElementById("presupuesto").vaue = "" 
   document.getElementById("fechaFin").value = ""
   document.getElementById("formulario").value = ""
    
} 

 
class Cliente{
    constructor(nombre,direccion,telefono,presupuesto,email){
 
         this.nombre = nombre, 
         this.direccion = direccion,
         this.telefono = telefono,
         this.presupuesto = presupuesto,
         this.email = email
    }
   
}









 



 


    
    
    


    
