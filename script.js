const maConst = '8c4b867188ee47a1d4e40854b27391ec';
const api = 'https://api.themoviedb.org/3/discover/movie?api_key=' + maConst;

fetch(api)
  .then(response => response.json())
  .then(data => {
    // Faire quelque chose avec les données récupérées
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });