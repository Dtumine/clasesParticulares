
/*
// Crear un array de strings
let fruits = []
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Imprimir el array
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

// Acceder a un elemento del array
console.log(fruits[0]); // 'Apple'
console.log(fruits[2]); // 'Cherry'

// Agregar un nuevo elemento al array
fruits.push('Fig');
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig']

// Eliminar el último elemento del array
fruits.pop();
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

// Iterar sobre el array
fruits.forEach(fruit => {
  console.log(fruit);
});
*/


let mapaVacio = new Map()

//lista = [value, value, value, value]
// map = [{key:value}, {key:value}]
let mapaRelleno = new Map([['key1', 'value1'],['key2', 'value2'] ])


mapaVacio.set('nombre','damian')
mapaVacio.set('edad',40)
mapaVacio.set('tieneTrabajo',true)
console.log(mapaVacio.size)
console.log(mapaVacio)

console.log(mapaVacio.get('nombre'))
console.log(mapaVacio.has('altura'))
console.log(mapaVacio.has('edad'))
mapaVacio.delete('edad')
console.log(mapaVacio.has('edad'))


console.log(mapaVacio)
//mapaVacio.clear()
//console.log(mapaVacio)
//console.log(mapaVacio.size)

console.log("USANDO FOREACH")
mapaVacio.forEach((value, key) =>
    {
        console.log(key + " : " + value)
    }

)

// for --- of
console.log("USANDO for..of")
for (let clave of mapaVacio.keys()) {
    console.log(clave);
  }

  console.log("USANDO for..of")
for (let valor of mapaVacio.values()) {
    console.log(valor);
  }

