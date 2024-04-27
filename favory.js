// Fonction pour afficher les films favoris sur la page "favory.html"
function displayFavoriteMovies() {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const favoriteMoviesContainer = document.getElementById('favoriteMovies');

    favoriteMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        // Construire le contenu HTML pour afficher les détails du film
        movieElement.innerHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top" src="${movie.poster_path}" alt="${movie.title} Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <!-- Afficher d'autres détails du film ici -->
                    </div>
                </div>
            </div>
        `;
        favoriteMoviesContainer.appendChild(movieElement);
    });
}

// Appeler la fonction pour afficher les films favoris lors du chargement de la page
displayFavoriteMovies();
