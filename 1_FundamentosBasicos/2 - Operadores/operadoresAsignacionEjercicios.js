
/*

//valores iniciales 

totalProductos = 5000 
caja = 600000
ventaUnidad = 1 
reposicionProducto = 1 

// valores de productos a vender 

ventaTelefonoInteligente = 1000
ventaLaptop = 1500 
ventaCamarafotográfica = 800 


// costos de reposicion 

reposicionAuriculares = 50
reposicionTablet = 200 


// desarrollo  

totalProductos -= ventaUnidad * 30;
caja += ventaTelefonoInteligente * 30; 

totalProductos -= ventaUnidad * 20; 
caja += ventaLaptop * 20;

totalProductos -= ventaUnidad * 15; 
caja += ventaCamarafotográfica * 15; 


 caja -= reposicionAuriculares * 40; 
 totalProductos += reposicionProducto * 40; 

 caja -= reposicionTablet * 25; 
 totalProductos += reposicionProducto * 25; 

 // cierre 

 console.log("El stock total de productos es de: " + totalProductos)
 console.log("El cierre de caja suma un total de: " + caja)


 */ 
 
// valores iniciales 

 stock = 5000 
 caja = 600000
 ventaUnidad = 1 
 reposicionUnidad = 1 

 // valores productos a la venta 

 ventaTensiometro = 1200
 ventaTermometroInfrarrojo = 800
 ventaOximetro = 1500 

 // costos de reposicion 

 reposicionPackMascarillas = 30
 reposicionDesinfectante = 100 


 // movimientos del día 

 stock -= ventaUnidad * 30;
 caja += ventaTensiometro * 30; 
 stock -= ventaUnidad * 20;
 caja += ventaTermometroInfrarrojo * 20; 
 stock -= ventaUnidad * 15; 
 caja += ventaOximetro * 15; 

 caja -= reposicionPackMascarillas * 40;
 stock += reposicionUnidad * 40;
 caja -= reposicionDesinfectante * 25;
 stock += reposicionUnidad * 25; 

 console.log("el cierre diario total de la caja es de: " + caja)
 console.log("el total de productos en stock es de: " + stock)

 













































