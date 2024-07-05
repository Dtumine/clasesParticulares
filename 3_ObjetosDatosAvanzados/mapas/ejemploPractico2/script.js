// Crear el mapa traductor
let translator = new Map();

// Añadir pares clave-valor (palabra en inglés y su traducción al español)
translator.set('hello', 'hola');
translator.set('world', 'mundo');
translator.set('cat', 'gato');
translator.set('dog', 'perro');
<<<<<<< HEAD
translator.set('house', 'casa');     
=======
translator.set('house', 'casa');
>>>>>>> a01159d8c498baa4f28bbc8450b885c4f7a5a0a0
translator.set('food', 'comida');

// Función para traducir una palabra utilizando el mapa
function translate(word) {
  return translator.get(word.toLowerCase()) || 'Translation not found';
}

// Probar la función de traducción
console.log(translate('hello')); // 'hola'
console.log(translate('world')); // 'mundo'
console.log(translate('dog')); // 'perro'
console.log(translate('unknown')); // 'Translation not found'

// Función para añadir una nueva traducción al mapa
function addTranslation(englishWord, spanishWord) {
  translator.set(englishWord.toLowerCase(), spanishWord.toLowerCase());
}

// Añadir una nueva traducción
addTranslation('computer', 'computadora');
console.log(translate('computer')); // 'computadora'

// Mostrar todas las traducciones del mapa
translator.forEach((spanish, english) => {
  console.log(`${english}: ${spanish}`);
});
