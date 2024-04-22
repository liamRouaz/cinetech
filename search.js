// const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + maConst + '&query=';

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim();
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

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
