# Guía de Temas del Portafolio

## 🎨 Dos Temas Disponibles

Tu portafolio ahora tiene dos versiones con estilos completamente diferentes:

### 1. Tema Clásico (index.html)
**Archivo:** `index.html`
**CSS:** `css/variables.css`, `css/layout.css`, `css/components.css`, `css/responsive.css`
**JS:** `js/ui.js`

**Características:**
- Fondo blanco/gris claro (#f5f7fb)
- Color primario azul (#2563eb)
- Diseño limpio y profesional
- Ideal para presentaciones académicas formales
- Animaciones sutiles

### 2. Tema Tech Futurista (index-tech.html)
**Archivo:** `index-tech.html`
**CSS:** `css/tech.css`
**JS:** `js/tech.js`

**Características:**
- Fondo negro (#000000)
- Colores neón azul cian (#00b7ff, #4fd9ff)
- Background animado con ondas
- Efecto parallax al hacer scroll
- Efecto de tipeo en el título
- Transiciones suaves entre secciones
- Navbar con efecto glass/blur
- Cards con hover 3D
- Fuente tecnológica Orbitron

## 🚀 Cómo Usar

### Opción 1: Cambiar el archivo principal
Si quieres usar el tema tech como predeterminado:

1. Renombra `index.html` a `index-classic.html`
2. Renombra `index-tech.html` a `index.html`

### Opción 2: Mantener ambos
Puedes mantener ambos archivos y acceder a cada uno:
- `index.html` - Tema clásico
- `index-tech.html` - Tema tech

### Opción 3: Agregar selector de tema
Puedes agregar un botón en la navbar para cambiar entre temas dinámicamente.

## 🎯 Efectos del Tema Tech

### Efecto de Tipeo
El título principal se escribe letra por letra al cargar la página.

### Parallax
El fondo animado se mueve sutilmente al hacer scroll.

### Transiciones de Sección
Al hacer clic en los enlaces del menú, las secciones cambian con efecto fade.

### Reveal on Scroll
Los elementos aparecen con animación cuando entran en el viewport.

### Navbar Scrolled
La barra de navegación cambia de estilo al hacer scroll.

## 🎨 Personalización

### Cambiar Colores del Tema Tech
Edita las variables en `css/tech.css`:

```css
:root {
  --bg: #000000;           /* Fondo principal */
  --accent: #00b7ff;       /* Color de acento principal */
  --accent-2: #4fd9ff;     /* Color de acento secundario */
  --muted: #9fbcd1;        /* Texto secundario */
}
```

### Cambiar Colores del Tema Clásico
Edita las variables en `css/variables.css`:

```css
:root {
  --color-primario: #2563eb;
  --color-secundario: #1e293b;
  --color-fondo: #f5f7fb;
}
```

## 📱 Responsive

Ambos temas son completamente responsive:
- Desktop: > 900px
- Tablet: 600px - 900px
- Mobile: < 600px

## 🔧 Archivos Compartidos

Estos archivos se usan en ambos temas:
- `horario.html` - Horario académico
- `organigrama.html` - Organigrama diario
- `assets/img/` - Imágenes y PDFs

## 💡 Recomendaciones

- **Tema Clásico**: Mejor para impresiones, presentaciones formales, CV online
- **Tema Tech**: Mejor para portafolios de desarrollo, ciberseguridad, tech startups

Elige el que mejor represente tu estilo y el contexto donde lo vas a presentar!
