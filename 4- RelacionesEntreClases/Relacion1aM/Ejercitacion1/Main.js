let sistema = new Sistema()

let usuario1 = new Usuario("damian",123456)
let usuario2 = new Usuario("juan", 657898)

sistema.ingresarUsuario(usuario1)
sistema.ingresarUsuario(usuario2)
console.log(sistema.usuarios)

let usuarioEncontrado = sistema.loguearUsuario(123456)
console.log(usuarioEncontrado)
let usuarioEncontrado2 = sistema.loguearUsuario(636336)
console.log(usuarioEncontrado2)

