const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + maConst;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const filmsContainer = document.getElementById('films');

        data.results.forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('col-md-4', 'mb-4'); 
            filmElement.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title} Poster">
                    <div class="card-body">
                        <h5 class="card-title">${film.title}</h5>
                        <button class="btn btn-primary showDetailsBtn" data-id="${film.id}">Voir les détails</button>
                        <div class="details" style="display: none;">
                            <p><strong>Résumé:</strong> <span class="summary"></span></p>
                            <p><strong>Date de sortie:</strong> ${film.release_date}</p>
                            <p><strong>Note moyenne:</strong> ${film.vote_average}</p>
                            <form class="commentForm">
                                <div class="form-group">
                                    <label for="comment">Ajouter un commentaire:</label>
                                    <textarea class="form-control" id="comment" rows="3" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Soumettre</button>
                            </form>
                            <div class="comments"></div>
                        </div>
                    </div>
                </div>
            `;
            filmsContainer.appendChild(filmElement);

            //récupérer le résumé du film et l'ajouter dans les détails
            fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${maConst}&language=fr`)
                .then(response => response.json())
                .then(movieData => {
                    const summary = movieData.overview;
                    const detailsDiv = filmElement.querySelector('.details');
                    const summarySpan = detailsDiv.querySelector('.summary');
                    summarySpan.textContent = summary;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des détails du film:', error);
                });
        });

        //ajouter un écouteur d'événements à chaque bouton "Voir les détails"
        const showDetailsBtns = document.querySelectorAll('.showDetailsBtn');
        showDetailsBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const detailsDiv = this.parentNode.querySelector('.details');
                if (detailsDiv.style.display === 'none') {
                    detailsDiv.style.display = 'block';
                    this.textContent = 'Cacher les détails';
                } else {
                    detailsDiv.style.display = 'none';
                    this.textContent = 'Voir les détails';
                }
            });
        });

        //ajouter un écouteur d'événements pour les formulaires de commentaire
        const commentForms = document.querySelectorAll('.commentForm');
        commentForms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const commentInput = this.querySelector('#comment');
                const commentText = commentInput.value.trim();
                if (commentText !== '') {
                    const commentsDiv = this.parentNode.querySelector('.comments');
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    commentElement.textContent = commentText;
                    commentsDiv.appendChild(commentElement);
                    commentInput.value = ''; //effacer le champ de commentaire après l'ajout
                } else {
                    alert('Veuillez entrer un commentaire.');
                }
            });
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });

    // Fonction pour ajouter un film aux favoris
function addToFavorites(event) {
    const movieId = event.target.dataset.id;
    const movieDetails = getMovieDetails(movieId);
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    favoriteMovies.push(movieDetails);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    alert('Le film a été ajouté aux favoris !');
}

// Récupérer les détails d'un film à partir de son ID
function getMovieDetails(movieId) {
    // Effectuer une requête à l'API pour obtenir les détails du film en utilisant son ID
    // Retourner les détails du film sous forme d'objet
}

// Ajouter un écouteur d'événements pour les boutons "Ajouter aux favoris"
const addToFavoritesBtns = document.querySelectorAll('.addToFavoritesBtn');
addToFavoritesBtns.forEach(btn => {
    btn.addEventListener('click', addToFavorites);
});

    
