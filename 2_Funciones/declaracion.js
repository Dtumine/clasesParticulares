
/*
function nombre(parametro1, parametro2, ... parametro_n)
{

}
llamo a la funcion
nombre(argumento1, argumento2)




function sumar(a,b)
{
    alert(a+b)
}


function restar(a,b)
{
    alert(a-b)
}


function multiplicar(a,b)
{
    alert(a*b)
}

function alCubo(n)
{
    return n*n*n;
}

*/ 

/*

function sumar(a,b){
    alert(a + b)
}

function restar(a,b){
    alert(a - b)
}

function multiplicar(a,b){
    alert(a * b)
}

let numero1;
let numero2;
//let resultadoSuma;
//let resultadoResta;
//let resultadoMultiplicacion;
numero1 = Number(prompt("INGRESE EL NUMERO 1"))
numero2 = Number(prompt("INGRESE EL NUMERO 2"))
sumar(numero1,numero2)        // ARGUMENTOS
restar(numero1,numero2)
multiplicar(numero1,numero2)


// resultadoSuma = (numero1 + numero2);
//resultadoResta = (numero1 - numero2);
//resultadoMultiplicacion = (numero1 * numero2);
// alert(resultadoSuma)
//alert(resultadoResta)
//alert(resultadoMultiplicacion)



function alcubo(n){
    return (n*n*n);
}


let resultadoalcubo = alcubo(numero1)
console.log(resultadoalcubo)



*/ 



/*

let numero1; 
let numero2; 
//let resultadoSuma;
//let resultadoResta;
//let resultadoMultiplicacion;

numero1 = Number(prompt("INGRESE NUMERO 1"))
numero2 = Number(prompt("INGRESE NUMERO 2"))

sumar(numero1, numero2)
restar(numero1, numero2)
multiplicar(numero1, numero2)


//resultadoSuma = numero1 + numero2;
//resultadoResta = numero1 - numero2;
//resultadoMultiplicacion = numero1 * numero2;
//alert(resultadoSuma)
//alert(resultadoResta)
//alert(resultadoMultiplicacion)

let resultadoCubo = alCubo(numero1);
console.log(resultadoCubo)

*/



function saludoInicial(nombre, apellido){
    
    alert("Hola "+ nombre + apellido + "Bienvenido!")
}

function mostrarMenu(){
    alert("1-DEPOSITAR. 2-EXTRAER. 3-VER SALDO")
}

function desposito(dinero){
    let dineroDepositado = Number(prompt("INGRESE EL DINERO QUE DESEA DEPOSITAR"))
    dinero += dineroDepositado
    return dinero 
} 

function extraccion(dinero){
    let dineroExtraido = Number(prompt("INGRESE EL DINERO QUE DESEA EXTRAER"))
    dinero -= dineroExtraido 
    return dinero 
}








let nombre = prompt("INGRESE SU NOMBRE")
let apellido = prompt("INGRESE SU APELLIDO")
let edad = Number(prompt("INGRESE SU EDAD"))
let saldoInicial = Number(prompt("INGRESE SU SALDO INICIAL"))
let saldo = saldoInicial 
let continuidad;

saludoInicial(nombre, apellido);

do {
    mostrarMenu();
    let opcion = Number(prompt("INGRESE OPCION"));
    switch (opcion) {

        case 1:
                saldo = deposito(saldo)   
            
            break;    

        case 2:

               saldo = extraccion(saldo)
   
            break;

        case 3:

            alert("SU SALDO ES " + saldo)
            
            break;    
    
        default:
            break;
    }
    continuidad = prompt("DESEA CONTINUAR?...y/n")

} while(continuidad == "y" )

alert("FIN DEL PROGRAMA")








