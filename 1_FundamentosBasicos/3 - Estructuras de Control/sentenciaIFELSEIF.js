let hora = 15;


if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

let puntaje = 75;

if (puntaje >= 90) {
  console.log("A");
} else if (puntaje >= 80) {
  console.log("B");
} else if (puntaje >= 70) {
  console.log("C");
} else {
  console.log("D");
}


// Ejercicio: 
/*
Un termotanque inteligente informa cual es el estado de temperatura del agua:
Si el agua es mayor a 85 el mensaje sera muy caliente
y si no, Si el agua es mayor a 60 el mensaje sera caliente
y si no, Si el agua es mayor a 40 el mensaje sera templado
y si no, Si el agua es mayor a 35 el mensaje sera tibia
y si no, Si el agua es mayor a 20 el mensaje sera fria
y si no, si el agua es menor, el mensaje sera muy fria
*/




let agua = 70
if(agua > 85){
    console.log("el agua está muy caliente")  
} else if(agua > 60){
    console.log("el agua está caliente")
} else if (agua > 40){
    console.log("el agua está templada")
} else if(agua > 35){
    console.log("el agua está tibia")
} else if(agua > 20){
    console.log("el agua está fría")
} else{
    console.log("el agua está muyb fría")
}

    
