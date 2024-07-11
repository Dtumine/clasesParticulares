class Persona {
    constructor(nombre, edad, genero, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero; 
        this.ocupacion = ocupacion;

    }
}

const persona1 = new Persona('Ana', 28, 'Femenino', 'Ingeniera'); 
const persona2 = new Persona('Luis', 34, 'Masculino', 'Médico');
const persona3 = new Persona('Carlos', 23, 'Masculino', 'Estudiante');
const persona4 = new Persona('María', 30, 'Femenino', 'Arquitecta');

// const personas = [persona1, persona2, persona3, persona4];
const personas = []
personas.push(persona1)
personas.push(persona2)
personas.push(persona4)

// Convertir el array a una cadena JSON
const jsonPersonas = JSON.stringify(personas, null, 2);
console.log(jsonPersonas)
// Función para leer y actualizar el archivo JSON existente

async function actualizarArchivoJSON() {
    try {
        // Leer el archivo JSON existente
        const response = await fetch('personas.json');
        const data = await response.json();

        // Agregar las nuevas personas al archivo JSON
        data.push(...personas);

        // Convertir el array actualizado a una cadena JSON
        const jsonPersonasActualizado = JSON.stringify(data, null, 2);

        // Descargar el archivo JSON actualizado
        const a = document.createElement("a");
        const archivo = new Blob([jsonPersonasActualizado], { type: 'application/json' });
        a.href = URL.createObjectURL(archivo);
        a.download = 'personas_actualizado.json';
        a.click();
    } catch (error) {
        console.error('Error al leer o actualizar el archivo JSON:', error);
    }
}

// Añadir evento al botón para actualizar el archivo JSON
document.getElementById('guardarPersonas').addEventListener('click', actualizarArchivoJSON);

