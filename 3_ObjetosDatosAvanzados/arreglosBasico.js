

 /* 
let numero = 45   

let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Pedro"]; // 0 1 2 

console.log(nombres[0]) 
console.log(nombres[1])
console.log(nombres[2]) 
console.log("Cambiando un dato")
nombres[2] = "Lucas" // cambio la posicion 2, sobreescribo a "Pedro" con Lucas
console.log(nombres.length)
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])

console.log(nombres)
console.log(numeros)

console.log("-------METODOS------")
console.log("Usando Push()->")
nombres.push("Mateo")
nombres.push("Santiago")

console.log(nombres)

console.log("Usando pop()->")
nombres.pop()
console.log(nombres)

console.log("Usando Shift()->")
nombres.shift()
console.log(nombres)

console.log("Usando Unshift()->")
nombres.unshift("Jonathan", "Jose")
console.log(nombres)
console.log("Usando Splice()->")
nombres.splice(1,1) // elimino un jose
console.log(nombres)

let otrosNombres = ["Roberto", "Carlos", "Ernesto"]

console.log("Usando concat()->")
let nuevoArray = nombres.concat(otrosNombres)
console.log(nuevoArray)
console.log("Usando slice()->")
let arrayRecorte = nuevoArray.slice(2,6)
console.log(arrayRecorte)
console.log("Usando forEach()->")
nuevoArray.forEach(function(item)
{
    console.log("item encontrado:"+item)
});

nuevoArray.push("Roberto")
console.log(nuevoArray)
console.log("Usando indexOf()->")
let posicionEncontrada = nuevoArray.indexOf("Roberto")
console.log("Roberto se encuentra en: "+ posicionEncontrada)
console.log("Usando lastIndexOf()->")
 posicionEncontrada = nuevoArray.lastIndexOf("Roberto")
console.log("Roberto se encuentra en: "+ posicionEncontrada)


console.log("USANDO FOR CLASICO")
for (let i = 0; i < nuevoArray.length; i++) {
    console.log(nuevoArray[i]);
  }
  
  console.log("USANDO FOR EACH")
  nuevoArray.forEach(function(item) {
    console.log(item);
  });
    
 */ 


  let condimentos = ["pimenton", "curry", "curcuma", "mostaza", "pimienta negra"];
  let harinas = ["maiz", "centeno","maiz", "cebada", "maiz"]













  
  console.log(condimentos)
  console.log(harinas)

  let busquedaPosicion = harinas.lastIndexOf("maiz")
  console.log(busquedaPosicion)
   
  for( i=0; i<condimentos.length; i++){ 
    console.log(condimentos[i])   
  } 

  console.log("USAMOS SPLICE (2,2)")
 // condimentos.splice(2,2)
  /*condimentos.splice(2,0,"jarilla", "oregano")
  
  for( i=0; i<condimentos.length; i++){ 
    console.log(condimentos[i])
  } 





  






 
 
   /*
  console.log(condimentos[3])
  condimentos[3] = "merken" 
  console.log(condimentos)

  condimentos.push("comino")
  console.log(condimentos)

  condimentos.pop()
  console.log(condimentos)

  condimentos.shift()  // elimina el primero 
  console.log(condimentos)

  condimentos.unshift("nuez moscada", "ají molido")
  console.log(condimentos)

  condimentos.splice(3,1)
  console.log(condimentos)

  let condimentosYHarinas = condimentos.concat(harinas)
  console.log(condimentosYHarinas)

  condimentos.slice()

  let condHar = condimentosYHarinas.slice(2,5)
  console.log(condHar)

  console.log(condimentosYHarinas)
  console.log(condHar)
  console.log(harinas)

  condimentosYHarinas.forEach(function(a){
    console.log("stock: " + a)
    // alert(a)  //los ejecuta al mismo tiempo? por eso me imprime un valor por cada alert? 
  }
  )

  let posicionDe = condimentos.indexOf("curry") 
  console.log(posicionDe)

  condimentos.push("curry")
  posicionDe = condimentos.lastIndexOf("curry")
  console.log(condimentos) 
  console.log(posicionDe)

  */ 