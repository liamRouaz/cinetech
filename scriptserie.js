const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const api = 'https://api.themoviedb.org/3/discover/tv?api_key=' + maConst;


fetch(api)
    .then(response => response.json())
    .then(data => {
        const filmsContainer = document.getElementById('films');

        data.results.forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('col-md-4', 'mb-4'); // Bootstrap classes for column and margin bottom
            filmElement.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title} Poster">
                    <div class="card-body">
                        <h5 class="card-title">${film.title}</h5>
                        <p class="card-text">${film.overview}</p>
                    </div>
                </div>
            `;
            filmsContainer.appendChild(filmElement);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });