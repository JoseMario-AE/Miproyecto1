// Datos completos de los comunicados
const comunicados = {
    Comunicado: {
        titulo: "Suspension de Clases",
        fecha: "17 de Noviembre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes:</strong></p>
            <p>Les informo que las clases quedaran suspendidas debido a la imclemencia del clima, pero se pasara a la modalidad a distancia.</p>
            <p>Gracias por su Atencion, espero su compresion gracias.</p>
        `
    },
    Comunicado: {
        titulo: "Invitacion a los Estudiantes de Campo Rosso",
        fecha: "10 de Noviembre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes</strong></p>
            <p>Nos complace invitarlos a la participacion de la banda clausura que se llevara acabo el dia Sabado 15 de Noviembre, asi mismo las clases quedaran suspendidas con los estudiantes que pasan clases los sabados.</p>
            <p>Gracias por su Atencion, espero su compresion gracias.</p>
        `
    },
    Comunicado: {
        titulo: "Feria de Sistemas Informaticas",
        fecha: "19 de Octubre de 2025",
        contenido: `
            <p><strong>Estimados Estudiantes</strong></p>
            <p>Les informo que las clases quedaran suspendidas a partir de las 10:00 am. Debido a la feria que se llevara acabo el dia 22 de Octubre del 2025</p>
            <p>Gracias por su Atencion, espero su compresion gracias.</p>
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