export let arrayContable = [];
export let arrayIngresos = [];
export let arrayEgresos = [];

export class ConstructorContable { 
    constructor(concepto, cantidad, dia, numero, mes, año, categoria) {
        this.concepto = concepto;
        this.cantidad = cantidad;
        this.dia = dia;
        this.numero = numero;
        this.mes = mes;
        this.año = año;
        this.categoria = categoria;
    }
}

export function crearObjeto(concepto, cantidad, dia, numero, mes, año, categoria) {
    let objetoContable = new ConstructorContable(concepto, cantidad, dia, numero, mes, año, categoria);
    arrayContable.push(objetoContable);
    return objetoContable;
}
