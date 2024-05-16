document.addEventListener('DOMContentLoaded', function() {
    // Acceso al botón y al párrafo por su ID
    const boton = document.getElementById('boton');
    const texto = document.getElementById('texto');

    // Manejo de eventos: escuchando el evento 'click'
    boton.addEventListener('click', function() {
        // Cambia la clase del párrafo para aplicar el estilo definido
        texto.classList.toggle('highlight');
    });
});
