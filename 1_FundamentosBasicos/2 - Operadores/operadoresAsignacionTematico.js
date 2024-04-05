

cantidadProductosAlmacen = 7800
cajaDinero = 400000

// Si se vende se suma y asigna a la caja =  venta * 50
// Si se repone se resta y asigna a la caja = reposicion * 40

ventaChica = 20
ventaMediana = 40
ventaGrande = 100

reposicionChica = 10
reposicionMediana = 50


// Proceso
cantidadProductosAlmacen += reposicionMediana  // 7850
cajaDinero -= reposicionMediana * 40;

// empieza el dia
cantidadProductosAlmacen -= ventaChica // 7830
cajaDinero += ventaChica * 50; // 

cantidadProductosAlmacen -= ventaChica
cajaDinero += ventaChica * 50; 
cantidadProductosAlmacen -= ventaGrande
cajaDinero += ventaGrande * 50;
cantidadProductosAlmacen -= ventaGrande
cajaDinero += ventaGrande * 50; 

cantidadProductosAlmacen -= ventaMediana
cajaDinero += ventaMediana * 50;



// cierra el dia
cantidadProductosAlmacen += reposicionMediana
cajaDinero -= reposicionMediana * 40; 

console.log(cantidadProductosAlmacen)
console.log(cajaDinero) 

