document.addEventListener('DOMContentLoaded', () => {
    // Los contenedores de las secciones de la página
    const featuredContainer = document.getElementById('featured-news');
    const academicContainer = document.getElementById('academic-news');
    const sportsContainer = document.getElementById('sports-news');
    const eventsContainer = document.getElementById('events-news');
    const opinionContainer = document.getElementById('opinion-news');

    // Función para crear una tarjeta de noticia
    const createNewsCard = (newsItem) => {
        const col = document.createElement('div');
        col.className = 'col';
        col.setAttribute('data-id', newsItem.id);

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm border-0 news-card';
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <img src="${newsItem.image}" class="card-img-top" alt="${newsItem.title}">
            <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-primary">${newsItem.category}</span>
                    <small class="text-muted">${newsItem.timeAgo}</small>
                </div>
                <h5 class="card-title text-primary">${newsItem.title}</h5>
                <p class="card-text text-muted">${newsItem.excerpt}</p>
                <div class="mt-auto">
                    <a href="#" class="btn btn-outline-primary btn-sm read-more-btn" data-id="${newsItem.id}">Leer más</a>
                </div>
            </div>
        `;

        col.appendChild(card);
        return col;
    };

    // Función para crear la tarjeta destacada principal
    const createFeaturedMainCard = (newsItem) => {
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-8';
        cardCol.setAttribute('data-id', newsItem.id);

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm border-0 news-card';
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-12">
                    <img src="${newsItem.image}" class="card-img-top rounded-top" alt="${newsItem.title}">
                </div>
                <div class="col-md-12">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-primary">${newsItem.category}</span>
                            <small class="text-muted">${newsItem.timeAgo}</small>
                        </div>
                        <h5 class="card-title text-primary">${newsItem.title}</h5>
                        <p class="card-text text-muted">${newsItem.excerpt}</p>
                        <div class="mt-auto">
                            <a href="#" class="btn btn-primary read-more-btn" data-id="${newsItem.id}">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        cardCol.appendChild(card);
        return cardCol;
    };

    // Función principal para renderizar todas las noticias
    const renderAllNews = () => {
        if (typeof newsDatabase === 'undefined' || !newsDatabase) {
            console.error("Error: newsDatabase no está definido.");
            return;
        }

        if (newsDatabase.featured && newsDatabase.featured.length > 0) {
            const mainFeatured = newsDatabase.featured[0];
            const featuredMainCard = createFeaturedMainCard(mainFeatured);
            featuredContainer.appendChild(featuredMainCard);
        }

        if (newsDatabase.academic && newsDatabase.academic.length > 0) {
            newsDatabase.academic.forEach(newsItem => {
                academicContainer.appendChild(createNewsCard(newsItem));
            });
        }

        if (newsDatabase.sports && newsDatabase.sports.length > 0) {
            newsDatabase.sports.forEach(newsItem => {
                sportsContainer.appendChild(createNewsCard(newsItem));
            });
        }

        if (newsDatabase.events && newsDatabase.events.length > 0) {
            newsDatabase.events.forEach(newsItem => {
                eventsContainer.appendChild(createNewsCard(newsItem));
            });
        }

        if (newsDatabase.opinion && newsDatabase.opinion.length > 0) {
            newsDatabase.opinion.forEach(newsItem => {
                opinionContainer.appendChild(createNewsCard(newsItem));
            });
        }
    };

    // LÓGICA PARA LA BARRITA DE BUSQUEDA
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const allCards = document.querySelectorAll('.news-card');
        allCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.card-text').textContent.toLowerCase();

            const cardParent = card.closest('.col');

            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                if (cardParent) {
                    cardParent.style.display = 'block';
                } else {
                    card.style.display = 'block';
                }
            } else {
                if (cardParent) {
                    cardParent.style.display = 'none';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });

    // LÓGICA PARA LA SweetAlert2
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more-btn')) {
            e.preventDefault();
            const newsId = parseInt(e.target.getAttribute('data-id'));

            const allNews = Object.values(newsDatabase).flat();

            const selectedNews = allNews.find(item => item.id === newsId);
            if (selectedNews) {
                Swal.fire({
                    title: `<h5 class="text-start text-primary">${selectedNews.title}</h5>`,
                    html: selectedNews.content,
                    showCloseButton: true,
                    showConfirmButton: false,
                    width: '90%',
                    customClass: {
                        popup: 'my-swal-modal',
                        title: 'my-swal-title',
                        htmlContainer: 'my-swal-content'
                    }
                });
            }
        }
    });

    // LA LóGICA PARA LA FECHA ACTUAL
    const currentDateElement = document.getElementById('current-date');
    const lastUpdateElement = document.getElementById('last-update');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString('es-ES', options);
    lastUpdateElement.textContent = today.toLocaleDateString('es-ES', options);


    renderAllNews();


    // SECCIÓN PARA COMENTARIOS (AGREGADA)
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('comment-name');
        const textInput = document.getElementById('comment-text');

        const name = nameInput.value;
        const text = textInput.value;

        if (name && text) {
            const commentItem = document.createElement('div');
            commentItem.className = 'list-group-item list-group-item-action d-flex gap-3 py-3';
            commentItem.innerHTML = `
                <i class="fas fa-user-circle fs-4 text-muted"></i>
                <div class="d-flex w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0 text-primary">${name}</h6>
                        <p class="mb-0 opacity-75">${text}</p>
                    </div>
                    <small class="text-muted text-nowrap">${new Date().toLocaleDateString()}</small>
                </div>
            `;
            commentsList.prepend(commentItem);

            nameInput.value = '';
            textInput.value = '';
        }
    });
});