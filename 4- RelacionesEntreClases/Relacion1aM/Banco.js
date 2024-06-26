class Banco
{
    constructor(nombre, sucursal, cajaTotal)
    {
        this.nombre = nombre
        this.sucursal = sucursal
        this.cajaTotal = cajaTotal
        this.clientes = []
    }

    // metodos: acciones que puede cometer la clase con la que estoy trabajando
    agregarCliente(cliente)
    {
        this.clientes.push(cliente)
    }

    mostrarClientes()
    {
        this.clientes.forEach(cliente => {
            console.log("Nombre: " + cliente.nombre + " DNI: " + cliente.dni + " Caja: "+ cliente.caja)
        });
    }
 
    buscarCliente(dniParametro)
    {
       return this.clientes.find(cliente => cliente.dni === dniParametro)
        
    }

    eliminarCliente(dniParametro)
    {
        this.clientes = this.clientes.filter(cliente => cliente.dni !== dniParametro)
    }

    contarDineroClientes()
    {
        let total = 0;
        this.clientes.forEach(cliente =>
            {
                total += cliente.caja
            }
        );
        return total
    }

    ordenarClientesPorNombre()
    {
        this.clientes.sort((cliente1, cliente2) => cliente1.nombre.localeCompare(cliente2.nombre))
    }
}