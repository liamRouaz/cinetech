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

  // afficher les details du film
  function detail(API_URL){
    fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des détails du film');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Afficher les détails du film
      const filmDetail = document.getElementById('film-detail');
      filmDetail.innerHTML = `
        <h2>${data.title}</h2>
        <p>Popularité: ${data.popularity}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title} Poster">
        <p>${data.overview}</p>
      `;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des détails du film:', error);
    });
}

// Récupérer les données de l'API pour afficher une liste de films
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
    const filmsContainer = document.getElementById('films');
    // Vérifier si data.results existe
    if (data.results) {
      data.results.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.innerHTML = `
        <h2>${film.title}</h2>
        <p>Popularité: ${film.popularity}</p>
        <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title} Poster" onclick="showDetails(${film.id})">
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