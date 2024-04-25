// Fonction pour rediriger vers une page spécifique
function redirectToPage(button, pagePath) {
    if (button) {
        button.addEventListener("click", () => {
            window.location.href = pagePath;
        });
    }
}

// Fonction pour gérer la soumission du formulaire
function handleFormSubmission(form) {
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Rechargement de la page non effectué");

            // Récupérer les valeurs des champs du formulaire
            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Créer un objet représentant les données de l'utilisateur
            const utilisateur = {
                fullname: fullname,
                email: email,
                password: password
            };

            // Récupérer les données JSON existantes depuis le stockage local
            const existingData = localStorage.getItem('utilisateurs');

            // Convertir les données JSON en tableau d'objets JavaScript ou initialiser un nouveau tableau si les données n'existent pas encore
            const utilisateurs = existingData ? JSON.parse(existingData) : [];

            // Ajouter les données de l'utilisateur au tableau
            utilisateurs.push(utilisateur);

            // Enregistrer le tableau mis à jour dans le stockage local sous forme de JSON
            localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

            console.log('Utilisateur enregistré avec succès.');

            window.location.href = "./connexion.html";
        });
    }
}

// Fonction pour gérer la soumission du formulaire de connexion
function handleLoginSubmission(form) {
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Récupérer les valeurs des champs du formulaire
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Récupérer les utilisateurs enregistrés depuis le localStorage
            const existingUsers = localStorage.getItem('utilisateurs');
            const users = existingUsers ? JSON.parse(existingUsers) : [];

            // Vérifier si l'utilisateur existe et si le mot de passe correspond
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                // Connexion réussie, rediriger vers la page de traitement
                localStorage.setItem('current_user', user.fullname);
                window.location.href = "./accueil.html";
            } else {
                // Afficher un message d'erreur si l'utilisateur n'existe pas ou les informations de connexion sont incorrectes
                const errorMessage = document.getElementById("error-message");
                errorMessage.textContent = "Adresse e-mail ou mot de passe incorrect.";
            }
        });
    }
}

// Sélection des éléments DOM
const bconnect = document.getElementById("connexion-btn");
const binscript = document.getElementById("inscription-btn");
const form = document.querySelector("#inscription");
const loginForm = document.querySelector("#connexion");

// Appeler les fonctions pour rediriger vers les pages de connexion et d'inscription
export function redirectInscription() {
    redirectToPage(binscript, "./assets/pages/inscription.html");
}

export function redirectConnexion() {
    redirectToPage(bconnect, "./assets/pages/connexion.html");
}

// Appeler la fonction pour gérer la soumission du formulaire
function initFormHandling() {
    handleFormSubmission(form);
    handleLoginSubmission(loginForm);
}

export { initFormHandling };