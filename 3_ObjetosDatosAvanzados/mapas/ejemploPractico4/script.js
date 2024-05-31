// Crear el mapa de precios de frutas
let fruitPrices = new Map();

// Añadir pares clave-valor (nombre de la fruta y su precio)
fruitPrices.set('Apple', 1.5);
fruitPrices.set('Banana', 0.75);
fruitPrices.set('Cherry', 2.0);
fruitPrices.set('Date', 3.0);
fruitPrices.set('Elderberry', 1.2);

// Función para obtener el precio de una fruta
function getFruitPrice(fruit) {
  if (fruitPrices.has(fruit)) {
    return `El precio de ${fruit} es $${fruitPrices.get(fruit)}.`;
  } else {
    return `Lo siento, no tenemos el precio de ${fruit}.`;
  }
}

// Probar la función de obtención de precio
console.log(getFruitPrice('Apple'));      // El precio de Apple es $1.5.
console.log(getFruitPrice('Banana'));     // El precio de Banana es $0.75.
console.log(getFruitPrice('Mango'));      // Lo siento, no tenemos el precio de Mango.

// Imprimir todos los precios de las frutas
fruitPrices.forEach((price, fruit) => {
  console.log(`El precio de ${fruit} es $${price}.`);
});
