// const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const maConst = '8c4b867188ee47a1d4e40854b27391ec'; // Je vais décommenter cette ligne pour utiliser la constante maConst

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        if (query.length === 0) {
            searchResults.innerHTML = '';
            return;
        }

        const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + maConst + '&query='; // J'ai ajouté maConst ici

        fetch(searchUrl + query)
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = '';
                data.results.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.textContent = movie.title;
                    searchResults.appendChild(movieElement);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    });
});
