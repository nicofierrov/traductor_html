/**
 * Main JavaScript file for Data Visualization
 * Language: English
 */

// Configuration
const config = {
    language: 'en',
    chartContainer: '.chart-container',
    animationDuration: 500
};

// Text content for internationalization
const translations = {
    loading: 'Loading visualization...',
    error: 'An error occurred while loading the chart.',
    noData: 'No data available.',
    refresh: 'Refresh',
    download: 'Download',
    fullscreen: 'View Fullscreen',
    share: 'Share',
    insights: {
        title: 'Key Insights',
        trend: 'Trend Analysis',
        regional: 'Regional Comparison',
        growth: 'Growth Rate'
    },
    tooltips: {
        hover: 'Hover over elements for more details',
        click: 'Click to filter data'
    }
};

// Initialize the visualization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - Language: ' + config.language);
    initializeChart();
    setupEventListeners();
});

/**
 * Initialize the Flourish chart
 */
function initializeChart() {
    const container = document.querySelector(config.chartContainer);
    if (container) {
        console.log('Chart container found, initializing...');
        // Flourish charts self-initialize via their embed script
        // This function can be used for additional setup if needed
    }
}

/**
 * Set up event listeners for interactive elements
 */
function setupEventListeners() {
    // Language selector highlighting
    const langLinks = document.querySelectorAll('.language-selector a');
    langLinks.forEach(link => {
        if (link.href.includes('/' + config.language + '/')) {
            link.classList.add('active');
        }
    });
}

/**
 * Display a message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (info, error, success)
 */
function showMessage(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

/**
 * Format a number according to the current locale
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
function formatNumber(num) {
    return new Intl.NumberFormat(config.language).format(num);
}

/**
 * Format a date according to the current locale
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    return new Intl.DateTimeFormat(config.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Export functions for external use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, translations, formatNumber, formatDate };
}
