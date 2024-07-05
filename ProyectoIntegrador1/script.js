
      
function enviarFormulario(){    

    let elementos = document.getElementsByClassName("campo")  // PARA TODOS LOS CAMPOS
    
    for(i=0; i<elementos.length;i++){
        elementos[i].classList.remove("error")      // PARA TODOS LOS CAMPOS
    }

    let formularioValido = true; // creamos una variable que empieza siendo verdadero, si surge "error" esta variable la pasamos a falsa

    for(let i=0; i<elementos.length; i++){                  
        if(elementos[i].value.trim() === ""){            // PARA TODOS LOS CAMPOS
            elementos[i].classList.add("error")  
            formularioValido = false      
        } 
    }  
    let nombreEmpresaRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ.\s]+$/
    if(nombre.value.length<3 || nombreEmpresaRegular.test(nombre.value)==false){
        nombre.classList.add("error")
        alert("El nombre debe contener más de 2 caracteres y no puede contener numeros")  // NOMBRE - CONDICION MINIMA DE CARACTERES 
        formularioValido = false    
    } 
    

    if(presupuesto.value<1500000){
        presupuesto.classList.add("error")
        alert("El Presupuesto debe superar los $1500000")  // CONDICION MINIMA DE PRESUPUESTO
        formularioValido = false    
    }
    
    if(formularioValido == true)
        {
            crearObjetoCliente()

            
        document.getElementById("nombre").value = ""
        document.getElementById("direccionJuridica").value = "" 
        document.getElementById("telefono").value = "" 
        document.getElementById("presupuesto").value = ""
        document.getElementById("email").value = "" 
        document.getElementById("fechaFin").value = ""
        document.getElementById("formulario").value = ""

        }
        else
        {
            alert("Empresa no creada")
        }
    // REINICIO DE INPUTS 

} 

 


// ARRAY DE CLIENTES

let clientes = []; 

 
// CREACION DE LOS OBJETOS CLIENTE 

class EmpresaCliente{
    constructor(nombre,direccion,telefono,presupuesto,email, fecha){
 
         this.nombre = nombre, 
         this.direccion = direccion,
         this.telefono = telefono,
         this.presupuesto = presupuesto,
         this.email = email
         this.fecha = fecha
    }  

}

 function crearObjetoCliente(){             // CREACION DEL OBJETO

    let nombreEmpresa = document.getElementById("nombre").value
    let direccionEmpresa = document.getElementById("direccionJuridica").value
    let telefonoEmpresa = document.getElementById("telefono").value
    let presupuestoEmpresa = document.getElementById("presupuesto").value
    let emailEmpresa = document.getElementById("email").value
    let fechaFinal = document.getElementById("fechaFin").value

    
    let objetoCliente = new EmpresaCliente(nombreEmpresa,direccionEmpresa,telefonoEmpresa,presupuestoEmpresa,emailEmpresa,fechaFinal)  
    clientes.push(objetoCliente)
    agregarEmpresaATabla(objetoCliente)
    actualizarPresupuestoTotal()
    sumarClientes()
    console.log(clientes) 
}

function actualizarPresupuestoTotal()
{
    let presupuestotal = document.getElementById("presupuestotal")
    let total = 0
    for(i=0; i<clientes.length; i++){
        total += parseFloat(clientes[i].presupuesto)  
    }
    presupuestotal.textContent = total

}

function sumarClientes(){
    let clientesTotal = document.getElementById("clientesEnTotal")
    let totalClientes = clientes.length
    clientesTotal.textContent = totalClientes  
}


function agregarEmpresaATabla(objetoCliente)
{
    let tabla = document.getElementById("tablaEmpresas")
    let fila = tabla.insertRow(); // row -> fila

    let celdaNombre = fila.insertCell(0); // insertar una celda en la fila en la posicion 0
    let celdaDireccion = fila.insertCell(1);
    let celdaTelefono = fila.insertCell(2); 
    let celdaPresupuesto = fila.insertCell(3);
    let celdaMail = fila.insertCell(4);
    let celdaFechaFinalizacion = fila.insertCell(5);

    celdaNombre.textContent = objetoCliente.nombre
    celdaDireccion.textContent = objetoCliente.direccion
    celdaTelefono.textContent = objetoCliente.telefono
    celdaPresupuesto.textContent = objetoCliente.presupuesto
    celdaMail.textContent = objetoCliente.email
    celdaFechaFinalizacion.textContent = objetoCliente.fecha


}
