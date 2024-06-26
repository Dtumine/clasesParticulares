

let pastas = ["ravioles","tallarines","malfattis","ñoquis"]

pastas.forEach(
    plato =>{
        console.log(plato)
    }
)

let platosVacios = new Map()

let platosRellenos = new Map([ ['key1','focaccia'],['key2','pizza'] ])


platosVacios.set('nombre','pizza')
platosVacios.set('detalle','pasta')
platosVacios.set('costo','60')

console.log(platosVacios.get('nombre'))
console.log(platosVacios.get('costo'))

console.log(platosVacios.has('nombre'))
console.log(platosVacios)


platosVacios.forEach((value,key) =>
{
    console.log(key + " : " + value)
}
)

for(let llaves of platosRellenos.keys()){
    console.log(llaves)
}

for(let valores of platosRellenos.values()){
    console.log(valores)
}
 

let traductor = new Map()

traductor.set('comida','food')
traductor.set('car','auto')
traductor.set('window','ventana')
traductor.set('dog','perro')

console.log(traductor)

function translate(palabra){
    return traductor.get(palabra.toLowerCase()) || 'palabra no encontrada';
}

function agregarPalabra(englishWord,SpanishWord){
    traductor.set(englishWord.toLowerCase(),SpanishWord.toLowerCase())

}

agregarPalabra('paper','papel')
agregarPalabra('glass','lentes')

console.log(traductor)
