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
<img class="project-media" src="assets/images/proyecto.webp" width="1600" height="1200" alt="Descripción útil de la interfaz">
```

En el hero, conserva las clases `hero-layer hero-layer--main` y sustituye únicamente su contenido.

## Crear un proyecto

1. Duplica `projects/project-template.html`.
2. Renómbralo, por ejemplo `projects/siman.html`.
3. Cambia textos, metadata e imágenes.
4. Actualiza el enlace correspondiente en `index.html`.

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
- La navegación móvil mantiene control de teclado y Escape.
- Los placeholders deben recibir `alt` descriptivos al ser sustituidos.
