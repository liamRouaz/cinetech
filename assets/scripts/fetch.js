// Récupération des films
const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const filmApi = 'https://api.themoviedb.org/3/discover/movie?language=fr-FR&api_key=' + maConst;

fetch(filmApi)
    .then(response => response.json())
    .then(data => {
        const filmsContainer = document.getElementById('films');
        const films = data.results.map(film => `
            <div>
                <h2>${film.title}</h2>
                <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title} Poster">
            </div>
        `).join('');

        // Ajouter les films au carrousel
        filmsContainer.innerHTML = films;

        // Initialiser le carrousel de films avec Slick.js
        $('#films').slick({
            infinite: true,
            slidesToShow: 3, // Nombre de films affichés simultanément
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000 // Vitesse de défilement automatique
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données des films:', error);
    });

// Récupération des séries
const maConst2 = '8c4b867188ee47a1d4e40854b27391ec';
const serieApi = 'https://api.themoviedb.org/3/discover/tv?api_key=' + maConst2;


fetch(serieApi)
    .then(response => response.json())
    .then(data => {
        const seriesContainer = document.getElementById('series');

        data.results.forEach(serie => {
            const serieElement = document.createElement('div');
            
            serieElement.innerHTML = `
                <div class="card">
        
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="${serie.title} Poster">
                </div>
            `;
            seriesContainer.appendChild(serieElement);
        });

        // Initialiser le carrousel de séries avec Slick.js
        $('#series').slick({
            infinite: true,
            slidesToShow: 3, // Nombre de séries affichées simultanément
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000 // Vitesse de défilement automatique
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données des séries:', error);
    });
