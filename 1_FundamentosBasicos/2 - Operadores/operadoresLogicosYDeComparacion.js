let haRealizadoComprasAnteriores = true;
let esMiembroPremium = false;
let haAlcanzadoNivelLealtad = true;


// Evaluación de las condiciones con operadores lógicos
let esElegibleParaDescuento = (haRealizadoComprasAnteriores && esMiembroPremium) || haAlcanzadoNivelLealtad;

// --------------------------------------------




let valor1 = 150
let valor2 = 200
let nombre1 = "damian"
let nombre2 = "daniel"


let resultado = (valor1<valor2) && (nombre1>nombre2)
console.log(resultado) 




/*Ejercicio A

dado un sistema de recompenzas en una tienda en linea, 
verificar si un usuario es elegible para un descuento del %15, 
si ha realizado mas de 8 compras o si es miembro premium

*/ 



/*

let obtieneDescuento = false
let cantidadCompras = 10
let MiembroPremium = false

obtieneDescuento = (cantidadCompras>=8)|| (MiembroPremium == true)
console.log(obtieneDescuento)

*/


/* en un sitio web de contenido premium determinar si un usuario tiene acceso
 a una pagina exclusiva si ha comprado suscripcion mensual 
 y si es un usuario registrado

*/ 



/*

let obtieneAccesoExclusivo = false 
let usuarioSuscripto = true 
let usuarioRegistrado = true 

obtieneAccesoExclusivo =  (usuarioSuscripto == true) && (usuarioRegistrado == true)
console.log(obtieneAccesoExclusivo)

*/

/*

en una app financiera determinar si un cliente es apto para un prestamo 
si su puntaje de credito es superior a 400 o si tiene un historial de 
empleo estable y sus ingresos anuales son superiores a 12000000 


let aptoParaPrestamo2 = false;
let puntajeCredito2 = 300;
let empleoEstable2 = true;
let IngresosAnuales2 = 14000000;

aptoParaPrestamo2 = (puntajeCredito2 > 400) || ((empleoEstable2 == true) && (IngresosAnuales2 > 12000000))
console.log(aptoParaPrestamo2)


*/


/*

  // Definición de datos del empleado
  const experienciaLaboral = 6; // años de experiencia
  const cursoSeguridadCompletado = true; // true si ha completado el curso de seguridad
  const nivelJerarquico = "supervisor"; // "supervisor" o superior para tener acceso
  
  
  // Verificación de condiciones con operadores lógicos
  const puedeAccederInformacionConfidencial =
    ((experienciaLaboral >= 5 && cursoSeguridadCompletado) 
    && (nivelJerarquico === "supervisor" || nivelJerarquico === "superior"));
                         
      
  */
 
    

    /*


  // Impresión del resultado
  if (puedeAccederInformacionConfidencial) {
    console.log("El empleado tiene acceso a información confidencial.");
  } else {
    console.log("El empleado no tiene acceso a información confidencial.");
  }


  */














  
// Definición de datos del empleado
const experienciaLaboral = 6; // años de experiencia
const cursoSeguridadCompletado = true; // true si ha completado el curso de seguridad
const nivelJerarquico = "supervisor"; // "supervisor" o superior para tener acceso
const competenciasTecnicas = ["programacion", "seguridad"]; // competencias técnicas del empleado
const aproboEntrevistaSeguridad = true; // true si aprobó la entrevista de seguridad
const esMiembroGrupoEspecial = true; // true si es miembro de un grupo especial


// Verificación de condiciones con operadores lógicos
const puedeAccederInformacionConfidencial =
  experienciaLaboral >= 5 &&
  cursoSeguridadCompletado &&
  (nivelJerarquico === "supervisor" || nivelJerarquico === "superior") && 
  competenciasTecnicas.includes("seguridad") &&
  aproboEntrevistaSeguridad &&
  esMiembroGrupoEspecial;


// Impresión del resultado
if (puedeAccederInformacionConfidencial) {
  console.log("El empleado tiene acceso a información confidencial.");
} else {
  console.log("El empleado no tiene acceso a información confidencial.");
}
