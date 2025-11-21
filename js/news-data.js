const newsDatabase = {
    featured: [
        {
            id: 1,
            title: "El Colegio Campo Rosso 4 de Abril participa en la Presentacion de banda solidaria",
            category: "ACADÉMICO",
            excerpt: "Los Estudiantes de la barra han destacado al colegio Campo Rosso 4 de Abril.",
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
            timeAgo: "Hace 1 mes",
            tags: ["banda", "académico", "estudiantes"],
            featured: true
        }
    ],
    academic: [
                {
            id: 2,
            title: "Defensa de BTH",
            category: "Sistemas Informaticos",
            excerpt: "Se muestra como los estudiantes se esfuerzan por tener una buena retroalimentacion de conocimientos propios, la informatica haciendo lo suyo.",
            content: `
                <img src="IMG/DEFENSA.jpg">
                <p>El Colegio Campo Rosso repasa a los estudiantes a siempre hacerles entender de la capacidad que ellos pueden lograr.</p>
                <h3>Importancia de opinar</h3>
                <p>Sabemos que para hablar y responder con acritud, nos permite expresar ideas, necesidades y emociones, ademas de ser la principal herramienta para la comunicacion, el pensamiento y la resolucion de conflictos.</p>
            `,
            image: "IMG/DEFENSA.jpg",
            author: "JB",
            date: "2025-11-21",
            timeAgo: "1 dia",
            tags: ["comunicacion", "trabajo en equipo", "presentacion"]
        },
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
            author: "JB",
            date: "2025-10-10",
            timeAgo: "1 Mes",
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
            timeAgo: "2 Meses",
            tags: ["aula", "equipo", "creatividad"]
        },       

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
                <p>¡Felicitar a los Concursantes de la Barra y por supuesto a la Profe Reyna por la disciplina constante a los Estudiantes!</p>
            `,
            image: "IMG/concurso de barras.jpg",
            author: "Redacción Deportiva",
            date: "2025-11-15",
            timeAgo: "6 días",
            tags: ["fútbol", "campeonato", "deportes"]
        },
        {
            id: 6,
            title: "Equipo Cadete de Baloncesto",
            category: "DEPORTES",
            excerpt: "¡Campo Rosso!, ¡Campo Rosso!, fueron las voces del publico",
            content: `
                <img src="IMG/EquipoCadeteBaloncestoCampoRosso.jpg" alt="Equipo de fútbol celebrando" class="img-fluid rounded my-3">
                <p>Una dura batalla inolvidable para el Colegio Campo Rosso. Nuestro equipo no a podido ganar todos los partidos, pero si demostro ansias en el ambito deportivo.</p>
                <p>¡Felicitar a los deportistas.!</p>
            `,
            image: "IMG/EquipoCadeteBaloncestoCampoRosso.jpg",
            author: "Redacción Deportiva",
            date: "2025-10-03",
            timeAgo: "1 mes",
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
                <p>¡Felicitar al Profe Reyna, por el gran trabajo que estan haciendo sus deportistas.!</p>
            `,
            image: "IMG/EquipoDeBaloncesto.jpg",
            author: "Redacción Deportiva",
            date: "2025-10-03",
            timeAgo: "1 mes",
            tags: ["fútbol", "campeonato", "deportes"]
        },

    ],
    events: [
        {
            id: 8,
            title: "Entrada folklorica",
            category: "EVENTOS",
            excerpt: "Estudiantes del colegio Campo Rosso 4 de Abril, vuelve a participar despues de 2 años en la entrada folklorica.",
            content: `
                <img src="IMG/Entradafolklorica.jpg" alt="Entrada folklorica" class="img-fluid rounded my-3">
                <p>Los estudiantes y maestros demuestran su talento de baile en la entrada folklorica.</p>
                <p>Participarón los profesores, estudiantes y padres de familia.</p>
            `,
            image: "IMG/Entradafolklorica.jpg",
            author: "Comité de Eventos",
            date: "2025-11-08",
            timeAgo: "hace 13 dias",
            tags: ["feria", "festival", "eventos"]
        },
        {
            id: 8,
            title: "Facultad De Ciencias Agricolas",
            category: "EVENTOS",
            excerpt: "La promocion del colegio Campo Rosso, fue a una facultad de Ciencias Agricola",
            content: `
                <img src="IMG/Agronomia1.jpg" alt="Feria de ciencias" class="img-fluid rounded my-3">
                <p>Los estudiantes de la promocion, ha podido observar las diferencias ciencias y carreras que tiene la Universidad Gabriel Rene Moreno.</p>
                <p>¡Asombroso lo que tiene esa Facultad de Ciencias Agricola!.</p>
            `,
            image: "IMG/Agronomia2.jpg",
            author: "Comité de Eventos",
            date: "2025-11-05",
            timeAgo: "hace 16 dias",
            tags: ["feria", "festival", "eventos"]
        },
        {
            id: 9,
            title: "Pre Ensayo del Festival De Danza",
            category: "EVENTOS",
            excerpt: "Estudiantes del nivel Secundario se preparan para el festival de danza del Colegio Campo Rosso.",
            content: `
                <img src="IMG/PreEnsayoDelFestivalDeDanza.jpg" alt="Feria de Arduino" class="img-fluid rounded my-3">
                <p>El Colegio es una gran oportunidad de aprender cosas nuevas y creativas.</p>
                <p>Risas y emociones, eso es una gran comunidad/p>
            `,
            image: "IMG/PreEnsayoDelFestivalDeDanza.jpg",
            author: "Redacción El Observador",
            date: "2025-08-06",
            timeAgo: "Hace 2 meses",
            tags: ["feria tecnológica", "arduino", "programación", "eventos"]
        },

    ],


    opinion: [
        {
            id: 11,
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




