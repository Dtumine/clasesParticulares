import { arrayIngresos, arrayEgresos } from './manejadorArrays.js';

export function actualizarDatosContables(concepto, cantidad) {
    if (concepto === "ingreso") {
        arrayIngresos.push(cantidad);
    } else if (concepto === "egreso") {
        arrayEgresos.push(0 - cantidad);
    }
}

export function sumarIngresos() {
    let ingresos = document.getElementById("ingresosTotal");
    let sumaIngresos = 0;
    for (let i = 0; i < arrayIngresos.length; i++) {
        sumaIngresos += parseFloat(arrayIngresos[i]);
    }
    ingresos.textContent = sumaIngresos;
}

export function sumarEgresos() {
    let egresos = document.getElementById("egresosTotal");
    let sumaEgresos = 0;
    for (let i = 0; i < arrayEgresos.length; i++) {
        sumaEgresos += parseFloat(arrayEgresos[i]);
    }
    egresos.textContent = sumaEgresos;
}

export function sumarTotales() {
    let neto = document.getElementById("totalNeto");
    let totalIngresos = arrayIngresos.reduce((a, b) => a + parseFloat(b), 0);
    let totalEgresos = arrayEgresos.reduce((a, b) => a + parseFloat(b), 0);
    neto.textContent = totalIngresos + totalEgresos;
}
