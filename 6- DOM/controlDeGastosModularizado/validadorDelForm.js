export function validarFormulario(inputs, cantidad, numero, categoria) {
    let formularioValido = true;

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            inputs[i].classList.add("error");
            formularioValido = false;
        }
    }

    if (cantidad.value < -800000 || cantidad.value > 800000) {
        cantidad.classList.add("error");
        formularioValido = false;
    }

    if (numero.value > 31) {
        numero.classList.add("error");
        formularioValido = false;
    }

    let categoriaRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let cantidadRegular = /^\d+$/;

    if (!categoriaRegular.test(categoria.value)) {
        categoria.classList.add("error");
        alert("La categoría no puede contener números");
        formularioValido = false;
    }

    if (!cantidadRegular.test(cantidad.value)) {
        cantidad.classList.add("error");
        alert("La cantidad solo puede ser expresada en números");
        formularioValido = false;
    }

    return formularioValido;
}


