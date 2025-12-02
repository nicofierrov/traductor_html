/**
 * HTML Translator - JavaScript Translation Engine
 * Supports: English (EN), Spanish (ES), French (FR)
 */

// Constants for file type detection
const FILE_EXTENSION_PATTERN = /\.(html|htm|js)$/i;
const JS_CONTENT_INDICATORS = ['function ', 'const ', 'let ', 'var ', '=>', 'module.exports'];
const HTML_CONTENT_INDICATORS = ['<!DOCTYPE', '<html', '<head', '<body', '<div', '<script'];

// Translation dictionary - maps phrases between languages
const translationDictionary = {
    // Common HTML/Web terms
    "Data Visualization": {
        en: "Data Visualization",
        es: "Visualización de Datos",
        fr: "Visualisation de Données"
    },
    "Interactive Data Visualization": {
        en: "Interactive Data Visualization",
        es: "Visualización de Datos Interactiva",
        fr: "Visualisation de Données Interactive"
    },
    "Flourish Chart": {
        en: "Flourish Chart",
        es: "Gráfico Flourish",
        fr: "Graphique Flourish"
    },
    "Loading visualization...": {
        en: "Loading visualization...",
        es: "Cargando visualización...",
        fr: "Chargement de la visualisation..."
    },
    "An error occurred while loading the chart.": {
        en: "An error occurred while loading the chart.",
        es: "Ocurrió un error al cargar el gráfico.",
        fr: "Une erreur s'est produite lors du chargement du graphique."
    },
    "No data available.": {
        en: "No data available.",
        es: "No hay datos disponibles.",
        fr: "Aucune donnée disponible."
    },
    
    // UI Elements
    "Language": {
        en: "Language",
        es: "Idioma",
        fr: "Langue"
    },
    "Refresh": {
        en: "Refresh",
        es: "Actualizar",
        fr: "Actualiser"
    },
    "Download": {
        en: "Download",
        es: "Descargar",
        fr: "Télécharger"
    },
    "View Fullscreen": {
        en: "View Fullscreen",
        es: "Ver en Pantalla Completa",
        fr: "Voir en Plein Écran"
    },
    "Share": {
        en: "Share",
        es: "Compartir",
        fr: "Partager"
    },
    
    // Content
    "Explore our data through interactive charts": {
        en: "Explore our data through interactive charts",
        es: "Explora nuestros datos a través de gráficos interactivos",
        fr: "Explorez nos données à travers des graphiques interactifs"
    },
    "Welcome to our data visualization platform.": {
        en: "Welcome to our data visualization platform.",
        es: "Bienvenido a nuestra plataforma de visualización de datos.",
        fr: "Bienvenue sur notre plateforme de visualisation de données."
    },
    "Key Insights": {
        en: "Key Insights",
        es: "Hallazgos Clave",
        fr: "Points Clés"
    },
    "Trend Analysis": {
        en: "Trend Analysis",
        es: "Análisis de Tendencias",
        fr: "Analyse des Tendances"
    },
    "Regional Comparison": {
        en: "Regional Comparison",
        es: "Comparación Regional",
        fr: "Comparaison Régionale"
    },
    "Growth Rate": {
        en: "Growth Rate",
        es: "Tasa de Crecimiento",
        fr: "Taux de Croissance"
    },
    "The data shows a significant upward trend over the past year.": {
        en: "The data shows a significant upward trend over the past year.",
        es: "Los datos muestran una tendencia ascendente significativa durante el último año.",
        fr: "Les données montrent une tendance à la hausse significative au cours de l'année écoulée."
    },
    "North America leads in overall performance metrics.": {
        en: "North America leads in overall performance metrics.",
        es: "América del Norte lidera en métricas de rendimiento general.",
        fr: "L'Amérique du Nord est en tête des métriques de performance globale."
    },
    "Year-over-year growth has exceeded expectations by 15%.": {
        en: "Year-over-year growth has exceeded expectations by 15%.",
        es: "El crecimiento interanual ha superado las expectativas en un 15%.",
        fr: "La croissance d'une année sur l'autre a dépassé les attentes de 15%."
    },
    
    // Footer
    "All rights reserved.": {
        en: "All rights reserved.",
        es: "Todos los derechos reservados.",
        fr: "Tous droits réservés."
    },
    "Data source": {
        en: "Data source",
        es: "Fuente de datos",
        fr: "Source des données"
    },
    "Sample Dataset": {
        en: "Sample Dataset",
        es: "Conjunto de datos de muestra",
        fr: "Ensemble de données d'exemple"
    },
    "Created with Flourish": {
        en: "Created with Flourish",
        es: "Creado con Flourish",
        fr: "Créé avec Flourish"
    },
    
    // Additional common phrases
    "Click to filter data": {
        en: "Click to filter data",
        es: "Haz clic para filtrar datos",
        fr: "Cliquez pour filtrer les données"
    },
    "Hover over elements for more details": {
        en: "Hover over elements for more details",
        es: "Pasa el cursor sobre los elementos para más detalles",
        fr: "Survolez les éléments pour plus de détails"
    },
    "Page loaded": {
        en: "Page loaded",
        es: "Página cargada",
        fr: "Page chargée"
    },
    "Chart container found, initializing...": {
        en: "Chart container found, initializing...",
        es: "Contenedor del gráfico encontrado, inicializando...",
        fr: "Conteneur du graphique trouvé, initialisation..."
    },
    
    // HTML attributes and meta
    "Data Visualization Project": {
        en: "Data Visualization Project",
        es: "Proyecto de Visualización de Datos",
        fr: "Projet de Visualisation de Données"
    },
    
    // Comments
    "Flourish Embedded Visualization": {
        en: "Flourish Embedded Visualization",
        es: "Visualización Flourish Embebida",
        fr: "Visualisation Flourish Intégrée"
    },
    "Main JavaScript file for Data Visualization": {
        en: "Main JavaScript file for Data Visualization",
        es: "Archivo JavaScript principal para Visualización de Datos",
        fr: "Fichier JavaScript principal pour la Visualisation de Données"
    },
    
    // More content phrases
    "This page showcases an interactive chart created with Flourish, a powerful data visualization tool that allows you to explore and understand complex data in an intuitive way.": {
        en: "This page showcases an interactive chart created with Flourish, a powerful data visualization tool that allows you to explore and understand complex data in an intuitive way.",
        es: "Esta página muestra un gráfico interactivo creado con Flourish, una poderosa herramienta de visualización de datos que te permite explorar y comprender datos complejos de manera intuitiva.",
        fr: "Cette page présente un graphique interactif créé avec Flourish, un puissant outil de visualisation de données qui vous permet d'explorer et de comprendre des données complexes de manière intuitive."
    },
    "The chart below demonstrates key trends and patterns in our dataset. You can interact with the visualization by hovering over elements to see detailed information, or by clicking on different categories to filter the data.": {
        en: "The chart below demonstrates key trends and patterns in our dataset. You can interact with the visualization by hovering over elements to see detailed information, or by clicking on different categories to filter the data.",
        es: "El gráfico a continuación demuestra las tendencias y patrones clave en nuestro conjunto de datos. Puedes interactuar con la visualización pasando el cursor sobre los elementos para ver información detallada, o haciendo clic en diferentes categorías para filtrar los datos.",
        fr: "Le graphique ci-dessous démontre les tendances et les modèles clés de notre ensemble de données. Vous pouvez interagir avec la visualisation en survolant les éléments pour voir des informations détaillées, ou en cliquant sur différentes catégories pour filtrer les données."
    }
};

// Note: This word dictionary is kept for reference but not actively used in translations.
// The phrase-based translationDictionary above provides more accurate context-aware translations.
// Word-by-word translation can lead to grammatical errors due to gender/number agreement issues.
const wordDictionary = {
    // Common words - provided as reference only
    "and": { es: "y", fr: "et" },
    "or": { es: "o", fr: "ou" },
    "for": { es: "para", fr: "pour" },
    "with": { es: "con", fr: "avec" },
    "data": { es: "datos", fr: "données" },
    "chart": { es: "gráfico", fr: "graphique" },
    "visualization": { es: "visualización", fr: "visualisation" },
    "interactive": { es: "interactivo", fr: "interactif" },
    "loading": { es: "cargando", fr: "chargement" },
    "error": { es: "error", fr: "erreur" },
    "success": { es: "éxito", fr: "succès" },
    "download": { es: "descargar", fr: "télécharger" },
    "upload": { es: "subir", fr: "téléverser" },
    "file": { es: "archivo", fr: "fichier" },
    "language": { es: "idioma", fr: "langue" }
};

/**
 * Main translation function
 * @param {string} content - The content to translate
 * @param {string} sourceLang - Source language code (en, es, fr)
 * @param {string} targetLang - Target language code (en, es, fr)
 * @returns {string} - Translated content
 */
function translate(content, sourceLang, targetLang) {
    if (sourceLang === targetLang) {
        return content;
    }
    
    let translatedContent = content;
    
    // Sort dictionary keys by length (longest first) to match longer phrases first
    const sortedKeys = Object.keys(translationDictionary).sort((a, b) => b.length - a.length);
    
    for (const phrase of sortedKeys) {
        const translations = translationDictionary[phrase];
        const sourcePhrase = translations[sourceLang];
        const targetPhrase = translations[targetLang];
        
        if (sourcePhrase && targetPhrase) {
            // Create a case-insensitive regex but preserve original case pattern
            const regex = new RegExp(escapeRegExp(sourcePhrase), 'gi');
            translatedContent = translatedContent.replace(regex, (match) => {
                // Try to preserve the case of the original
                if (match === match.toUpperCase()) {
                    return targetPhrase.toUpperCase();
                } else if (match[0] === match[0].toUpperCase()) {
                    return targetPhrase.charAt(0).toUpperCase() + targetPhrase.slice(1);
                }
                return targetPhrase;
            });
        }
    }
    
    // Update language attributes in HTML
    translatedContent = translatedContent.replace(
        /lang=["']([a-z]{2})["']/gi,
        `lang="${targetLang}"`
    );
    
    // Update config.language in JS files
    translatedContent = translatedContent.replace(
        /language:\s*['"]([a-z]{2})['"]/gi,
        `language: '${targetLang}'`
    );
    
    return translatedContent;
}

/**
 * Escape special regex characters
 * @param {string} string - String to escape
 * @returns {string} - Escaped string
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Load file content into the input editor
 * @param {Event} event - File input change event
 */
function loadFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('inputEditor').value = e.target.result;
        showStatus(`File "${file.name}" loaded successfully!`, 'success');
        
        // Try to detect language
        detectLanguage(e.target.result);
    };
    reader.onerror = function() {
        showStatus('Error reading file', 'error');
    };
    reader.readAsText(file);
}

/**
 * Attempt to detect the language of the content
 * @param {string} content - Content to analyze
 */
function detectLanguage(content) {
    const langMatch = content.match(/lang=["']([a-z]{2})["']/i);
    if (langMatch) {
        const detectedLang = langMatch[1].toLowerCase();
        if (['en', 'es', 'fr'].includes(detectedLang)) {
            document.getElementById('sourceLang').value = detectedLang;
            updateBadges();
            showStatus(`Detected language: ${getLangName(detectedLang)}`, 'info');
        }
    }
}

/**
 * Get full language name from code
 * @param {string} code - Language code
 * @returns {string} - Full language name
 */
function getLangName(code) {
    const names = {
        en: 'English',
        es: 'Español',
        fr: 'Français'
    };
    return names[code] || code;
}

/**
 * Translate the content in the input editor
 */
function translateContent() {
    const input = document.getElementById('inputEditor').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
    
    if (!input.trim()) {
        showStatus('Please enter content to translate', 'error');
        return;
    }
    
    if (sourceLang === targetLang) {
        showStatus('Source and target languages are the same', 'error');
        return;
    }
    
    try {
        const translated = translate(input, sourceLang, targetLang);
        document.getElementById('outputEditor').value = translated;
        showStatus(`Successfully translated from ${getLangName(sourceLang)} to ${getLangName(targetLang)}!`, 'success');
    } catch (error) {
        showStatus('Translation error: ' + error.message, 'error');
    }
}

/**
 * Download the translated content
 */
function downloadOutput() {
    const output = document.getElementById('outputEditor').value;
    const targetLang = document.getElementById('targetLang').value;
    
    if (!output.trim()) {
        showStatus('No translated content to download', 'error');
        return;
    }
    
    // Determine file extension based on content using defined indicators
    const extension = detectFileType(output);
    const filename = `translated_${targetLang}.${extension}`;
    
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showStatus(`Downloaded: ${filename}`, 'success');
}

/**
 * Detect file type based on content patterns
 * @param {string} content - The file content to analyze
 * @returns {string} - The detected file extension ('js' or 'html')
 */
function detectFileType(content) {
    // Check for HTML indicators first (more specific patterns)
    const htmlIndicatorCount = HTML_CONTENT_INDICATORS.filter(indicator => 
        content.includes(indicator)
    ).length;
    
    // Check for JS-specific patterns
    const jsIndicatorCount = JS_CONTENT_INDICATORS.filter(indicator => 
        content.includes(indicator)
    ).length;
    
    // If content has HTML document structure, it's HTML
    if (htmlIndicatorCount >= 2) {
        return 'html';
    }
    
    // If content has multiple JS indicators and no HTML structure, it's JS
    if (jsIndicatorCount >= 2 && htmlIndicatorCount === 0) {
        return 'js';
    }
    
    // Default to HTML for mixed or unknown content
    return 'html';
}

/**
 * Clear all editors
 */
function clearAll() {
    document.getElementById('inputEditor').value = '';
    document.getElementById('outputEditor').value = '';
    document.getElementById('fileInput').value = '';
    document.getElementById('statusBar').className = 'status-bar';
    document.getElementById('statusBar').textContent = '';
}

/**
 * Show status message
 * @param {string} message - Message to display
 * @param {string} type - Type of message (success, error, info)
 */
function showStatus(message, type) {
    const statusBar = document.getElementById('statusBar');
    statusBar.textContent = message;
    statusBar.className = 'status-bar ' + type;
}

/**
 * Update language badges
 */
function updateBadges() {
    const sourceLang = document.getElementById('sourceLang').value.toUpperCase();
    const targetLang = document.getElementById('targetLang').value.toUpperCase();
    
    document.getElementById('inputLangBadge').textContent = sourceLang;
    document.getElementById('outputLangBadge').textContent = targetLang;
}

/**
 * Populate dictionary preview
 */
function populateDictionary() {
    const container = document.getElementById('dictionaryPreview');
    const entries = Object.entries(translationDictionary).slice(0, 12); // Show first 12 entries
    
    container.innerHTML = entries.map(([key, value]) => `
        <div class="dict-entry">
            <span><span class="lang-label">EN:</span> ${value.en}</span>
            <span><span class="lang-label">ES:</span> ${value.es}</span>
            <span><span class="lang-label">FR:</span> ${value.fr}</span>
        </div>
    `).join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Update badges when language selection changes
    document.getElementById('sourceLang').addEventListener('change', updateBadges);
    document.getElementById('targetLang').addEventListener('change', updateBadges);
    
    // Initialize badges
    updateBadges();
    
    // Populate dictionary preview
    populateDictionary();
    
    // Drag and drop support
    const uploadArea = document.querySelector('.file-upload');
    
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.background = '#e8f0fe';
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.background = '';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.background = '';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (FILE_EXTENSION_PATTERN.test(file.name)) {
                document.getElementById('fileInput').files = files;
                loadFile({ target: { files: files } });
            } else {
                showStatus('Please upload HTML, HTM, or JS files only', 'error');
            }
        }
    });
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translate,
        translationDictionary,
        escapeRegExp,
        getLangName,
        detectFileType
    };
}
