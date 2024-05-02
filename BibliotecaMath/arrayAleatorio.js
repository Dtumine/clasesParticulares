let arrayDeAleatorios =[]

for (let index = 0; index < 10; index++) {
    arrayDeAleatorios[index] = Math.round(Math.random()*1000)
}

console.log(arrayDeAleatorios)
console.log(...arrayDeAleatorios)


console.log("El maximo es: "+ Math.max(...arrayDeAleatorios))
console.log("El minimo es: "+ Math.min(...arrayDeAleatorios))

for (let index = 0; index < 10; index++) {
   console.log(Math.sqrt(arrayDeAleatorios[index]))
}

