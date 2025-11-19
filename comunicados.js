// Datos completos de los comunicados
const comunicados = {
    suspension: {
        titulo: "Feria de la Carrera Sistemas Informaticos",
        fecha: "20 de Octubre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes:</strong></p>
            <p>Les informo que las clases quedaran suspendidas a partir de las 10:00 am. Debido a la feria que se llevara acabo el dia 23 de Octubre del 2025</p>
            <p>Gracias por su compresion, espero su compresion compresion gracias.</p>
        `
    },
    reunion: {
        titulo: "Suspension de clase",
        fecha: "20 de Octubre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes</strong></p>
            <p>Nos complace informarles que el dia martes 22 de Octubre del 2025, se llevara acabo una actividad solidaria de la banda, su participacion fue en el coliseo Juan Pablo.</p>
        `
    },
    boletines: {
        titulo: "Partido de la semana",
        fecha: "20 de Octubre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes</strong></p>
            <p>Les comunicamos que en esta semana se jugaran los partidos intercolegiales donde tanto como estudiantes y profesores, llegaron a apoyar a su equipo del colegio.</p>
        `
    }
};

function abrirModal(tipo) {
    const modal = document.getElementById('modal');
    const comunicado = comunicados[tipo];

    document.getElementById('modal-titulo').textContent = comunicado.titulo;
    document.getElementById('modal-fecha').textContent = comunicado.fecha;
    document.getElementById('modal-contenido').innerHTML = comunicado.contenido;

    modal.classList.add('active');
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});