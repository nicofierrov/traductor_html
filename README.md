# traductor_html

Un repositorio que nació para traducir un gráfico de Flourish en un HTML.

## 📋 Descripción

Este proyecto permite:
1. Visualizar datos con gráficos Flourish embebidos en HTML
2. Traducir archivos HTML y JavaScript entre Inglés (EN), Español (ES) y Francés (FR)
3. Utilizar una herramienta web amigable para traducir archivos

## 📁 Estructura del Proyecto

```
traductor_html/
├── en/                    # Archivos en Inglés
│   ├── index.html        # Página principal con visualización Flourish
│   └── main.js           # JavaScript con textos en inglés
├── es/                    # Archivos en Español
│   ├── index.html        # Página principal traducida al español
│   └── main.js           # JavaScript con textos en español
├── fr/                    # Archivos en Francés
│   ├── index.html        # Página principal traducida al francés
│   └── main.js           # JavaScript con textos en francés
├── translator/            # Herramienta de traducción
│   ├── index.html        # Interfaz web del traductor
│   └── translator.js     # Motor de traducción
└── README.md
```

## 🚀 Uso

### Ver las Visualizaciones

Abra cualquiera de los archivos `index.html` en las carpetas de idiomas (`en/`, `es/`, `fr/`) en su navegador:

- **English**: `en/index.html`
- **Español**: `es/index.html`
- **Français**: `fr/index.html`

### Usar el Traductor

1. Abra `translator/index.html` en su navegador
2. Suba un archivo HTML o JS, o pegue el contenido directamente
3. Seleccione el idioma de origen y el idioma destino
4. Haga clic en "Translate"
5. Descargue el archivo traducido

## 🌐 Idiomas Soportados

| Código | Idioma |
|--------|--------|
| EN | English (Inglés) |
| ES | Español |
| FR | Français (Francés) |

## ✨ Características

- **Visualización Flourish**: Gráficos interactivos embebidos
- **Multi-idioma**: Soporte para EN, ES y FR
- **Traductor Web**: Interfaz amigable para traducir archivos
- **Diccionario Extensible**: Fácil de agregar nuevas traducciones
- **Descarga Directa**: Exportar archivos traducidos

## 📝 Licencia

Este proyecto está disponible para uso público.

