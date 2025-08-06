const newsDatabase = {
    featured: [
        {
            id: 1,
            title: "Ceremonia de Graduación 2024: Un Momento Histórico",
            category: "ACADÉMICO",
            excerpt: "La promoción 2024 del Colegio Campo Rosso vivió una emotiva ceremonia de graduación donde 120 estudiantes recibieron sus diplomas de bachillerato.",
            content: `
                <img src="assets/images/graduacion.jpg" alt="Graduación 2025" class="img-fluid rounded my-3">
                <p>La promoción 2025 del Colegio Campo Rosso vivió una emotiva ceremonia de graduación que quedará grabada en la memoria de todos los presentes. En una ceremonia llena de emoción y orgullo, 120 estudiantes recibieron sus diplomas de bachillerato, marcando el final de una etapa importante en sus vidas académicas.</p>
                <p>El evento se realizó en el auditorio principal del colegio, engalanado para la ocasión con decoraciones en los colores institucionales. La ceremonia contó con la presencia del director general, profesores, padres de familia y autoridades educativas del departamento.</p>
                <h3>Logros Destacados</h3>
                <p>Durante su discurso, el director destacó los logros académicos y deportivos de esta promoción, así como su compromiso con los valores institucionales. Los estudiantes graduados obtuvieron un promedio general de 87 puntos, siendo una de las promociones con mejor rendimiento académico en los últimos cinco años.</p>
                <h3>Palabras de Despedida</h3>
                <p>La valedictorian de la promoción, Ana María Quiroga, emocionó a todos los presentes con su discurso de despedida, recordando los momentos más significativos de su paso por el colegio y agradeciendo a profesores y compañeros por su apoyo incondicional.</p>
                <blockquote class="blockquote bg-light p-3 border-start border-4 border-primary mt-3 fst-italic">
                    "Nos vamos con el corazón lleno de recuerdos, amistades que durarán para toda la vida y la certeza de que estamos preparados para enfrentar los desafíos del futuro." - Ana María Quiroga, Valedictorian 2025
                </blockquote>
                <p>El Colegio Campo Rosso continúa su compromiso con la excelencia educativa, formando líderes íntegros que contribuirán positivamente a nuestra sociedad.</p>
            `,
            image: "assets/images/graduacion.jpg",
            author: "Redacción El Observador",
            date: "2025-08-06",
            timeAgo: "Hace 9 meses",
            tags: ["graduación", "académico", "estudiantes"],
            featured: true
        }
    ],
    academic: [
        {
            id: 2,
            title: "Nuevo Laboratorio de Ciencias",
            category: "CIENCIAS",
            excerpt: "El colegio inauguró un moderno laboratorio equipado con la última tecnología para mejorar la educación científica de nuestros estudiantes.",
            content: `
                <img src="assets/images/laboratorio.jpg" alt="Laboratorio de ciencias" class="img-fluid rounded my-3">
                <p>El Colegio Campo Rosso da un paso importante hacia la excelencia educativa con la inauguración de su nuevo laboratorio de ciencias, equipado con tecnología de última generación que permitirá a nuestros estudiantes realizar experimentos avanzados y desarrollar habilidades científicas fundamentales.</p>
                <h3>Equipamiento Moderno</h3>
                <p>El laboratorio cuenta con:</p>
                <ul>
                    <li>20 estaciones de trabajo individuales</li>
                    <li>Microscopios digitales de alta resolución</li>
                    <li>Equipos de medición precisos</li>
                    <li>Sistema de ventilación especializado</li>
                    <li>Pizarra interactiva para demostraciones</li>
                </ul>
                <p>Esta inversión de más de $50,000 USD refleja nuestro compromiso con brindar una educación de calidad mundial a nuestros estudiantes.</p>
            `,
            image: "assets/images/laboratorio.jpg",
            author: "Prof. Carlos Mendoza",
            date: "2025-08-05",
            timeAgo: "1 día",
            tags: ["ciencias", "laboratorio", "tecnología"]
        },
        {
            id: 3,
            title: "Cronograma de Exámenes Finales",
            category: "ACADÉMICO",
            excerpt: "Se ha publicado el cronograma oficial para los exámenes finales del segundo semestre. ¡A prepararse!",
            content: `
                <img src="assets/images/estudiante.jpg" alt="Estudiante estudiando" class="img-fluid rounded my-3">
                <p>La Dirección Académica ha publicado el cronograma completo para los exámenes finales del segundo semestre, que se llevarán a cabo del 15 al 25 de septiembre. Se insta a los estudiantes a revisar cuidadosamente las fechas y horarios para evitar contratiempos.</p>
                <p>El cronograma detallado está disponible en la plataforma virtual del colegio y en el mural de anuncios de cada pabellón. Se recomienda a los estudiantes organizar su tiempo de estudio de manera efectiva para lograr los mejores resultados.</p>
                <p><strong>Recuerda:</strong> El éxito es la suma de pequeños esfuerzos repetidos día tras día.</p>
            `,
            image: "assets/images/estudiante.jpg",
            author: "Departamento Académico",
            date: "2025-08-04",
            timeAgo: "2 días",
            tags: ["exámenes", "académico", "estudio"]
        }
    ],
    sports: [
        {
            id: 4,
            title: "Equipo de Fútbol Gana el Campeonato Regional",
            category: "DEPORTES",
            excerpt: "¡Orgullo del colegio! Nuestro equipo de fútbol se alzó con el trofeo tras una emocionante final contra el Colegio San Miguel.",
            content: `
                <img src="assets/images/futbol.jpg" alt="Equipo de fútbol celebrando" class="img-fluid rounded my-3">
                <p>Una victoria inolvidable para el Colegio Campo Rosso. Nuestro equipo de fútbol demostró garra, talento y trabajo en equipo para vencer a su histórico rival, el Colegio San Miguel, en la final del campeonato regional de fútbol intercolegial.</p>
                <p>El partido, que se disputó en el estadio municipal, mantuvo a la afición al borde de sus asientos. El gol de la victoria llegó en el último minuto, desatando la euforia de los jugadores y de toda la comunidad del colegio.</p>
                <p>¡Felicitaciones a los campeones y a su entrenador por este gran logro que nos llena de orgullo!</p>
            `,
            image: "assets/images/futbol.jpg",
            author: "Redacción Deportiva",
            date: "2025-08-03",
            timeAgo: "3 días",
            tags: ["fútbol", "campeonato", "deportes"]
        }
    ],
    events: [
        {
            id: 5,
            title: "Feria tecnologica 2022: Un Éxito Total , memorias del pasado",
            category: "EVENTOS",
            excerpt: "La feria de ciencias de ese año superó todas las expectativas con proyectos innovadores de nuestros estudiantes.",
            content: `
                <img src="assets/images/feria-ciencias.jpg" alt="Feria de ciencias" class="img-fluid rounded my-3">
                <p>La décima edición de la Feria de Ciencias del Colegio Campo Rosso fue un rotundo éxito, con la participación de más de 50 proyectos de estudiantes de todos los niveles. Desde prototipos de energías renovables hasta experimentos de biología molecular, la creatividad e ingenio de los participantes asombraron a jueces y visitantes.</p>
                <p>El primer premio fue otorgado al proyecto "Eco-Filtro", un sistema de purificación de agua de bajo costo desarrollado por el grupo de 5to de secundaria. La feria no solo celebra el conocimiento científico, sino que también fomenta el pensamiento crítico y la innovación entre nuestros jóvenes.</p>
            `,
            image: "assets/images/feria-ciencias.jpg",
            author: "Comité de Eventos",
            date: "2025-08-02",
            timeAgo: "hace 4 años",
            tags: ["feria", "ciencias", "eventos"]
        },
        {
            id: 6, // Asegúrate de que el ID sea único y el siguiente en la secuencia
            title: "Feria Tecnológica con Arduino: Ingenio y Creatividad",
            category: "EVENTOS",
            excerpt: "Estudiantes demostraron su ingenio aplicando electrónica y programación con Arduino y C++ en la Feria Tecnológica del colegio.",
            content: `
                <img src="assets/images/arduino.jpg" alt="Feria de Arduino" class="img-fluid rounded my-3">
                <p>El Colegio Campo Rosso fue el escenario de una emocionante Feria Tecnológica centrada en la plataforma Arduino, donde los estudiantes demostraron sus habilidades en electrónica y programación. Con proyectos que iban desde sistemas de riego automatizados hasta robots controlados a distancia, los jóvenes mostraron cómo la teoría aprendida en clases se puede aplicar en soluciones innovadoras.</p>
                <p>La feria destacó por la fluidez con la que los estudiantes de diferentes niveles aplicaron el lenguaje de programación C++ para dar vida a sus creaciones, evidenciando el éxito del enfoque práctico del colegio en la educación STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).</p>
                <p>El evento contó con la presencia de padres y docentes, quienes se mostraron impresionados por la calidad y el ingenio de los proyectos presentados.</p>
            `,
            image: "assets/images/arduino.jpg",
            author: "Redacción El Observador",
            date: "2025-08-06",
            timeAgo: "Hace 1 hora",
            tags: ["feria tecnológica", "arduino", "programación", "eventos"]
        },
        {
            id: 7, // Asegúrate de que el ID sea único y el siguiente en la secuencia
            title: "Reconocimiento al Profesor de Sistemas por Logro en Feria Tecnológica 2021",
            category: "EVENTOS",
            excerpt: "Se reconoció al Ing. Juan David Uscamayta Ramos por guiar al colegio a la victoria en la Feria de la Juventud de 2021 en Warnes.",
            content: `
                <img src="assets/images/reconocimiento.jpg" alt="Reconocimiento al profesor" class="img-fluid rounded my-3">
                <p>El Colegio Campo Rosso rindió un merecido homenaje al Ing. Juan David Uscamayta Ramos, profesor del área de Sistemas Informáticos, por el gran logro obtenido en la gestión 2021. Su liderazgo fue clave para la victoria del colegio en la <strong>Feria Tecnológica, Feria de la Juventud Proyectos de Emprendimiento e Innovación</strong>, un prestigioso evento desarrollado en Warnes.</p>
                <p>En representación del distrito Las Gamas, el equipo del colegio se alzó con el primer lugar, demostrando la excelencia y el espíritu innovador de nuestros estudiantes. El grupo ganador estuvo compuesto por las talentosas alumnas <strong>Luz María López, Magdalena Valencia y Mariana López</strong>, quienes, bajo la guía del Profesor David, llevaron a cabo un proyecto destacado que capturó la atención de los jueces.</p>
                <p>Este reconocimiento celebra no solo el triunfo en el evento, sino también la dedicación y el compromiso del profesor y sus estudiantes con la innovación y el desarrollo tecnológico.</p>
            `,
            image: "assets/images/reconocimiento.jpg",
            author: "Redacción El Observador",
            date: "2021-11-15",
            timeAgo: "Hace 4 años",
            tags: ["reconocimiento", "profesores", "sistemas", "eventos"]
        }
    ],
   
    
    opinion: [
        {
            id: 8, // Asegúrate de que el ID sea único
            title: "La Importancia de la Inteligencia Artificial en el Aula",
            category: "OPINIÓN",
            excerpt: "La IA está cambiando la forma en que aprendemos y enseñamos. ¿Estamos listos para el desafío?",
            content: `
                <img src="assets/images/ia-opinion.jpg" alt="IA en el aula" class="img-fluid rounded my-3">
                <p>La inteligencia artificial ha dejado de ser un tema de ciencia ficción para convertirse en una herramienta poderosa que transforma la educación...</p>
            `,
            image: "assets/images/ia-opinion.jpg",
            author: "María Fernández, Estudiante de 6to",
            date: "2025-08-07",
            timeAgo: "Hoy",
            tags: ["opinión", "IA", "educación"]
        }
    ]
};
