// Définir la constante pour l'API et la clé d'API
const API_KEY = '8c4b867188ee47a1d4e40854b27391ec';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

// Récupérer les données de l'API
fetch(API_URL)
  .then(response => {
    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(data => {
    console.log(API_URL);
    const filmsContainer = document.getElementById('type');

    // Vérifier si data.results existe
    if (data.results) {
      data.results.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.innerHTML = `
            <h2>${film.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title} Poster">
            <p>${film.overview}</p>
        `;
        filmsContainer.appendChild(filmElement);
      });
    } else {
      console.error('Aucun résultat trouvé.');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });
