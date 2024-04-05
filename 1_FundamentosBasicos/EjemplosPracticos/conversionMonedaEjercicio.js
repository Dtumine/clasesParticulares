
let respuestaaa;
let opcionnn;
let ingreso;

do{ 
    ingreso = prompt("desea ingresar a las opciones? si/no")
    if(ingreso=="si"){

    opcionnn = prompt("ingrese la opcion 1, 2 o 3")

    switch (opcionnn) {
        case "1":
            alert("ELIGIO LA OPCION 1")
            break;
           
        case "2":
            alert("ELIGIO LA OPCION 2")
            break;

        case "3":
            alert("ELIGIO LA OPCION 3")
            
            break;

        default: alert("OPCION INVALIDA")
          
 
    }} else{ alert("no ingresa a las opciones")} // finaliza el switch y el ELSE va ahí (dentro del DO)

      respuestaaa = prompt("desea continuar? si/no") // se vuelve a preguntar variable respuestaa dentro del DO  
    
    } while (respuestaaa == "si") 
      alert("FIN DEL PROGRAMA")


