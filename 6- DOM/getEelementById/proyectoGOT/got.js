let contable = [];
 
class ObjetoContable{
    constructor(concepto,cantidad,dia,mes){
        this.concepto = concepto
        this.cantidad = cantidad
        this.dia = dia 
        this.mes = mes
    }  
}       

function crearObjeto(){ 

    let conceptoForm = document.getElementById('concepto').value
    let cantidadForm = document.getElementById('cantidad').value
    let diaForm = document.getElementById('dia').value
    let mesForm = document.getElementById('mes').value


    let nuevoIngreso = new ObjetoContable(conceptoForm,cantidadForm,diaForm,mesForm)
    
    contable.push(nuevoIngreso) 

} 



function mostrarObjeto(){ 
    
    console.log(contable)
}



/*

function mostrarUltimoPorAlert(){
    alert(" Nombre: " + personajes[personajes.length-1].nombre + "\n Casa: " + personajes[personajes.length-1].casa + "\n Locación: " + personajes[personajes.length-1].locacion + "\n Profesión: " + personajes[personajes.length-1].profesion )
}


function mostrarPorAlert(){ 

    for(let i=0; i<personajes.length; i++){
        alert(" Nombre: " + personajes[i].nombre + "\n Casa: " + personajes[i].casa + "\n Locación: " + personajes[i].locacion + "\n Profesión: " + personajes[i].profesion )
    }

}


*/ 