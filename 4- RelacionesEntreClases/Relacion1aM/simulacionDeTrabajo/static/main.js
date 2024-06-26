
let plataforma1 = new Plataforma('GreenTickets',90000) 


function ingresarALaPlataforma()
{
    let nombreUsuarioIngreso= document.getElementById('nombreIngreso').value
    let passwordUsuarioIngreso = document.getElementById('passwordIngreso').value
    let respuestaLogin = plataforma1.loginUsuario(nombreUsuarioIngreso, passwordUsuarioIngreso)
    if(respuestaLogin)
    {
        alert("Ingreso exitoso") 
    }
    else
    {
        alert("Usuario no encontrado, por favor registrarse o verificar contraseña")
    }
}

function altaUsuario()
{
    let nombreNuevoUsuario = document.getElementById('nombreUsuario').value
    let passwordNuevoUsuario = document.getElementById('passwordUsuario').value
    let nuevoUsuario = new Usuario(nombreNuevoUsuario,passwordNuevoUsuario) 
    plataforma1.altaUsuarioPlataforma(nuevoUsuario)
}
   
