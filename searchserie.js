//const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const apiUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=' + maConst;
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim();
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

    const searchUrl = 'https://api.themoviedb.org/3/search/tv?api_key=' + maConst + '&query=';
    
    fetch(searchUrl + query)
        .then(response => response.json())
        .then(data => {
            searchResults.innerHTML = '';
            data.results.forEach(tv => {
                const tvElement = document.createElement('div');
                tvElement.textContent = tv.name; // Utilisez 'name' pour le titre de la série
                searchResults.appendChild(tvElement);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
});
