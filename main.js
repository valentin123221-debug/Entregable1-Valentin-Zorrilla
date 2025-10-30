let estudiantes = [];

function agregarEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let edad = parseInt(prompt("Ingrese la edad del estudiante:"));
    let calificacionesStr = prompt("Ingrese las calificaciones separadas por comas:");
    let calificaciones = calificacionesStr.split(",").map(Number);

    let estudiante = {
        nombre: nombre,
        edad: edad,
        calificaciones: calificaciones
    };

    estudiantes.push(estudiante);
    alert(`Estudiante ${nombre} agregado correctamente.`);
}

function mostrarEstudiantes() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados.");
        return;
    }

    let lista = "Lista de Estudiantes:\n\n";
    for (let i = 0; i < estudiantes.length; i++) {
        lista += `Nombre: ${estudiantes[i].nombre}\n`;
        lista += `Edad: ${estudiantes[i].edad}\n`;
        lista += `Calificaciones: ${estudiantes[i].calificaciones.join(", ")}\n\n`;
    }
    console.log(lista);
    alert(lista);
}

function calcularPromedio() {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let estudiante = estudiantes.find(est => est.nombre.toLowerCase() === nombre.toLowerCase());

    if (estudiante) {
        let suma = 0;
        for (let i = 0; i < estudiante.calificaciones.length; i++) {
            suma += estudiante.calificaciones[i];
        }
        let promedio = suma / estudiante.calificaciones.length;
        let mensaje = `El promedio de ${estudiante.nombre} es: ${promedio.toFixed(2)}`;
        console.log(mensaje);
        alert(mensaje);
    } else {
        alert("Estudiante no encontrado.");
    }
}

agregarEstudiante();
agregarEstudiante();
mostrarEstudiantes();
calcularPromedio();   
