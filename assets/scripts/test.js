
const maConstserie = '8c4b867188ee47a1d4e40854b27391ec';
const apiserie = 'https://api.themoviedb.org/3/discover/tv?api_key=' + maConstserie;


fetch(apiserie)
    .then(response => response.json())
    .then(data => {
       console.log(data)
 
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });