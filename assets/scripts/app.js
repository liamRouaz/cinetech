// Importer les fonctions de redirection des pages
import { redirectInscription, redirectConnexion ,initFormHandling} from "./modules/fonctions.js";


// Appeler les fonctions de redirection des pages et de gestion du formulaire
redirectInscription();
redirectConnexion();
initFormHandling();


// Code pour afficher le message de bienvenue sur la page "traitement.html"
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le nom de l'utilisateur depuis le localStorage
    const username = localStorage.getItem('current_user');

    // Vérifier si le nom d'utilisateur existe dans le localStorage
    if (username && window.location.pathname.includes("accueil.html")) {
        // Afficher le message de bienvenue
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.innerText = "Bienvenue, " + username + " !";
    }
});
