# Project FUCISPAC Web site

## Pages
- home
- about us
- meet our team
- projects
- events
- contact us
- volunteering
- FAQ
- testimonies
- donations

## technology to use
- the project only MUST be in html, css and vanilla js (if is require)
- NOT MUST use framework or libraries, only use native code html, css and js
- to each page create a file html and css. if is necesary also a js with the same name of de page
- for components like main header and footer, insert the html code, only two parts are shared
- for styles use class and define into de css file, only use id with is necesary
- tener presente tags or values to responsive and facilitate the update css code, for example include the tag to resposive (viewport) and the option to css `box-sizing: content-box`
- if require icons use google icons
- the font use is "Google Sans"
- the palette of color is

## Sistema de diseño — Fundación CISPAC
 
### Tipografía
- Fuente: Google Sans (display y cuerpo)
### Paleta de colores (extraída del logo)
 
| Color | Hex | Uso | Proporción |
|---|---|---|---|
| Azul CISPAC | #292B7C | Color estructural: headers, footer, navegación, títulos | 60% |
| Rojo CISPAC | #C9361D | Acento de acción: botones primarios, enlaces activos, íconos destacados | 20% |
| Amarillo CISPAC | #F5E82E | Detalle puntual: badges, etiquetas, subrayados, hover. Nunca como fondo de bloques grandes | 8% |
| Negro texto | #1A1A1A | Cuerpo de texto sobre fondos claros | 7% |
| Blanco cálido | #FAF8F4 | Fondo de página y superficie de tarjetas (evitar blanco puro #FFFFFF) | resto |
| Gris neutro | #E4E1D9 | Bordes y elementos de soporte | resto |
 
#### Reglas de uso
- No usar degradados. Para dar profundidad, usar variaciones de opacidad/claridad del mismo azul:
  - Azul 100% → header / elementos principales
  - Azul ~8-10% (`rgba(41,43,124,0.06)`) → fondo de secciones
  - Azul ~4% → hover de tarjetas
- Colores sólidos únicamente, sin mezclas de tono entre sí.
### Border radius (ni cuadriculado ni muy redondo)
- Botones y badges: `border-radius: 8px`
- Inputs: `border-radius: 8px`
- Tarjetas: `border-radius: 14px`
- Imágenes grandes / hero: `border-radius: 16px` (máximo)
- Nada por encima de 16px salvo avatares o íconos circulares puntuales
### Diseño de tarjeta (signature element)
- Superficie plana en blanco cálido (#FAF8F4), sin sombra pronunciada, `border-radius: 14px`
- Borde-espina lateral izquierdo de 5px sólido en Azul CISPAC (#292B7C), inspirado en las dos barras verticales que enmarcan el logo
- Ese borde lateral debe quedar recto (`border-radius: 0` en ese elemento) — los bordes de un solo lado no deben redondearse
- Estructura interna: etiqueta/badge en amarillo (fondo #F5E82E, texto #3D3700) → título en negro texto → descripción corta en gris de soporte → acciones (botón primario azul, botón secundario con borde gris)
- El contenido siempre debe verse por encima del elemento decorativo: nada de fondos de color grandes detrás del texto
### Tono general
Profesional pero cercano: colores sólidos y limitados, radios moderados (8–16px), sin degradados ni elementos que compitan con el contenido. Ni muy serio (cuadriculado, sin curvas) ni muy informal (todo redondeado).


## general description for each page
this is a description of de components that are in each page, for example header block for menu nav and footer, and other that ya consider.

it is require implement a responsive design and multi language content, to change the language there is a dropdown to select between english and spanish

### main header
- each page has a nav bar on top part, with the menu.
- the menu has a left and right side
- left side contains the logo
- right side contains the menu
- in the right side also there is a dorpdown to change lenguage, the lenguages are english and spanish
### footer
- include anchors to each page into de web site
- also include data conctact

## pages description
 
### home
#### structure
- 1 Main Banner (Hero Section)
    - Design: The page begins with a large full-width banner occupying the entire screen width.
        - Main background image: A photograph of children, youth, or Afro-Colombian women participating in FUCISPAC activities.
        - A text section appears over the image.
    - Visual content:
        - Large title: Transforming lives, strengthening Afro-Colombian communities
        - Short subtitle: A brief description of FUCISPAC's mission and commitment to children, youth, and Afro-descendant women.
        - Buttons:
            - Learn about our work
            - Support our mission
- 2 "Who We Are" Section
    - Design: A two-column section:
        - Left side:
            - Institutional photograph.
            - Image of community activities.
        - Right side:
            - Large title: "Who We Are"
            - Short text explaining:
                - The history of the foundation.
                - The communities it works with.
                - Its principles and values.
    - Button: "Learn more about us"
- 3 Areas of Work
    - Design: Three or four visual cards with images and icons. Example:
        - Children and Youth, Image of children and young people, Short description about education, protection, and integral development. Description about leadership, training, and opportunities.
        - Afro-Colombian Women, Image of women. Description about rights, autonomy, and community empowerment. Description about memory, traditions, and Afro roots.
### about us
#### structure
- 1 Top Banner
    - Design: Wide organizational image.
        - Title: "About FUCISPAC"
        - Short description: Our history, identity, and commitment to Afro-Colombian communities.
- 2 Foundation History
    - Design:
        - Horizontal or vertical timeline.
        - Includes: Foundation creation year. Important moments. Achievements. Community processes.
- 3 Mission and Vision
    - Design: Two large blocks:
    - Mission Institutional statement.
    - Vision, Future projection of the organization.
- 4 Institutional Values
    - Design:
        - Cards with icons:
            - Cultural identity
            - Social justice
            - Equity
            - Solidarity
            - Community participation
- 5 Our Approach
    - Design: Section combining photographs and text.
    - Explains:
        - Ethnic-racial approach.
        - Gender perspective.
        - Human rights.
        - Community-based work.
### meet our team
#### structure
- 1 Main Banner
    - Design: Full-width group photograph of the team.
        - Title: "Our Team"
- 2 Team Cards
    - Design: Profile gallery grid layout.
        - Each card contains:
            - Professional photograph.
            - Name.
            - Position.
            - Short description.
            - Area of work.
#### content
- Example card:
    - Name: [Team member name]
    - Position: Executive Director
    - Description: "Professional committed to defending the rights of Afro-Colombian communities."
### projects
#### structure
- 1 Projects Banner
    - Design: Full-width image of community activities.
        - Title: "Our Projects"
        - Short description of the organization's project work.
- 2 Project Categories
    - Design: Card-style layout. Each project card includes:
        - Image.
        - Name.
        - Objective.
        - Beneficiary community.
        - Results.
        - Button: "Learn more".
#### content
- Example project categories:
    - Community education.
    - Women's empowerment.
    - Youth leadership.
    - Afro culture and memory.
### events
#### structure
- 1 Banner
    - Design: Full-width image of a community event.
        - Title: "Events and Activities"
- 2 Events Calendar
    - Design: Card layout. Each event card includes:
        - Image.
        - Name.
        - Location.
        - Description.
- 3 Previous Events Gallery
    - Design: Mosaic-style photo gallery.
#### content
- No additional copy specified beyond section titles and card fields above.
### contact us
#### structure
- 1 Banner
    - Design: Institutional image.
        - Title: "We Are Here to Listen"
- 2 Contact Form
    - Design: Simple form with fields:
        - First Name.
        - Last Name.
        - Email.
        - Message.
        - Captcha check button to confirm the user is a real person: "I am not a robot".
        - Send button.
- 3 Institutional Information
    - Design: Info blocks with:
        - Address (only neighborhood, city, and country).
        - Email.
        - Social media.
#### content
- No additional copy specified beyond section titles and form fields above.
### volunteering
#### structure
- 1 Banner
    - Design: Image of volunteers working.
        - Title: "Join Us as a Volunteer"
- 2 Why Volunteer?
    - Design: Text accompanied by photographs.
        - Explains:
            - Community impact.
            - Experiences.
            - Learning opportunities.
- 3 Volunteer Areas
    - Design: Cards for each area:
        - Education.
        - Communication.
        - Culture.
        - Leadership.
        - Recreational activities.
        - Events.
- 4 Registration Form
    - Design: Form with fields:
        - Name.
        - Email.
        - Skills.
        - Availability.
        - Motivation.
#### content
- No additional copy specified beyond section titles, area list, and form fields above.
### FAQ
#### structure
- 1 Banner
    - Design: Title: "Frequently Asked Questions"
- 2 Expandable Questions (Accordion)
    - Design: Accordion-style expandable list of questions and answers.
#### content
- Example questions:
    - What does FUCISPAC do?
    - How can I support the organization?
    - How can I participate in the projects?
### testimonies
#### structure
- 1 Testimonials Section
    - Design: A video testimonial grid where visitors can explore and watch personal stories from community members, beneficiaries, partners, and participants, creating a more human and emotional connection.
        - Large title at the top, such as "Testimonials", "Voices from Our Community", or "Stories of Transformation".
        - Short introductory paragraph explaining that the videos share real experiences, achievements, and reflections from people involved in the organization's initiatives.
        - Embedded YouTube video grid layout. Each video card contains:
            - A YouTube thumbnail image as the main visual element.
            - A play button overlay indicating the video can be watched.
            - A short video title below the thumbnail (e.g., "My Story: Growing Through Education").
            - A brief description or quote highlighting the person's experience.
            - Optional information such as the person's name, community, location, or role.
        - Grid layout: three or four columns on desktop, two columns on tablets, one column on mobile.
        - On click, the video opens either:
            - Directly in an embedded video player within the page, or
            - In a pop-up/lightbox window, so visitors can watch without leaving the site.
        - Design should feel warm, authentic, and community-centered, using images of real people, natural expressions, and visual elements reflecting trust, empowerment, and collective impact.
#### content
- Closing call-to-action button options:
    - "Watch More Stories"
    - "Share Your Story"
    - "Learn More About Our Impact"
- Purpose: showcase the foundation's achievements through the voices of the people whose lives have been touched by its programs.
### donations
#### structure
- 1 Main Banner
    - Design: Image of children or beneficiary communities, with text over the image:
        - Large title: "Support Our Mission"
        - Short description: "Your contribution helps strengthen Afro-Colombian communities and supports the integral development of children, youth, and women."
        - Button: "Donate Now"
- 2 Why Donate?
    - Design: Three columns with images or icons:
        - Education: Support educational processes and opportunities for children and youth.
        - Women: Strengthen leadership initiatives and economic autonomy.
        - Community: Contribute to social and cultural development.
- 3 Ways to Donate
    - Design: Cards with different donation options, each including an icon, description, and button:
        - One-time donation.
        - Monthly donation.
        - Corporate donation.
        - In-kind donation.
- 4 Impact of Your Donation
    - Design:
        - Impact statistics cards:
            - Children and youth supported.
            - Women and families empowered.
            - Communities reached.
            - Projects and initiatives funded.
        - Real stories highlighting how donations create positive change.
        - Images showing the results and impact of the foundation's work.
        - Call-to-action button: "Donate Now." / "Support Our Mission."
- 5 Final Section: Invitation
    - Design: Banner with a community photograph.
        - Text: "Every contribution helps create opportunities and strengthen our roots."
        - Button: "I Want to Support"
#### content
- No additional copy specified beyond section titles, statements, and button labels above.

# Lineamientos técnicos — Sitio web Fundación CISPAC
 
## Stack
- Solo HTML, CSS y JavaScript nativos.
- Prohibido usar frameworks o librerías (nada de React, Vue, Bootstrap, Tailwind, jQuery, etc.).
- JavaScript únicamente cuando sea estrictamente necesario para la interacción (menú móvil, formularios, validaciones, componentes dinámicos). Si algo se puede resolver solo con HTML/CSS, se resuelve así.
## Estructura de archivos
- Un archivo HTML por página, nombrado según su contenido (`inicio.html`, `sobre-nosotros.html`, `proyectos.html`, `contacto.html`, etc.).
- Cada página enlaza su propio CSS y JS cuando lo necesite; evitar cargar código que no se usa en esa página.
- CSS organizado por alcance:
  - `css/base.css` → reset, variables de la paleta, tipografía global, utilidades comunes.
  - `css/[nombre-pagina].css` → estilos exclusivos de esa página.
  - `css/header.css` y `css/footer.css` → estilos de los componentes reutilizables.
- JS organizado igual: `js/[nombre-pagina].js` por página, más `js/header.js` / `js/footer.js` si el componente lo requiere.
## Componentes reutilizables
- **Header** y **footer** son los únicos elementos que deben tratarse como componente reusable:
  - Crear `partials/header.html` y `partials/footer.html` (o su equivalente) e inyectarlos en cada página (por ejemplo con `fetch` + `innerHTML`, o Web Components nativos con `<template>` y `customElements`, sin librerías externas).
  - Un solo archivo CSS y un solo archivo JS por componente, reutilizado en todas las páginas — no se duplica el código del header/footer en cada archivo.
- El resto del contenido (secciones de cada página) se mantiene específico de cada archivo, sin forzar reutilización artificial.
## Clases CSS
- Usar clases CSS para todo el estilado; evitar estilos inline salvo casos puntuales justificados (por ejemplo, valores dinámicos generados por JS).
- Nomenclatura consistente y predecible en todo el sitio (por ejemplo, metodología tipo BEM: `.card`, `.card__title`, `.card--destacada`), para que las clases sean legibles y no colisionen entre páginas.
- Variables CSS (`:root { --azul-cispac: #292B7C; ... }`) para toda la paleta y los valores de `border-radius`, de modo que estén centralizados y no repetidos como valores sueltos.
## HTML semántico
- Usar las etiquetas semánticas correctas según el contenido: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`/`<figcaption>`, `<time>`, `<address>`, etc.
- Un único `<h1>` por página, jerarquía de encabezados (`h1` → `h2` → `h3`) sin saltos de nivel.
- Un único `<main>` por página que envuelva el contenido principal.
- Enlaces con texto descriptivo (evitar "clic aquí"); botones (`<button>`) para acciones, enlaces (`<a>`) para navegación.
- Imágenes con `alt` descriptivo siempre; `alt=""` solo si son puramente decorativas.
- Formularios con `<label>` asociado a cada campo (`for`/`id`), agrupación con `<fieldset>`/`<legend>` cuando aplique.
## Accesibilidad (ARIA)
- Usar atributos ARIA únicamente cuando el HTML semántico no cubra el caso (ARIA es un complemento, no un reemplazo de las etiquetas nativas).
- `aria-label` o `aria-labelledby` en elementos interactivos sin texto visible claro (íconos, botón de menú móvil).
- `aria-expanded` en el botón del menú móvil o acordeones, sincronizado con su estado real.
- `aria-current="page"` en el enlace de navegación activo.
- Roles de landmark implícitos (usar las etiquetas semánticas correctas hace innecesario declarar `role="navigation"`, `role="main"`, etc. manualmente).
- Foco visible en todos los elementos interactivos (`:focus-visible`), nunca eliminar el outline sin reemplazarlo.
- Contraste de color AA mínimo entre texto y fondo, validado contra la paleta definida.
- Todo elemento interactivo debe ser operable por teclado (tab, enter, espacio), sin trampas de foco.
## SEO / indexación
- Cada página con `<title>` único y descriptivo, y `<meta name="description">` específico.
- Metaetiquetas Open Graph y Twitter Card básicas (`og:title`, `og:description`, `og:image`, `og:url`) para compartir en redes.
- URLs limpias y descriptivas, en minúsculas y sin espacios (usar guiones).
- Un `sitemap.xml` y `robots.txt` en la raíz del sitio.
- Datos estructurados (JSON-LD, schema.org) para la organización: `Organization` o `NGO`, con nombre, logo, dirección y redes sociales de CISPAC.
- Imágenes optimizadas (formatos modernos como WebP, tamaños servidos según el contenedor) y con `width`/`height` explícitos para evitar cambios de layout (CLS).
- `lang="es"` en la etiqueta `<html>`.
- Enlace canónico (`<link rel="canonical">`) por página.
- Priorizar rendimiento: CSS y JS minificados en producción, carga diferida (`loading="lazy"`) en imágenes fuera del viewport inicial, evitar bloqueo de renderizado innecesario.
## Objetivo de calidad
El sitio debe apuntar a puntuaciones altas en Lighthouse / PageSpeed Insights en las cuatro categorías (Rendimiento, Accesibilidad, Buenas prácticas, SEO), como consecuencia natural de seguir estos lineamientos — no como una capa añadida al final.