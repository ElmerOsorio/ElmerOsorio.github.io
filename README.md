# Premium Portfolio Starter

Base limpia y autónoma para reconstruir el portfolio sin depender de `combined.css` ni `combined.js`.

## Uso rápido

1. Abre la carpeta con VS Code.
2. Ejecuta un servidor local; los módulos ES no deben abrirse directamente con `file://`.
   - VS Code Live Server, o
   - `python3 -m http.server 8080`
3. Abre `http://localhost:8080`.

## Reemplazar imágenes

Los bloques grises usan `.placeholder-media`. Sustitúyelos por imágenes reales:

```html
<img class="project-media" src="assets/images/<slug-del-proyecto>/proyecto.webp" width="1600" height="1200" alt="Descripción útil de la interfaz">
```

En el hero, conserva las clases `hero-layer hero-layer--main` y sustituye únicamente su contenido.

Cada proyecto tiene su propia carpeta de imágenes en `assets/images/<slug>/` (mismo slug que su archivo HTML), para no mezclar assets de distintos casos en una sola carpeta plana. Ya existen las carpetas de los 4 proyectos del roster actual:

- `assets/images/home/`
- `assets/images/pdp-checkout/`
- `assets/images/getbeautyfull/`
- `assets/images/super-app-siman/`

## Crear un proyecto

1. Duplica `projects/project-template.html`.
2. Renómbralo con el slug del proyecto, por ejemplo `projects/siman.html`.
3. Crea su carpeta de imágenes: `assets/images/siman/`.
4. Cambia textos, metadata e imágenes.
5. Actualiza el enlace correspondiente en `index.html` (y el link "Siguiente proyecto" del caso anterior, si aplica).

## Orden de estilos

No cambies el orden salvo que exista una razón documentada:

1. `variables.css`
2. `effects.css`
3. `animations.css`
4. `responsive.css`
5. `dark-mode.css`

## Dependencias

La base usa CDN para GSAP, ScrollTrigger, Lenis y SplitType. Para producción estricta puedes descargar y versionar localmente estas librerías.

## Accesibilidad y movimiento

- `prefers-reduced-motion` desactiva smooth scroll, parallax y animaciones complejas.
- El cursor solo se activa con mouse/trackpad.
- En móvil, la navegación es un submenú de píldoras siempre visible (sin overlay ni tecla Escape que gestionar).
- Los placeholders deben recibir `alt` descriptivos al ser sustituidos.
