
class Plataforma{
    constructor(nombre,totalTickets)
    { 
        this.nombre = nombre 
        this.totalTickets = totalTickets 
        this.usuarios = []; 
    } 
   

    loginUsuario(parametroNombre, parametroPassword) // COMO IMPRIMIR EL VALOR DEL METODO DENTRO DEL MISMO METODO? 
    {
      return this.usuarios.find(usuario => usuario.nombre === parametroNombre && usuario.password === parametroPassword) 
    } 


    
    altaUsuarioPlataforma(nuevoUsuario)    // COMO LLAMO A UN METODO DESDE UN BUTTON? 
    {   
    this.usuarios.push(nuevoUsuario)
    alert('Bienvenido ' + nuevoUsuario.nombre + ' te has registrado correctamente!')
    console.log(this.usuarios)
    } 
    
    
  }    
