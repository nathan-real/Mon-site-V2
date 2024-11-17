function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nom: params.get('nom'),
        email: params.get('email'),
        avis: params.get('avis')
    };
}

function afficherReponses() {
    const reponses = getQueryParams();
    if (reponses.nom !== null) {
        const divReponses = document.getElementById('reponses');
        divReponses.innerHTML = `
                    <h1 class="soustitre-center">Merci pour votre réponse !</h1>
                    <p class="reponse-questionnaire"><strong>Nom :</strong> ${reponses.nom}</p>
                    <p class="reponse-questionnaire"><strong>Email :</strong> ${reponses.email}</p>
                    <p class="reponse-questionnaire"><strong>Votre avis :</strong> ${reponses.avis}</p>
                `;
    }
}

document.addEventListener('DOMContentLoaded', afficherReponses);