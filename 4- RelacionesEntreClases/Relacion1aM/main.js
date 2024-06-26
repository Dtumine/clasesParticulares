
let banco = new Banco("Banco Rio", "246",90000000)

let cliente1 = new Cliente("Damian",30451231,6000000)
let cliente2 = new Cliente("Santi",30451441,6000000)

let cliente3 = new Cliente("Juan",44852123,6000000)
let cliente4 = new Cliente("Pedro",45632987,3000000)

let cliente5 = new Cliente("Lucas",33652121,9000000)
let cliente6 = new Cliente("Mateo",24587569,1000000)

banco.agregarCliente(cliente1)
banco.agregarCliente(cliente2)
banco.agregarCliente(cliente3)
banco.agregarCliente(cliente4)
banco.agregarCliente(cliente5)
banco.agregarCliente(cliente6)

banco.mostrarClientes()

let clienteEncontrado = banco.buscarCliente(33652121)
console.log(clienteEncontrado)
banco.eliminarCliente(45632987)
banco.mostrarClientes()

let totalDinero = banco.contarDineroClientes()
console.log(totalDinero)

banco.ordenarClientesPorNombre()
banco.mostrarClientes()




