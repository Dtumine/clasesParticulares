
/*

1 -Un almacén de artículos electrónicos tiene una cantidad inicial de 5000 productos,
 con una caja inicial de $600,000. Durante el proceso del día,
  se realizaron ventas de 30 teléfonos inteligentes, 20 laptops y 15 cámaras fotográficas.
   Además, se llevó a cabo la reposición de 40 auriculares y 25 tabletas. 
   Cada venta de teléfono inteligente suma $1000 a la caja, las laptops aportan $1500 cada una,
    y las cámaras fotográficas generan $800 de ingreso por unidad vendida.
     Por otro lado, cada reposición de auriculares resta $50 de la caja,
     y la reposición de tabletas disminuye $200 por unidad reposicionada.
     
Al final del día, se actualiza la cantidad de productos en el almacén y el saldo de la caja. ¿Cuántos productos quedan en el almacén y cuál es el saldo final de la caja después de todas las transacciones?

*/ 


// valores iniciales 

/*
stock = 5000 
cajaInicial = 600000 
producto = 1 

// costos reposicion 
reposicionAuriculares = 50
reposicionTablet = 200
// precios de venta 
ventaTelefono = 1000
ventaLaptop = 1500 
ventaCamara = 800

// desarrollo del dia 
stock -= producto * 30
cajaInicial += ventaTelefono * 30
stock -= producto * 20 
cajaInicial += ventaLaptop * 20
stock -= producto * 15 
cajaInicial += ventaCamara * 15 

cajaInicial -= reposicionAuriculares * 40 
stock += producto * 40
cajaInicial -= reposicionTablet * 25 
stock += producto * 25 

console.log("el total del stock es de:.." + stock +
" y el total de la caja es de..." + cajaInicial) 

// 665000 y 5000 

*/ 

/*
stock = 5000;
caja = 600000; 
productoUnidad = 1; 

// costos de reposicion

reposicionAuriculares = 50;  
reposicionTablets = 200;  

// valores a la venta 

ventaTelefonoInteligente = 1000;
ventaLaptop = 1500;    
ventaCamaraFotografica = 800;  

// desarrollo del dia 

stock -= productoUnidad * 30 
caja += ventaTelefonoInteligente * 30 

stock -= productoUnidad * 20
caja += ventaLaptop * 20

stock -= productoUnidad * 15
caja += ventaCamaraFotografica * 15 

// reposiciones 

caja -= reposicionAuriculares * 40
stock += productoUnidad * 40

caja -= reposicionTablets * 25
stock += productoUnidad * 25 

console.log("El total del cierre de caja del día es de $" + caja + " y la cantidad de productos en el stock es de " + stock + " productos.")




/*
2 - Un almacén de dispositivos médicos inicia el día con 5000 unidades de productos diversos y cuenta con una caja inicial de $600,000. A lo largo del día, se registraron ventas de 30 tensiómetros, 20 termómetros infrarrojos y 15 oxímetros de pulso. Además, se llevó a cabo la reposición de 40 paquetes de mascarillas y 25 unidades de desinfectante de manos. Cada venta de tensiómetro contribuye con $1200 a la caja, los termómetros infrarrojos aportan $800 cada uno, y las ventas de oxímetros de pulso generan $1500 por unidad vendida. Por otro lado, cada reposición de mascarillas resta $30 de la caja, y la reposición de desinfectante de manos disminuye $100 por unidad reposicionada.
Al cerrar el día, se requiere determinar cuántos productos quedan en el almacén y cuál es el saldo final de la caja después de todas las transacciones. Realiza los cálculos correspondientes y proporciona la respuesta al final del día.

*/


// valores iniciales 

/*

stock = 5000;
caja = 600000;
productoUnidad = 1;

//valores de venta 

ventaTensiometro = 1200;
ventaTermometro = 800;
ventaOximetro = 1500; 

// costos de reposicion

costoReposicionMascarillas = 30;
costoReposicionDesinfectante = 100;

//movimientos del dia 

caja += ventaTensiometro * 30; 
stock -= productoUnidad * 30; 

caja += ventaTermometro * 20;
stock -= productoUnidad * 20; 

caja += ventaOximetro * 15;
stock -= productoUnidad * 15;

caja -= costoReposicionMascarillas * 40;
stock += productoUnidad * 40; 

caja -= costoReposicionDesinfectante * 25;
stock += productoUnidad * 25; 




console.log("El total del dinero en caja es de $" + caja + " y la cantidad de productos en stock es de " + stock + " productos")


*/



/*
2 - Un almacén de dispositivos médicos inicia el día con 5000 unidades
 de productos diversos y cuenta con una caja inicial de $600,000.
  A lo largo del día, se registraron ventas de 30 tensiómetros, 
  20 termómetros infrarrojos y 15 oxímetros de pulso.
  Además, se llevó a cabo la reposición de 40 paquetes 
  de mascarillas y 25 unidades de desinfectante de manos. 
  Cada venta de tensiómetro contribuye con $1200 a la caja, 
  los termómetros infrarrojos aportan $800 cada uno, 
  y las ventas de oxímetros de pulso generan $1500 por unidad vendida.
   Por otro lado, cada reposición de mascarillas resta $30 de la caja, 
   y la reposición de desinfectante de manos disminuye $100 por unidad reposicionada.
Al cerrar el día, se requiere determinar cuántos productos quedan en el almacén
 y cuál es el saldo final de la caja después de todas las transacciones. 
 Realiza los cálculos correspondientes y proporciona la respuesta al final del día.

*/


/*

stock = 5000 
caja = 600000
UnidadProducto = 1

ventaTensiometro = 1200
ventaTermometroInfrarrojo = 800
ventaOximetro = 1500

costoReposicionMascarillas = 30
costoReposicionDesinfectante = 100 


stock -= UnidadProducto * 30;
caja += ventaTensiometro * 30;
stock -= UnidadProducto * 20;
caja += ventaTermometroInfrarrojo * 20;
stock -= UnidadProducto * 15;
caja += ventaOximetro * 15; 

stock += UnidadProducto * 40;
caja -= costoReposicionMascarillas * 40;
stock += UnidadProducto * 25;
caja -= costoReposicionDesinfectante * 25;

console.log("el total de dinero en la caja al cerrar el día es de " + caja + " y el total de productos en stock es de " + stock)




*/


/*
2 - Un almacén de dispositivos médicos inicia el día con 5000 unidades
 de productos diversos y cuenta con una caja inicial de $600,000.
  A lo largo del día, se registraron ventas de 30 tensiómetros, 
  20 termómetros infrarrojos y 15 oxímetros de pulso.
  Además, se llevó a cabo la reposición de 40 paquetes 
  de mascarillas y 25 unidades de desinfectante de manos. 
  Cada venta de tensiómetro contribuye con $1200 a la caja, 
  los termómetros infrarrojos aportan $800 cada uno, 
  y las ventas de oxímetros de pulso generan $1500 por unidad vendida.
   Por otro lado, cada reposición de mascarillas resta $30 de la caja, 
   y la reposición de desinfectante de manos disminuye $100 por unidad reposicionada.
Al cerrar el día, se requiere determinar cuántos productos quedan en el almacén
 y cuál es el saldo final de la caja después de todas las transacciones. 
 Realiza los cálculos correspondientes y proporciona la respuesta al final del día.

*/


/*

stock = 5000
caja = 600000
productoPorUnidad = 1 

// precios de venta 

ventaTensiometro = 1200
ventaTemometro = 800
ventaOximetro = 1500

// costos de reposicion 

reposicionMascarillas = 30
reposicionDesinfectante = 100

// desarrollo del dia 

stock -= productoPorUnidad * 30
caja += ventaTensiometro * 30 
stock -= productoPorUnidad * 20
caja += ventaTemometro * 20
stock -= productoPorUnidad * 15
caja += ventaOximetro * 15
stock += productoPorUnidad * 40
caja -= reposicionMascarillas * 40
stock += productoPorUnidad * 25
caja -= reposicionDesinfectante * 25


console.log("el total del stock es de: " + stock +
" y el total de la caja es de: " + caja) 

*/ 
































