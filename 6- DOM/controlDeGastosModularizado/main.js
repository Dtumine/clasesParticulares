import { arrayContable, crearObjeto } from './manejadorArrays.js';
import { validarFormulario } from './validadorDelForm.js';
import { agregarInformacionATabla, mostrarArray } from './manejadorDeTabla.js';
import { actualizarDatosContables, sumarIngresos, sumarEgresos, sumarTotales } from './calculos.js';

document.getElementById('boton').addEventListener('click', enviar);
document.getElementById('boton').addEventListener('click', mostrar);

function enviar() {
    let inputs = document.getElementsByClassName("campo");
    let cantidad = document.getElementById("cantidad");
    let numero = document.getElementById("numero");
    let categoria = document.getElementById("categoria");

    if (validarFormulario(inputs, cantidad, numero, categoria)) {
        let conceptoForm = document.getElementById("opcionesGastos").value;
        let cantidadForm = parseFloat(cantidad.value);
        let diaForm = document.getElementById("dia").value;
        let numeroForm = numero.value;
        let mesForm = document.getElementById("mes").value;
        let añoForm = document.getElementById("año").value;
        let categoriaForm = categoria.value;

        let objetoContable = crearObjeto(conceptoForm, cantidadForm, diaForm, numeroForm, mesForm, añoForm, categoriaForm);
        agregarInformacionATabla(objetoContable);
        actualizarDatosContables(conceptoForm, cantidadForm);
        sumarIngresos();
        sumarEgresos();
        sumarTotales();

        document.getElementById("opcionesGastos").value = "";
        document.getElementById("dia").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("mes").value = "";
        document.getElementById("año").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("cantidad").value = "";
    } else {
        alert("El objeto no se puede crear, verifique los datos ingresados");
    }
}

function mostrar() {
    mostrarArray(arrayContable);
}
