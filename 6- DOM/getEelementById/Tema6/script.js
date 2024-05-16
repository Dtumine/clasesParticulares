function guardarImagen() {
    var input = document.getElementById('inputImagen');
    var contenedor = document.getElementById('contenedorImagen');
  
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var imagen = document.createElement('img');
        imagen.src = e.target.result;
        imagen.style.maxWidth = '100%';
        contenedor.innerHTML = ''; // Limpiar cualquier imagen anterior
        contenedor.appendChild(imagen);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  } 

  