

function validarFormulario() {
    // Obtener todos los campos del formulario
    var campos = document.getElementsByClassName("campo");

    // Reiniciar los estilos de los campos
    for (var i = 0; i < campos.length; i++) {
        campos[i].classList.remove("error");
    }

    // Validar cada campo
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === '') {
            // Si el campo está vacío, agregar clase de error para resaltarlo
            campos[i].classList.add("error");
        }
    }     
}
