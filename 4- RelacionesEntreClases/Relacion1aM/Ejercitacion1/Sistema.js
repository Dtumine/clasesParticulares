class Sistema{
        constructor(){
            this.usuarios = []
        } 


        ingresarUsuario(usuario){
            this.usuarios.push(usuario)
        }

        loguearUsuario(contrasenaParametro){
          return this.usuarios.find(usuario => usuario.contrasena === contrasenaParametro) 
        }

        
}


