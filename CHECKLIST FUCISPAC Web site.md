# Checklist — FUCISPAC Web Site

## General / Infrastructure

- [ ] Crear estructura de directorios: `css/`, `js/`, `partials/`, `pages/` (o raíz)
- [ ] `css/base.css` — reset, variables CSS de paleta, tipografía, utilidades comunes
- [ ] `css/header.css` — estilos del header
- [ ] `css/footer.css` — estilos del footer
- [ ] `js/header.js` — funcionalidad del header (menú móvil, dropdown idioma)
- [ ] `js/footer.js` — funcionalidad del footer (si requiere)
- [ ] `partials/header.html` — componente reutilizable del header
- [ ] `partials/footer.html` — componente reutilizable del footer
- [ ] Inyectar header y footer en cada página mediante `fetch` + `innerHTML` o Web Components nativos
- [ ] Viewport meta tag en todas las páginas
- [ ] `box-sizing: border-box` global (o content-box según lineamiento)
- [ ] Fuente "Google Sans" importada (Google Fonts)
- [ ] Google Icons importados
- [ ] Variables CSS definidas en `:root` para toda la paleta y border-radius
- [ ] Responsive design implementado en todas las páginas
- [ ] Multi-idioma (ES/EN) con dropdown en header
- [ ] `sitemap.xml` en la raíz
- [ ] `robots.txt` en la raíz
- [ ] JSON-LD / schema.org para la organización (NGO)
- [ ] Imágenes optimizadas (WebP, `loading="lazy"`, `width`/`height` explícitos)
- [ ] Lighthouse / PageSpeed Insights: apuntar a puntuaciones altas

## Páginas HTML (crear archivo por página)

- [ ] `index.html` — Home
- [ ] `about.html` / `sobre-nosotros.html` — About Us
- [ ] `team.html` / `equipo.html` — Meet Our Team
- [ ] `projects.html` / `proyectos.html` — Projects
- [ ] `events.html` / `eventos.html` — Events
- [ ] `contact.html` / `contacto.html` — Contact Us
- [ ] `volunteering.html` / `voluntariado.html` — Volunteering
- [ ] `faq.html` / `preguntas-frecuentes.html` — FAQ
- [ ] `testimonies.html` / `testimonios.html` — Testimonies
- [ ] `donations.html` / `donaciones.html` — Donations

## Archivos CSS por página

- [ ] `css/home.css`
- [ ] `css/about.css`
- [ ] `css/team.css`
- [ ] `css/projects.css`
- [ ] `css/events.css`
- [ ] `css/contact.css`
- [ ] `css/volunteering.css`
- [ ] `css/faq.css`
- [ ] `css/testimonies.css`
- [ ] `css/donations.css`

## Archivos JS por página (si requiere)

- [ ] `js/home.js`
- [ ] `js/about.js`
- [ ] `js/team.js`
- [ ] `js/projects.js`
- [ ] `js/events.js`
- [ ] `js/contact.js`
- [ ] `js/volunteering.js`
- [ ] `js/faq.js`
- [ ] `js/testimonies.js`
- [ ] `js/donations.js`

## SEO / Meta (por página)

- [ ] `<title>` único y descriptivo por página
- [ ] `<meta name="description">` específico por página
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter Card tags
- [ ] `<link rel="canonical">` por página
- [ ] Atributo `lang="es"` en `<html>`

## Componentes Compartidos

### Header

- [ ] Logo a la izquierda
- [ ] Menú de navegación a la derecha
- [ ] Dropdown de idioma (ES/EN)
- [ ] Menú responsive (hamburguesa en mobile)
- [ ] `aria-label`, `aria-expanded`, `aria-current="page"`
- [ ] Foco visible (`:focus-visible`)

### Footer

- [ ] Enlaces/anchors a todas las páginas del sitio
- [ ] Datos de contacto: dirección (barrio, ciudad, país), email, redes sociales
- [ ] Responsive

## Página: Home

- [ ] **Hero Banner**: full-width, imagen de fondo (niños/jóvenes/mujeres), título, subtítulo, botones "Learn about our work" y "Support our mission"
- [ ] **Who We Are**: dos columnas (izquierda: foto institucional + imagen actividades; derecha: título "Who We Are", texto historia/comunidades/valores, botón "Learn more about us")
- [ ] **Areas of Work**: 3-4 tarjetas visuales con imágenes e iconos (Children and Youth, Afro-Colombian Women)
- [ ] Responsive
- [ ] Multi-idioma

## Página: About Us

- [ ] **Top Banner**: imagen organizacional, título "About FUCISPAC", descripción corta
- [ ] **Foundation History**: timeline (horizontal o vertical) con hitos
- [ ] **Mission and Vision**: dos bloques grandes (Misión / Visión)
- [ ] **Institutional Values**: tarjetas con iconos (Cultural identity, Social justice, Equity, Solidarity, Community participation)
- [ ] **Our Approach**: sección con fotos y texto (enfoque étnico-racial, perspectiva de género, DDHH, trabajo comunitario)
- [ ] Responsive
- [ ] Multi-idioma

## Página: Meet Our Team

- [ ] **Main Banner**: foto grupal full-width, título "Our Team"
- [ ] **Team Cards**: grid de perfiles con foto, nombre, cargo, descripción corta, área de trabajo
- [ ] Responsive
- [ ] Multi-idioma

## Página: Projects

- [ ] **Projects Banner**: imagen full-width, título "Our Projects", descripción
- [ ] **Project Categories**: tarjetas con imagen, nombre, objetivo, comunidad beneficiaria, resultados, botón "Learn more"
- [ ] Categorías ejemplo: Community education, Women's empowerment, Youth leadership, Afro culture and memory
- [ ] Responsive
- [ ] Multi-idioma

## Página: Events

- [ ] **Banner**: imagen full-width, título "Events and Activities"
- [ ] **Events Calendar**: tarjetas con imagen, nombre, ubicación, descripción
- [ ] **Previous Events Gallery**: galería tipo mosaico
- [ ] Responsive
- [ ] Multi-idioma

## Página: Contact Us

- [ ] **Banner**: imagen institucional, título "We Are Here to Listen"
- [ ] **Contact Form**: campos Nombre, Apellido, Email, Mensaje; captcha "I am not a robot"; botón Send
- [ ] Formulario con `<label>` asociado, `<fieldset>`/`<legend>`
- [ ] **Institutional Information**: dirección (barrio, ciudad, país), email, redes sociales
- [ ] Responsive
- [ ] Multi-idioma

## Página: Volunteering

- [ ] **Banner**: imagen de voluntarios, título "Join Us as a Volunteer"
- [ ] **Why Volunteer?**: texto + fotos (impacto comunitario, experiencias, aprendizaje)
- [ ] **Volunteer Areas**: tarjetas (Education, Communication, Culture, Leadership, Recreational activities, Events)
- [ ] **Registration Form**: campos Nombre, Email, Skills, Availability, Motivation
- [ ] Responsive
- [ ] Multi-idioma

## Página: FAQ

- [ ] **Banner**: título "Frequently Asked Questions"
- [ ] **Accordion**: lista expandible de preguntas y respuestas
- [ ] Preguntas ejemplo: ¿Qué hace FUCISPAC?, ¿Cómo apoyar?, ¿Cómo participar en proyectos?
- [ ] `aria-expanded` sincronizado en acordeón
- [ ] Responsive
- [ ] Multi-idioma

## Página: Testimonies

- [ ] **Testimonials Section**: título grande ("Testimonials", "Voices from Our Community", etc.)
- [ ] Párrafo introductorio
- [ ] **Video grid**: thumbnails de YouTube con overlay de play, título, descripción/quote, nombre/comunidad/rol
- [ ] Grid: 3-4 columnas desktop, 2 tablets, 1 mobile
- [ ] Video opens in embedded player or lightbox/popup
- [ ] **CTA buttons**: "Watch More Stories", "Share Your Story", "Learn More About Our Impact"
- [ ] Responsive
- [ ] Multi-idioma

## Página: Donations

- [ ] **Main Banner**: imagen de beneficiarios, título "Support Our Mission", descripción, botón "Donate Now"
- [ ] **Why Donate?**: 3 columnas con iconos (Education, Women, Community)
- [ ] **Ways to Donate**: tarjetas (One-time, Monthly, Corporate, In-kind)
- [ ] **Impact of Your Donation**: tarjetas de estadísticas (niños apoyados, mujeres empoderadas, comunidades alcanzadas, proyectos financiados) + historias reales + CTA
- [ ] **Final Section**: banner con foto comunitaria, texto "Every contribution helps...", botón "I Want to Support"
- [ ] Responsive
- [ ] Multi-idioma

## HTML Semántico (aplicar en todas las páginas)

- [ ] Etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`/`<figcaption>`, `<time>`, `<address>`
- [ ] Un único `<h1>` por página
- [ ] Jerarquía de encabezados sin saltos
- [ ] Un único `<main>` por página
- [ ] Enlaces descriptivos (evitar "clic aquí")
- [ ] `<button>` para acciones, `<a>` para navegación
- [ ] `alt` descriptivo en imágenes (`alt=""` solo si decorativas)
- [ ] Formularios con `<label for>` / `<input id>`

## Accesibilidad (aplicar en todas las páginas)

- [ ] `aria-label` o `aria-labelledby` en elementos sin texto visible (íconos, menú móvil)
- [ ] `aria-expanded` en menú móvil y acordeones
- [ ] `aria-current="page"` en nav activo
- [ ] `:focus-visible` en todos los elementos interactivos
- [ ] Contraste AA mínimo (validado contra paleta)
- [ ] Operable por teclado (Tab, Enter, Space)

## Buenas Prácticas CSS

- [ ] Clases con nomenclatura BEM (`.card`, `.card__title`, `.card--destacada`)
- [ ] Sin estilos inline (salvo casos justificados)
- [ ] Variables CSS para paleta y border-radius
- [ ] Sin degradados (usar opacidad del azul para profundidad)
- [ ] Bordes sólidos únicamente
- [ ] `border-radius` según especificaciones: 8px botones/badges/inputs, 14px tarjetas, 16px hero

## Diseño de Tarjeta (Signature Element)

- [ ] Superficie plana `#FAF8F4`, sin sombra pronunciada, `border-radius: 14px`
- [ ] Borde-espina lateral izquierdo 5px sólido `#292B7C`, `border-radius: 0`
- [ ] Estructura interna: badge amarillo → título negro → descripción gris → acciones (botón primario azul + botón secundario borde gris)