const newsDatabase = {
    featured: [
        {
            id: 1,
            title: "El Colegio Campo Rosso 4 de Abril participa en la oresentacion de bandas solidarias",
            category: "ACADÉMICO",
            excerpt: "La Promocion ha sido destacado por ser muy participativos en las actividades extracurriculares.",
            content: `
                <img src="IMG/BandaEscolarCampoRosso4deAbril.jpg" alt="2025" class="img-fluid rounded my-3">
                <p>La banda del colegio Campo Rosso 4 de Abril ha sido participativo en una actividad solidaria de bandas, en el cual el 82% de los estudiantes han ido a apoyar a su banda de guerra.</p>
                <p>El evento se realizo en el coliseo Juan Pablo, donde incluso habian ido el director de la unidad educativa y algunos profesores ha brindar su total apoyo a la banda de guerra.</p>
                <h3>Logros Destacados</h3>
                <p>Reconocimiento Participativo</p>
                <blockquote class="blockquote bg-light p-3 border-start border-4 border-primary mt-3 fst-italic">
                    "Nos vamos con el corazón lleno de recuerdos, amistades que durarán para toda la vida y la certeza de que estamos preparados para enfrentar los desafíos del futuro."
                </blockquote>
                <p>El Colegio Campo Rosso continúa su compromiso con la excelencia educativa, formando líderes íntegros que contribuirán positivamente a nuestra sociedad.</p>
            `,
            image: "IMG/BandaEscolarCampoRosso4deAbril.jpg",
            author: "Redacción El Observador",
            date: "2025-08-06",
            timeAgo: "Hace 1 dia",
            tags: ["banda", "académico", "estudiantes"],
            featured: true
        }
    ],
    academic: [
        {
            id: 2,
            title: "Pre Defensa Del BTH",
            category: "Sistemas Informaticos",
            excerpt: "Se muestra con formalidad como el avance del bth esta dando frutos, siempre estando con la frente en alto.",
            content: `
                <img src="IMG/PreDefensaDelBTH.jpg">
                <p>El Colegio Campo Rosso repasa a los estudiantes a perder ese miedo de presentar, hablar, preguntar, opinar, apoyar y optimizar al estudiante al 100%.</p>
                <h3>Importancia de opinar</h3>
                <p>Sabemos que para hablar y responder con acritud, nos permite expresar ideas, necesidades y emociones, ademas de ser la principal herramienta para la comunicacion, el pensamiento y la resolucion de conflictos.</p>
            `,
            image: "IMG/PreDefensaDelBTH.jpg",
            author: "Jose Mario",
            date: "2025-10-10",
            timeAgo: "3 días",
            tags: ["comunicacion", "trabajo en equipo", "presentacion"]
        },
        {
            id: 3,
            title: "Trabajos en Equipo",
            category: "Sistemas Informaticos",
            excerpt: "En el curso 6to B, se llevo acabo una actividad en el cual su objetivo principal era la formacion y el esfuerzo del trabajo en equipo",
            content: `
                <img src="IMG/concursodetorres.jpg">
                <p>El Colegio Campo Rosso no solo enseña sino que tambien pone un enfasis fuerte no solo en lo academico, sino en el desarrollo de valores: solidaridad, responsabilidad, conciencia civica etc.</p>
                <h3>Importancia del trabajo en equipo</h3>
                <p>Sabemos que los trabajos ya sean individuales o en equipo, se debe realizar satisfactoriamente.
                pero tambien es importante reconocer que cuando hay trabajo en equipo, los trabajo ya son menos cargosos para uno</p>
            `,
            image: "IMG/noticiadelcolegio.jpg",
            author: "Briggith Estefany",
            date: "2025-08-05",
            timeAgo: "8 días",
            tags: ["aula", "equipo", "creatividad"]
        },
        {
            id: 4,
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
            timeAgo: "10 dias",
            tags: ["exámenes", "académico", "estudio"]
        }
    ],
    sports: [
        {
            id: 5,
            title: "Cierre de Juegos Deportivos",
            category: "DEPORTES",
            excerpt: "¡Campo Rosso 4 de Abril gano el concurso de barra,no logramos sacar el medallero de los juegos deportivos pero si sacamos el primer lugar del concurso de barras",
            content: `
                <img src="IMG/concurso de barras.jpg" alt="Equipo de fútbol celebrando" class="img-fluid rounded my-3">
                <p>La unidad educativa campo rosso 4 de abril logro sacar 1er lugar el el consurso de barras, tambien los estudiantes que participaron en los juegos lograron ganar medallas de diferentes categorias.</p>
                <p>¡Felicitar a los concursantes de barra.aaaaaaaaaa</p>
            `,
            image: "IMG/concurso de barras.jpg",
            author: "Redacción Deportiva",
            date: "2025-08-03",
            timeAgo: "3 días",
            tags: ["fútbol", "campeonato", "deportes"]
        },
        {
            id: 6,
            title: "Equipo de Baloncesto",
            category: "DEPORTES",
            excerpt: "El colegio demuestra motivacion en el ambito deportivo, ya que refleja una dura lucha contra otros colegios.",
            content: `
                <img src="IMG/EquipoDeBaloncesto.jpg" alt="Equipo de fútbol celebrando" class="img-fluid rounded my-3">
                <p>Una dura batalla inolvidable para el Colegio Campo Rosso. Nuestro equipo no a podido ganar todos los partidos, pero si demostro ansias en el ambito deportivo.</p>
                <p>El partido, que se disputó en el estadio municipal, mantuvo a la afición al borde de sus asientos. El gol de la victoria llegó en el último minuto, desatando la euforia de los jugadores y de toda la comunidad del colegio.</p>
                <p>¡Felicitar al entrenadora Reyna por el gran trabajo que estan haciendo los deportistas.!</p>
            `,
            image: "IMG/EquipoDeBaloncesto.jpg",
            author: "Redacción Deportiva",
            date: "2025-08-03",
            timeAgo: "4 días",
            tags: ["fútbol", "campeonato", "deportes"]
        },
        {
            id: 7,
            title: "Equipo de Fútbol",
            category: "DEPORTES",
            excerpt: "El Trio Peligro",
            content: `
                <img src="IMG/imgf.jpg" alt="Equipo de fútbol celebrando" class="img-fluid rounded my-3">
                <p>Una victoria inolvidable para el Colegio Campo Rosso. Nuestro equipo de fútbol demostró garra, talento y trabajo en equipo para vencer a su histórico rival, el Colegio Juancito pinto, en la final del campeonato de fútbol intercolegial.</p>
                <p>El partido, que se disputó en el estadio municipal, mantuvo a la afición al borde de sus asientos. El gol de la victoria llegó en el último minuto, desatando la euforia de los jugadores y de toda la comunidad del colegio.</p>
                <p>¡Felicitaciones a los campeones y a su entrenador por este gran logro que nos llena de orgullo!</p>
            `,
            image: "IMG/imgf.jpg",
            author: "Redacción Deportiva",
            date: "2025-08-03",
            timeAgo: "5 días",
            tags: ["fútbol", "campeonato", "deportes"]
        }
    ],
    events: [
        {
            id: 8,
            title: "Pre Ensayo del festival de danzas",
            category: "EVENTOS",
            excerpt: "Los estudiantes demuestran un breve ensayo de sus danzas no culminadas aun, asi mismos, ellos tambien han podido superarse y no solo hablo en el ambito participativo.",
            content: `
                <img src="IMG/PreEnsayoDelFestivalDeDanza.jpg" alt="Feria de ciencias" class="img-fluid rounded my-3">
                <p>Los estudiantes demuestran agallas para el festival de danzas y por lo que vemos, se nota demasiado, admirable y destacable.</p>
                <p>Participan desde el curso 1ro Hasta 6to de secundaria, despues de años, solo seran recuerdos inolvidables.</p>
            `,
            image: "IMG/PreEnsayoDelFestivalDeDanza.jpg",
            author: "Comité de Eventos",
            date: "2025-08-02",
            timeAgo: "hace 2 dia",
            tags: ["feria", "festival", "eventos"]
        },
        {
            id: 9, // Asegúrate de que el ID sea único y el siguiente en la secuencia
            title: "Evento de la piramide",
            category: "EVENTOS",
            excerpt: "Estudiantes del nivel Primario, se preparan para la Demostracion del evento de las piramides.Impresionante.",
            content: `
                <img src="IMG/piramide.jpg" alt="Feria de Arduino" class="img-fluid rounded my-3">
                <p>El Colegio Campo Rosso fue el escenario de una emocionante Feria Tecnológica centrada en la plataforma Arduino, donde los estudiantes demostraron sus habilidades en electrónica y programación. Con proyectos que iban desde sistemas de riego automatizados hasta robots controlados a distancia, los jóvenes mostraron cómo la teoría aprendida en clases se puede aplicar en soluciones innovadoras.</p>
                <p>La feria destacó por la fluidez con la que los estudiantes de diferentes niveles aplicaron el lenguaje de programación C++ para dar vida a sus creaciones, evidenciando el éxito del enfoque práctico del colegio en la educación STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).</p>
                <p>El evento contó con la presencia de padres y docentes, quienes se mostraron impresionados por la calidad y el ingenio de los proyectos presentados.</p>
            `,
            image: "IMG/piramide.jpg",
            author: "Redacción El Observador",
            date: "2025-08-06",
            timeAgo: "Hace 6 meses",
            tags: ["feria tecnológica", "arduino", "programación", "eventos"]
        },
        {
            id: 10, // Asegúrate de que el ID sea único y el siguiente en la secuencia
            title: "Carrera Armarmentista",
            category: "EVENTOS",
            excerpt: "Un evento canonico en el cual se demostro la capacidad de los estudiantes que podrian llegar tener en un futuro, Impresionate los que completaron los 5 kilometros de carrera.",
            content: `
                <img src="IMG/carrera.jpg" alt="Reconocimiento al profesor" class="img-fluid rounded my-3">
                <p>El Colegio Campo Rosso rindió un merecido homenaje al Ing. Juan David Uscamayta Ramos, profesor del área de Sistemas Informáticos, por el gran logro obtenido en la gestión 2021. Su liderazgo fue clave para la victoria del colegio en la <strong>Feria Tecnológica, Feria de la Juventud Proyectos de Emprendimiento e Innovación</strong>, un prestigioso evento desarrollado en Warnes.</p>
                <p>En representación del distrito Las Gamas, el equipo del colegio se alzó con el primer lugar, demostrando la excelencia y el espíritu innovador de nuestros estudiantes. El grupo ganador estuvo compuesto por las talentosas alumnas <strong>Luz María López, Magdalena Valencia y Mariana López</strong>, quienes, bajo la guía del Profesor David, llevaron a cabo un proyecto destacado que capturó la atención de los jueces.</p>
                <p>Este reconocimiento celebra no solo el triunfo en el evento, sino también la dedicación y el compromiso del profesor y sus estudiantes con la innovación y el desarrollo tecnológico.</p>
            `,
            image: "IMG/carrera.jpg",
            author: "Redacción El Observador",
            date: "2021-11-15",
            timeAgo: "Hace 6 meses durante 1ano",
            tags: ["reconocimiento", "profesores", "sistemas", "eventos"]
        }
    ],


    opinion: [
        {
            id: 11, // Asegúrate de que el ID sea único
            title: "La Importancia de la Inteligencia Artificial en el Aula",
            category: "OPINIÓN",
            excerpt: "La IA está cambiando la forma en que aprendemos y enseñamos. ¿Estamos listos para el desafío?",
            content: `
                <img src="IMG/ia-opinion.png" alt="IA en el aula" class="img-fluid rounded my-3">
                <p>La inteligencia artificial ha dejado de ser un tema de ciencia ficción para convertirse en una herramienta poderosa que transforma la educación...</p>
            `,
            image: "IMG/ia-opinion.png",
            author: "Jose Mario",
            date: "2025-08-07",
            timeAgo: "1 dia",
            tags: ["opinión", "IA", "educación"]
        },
        {
            id: 12,
            title: "El Bug en la Vida Estudiantil: Cuando tu código no compila, y los ex tampoco",
            excerpt: "Un programador en el colegio sabe que hay bugs que persisten y que no se eliminan fácilmente. La vida estudiantil, a veces, es igual.",
            content: `
                <img src="assets/images/opinion1.jpg" class="img-fluid rounded mb-3" alt="Programación en el colegio">
                <h3>Error de sintaxis en la tarea de matemáticas y un 'código' del pasado</h3>
                <p>Para todo estudiante que ha intentado programar, el 'bug' es una constante. Un pequeño error de sintaxis que te deja horas buscando la solución, una 'falta de lógica' que hace que el código no funcione como esperabas. Pero hay un bug peor: ese 'código' heredado que dejaste atrás, pero que a veces regresa con un error. Ese es un bug persistente. No sabes si borrar la variable o simplemente ignorarla y seguir con tu 'código limpio'. La vida en el colegio no es muy diferente. Es como si el sistema operativo de nuestra existencia tuviera un bug crónico. Un simple error —olvidar un libro o dormir 10 minutos de más— y el día entero se 'crashea'. Pero así como en la programación, el truco no es desesperarse, sino aprender a 'debuggear' con paciencia. Encontrar la raíz del problema, corregirlo y seguir adelante. Al final, cada bug resuelto, ya sea en el código o en la vida, nos hace un mejor programador y un mejor estudiante.</p>
            `,
            image: "assets/images/opinion1.jpg",
            category: "Opinión",
            timeAgo: "3 dias"
        }


    ]
};




