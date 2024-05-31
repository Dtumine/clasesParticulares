export function agregarInformacionATabla(objetoContable) {
    let tabla = document.getElementById("tablaContable");
    let fila = tabla.insertRow();

    let celdaConcepto = fila.insertCell(0);
    let celdaCantidad = fila.insertCell(1);
    let celdaDia = fila.insertCell(2);
    let celdaNumero = fila.insertCell(3);
    let celdaMes = fila.insertCell(4);
    let celdaAño = fila.insertCell(5);
    let celdaCategoria = fila.insertCell(6);

    celdaConcepto.textContent = objetoContable.concepto;
    celdaCantidad.textContent = objetoContable.cantidad;
    celdaDia.textContent = objetoContable.dia;
    celdaNumero.textContent = objetoContable.numero;
    celdaMes.textContent = objetoContable.mes;
    celdaAño.textContent = objetoContable.año;
    celdaCategoria.textContent = objetoContable.categoria;

    let selectOption = document.getElementById('opcionesGastos');
    let eleccion = selectOption.value;

    if (eleccion === "egreso") {
        celdaCantidad.textContent = ("-" + objetoContable.cantidad);
    }
}

export function mostrarArray(arrayContable) {
    console.log(arrayContable);
}
