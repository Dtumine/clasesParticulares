
/*

let generosMusicales = ["pop", "rock", "metal", "hiphop", "punk", "grunge", "rap"]

function mostrarGeneros(){
 for(i=0;i<generosMusicales.length;i++)
 { 
    console.log(generosMusicales[i])
 }  
}  

function mostrarGenerosPorAlert(){
    for(i=0;i<generosMusicales.length;i++){
        alert(generosMusicales[i])
    }
}

function agregarGenero(valorIngresado){
    generosMusicales.push(valorIngresado)
}

function agregarGeneros(valorIngresado1,valorIngresado2){
    generosMusicales.push(valorIngresado1)
    generosMusicales.push(valorIngresado2)
}

function eliminarGeneroMusical(indice){
 generosMusicales.splice(indice,1)
} 

function actualizarGeneroMusical(indice,nuevoGenero){
    generosMusicales[indice] = nuevoGenero
}



function programaPrincipal(){ 
   let opcion; 
   do {
        opcion=prompt("1-AGREGAR 2-MOSTRAR 3-ELIMINAR 4-ACTUALIZAR 5-SALIR")
    
    switch (opcion) {
        case "1": 
        let nuevoGenero = prompt("ingrese el genero musical que desea agregar")
        if(nuevoGenero != "rkt"){
        agregarGenero(nuevoGenero)
        } else{alert("genero musical no aceptado para")}
    
    break;

        case "2": 
        let mostrar = prompt("1-VER LISTADO POR CONSOLA 2-VER LISTADO POR ALERT")
        if (mostrar == "1") {
        mostrarGeneros()
        } else if (mostrar == "2"){ 
        mostrarGenerosPorAlert()
        } else{ alert("el valor ingresado es incorrecto")}
    
    break;

    case "3": 
    let generoAEliminar = parseInt(prompt("ingrese el indice del genero que desea eliminar"))
    eliminarGeneroMusical(generoAEliminar)
        
    break;
    case "4": 
    let indiceAActualizar = parseInt(prompt("ingrese el indice del genero que desea actualizar"))
    let nombreNuevoGenero = prompt("ingrese el nombre del nuevo genero")
    actualizarGeneroMusical(indiceAActualizar,nombreNuevoGenero)
        
    break;

    case "5" : alert("gracias por consultar nuestra lista")

    }  
  
} while ( opcion != "5")  

alert("fin del programa")  

}

programaPrincipal()

*/ 



/*

let autos = ["corolla", "toyota", "fiat", "renault", "peugeot"]


function agregarAuto(autoIngresado){
 autos.push(autoIngresado)

}


function agregarAutos(autoIngresado1,autoIngresado2){
    autos.push(autoIngresado1)
    autos.push(autoIngresado2)
}


function mostrarAutos(){
    for(i=0;i<autos.length;i++){
        console.log(autos[i])
    }
}


function actualizarListaAutos(ubicacionEnLista,nuevoNombreAuto){
    autos[ubicacionEnLista] = nuevoNombreAuto
}


function eliminarAuto(indiceAutoAEliminar){
    autos.splice(indiceAutoAEliminar,1)
} 


function programaPrincipalAutos(){


do { 
      let menuAutosIngreso = prompt("1-Agregar Auto \n 2-Leer Lista \n 3-Actualizar Auto \n 4-Eliminar Auto \n 5-Salir ")

      switch (menuAutosIngreso) {
        
        case "1": 
        let autoIngresado = prompt("Ingrese el nombre del auto que desea ingresar")
        agregarAuto(autoIngresado)
        break;

        case "2": 
        mostrarAutos()
            
            break;
            
        case "3": 
        let ubicacionEnLista = parseInt(prompt("Ingrese el indice del auto a actualizar"))
        let nuevoNombreAuto = prompt("Ingrese el nombre del nuevo auto")
        actualizarListaAutos(ubicacionEnLista,nuevoNombreAuto)
            
            break;

        case "4": 
        let indiceAutoAEliminar = prompt("Ingrese el indice del auto que desea eliminar")
        eliminarAuto(indiceAutoAEliminar)
            
            break;

      
        default: alert("valor incorrecto")
            break;
      } 
  
       continuar = prompt("desea continuar? y/n")
} while (continuar == "y" || continuar == "Y");


} 

programaPrincipalAutos()


*/ 








let jazz = ["miles davis", "chet baker", "john coltrane", "charlie parker", "thelonious monk"] 

function crearNuevoMusico(nombreMusico){
    jazz.push(nombreMusico)
}

function crearNuevosMusicos(nombreMusico1,nombreMusico2,nombreMusico3){
    jazz.push(nombreMusico1)
    jazz.push(nombreMusico2)

}

function leerListaMusicos(){
    for(i=0;i<jazz.length;i++){
        console.log(jazz[i])
    }
}

function leerListaMusicosPorAlert(){
    for(i=0;i<jazz.length;i++){
        alert(jazz[i])
    }
}

function renombrarMusico(indice,nuevoNombreIngresado){
    jazz[indice] = nuevoNombreIngresado
}


function eliminarMusico(indice){
    jazz.splice(indice,1)
}


function reelevamientoDeDatos(){
    let respuestaSalida = prompt("Usted está finalizando su consulta, desea responder un breve test?..y/n")
    if(respuestaSalida == "y" || respuestaSalida == "Y"){
        
        let respuesta = prompt("1-HA QUEDAD SATISFECHO CON NUESTROS SERVICIOS \n 2-NO HA QUEDADO SATISFECHO CON NUESTROS SERVICIOS")

        switch (respuesta) {
            case "1": alert("NOS ALEGRA SABER QUE HA QUEDADO SATISFECHO CON SU CONSULTA")
                
                break;
            case "2": alert("A CONTINUACION LE DEJAMOS UN ESPACIO PARA QUE NOS COMUNIQUE EN QUE NO HEMOS CUMPLIDO CON SU CONSULTA")    
        
            default: 
                break;
        } 
    } else {alert("fin del programa")} 
}  


function programaPrincipalJazz(){
    do {  let opcion = prompt("1-AGREGAR UNO O MÁS MÚSICOS A LA LISTA \n 2-LEER LA LISTA \n 3-ACTUALIZAR LA LISTA \n 4-ELMINAR UN NOMBRE DE LA LISTA \n 5-SALIR")
          switch(opcion){  
           
          case "1":  

          // CREATE 
          let accesoAIngresar = prompt("1-INGRESAR UN NOMBRE \n 2-INGRESAR MÁS DE UN NOMBRE")
          if(accesoAIngresar == "1"){ 
          let ingresarNuevoNombre = prompt("ingrese el nombre del nuevo músico")
          crearNuevoMusico(ingresarNuevoNombre)} 
          else if(accesoAIngresar == "2"){
          let ingresarNuevoNombre1 = prompt("ingreseo el nombre del primer músico a agregar")
          let ingresarNuevoNombre2 = prompt("ingrese el nombre del segundo músico a agregar")
          crearNuevosMusicos(ingresarNuevoNombre1,ingresarNuevoNombre2)    
          } else{
            alert("parametro incorrecto")
          }
          
          break;
          
          case "2":  

          // READ 
          let accesoALecturaDeLista = prompt("1-LEER LISTA POR CONSOLA 2-LEER LISTA POR ALERT")
          if(accesoALecturaDeLista == "1"){
          leerListaMusicos()} 
          else if(accesoALecturaDeLista == "2"){
          leerListaMusicosPorAlert()}
          else{alert("parametro incorrecto")} 

          break;
          
          case "3":  

          //UPDATE 
          let indiceActualizacion = prompt("INDIQUE EL INDICE DEL NOMBRE A ACTUALIZAR")
          let nombreAIngresar = prompt("INGRESE EL NUEVO NOMBRE") 
          renombrarMusico(indiceActualizacion,nombreAIngresar)

          break;
          
          case "4":  

          //DELETE 
           let indiceEliminacion = prompt("INDIQUE EL INDICE DEL NOMBRE A ELIMINAR DE LA LISTA")
           eliminarMusico(indiceEliminacion)

           break;

          case "5":
           // SALIA DEL SISTEMA 

           reelevamientoDeDatos()

           break; 
        } 

        continuar = prompt("desea continuar?  y/n")
    } while (continuar == "y" || continuar == "Y");
}


programaPrincipalJazz()


















