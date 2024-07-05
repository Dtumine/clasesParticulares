let tickets =  [];


class Ticket{
    constructor(nombreYApellido,email,show,total){ 
   
    this.nombreYApellido = nombreYApellido
    this.email = email 
    this.show = show
    this.total = total 
    

    }
} 
 

class Ticket{
    constructor(nombreYApellido,email,show,total){
   
    this.nombreYApellido = nombreYApellido
    this.email = email 
    this.show = show
    this.total = total 
     }
} 




 function imprimirTicket(){  

    let nombreApellido = document.getElementById('nombreYApellido').value
    let email = document.getElementById('email').value
    let show = document.getElementById('show').value
    let total = document.getElementById('total').value


    let nuevoTicket = new Ticket(nombreApellido,email,show,total) 

    tickets.push(nuevoTicket)
    console.log(tickets) 

 } 

console.log('holaaa') 


