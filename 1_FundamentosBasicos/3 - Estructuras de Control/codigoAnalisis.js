// Datos del pedido
let totalPedido = 90000;
let esClienteFrecuente = true;
let metodoPago = "tarjeta";


// Descuentos disponibles
const descuentoClienteFrecuente = 0.1;  // 10%
const descuentoMetodoPagoTarjeta = 0.05;  // 5%


// Aplicar descuentos
let descuentoAplicado = 0;


if (totalPedido >= 100) {
  // Descuento por pedido grande
  descuentoAplicado += 0.15;  // 15%
}


if (esClienteFrecuente) {
  // Descuento para clientes frecuentes
  descuentoAplicado += descuentoClienteFrecuente;
}


if (metodoPago === "tarjeta") {
  // Descuento por pago con tarjeta
  descuentoAplicado += descuentoMetodoPagoTarjeta;
}


// Calcular el total con descuento
let totalConDescuento = totalPedido - (totalPedido * descuentoAplicado);


// Mostrar resultados
console.log("Detalles del Pedido:");
console.log("Total del Pedido: $" + totalPedido.toFixed(2));
console.log("Descuento Aplicado: $" + (totalPedido * descuentoAplicado).toFixed(2));
console.log("Total con Descuento: $" + totalConDescuento.toFixed(2));