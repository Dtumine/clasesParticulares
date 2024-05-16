function destacarElementos() {
    // Obtener todos los elementos con la clase "destacado"
    var elementosDestacados = document.getElementsByClassName("destacado");

    // Iterar sobre los elementos y agregar una clase adicional
    for (var i = 0; i < elementosDestacados.length; i++) {
        elementosDestacados[i].classList.add("resaltado");
    }
}
   