
let arrayContable = [];   // ARRAY
<<<<<<< HEAD
let arrayIngresos = []; 
let arrayEgresos = [];  
=======
let arrayIngresos = [];
let arrayEgresos = []; 
>>>>>>> a01159d8c498baa4f28bbc8450b885c4f7a5a0a0

    
class ConstructorContable{               // CONSTRUCTOR
    constructor(concepto,cantidad,dia,numero,mes,año,categoria){
        this.concepto = concepto
        this.cantidad = cantidad  
        this.dia = dia
        this.numero = numero  
        this.mes = mes
        this.año = año
        this.categoria = categoria

    }
} 
 

function crearObjeto(){                       // CREAR OBJETO 

    let conceptoForm = document.getElementById("opcionesGastos").value
    let cantidadForm = document.getElementById("cantidad").value
    let diaForm = document.getElementById("dia").value
    let numeroForm = document.getElementById("numero").value
    let mesForm = document.getElementById("mes").value
    let añoForm = document.getElementById("año").value
    let categoriaForm = document.getElementById("categoria").value 


    let objetoContable = new ConstructorContable(conceptoForm,cantidadForm,diaForm,numeroForm,mesForm,añoForm,categoriaForm)
    
    arrayContable.push(objetoContable)                  // EJECUCION DE FUNCIONES 
    agregarInformacionATabla(objetoContable)
    actualizarDatosContables()
    sumarIngresos() 
    sumarEgresos()
    sumarTotales()

} 



function enviar(){ 

    let formularioValido = true;

    let inputs = document.getElementsByClassName("campo")           // ENVIAR FORMULARIO 

    for(let i=0; i<inputs.length; i++){
        inputs[i].classList.remove("error")
    } 


  
    for(let i=0; i<inputs.length; i++)          // CONDICION ESPACIO VACÍOS
        {
        if(inputs[i].value.trim() === "")
            {
              inputs[i].classList.add("error")
              formularioValido = false

            }
        }  


        if(cantidad.value<-800000){               // CONDICION CHECK MONTO DEMASIADO BAJO
            cantidad.classList.add("error")
            formularioValido = false
        }

        
        if(cantidad.value>800000){              // CONDICION CHECK MONTO DEMASIADO ALTO
            cantidad.classList.add("error")
            formularioValido = false
        }  


        if(numero.value>31){                  // CONDICION NUMERO DE FECHA 
            numero.classList.add("error")
            formularioValido = false
        }

        let categoriaRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/    // VARIABLES REGEX
        let cantidadRegular = /^\d+$/      
        
    
        if(categoriaRegular.test(categoria.value)==false){      // CONDICION DE CAMPO PARA LA CATEGORIA
            categoria.classList.add("error")
            alert("la categoría no puede contener números")
            formularioValido = false 
        } 

        if(cantidadRegular.test(cantidad.value)==false){      // CONDICION NUMERICA PARA LA CANTIDAD 
            cantidad.classList.add("error")
            alert("la cantidad solo puede ser expresada en números")
            formularioValido = false 
        } 

     

        if(formularioValido == true){          
            crearObjeto() 

            document.getElementById("opcionesGastos").value = ""
            document.getElementById("dia").value = ""
            document.getElementById("numero").value = ""
            document.getElementById("mes").value = ""
            document.getElementById("año").value = ""
            document.getElementById("categoria").value = ""
            document.getElementById("cantidad").value = ""
        } else{
            alert("el objeto no se puede crear, verifique los datos ingresados")
        } 
    } 

  



function mostrar(){
    console.log(arrayContable)                    // FUNCION DEL BOTON "MOSTRAR" 
}



function agregarInformacionATabla(objetoContable)        // CARGAR CELDAS A LA TABLA 
{
    let tabla = document.getElementById("tablaContable")
    let fila = tabla.insertRow(); 

    let celdaConcepto = fila.insertCell(0)
    let celdaCantidad = fila.insertCell(1)
    let celdaDia = fila.insertCell(2)
    let celdaNumero = fila.insertCell(3)
    let celdaMes = fila.insertCell(4)
    let celdaAño = fila.insertCell(5)
    let celdaCategoria = fila.insertCell(6) 

    celdaConcepto.textContent = objetoContable.concepto
    celdaCantidad.textContent = objetoContable.cantidad 
    celdaDia.textContent = objetoContable.dia 
    celdaNumero.textContent = objetoContable.numero
    celdaMes.textContent = objetoContable.mes 
    celdaAño.textContent = objetoContable.año 
    celdaCategoria.textContent = objetoContable.categoria 


    let selectOption = document.getElementById('opcionesGastos')
    let eleccion = selectOption.value; 

    if(eleccion === "egreso")
        {
            celdaCantidad.textContent = ("-" + objetoContable.cantidad)
        }

}



function actualizarDatosContables(){        // FUNCION DE PRUEBA DE ELECCION DE CONCEPTO (INGRESO O EGRESO)
    let selectOption = document.getElementById('opcionesGastos')
    let eleccion = selectOption.value; 
    let numero = document.getElementById("cantidad").value

        if(eleccion === "ingreso"){
            let numeroIngreso = numero 
            arrayIngresos.push(numeroIngreso)
            console.log(arrayIngresos)
        }

        if(eleccion === "egreso")
        {  let numeroEgreso = 0 - numero 
           arrayEgresos.push(numeroEgreso)
           console.log(arrayEgresos)

        } 

        if(eleccion === "egreso")
        {
            
        }
    } 

    function sumarIngresos(){                                    // SUMA DE INGRESOS
        let ingresos = document.getElementById("ingresosTotal")
        let sumaIngresos = 0; 
        for(let i=0; i<arrayIngresos.length; i++)
        {
            sumaIngresos += parseFloat(arrayIngresos[i])
        }

        ingresos.textContent = sumaIngresos;  
    }   
  
    

    function sumarEgresos(){                        // SUMA DE EGRESOS 
        let egresos = document.getElementById("egresosTotal")
        let sumaEgresos = 0; 
        for(let i=0; i<arrayEgresos.length; i++)
            {
                sumaEgresos += parseFloat(arrayEgresos[i])
            } 
            egresos.textContent = sumaEgresos;
        }


    function sumarTotales(){                        // SUMA DE TOTAL NETO 
        let neto = document.getElementById("totalNeto") 
        let totalIngresos = 0;
        let totalEgresos = 0;
        let totalNeto = 0;
        for(let i=0; i<arrayIngresos.length; i++)
            {
              totalIngresos += parseFloat(arrayIngresos[i])
            } 

        for(let i=0; i<arrayEgresos.length; i++)
            {
                totalEgresos += parseFloat(arrayEgresos[i])
            } 

              totalNeto = (totalIngresos + totalEgresos) 
              neto.textContent = totalNeto; 
        
        }
      








