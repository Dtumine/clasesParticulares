let tickets = [] 

  
class Ticket{
    constructor(nombreApellido,email,show,ubicacion,medioDePago){ 
0
        this.nombreApellido = nombreApellido 
        this.email = email 
        this.show = show 
        this.ubicacion = ubicacion 
        this.medioDePago = medioDePago
    }
} 

  

function enviar()
{  
    let elementos = document.getElementsByClassName("campo")  // PARA TODOS LOS CAMPOS 

    let nombreCelda = document.getElementById('nombreYApellido') 
    let emailCelda = document.getElementById('email') 
    let tarjetaCelda = document.getElementById('numeroTarjeta')
    
    for(i=0; i<elementos.length;i++){
        elementos[i].classList.remove("error")   
    } 

    let camposValidados = true; 


    for(let i=0; i<elementos.length; i++){     

        if(elementos[i].value.trim() === ""){            // CHECK DE CASILLAS COMPLETAS 
            elementos[i].classList.add("error")  
            camposValidados = false
        }  
    }  
   
    let nombreYApellidoElemento = /^[A-Za-z\s]+$/ 
    if(nombreCelda.value.length<4 || nombreYApellidoElemento.test(nombreCelda.value)== false)   // CHECK DE EXPRESION REGULAR
        {
            nombreCelda.classList.add("error") 
            alert("el nombre debe contener más de 4 dígitos y no puede contener números") 
            camposValidados = false
        }  


    let emailElemento = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ 
    if(emailElemento.test(emailCelda.value)==false) // CHECK EXPRESION REGULAR EMAIL 
        {
            emailCelda.classList.add('error')
            alert('los valores ingresados en el mail son incorrectos')
            camposValidados = false
        } 

    let tarjetaCreditoElemento = /^[A-Za-z\s]+$/ 
    if(tarjetaCreditoElemento.test(tarjetaCelda.value)==false)
    {
        tarjetaCelda.classList.add('error') 
        alert('Valores Incorrectos')
        camposValidados = false
    }    
     

        if(camposValidados == true)
            {
                generarObjetoTicket() 

                    
               document.getElementById("nombreYApellido").value = ""     // LIMPIEZA DE CAMPOS
               document.getElementById("email").value = ""                 
               document.getElementById("show").value = "" 
               document.getElementById("ubicacionYPrecio").value = ""
               document.getElementById("medioDePago").value = "" 
            }

}




function generarObjetoTicket(){ 
    let nombreApellidoTicket = document.getElementById('nombreYApellido').value
    let emailTicket = document.getElementById('email').value
    let showTicket = document.getElementById('show').value
    let ubicacionTicket = document.getElementById('ubicacionYPrecio').value
    let medioTicket = document.getElementById('medioDePago').value 

   let nuevoTicket = new Ticket(nombreApellidoTicket,emailTicket,showTicket,ubicacionTicket,medioTicket) 

   tickets.push(nuevoTicket) 
   imprimirTicket(nuevoTicket)
   console.log(tickets)    
  
   
   
} 

function imprimirTicket(nuevoTicket){    

    /*

       // INSERTA LAS CELDAS EN LA PLANILLA
    
 let newRow = document.createElement('tr') 
 let firstCell = document.createElement('td')
 let secondCell = document.createElement('td')
 let thirdCell = document.createElement('td')
 let fourthCell = document.createElement('td')
 let fifthCell = document.createElement('td')  

 let nombreApellido = document.createElement('p');
 nombreApellido.innerText = nuevoTicket.nombreApellido
 firstCell.appendChild(nombreApellido) 
 newRow.appendChild(firstCell) 
 tabla.appendChild(newRow)
 
*/

    let tabla = document.getElementById('tablaTickets');
    let fila = tabla.insertRow();

   
    let celdaNombreApellido = fila.insertCell(0)
    let celdaEmail = fila.insertCell(1)
    let celdaShow = fila.insertCell(2)
    let celdaUbicacion = fila.insertCell(3)
    let celdaMedioDePago = fila.insertCell(4) 

    celdaNombreApellido.textContent = nuevoTicket.nombreApellido 
    celdaEmail.textContent = nuevoTicket.email 
    celdaShow.textContent = nuevoTicket.show 
    celdaUbicacion.textContent = nuevoTicket.ubicacion 
    celdaMedioDePago.textContent = nuevoTicket.medioDePago 

}



