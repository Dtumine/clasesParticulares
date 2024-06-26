
/*
Enunciado 3: Agenda Telefónica
Crea un Map para almacenar números de teléfono. 
Las claves del mapa serán los nombres de las personas y los valores serán sus números de teléfono. 
Implementa funciones para añadir un nuevo contacto, 
obtener el número de teléfono de un contacto específico y listar todos los contactos con sus números de teléfono.
*/


let agendaTelefonica = new Map() 

function añadirNuevoContacto(key,value){
    agendaTelefonica.set(key,value)
} 


function verNumeroTelefono(key){
console.log(agendaTelefonica.get(key))
} 

añadirNuevoContacto('ff',535636)
console.log(agendaTelefonica)
verNumeroTelefono('ff')