/*

Ejercicios: 

1- Ejercicio de Compra con Descuento:
Dado un sistema de recompensas en una tienda en línea, 
verifica si un usuario es elegible para un descuento del 10% 
si ha realizado más de 5 compras O si es un miembro premium.
*/

let obtieneDescuento = false
let historialDeCompras = 4 
let esMiembroPremium = false 

obtieneDescuento = ((historialDeCompras > 5) || (esMiembroPremium == true))
console.log("el cliente obtiene el descuento?..." + obtieneDescuento)

/*
2 - Ejercicio de Acceso a Contenido:
En un sitio web de contenido premium, 
determina si un usuario tiene acceso a un artículo exclusivo
 si ha comprado una suscripción anual Y si es un usuario registrado.
*/

let accesoContenidoExcluviso = false
let tieneSuscripcionAnual = true
let estaRegistrado = true 

accesoContenidoExcluviso = ((tieneSuscripcionAnual == true) && (estaRegistrado == true))
console.log("el usuario tiene acceso al contenido exclusivo?..." + accesoContenidoExcluviso)

/*

3 - Ejercicio de Acceso a Funcionalidad Avanzada:
En una aplicación de software, 
verifica si un usuario puede acceder a una funcionalidad avanzada
si tiene permisos de administrador O si ha completado un curso específico.

*/

let accesoFuncionalidadAvanzada = false 
let esAdministrador = true
let cursoDeFormacion = false 

accesoFuncionalidadAvanzada = (esAdministrador == true) || (cursoDeFormacion == true)
console.log("el usuario puede acceder a la funcionalidad avanzada?..." + accesoFuncionalidadAvanzada)

/*
4 - Ejercicio de Descuento por Lealtad:
En un programa de lealtad de clientes, 
comprueba si un usuario es elegible para un descuento del 20% 
si ha realizado más de 10 compras Y si su antigüedad en la plataforma es mayor a 2 años. */

let elegibleParaDescuento = false 
let totalDeCompras = 8
let antiguedad = 3 

elegibleParaDescuento = ((totalDeCompras > 10) && (antiguedad > 2))
console.log("el cliente es elegible para el descuento?..." + elegibleParaDescuento)


/*
5 - Ejercicio de Evaluación de Riesgo:
En una aplicación financiera, 
determina si un cliente es apto para un préstamo
 si su puntaje de crédito es superior a 700 O si tiene un historial de empleo estable
 y sus ingresos anuales son superiores a $50,000.

*/
/*
let clienteAptoParaPrestamo = false
let puntajeCliente = 600 
let tieneEmpleoEstable = true
let totalIngresosAnuales = 200000

clienteAptoParaPrestamo = ((puntajeCliente > 700) || (tieneEmpleoEstable == false && totalIngresosAnuales > 50000))
console.log("el cliente es apto para el prestamo?..." + clienteAptoParaPrestamo)

*/

/*
6 - Ejercicio de Planificación de Proyectos:
En una herramienta de gestión de proyectos, comprueba si un proyecto puede avanzar
 a la siguiente fase si se han completado todas las tareas críticas, 
 el presupuesto supera los 13 millones de dolares y se ha obtenido
  la aprobación del comité de revisión y de la gobernación.

*/

/*
let proyectoHabilitado = false 
let completaTareas = true 
let presupuesto = 12000000
let aprobadoPorComite = true
let aprobacionDeGobernacion = false 

proyectoHabilitado = ((completaTareas && presupuesto>13000000) && (aprobadoPorComite && aprobacionDeGobernacion))
console.log("está aprobado?....." + proyectoHabilitado) 

*/



/*
let aptoParaFaseSiguiente = false 
let tareasCompletas = true
let totalPresupuesto = 11000000
let aprobacionDelComite = true 
let aprobacionDeGobernacion = true 

aptoParaFaseSiguiente = ((tareasCompletas == true) && (totalPresupuesto > 13000000) 
&& ((aprobacionDelComite == true) && (aprobacionDeGobernacion == true))) 
console.log("el proyecto puede pasar a la siguiente fase?...." + aptoParaFaseSiguiente)
*/

/*
7 - Ejercicio de Selección de Candidatos:
En un proceso de selección de personal, 
determina si un candidato cumple con los requisitos mínimos de experiencia laboral y educación,
y si ha pasado con éxito una evaluación técnica (mayor a 65 puntos) para ser considerado para una entrevista.

 
let personalElegible = true 
let experienciaLaboral = true 
let educacion = false 
let evaluacionTecnica = 75

personalElegible = ((experienciaLaboral && educacion) && (evaluacionTecnica>65)) 
console.log("es elegible para una entrevista?...." + personalElegible)





let requisitosCumplidos =false 
let experienciaLaboralAcorde = false 
let educacionRequerida = true 
let puntajeEvaluacion = 70 
requisitosCumplidos = ((experienciaLaboralAcorde == true && educacionRequerida == true)
                                                  //false
&& (puntajeEvaluacion > 65))
          // true
console.log("debe ser considerado para una entrevista?..." + requisitosCumplidos)

*/

/*
8 - Ejercicio de Control de Inventarios:
En un sistema de gestión de inventarios, 
verifica si un producto puede ser reabastecido 
en el almacén si la cantidad actual está por debajo del nivel mínimo y
si no hay ningún pedido pendiente para el mismo producto.
*/

/*
let debeReabastecerse = false
let producto001 = 120  
let nivelMinimoDeProductos = 150
let pedidoPendiente = false

debeReabastecerse = (producto001 >= nivelMinimoDeProductos) && (!pedidoPendiente)

console.log("el producto debe reabastecerse?..." + debeReabastecerse  + " el producto tiene algun pedido pendiente?..." )
*/

/*

9 - Ejercicio de Seguridad en Sistemas:

En un sistema de seguridad informática, 
determina si un usuario tiene acceso a ciertos archivos confidenciales
si ha autenticado su identidad mediante un proceso de dos factores
Y si su nivel de autorización incluye los permisos necesarios O si es un administrador del sistema.

*/

/*

let accesoArchivosConfidenciales = false
let nombre = "John Coltrane"
let contrasena = 123456 
let nivelAutorizacionAlto = false 
let administradorDeSistema = true 
 
accesoArchivosConfidenciales = (nombre == "John Coltrane" && contrasena == 123456) 
&& (nivelAutorizacionAlto || administradorDeSistema)
console.log("el usuario tiene acceso a los archivos confidenciales?..." + accesoArchivosConfidenciales)

*/
/*
Ejercicios Extra
*/

/*
1E - Beneficios de Empleado:
En el sistema de gestión de recursos humanos, 
verifica si un empleado es elegible para beneficios adicionales
si ha completado más de 3 años en la empresa
Y ha participado en al menos tres programas de desarrollo profesional
O si es un gerente de nivel medio o superior, 
pero sólo si no ha tenido más de 2 incidentes disciplinarios
en los últimos 12 meses y ha recibido al menos una evaluación
de desempeño calificada como "sobresaliente" en los últimos dos años.

*/ 

/*
let aptoParaBeneficios = false 
let años = 4
let totalProgramas = 4
let nivelMedio = false  
let nivelSuperior = false  
let incidentes = 1
let evaluacion = "sobresaliente"

aptoParaBeneficios = (((años>3 && totalProgramas>3) || (nivelMedio == true || nivelSuperior == true))
                                     
&& (incidentes<=2 && evaluacion =="sobresaliente"))  
console.log("es apto?....." + aptoParaBeneficios) 

*/


/*
let empleadoAptoParaBeneficios = false
let añosEnLaEmpresa = 2
let programasDeDesarrolloRealizados = 2
let nivelGereancialMedio = true
let nivelGerencialSuperior = false
let incidentesAnuales = 1
let resualtadoEvaluacion = "Sobresaliente"

empleadoAptoParaBeneficios = ( ((añosEnLaEmpresa > 3 && programasDeDesarrolloRealizados >= 3) 
|| (nivelGereancialMedio == true || nivelGerencialSuperior == true )) 
&& (incidentesAnuales <= 2 && resualtadoEvaluacion == "Sobresaliente") )
console.log("el empleado es apto para obtener los beneficios?..." + empleadoAptoParaBeneficios)

*/
/*

2E - Reserva de Asientos en Evento:
En el sistema de reserva de entradas para eventos, 
determina si un usuario puede seleccionar asientos preferenciales
si ha adquirido un boleto VIP O si es miembro de un club exclusivo
Y ha realizado al menos 2 compras en los últimos 3 meses, 
pero solo si no ha realizado ninguna devolución de boletos en el último año 
y ha asistido a al menos un evento premium.

*/

/*
let accesoAsientosPreferensiales = false 
let tieneBoletoVip = false
let miembroexclusivo = true
let comprasUltimosTresMeses = 2
let devolucionDeBoletos = false
let asistioAEventoPremiun = true 

accesoAsientosPreferensiales = ( (tieneBoletoVip == true || miembroexclusivo == true) && (comprasUltimosTresMeses >= 2) 
                                                                         // true
&& ((devolucionDeBoletos == false && asistioAEventoPremiun == true))                                                            )
                         //true 

console.log("puede seleccionar asientos preferenciales?..." + accesoAsientosPreferensiales)

*/

/*
3E- Renovación de Membresía :
En el club de fitness, comprueba si un miembro puede renovar 
su membresía anual si ha asistido a más de 80 sesiones de entrenamiento 
en el último año Y ha alcanzado un nivel específico de logros físicos 
O si ha participado en al menos dos programas de nutrición y bienestar, 
pero solo si ha logrado un aumento del 10% en su rendimiento físico desde su última evaluación.
*/

/*
let aptoParaRenovar = false
let totalDeSesioneAnuales = 60
let logrosOptimos = true
let capacitacionNutricion = true
let capacitacionBienestar = true
let aumentoRendimiento = true

aptoParaRenovar = ( ((totalDeSesioneAnuales > 80 && logrosOptimos == true)
                                           // false
|| (capacitacionNutricion == true && capacitacionBienestar == true))
                                // true 
&& (aumentoRendimiento == true) )
           // true 
console.log("obtiene renovación de membresía anual?..." + aptoParaRenovar)          

*/
/*
4E- Acceso a Zona VIP en una Aplicación de Conciertos:
En la aplicación de conciertos, verifica si un usuario puede acceder 
a la zona VIP si ha comprado más de 5 boletos para eventos en los últimos 6 meses 
O si es un suscriptor premium Y ha compartido al menos 2 eventos en redes sociales, 
pero solo si su puntuación de influencia social supera los 70 puntos.
*/

/*
let accesoAZonaVip = false 
let boletosComprados = 4
let suscriptorPremium = true 
let cantidadDeEventosCompartidos = 2
let puntuacionDeInfluencia = 72 

accesoAZonaVip = ( ((boletosComprados > 5) || 
(suscriptorPremium == true && cantidadDeEventosCompartidos >= 2))
                        // true 
&& (puntuacionDeInfluencia > 70))
           // true
console.log("obtiene acceso a la zona vip?..." + accesoAZonaVip)

*/

/*
5E - Descuento por Referencia:
En el programa de referidos, determina si un usuario es elegible para un descuento del 15% 
si ha referido al menos a 3 amigos que han realizado una compra 
Y ha participado en al menos un evento de la marca 
O si es un embajador de la marca, pero solo si ha logrado un aumento 
del 20% en las conversiones de referidos en los últimos 6 meses.
*/

let usuarioElegibleParaDescuento = false
let cantidadDeAmigosReferidos = 2
let participacionEnEventos = 1 
let embajadorDeMarca = false
let logroAumentoDel20 = true 

usuarioElegibleParaDescuento = ( ( ((cantidadDeAmigosReferidos >= 3) && (participacionEnEventos >=1))
                                                                // false
|| (embajadorDeMarca == true) ) 
           // false 
&& (logroAumentoDel20 == true) )
           // true 
console.log("usuario elegible para el descuento?..." + usuarioElegibleParaDescuento)

/*
6E- Acceso a Contenido Educativo:
En la plataforma educativa en línea, 
comprueba si un estudiante puede acceder a contenido premium
 si ha completado más de 10 cursos 
 Y ha obtenido certificaciones en al menos 3 cursos avanzados 
 O si es un suscriptor mensual Y ha participado en al menos 2 sesiones de tutoría, 
 pero solo si ha mantenido un promedio de calificaciones superior al 90%.
*/


let educarContenidoPremium = false
let totalCursos = 11
let totalCertificaciones = 3
let suscriptorMensual = true 
let totalSesionesTutoria = 1
let promedioCalificaciones = 80

educarContenidoPremium = (
((totalCursos > 10 && totalCertificaciones >= 3)
               // true
|| (suscriptorMensual == true && totalSesionesTutoria >= 2))
                  // false                   
&& (promedioCalificaciones > 90)
           // false
)
console.log("accede a contenido educativo premium?..." + educarContenidoPremium)

/*
7E- Reembolso de Compra:
En la tienda en línea, verifica si un cliente es elegible para un reembolso 
completo si ha devuelto el producto dentro de los 30 días de la compra
O si es un miembro de un programa de garantía extendida
Y ha proporcionado retroalimentación detallada sobre el producto devuelto, 
pero solo si la retroalimentación ha resultado en mejoras específicas en el producto.

*/

let clienteAptoParaReembolso = false
let devolucionATiempo = true
let poseeGarantiaExtendida = false
let proporcionoRetroalimentacion = true
let proporcionorRtroalimentacionEspecifica = false

clienteAptoParaReembolso = ( ((devolucionATiempo == true || poseeGarantiaExtendida == true)
                                                      // true
&& (proporcionoRetroalimentacion == true )) &&
               // true 
(proporcionorRtroalimentacionEspecifica == true)
                // false
) 
console.log("el cliente es apto para el reembolso?..." + clienteAptoParaReembolso)


/*
8E-Acceso a Evento Exclusivo:
En la aplicación de eventos, determina si un usuario puede participar 
en un evento exclusivo si ha asistido a al menos 3 eventos anteriores 
O si es un influenciador registrado en la plataforma
Y ha generado al menos 500 interacciones en las redes sociales, 
pero solo si ha mantenido una calificación de satisfacción del cliente superior al 85%.

*/

let puedeParticiparDelEvento = false
let asistenciasTotales = 3
let influenciadorRegistrado = false
let cantidadDeInteracciones = 600 
let calificacionDeSatisfaccion = 70

puedeParticiparDelEvento = ( ((asistenciasTotales >= 3 || influenciadorRegistrado == true)
                                                   // true
&& (cantidadDeInteracciones >= 500))
                // true 
&& (calificacionDeSatisfaccion > 85)
               // false
)
console.log("tiene acceso al evento exclusivo?..." + puedeParticiparDelEvento)



/*
9E- Descuento por Cumpleaños:
En el programa de lealtad, comprueba si un cliente es elegible 
para un descuento especial del 10% si realiza una compra durante
el mes de su cumpleaños Y ha completado al menos 2 encuestas de 
satisfacción del cliente O si es un cliente frecuente
Y ha participado en eventos exclusivos, pero solo
si ha superado los 100 puntos en su programa de lealtad.
*/

let descuentoEspecial = false
let mesDeLaCompra = "02"
let mesDeCumpleañosDelCliente ="02"
let totalDeEncuestas = 1
let clienteFrecuente = true 
let acudeAEventosExclusivos = true
let puntajeProgramaDeLealtad = 102


descuentoEspecial = ( ((mesDeLaCompra == mesDeCumpleañosDelCliente) && (totalDeEncuestas >= 2)) || 
                                                             // false
(clienteFrecuente == true && acudeAEventosExclusivos == true)
                        // true
&& (puntajeProgramaDeLealtad > 100)) 
             // true
console.log("es elegible para el descuento especial?..." + descuentoEspecial)

/*
10E- Acceso a Soporte Prioritario:
 En el servicio de atención al cliente,
 determina si un usuario tiene acceso a soporte prioritario 
 si ha realizado una compra de un producto premium 
 O si es un suscriptor de un nivel de servicio preferencial 
 Y ha experimentado al menos 2 problemas técnicos no resueltos, 
 pero solo si ha proporcionado información detallada sobre cada problema 
 y ha participado en una sesión de retroalimentación para mejorar el servicio.

*/

let tieneAccesoASoportePrioritario2 = false;
let realizoCompraPremium2 = false;
let esSuscriptorPreferencial2 = false;
let cantidadDeProblemasNoResueltos2 = 1;
let dioInformacionDetallada2 = false;
let participoDeSesion2 = true;


tieneAccesoASoportePrioritario2 = ( (realizoCompraPremium2 == true) || (esSuscriptorPreferencial2 ==true && cantidadDeProblemasNoResueltos2>=2)
&& (dioInformacionDetallada2==true && participoDeSesion2 ==true)
)
console.log("el cliente 2222 tiene acceso a soporte prioritario?..." + tieneAccesoASoportePrioritario2)




let accesoASoportePrioritario = false
let comproProductoPremimum = true
let suscriptorNivelPreferencial = false
let totalProblemasNoResueltos = 2
let brindoInformacionDetallada = true
let acudioSesionRetroalimentacion = true 

accesoASoportePrioritario = ( ((comproProductoPremimum == true) || 
                                                // true 
(suscriptorNivelPreferencial == true && totalProblemasNoResueltos >= 2)) 
                            // false
&& (brindoInformacionDetallada == true && acudioSesionRetroalimentacion == true)
                                  // true
)

console.log("tiene acceso al soporte prioritario?..." + accesoASoportePrioritario)


/*

11E - Desafío:

Evaluación de Desempeño Multifactorial:
En un sistema de evaluación de desempeño para empleados, 
determina si un trabajador es elegible para un aumento salarial significativo. 
Para ser elegible, el empleado debe cumplir con los siguientes criterios:

Experiencia Laboral:
Ha trabajado en la empresa durante más de 5 años.  ///

Productividad y Logros:
Ha superado los objetivos de ventas en los últimos 3 trimestres. ///
Ha liderado al menos dos proyectos exitosos en los últimos 12 meses. ///

Desarrollo Profesional:
Ha completado al menos cinco cursos de formación en áreas relevantes en los últimos dos años. ///
Ha obtenido una certificación profesional en el último año. ///

Liderazgo y Colaboración:
Ha demostrado habilidades de liderazgo al coordinar eficientemente un equipo en proyectos clave. ///
Ha recibido reconocimientos positivos de colegas en al menos dos revisiones de pares. ///

Contribución a la Innovación:
Ha presentado al menos tres ideas innovadoras que se han implementado con éxito en la empresa en el último año. ///

Participación en Responsabilidad Social Empresarial (RSE):
Ha participado activamente en al menos dos iniciativas de RSE de la empresa en los últimos 12 meses. ///

Para ser elegible para el aumento, el empleado debe cumplir con todos los criterios mencionados anteriormente
y pasar por una revisión adicional que incluye una entrevista con un comité de evaluación de desempeño, 
donde se evaluará su capacidad para explicar y defender sus contribuciones y logros. 
Además, el aumento salarial estará sujeto a la aprobación final del departamento de recursos humanos 
y la dirección ejecutiva de la empresa.

*/

/*

let aniosEnLaEmpresa = 6 
let superaObejetivos = true 
let proyectosExitosos = 2 
 

// PRODUCTIVIDADY LOGROS 
let cumpleProductividadYLogros = superaObejetivos && (proyectosExitosos>=2) 


// DESARROLLO PROFESIONAL 
let cursosFormacionUltimos2Años = 5 
let obtuvoCertifiacionProfesional = true 

let cumpleDesarrolloProfesional = cursosFormacionUltimos2Años>=5 && obtuvoCertifiacionProfesional 

// LIDERAZGO Y COLABORACION 

let demuestraLiderazgo = true 
let reconocimientosPositivos = 2

let cumpleLiderazgoColaboracion = demuestraLiderazgo && (reconocimientosPositivos>=2) 


// Contribucion a la innovacion 

let totalIdeasinnovadorasUltimoAño = 4

// Participación en Responsabilidad Social Empresarial (RSE)

let totalIniciativasRse = 4 

let aproboRevisionAdicional = true 
let aprobadoPorRrhh = true 
let aprobadoPorDireccionEjecutiva = true 

let cumpleConLosRequisitos = ((aniosEnLaEmpresa>5 && cumpleProductividadYLogros)
&& (cumpleDesarrolloProfesional && cumpleLiderazgoColaboracion) 
&& (totalIdeasinnovadorasUltimoAño>3 && totalIniciativasRse>3)) 

let aprobacionesSuperiores = aproboRevisionAdicional && (aprobadoPorRrhh && aprobadoPorDireccionEjecutiva)

let aprobacionDeAumentoSalarial = (cumpleConLosRequisitos && aprobacionesSuperiores)
console.log("aumento salarial aprobado?...." + aprobacionDeAumentoSalarial) 


*/ 






/*

let elegibleParaAumentoSalarial = false // v final
// años empresa
let totalAñosEnLaEmpresa = 7

//Productividad y Logros:
let superoObejetivosDeVentas = true 
let ProyectosExitososUltimoAño = 3 
let cumpleProductividadYLogros = superoObejetivosDeVentas && (ProyectosExitososUltimoAño>=2)
// Desarrollo personal
let CursosFormacionUltimos2Años = 5
let obtuvoCertifiacionProfesional = true 
let cumpleDesarrolloPersonal = CursosFormacionUltimos2Años>=5 && obtuvoCertifiacionProfesional
// Liderazgo y Colaboración:
let demostroHabilidadesLiderazgo = true
let totalReconocimientosPositivos = 3
let cumpleLiderazgoColaboracion = demostroHabilidadesLiderazgo && totalReconocimientosPositivos>=3

// Contribución a la Innovación:
let totalIdeasinnovadorasUltimoAño = 3

// RSE
let totalIniciativasRse = 3

let cumplePreRequisitos = totalAñosEnLaEmpresa>=7 && cumpleProductividadYLogros
                         && cumpleDesarrolloPersonal && cumpleLiderazgoColaboracion
                         && totalIdeasinnovadorasUltimoAño>=3



let aproboEntrevistaDelComite = true
let aumentoAprobadoPorRecursosHumanos = false
let aumentoAprobadoPorDireccionEjecutiva = true 

elegibleParaAumentoSalarial = cumplePreRequisitos && aproboEntrevistaDelComite && aumentoAprobadoPorRecursosHumanos && aumentoAprobadoPorDireccionEjecutiva

/*
elegibleParaAumentoSalarial = (  ((totalAñosEnLaEmpresa > 5) && (superoObejetivosDeVentas == true)) &&
                                                          // false
((ProyectosExitososUltimoAño >= 2) && (CursosFormacionUltimos2Años >= 5)) &&
                             // false        
((obtuvoCertifiacionProfesional == true) && (demostroHabilidadesLiderazgo == true)) &&
                                     // false
((totalReconocimientosPositivos >= 2) && (totalIdeasinnovadorasUltimoAño >= 3)) &&
                              // false
((totalIniciativasRse >= 2) && (aproboEntrevistaDelComite == true)) &&
                            // false
((aumentoAprobadoPorRecursosHumanos == true) && (aumentoAprobadoPorDireccionEjecutiva == true))
                                        // false
) 



console.log("es elegible para el aumento salarial?..." + elegibleParaAumentoSalarial)
*/









