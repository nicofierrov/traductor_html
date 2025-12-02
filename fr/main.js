/**
 * Fichier JavaScript principal pour la Visualisation de Données
 * Langue : Français
 */

// Configuration
const config = {
    language: 'fr',
    chartContainer: '.chart-container',
    animationDuration: 500
};

// Contenu textuel pour l'internationalisation
const translations = {
    loading: 'Chargement de la visualisation...',
    error: 'Une erreur s\'est produite lors du chargement du graphique.',
    noData: 'Aucune donnée disponible.',
    refresh: 'Actualiser',
    download: 'Télécharger',
    fullscreen: 'Voir en Plein Écran',
    share: 'Partager',
    insights: {
        title: 'Points Clés',
        trend: 'Analyse des Tendances',
        regional: 'Comparaison Régionale',
        growth: 'Taux de Croissance'
    },
    tooltips: {
        hover: 'Survolez les éléments pour plus de détails',
        click: 'Cliquez pour filtrer les données'
    }
};

// Initialiser la visualisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée - Langue : ' + config.language);
    initializeChart();
    setupEventListeners();
});

/**
 * Initialiser le graphique Flourish
 */
function initializeChart() {
    const container = document.querySelector(config.chartContainer);
    if (container) {
        console.log('Conteneur du graphique trouvé, initialisation...');
        // Les graphiques Flourish s'auto-initialisent via leur script intégré
        // Cette fonction peut être utilisée pour une configuration supplémentaire si nécessaire
    }
}

/**
 * Configurer les écouteurs d'événements pour les éléments interactifs
 */
function setupEventListeners() {
    // Mise en évidence du sélecteur de langue
    const langLinks = document.querySelectorAll('.language-selector a');
    langLinks.forEach(link => {
        if (link.href.includes('/' + config.language + '/')) {
            link.classList.add('active');
        }
    });
}

/**
 * Afficher un message à l'utilisateur
 * @param {string} message - Le message à afficher
 * @param {string} type - Le type de message (info, error, success)
 */
function showMessage(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

/**
 * Formater un nombre selon les paramètres régionaux actuels
 * @param {number} num - Le nombre à formater
 * @returns {string} - Chaîne de nombre formaté
 */
function formatNumber(num) {
    return new Intl.NumberFormat(config.language).format(num);
}

/**
 * Formater une date selon les paramètres régionaux actuels
 * @param {Date} date - La date à formater
 * @returns {string} - Chaîne de date formatée
 */
function formatDate(date) {
    return new Intl.DateTimeFormat(config.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Exporter les fonctions pour une utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, translations, formatNumber, formatDate };
}
