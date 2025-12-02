/**
 * Archivo JavaScript principal para Visualización de Datos
 * Idioma: Español
 */

// Configuración
const config = {
    language: 'es',
    chartContainer: '.chart-container',
    animationDuration: 500
};

// Contenido de texto para internacionalización
const translations = {
    loading: 'Cargando visualización...',
    error: 'Ocurrió un error al cargar el gráfico.',
    noData: 'No hay datos disponibles.',
    refresh: 'Actualizar',
    download: 'Descargar',
    fullscreen: 'Ver en Pantalla Completa',
    share: 'Compartir',
    insights: {
        title: 'Hallazgos Clave',
        trend: 'Análisis de Tendencias',
        regional: 'Comparación Regional',
        growth: 'Tasa de Crecimiento'
    },
    tooltips: {
        hover: 'Pasa el cursor sobre los elementos para más detalles',
        click: 'Haz clic para filtrar datos'
    }
};

// Inicializar la visualización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Idioma: ' + config.language);
    initializeChart();
    setupEventListeners();
});

/**
 * Inicializar el gráfico Flourish
 */
function initializeChart() {
    const container = document.querySelector(config.chartContainer);
    if (container) {
        console.log('Contenedor del gráfico encontrado, inicializando...');
        // Los gráficos Flourish se auto-inicializan a través de su script embebido
        // Esta función se puede usar para configuración adicional si es necesario
    }
}

/**
 * Configurar los escuchadores de eventos para elementos interactivos
 */
function setupEventListeners() {
    // Resaltado del selector de idioma
    const langLinks = document.querySelectorAll('.language-selector a');
    langLinks.forEach(link => {
        if (link.href.includes('/' + config.language + '/')) {
            link.classList.add('active');
        }
    });
}

/**
 * Mostrar un mensaje al usuario
 * @param {string} message - El mensaje a mostrar
 * @param {string} type - El tipo de mensaje (info, error, success)
 */
function showMessage(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

/**
 * Formatear un número según la configuración regional actual
 * @param {number} num - El número a formatear
 * @returns {string} - Cadena de número formateado
 */
function formatNumber(num) {
    return new Intl.NumberFormat(config.language).format(num);
}

/**
 * Formatear una fecha según la configuración regional actual
 * @param {Date} date - La fecha a formatear
 * @returns {string} - Cadena de fecha formateada
 */
function formatDate(date) {
    return new Intl.DateTimeFormat(config.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Exportar funciones para uso externo si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, translations, formatNumber, formatDate };
}
