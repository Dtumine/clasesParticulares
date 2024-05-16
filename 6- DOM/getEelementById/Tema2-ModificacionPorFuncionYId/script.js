// Función que cambia el texto del párrafo utilizando getElementById
function cambiarTexto() {
    let elemento = document.getElementById('miElemento');
    if (elemento) {
        elemento.textContent = 'El texto ha cambiado gracias a getElementById!';
    } else {
        alert('Elemento no encontrado');
    }
}
