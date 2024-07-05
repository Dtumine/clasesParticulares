let userRoles = new Map();

// Añadir elementos al mapa
userRoles.set('admin', 'Administrator');
userRoles.set('editor', 'Content Editor');
userRoles.set('viewer', 'Content Viewer');

// Obtener un valor
console.log(userRoles.get('editor')); // 'Content Editor'

// Comprobar si una clave existe
console.log(userRoles.has('viewer')); // true

// Iterar sobre el mapa
<<<<<<< HEAD
userRoles.forEach((value, key) => {  
=======
userRoles.forEach((value, key) => {
>>>>>>> a01159d8c498baa4f28bbc8450b885c4f7a5a0a0
  console.log(`${key}: ${value}`);
});

// Obtener el tamaño del mapa
console.log(userRoles.size); // 3

// Eliminar un elemento
userRoles.delete('editor');
console.log(userRoles.size); // 2

// Limpiar el mapa
userRoles.clear();
console.log(userRoles.size); // 0
