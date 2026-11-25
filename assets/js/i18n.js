const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'es';

const DICTIONARY = {
  es: {
    'meta.title': 'Elmer Osorio — UX Lead & Product Design Lead',
    'meta.description': 'Portafolio de UX Lead y Product Design Lead especializado en experiencias digitales, ecommerce y sistemas de diseño.',
    'a11y.skip': 'Ir al contenido',
    'a11y.nav': 'Navegación principal',
    'nav.profile': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'hero.title': 'Diseño productos digitales que conectan <em>personas y negocio.</em>',
    'hero.copy': 'Lidero experiencias digitales de principio a fin: combino investigación, estrategia y diseño para crear productos útiles, escalables y medibles.',
    'hero.ctaPrimary': 'Ver proyectos <span class="button__icon" aria-hidden="true">↘</span>',
    'hero.ctaSecondary': 'Contáctame',
    'hero.meta.baseLabel': 'Ubicación',
    'hero.meta.baseValue': 'San Salvador · Remoto',
    'hero.meta.specialtyLabel': 'Especialidad',
    'hero.meta.expLabel': 'Experiencia',
    'hero.meta.expValue': '+5 años',
    'about.label': 'Perfil',
    'about.title': 'Estrategia, diseño y tecnología en una misma conversación.',
    'about.body': 'Trabajo donde se cruzan la experiencia de usuario, el producto, el contenido y el negocio. Convierto problemas complejos en decisiones claras y en experiencias que los equipos pueden construir y medir.',
    'about.cap1.title': 'Product strategy & discovery',
    'about.cap1.tag': 'Dirección',
    'about.cap2.title': 'UX research & service design',
    'about.cap2.tag': 'Insights',
    'about.cap3.title': 'Interaction & visual design',
    'about.cap3.tag': 'Experiencia',
    'about.cap4.title': 'Design systems & frontend',
    'about.cap4.tag': 'Escala',
    'projects.label': 'Trabajo seleccionado',
    'projects.title': 'Casos que combinan impacto y ejecución.',
    'projects.body': 'Aquí te cuento cómo trabajo: la investigación, las decisiones difíciles y los resultados que dejaron.',
    'projects.card1.title': 'Home',
    'projects.card1.desc': 'Rediseño del home de un ecommerce: buscador inteligente, carga más rápida y accesibilidad WCAG 2.2.',
    'projects.card1.meta': 'UX Designer<br>2024',
    'projects.card2.title': 'PDP',
    'projects.card2.desc': 'Rediseño de la ficha de producto con el design system ROMBO: qué compras, cuánto pagas y cómo te llega, a primera vista.',
    'projects.card2.meta': 'UX Lead<br>2026',
    'projects.card3.title': 'Getbeautyfull App',
    'projects.card3.desc': 'Programa de lealtad de belleza diseñado de principio a fin: app para clientes y para asesores, panel de administración y landing.',
    'projects.card3.meta': 'Product Designer<br>2023',
    'projects.card4.title': 'MARI',
    'projects.card4.desc': 'Panel interno que reúne ventas, comportamiento y búsquedas en una sola vista, adaptada al rol de cada persona.',
    'projects.card4.meta': 'UX Lead<br>2025–2026',
    'projects.placeholder': 'En construcción',
    'metrics.label1': 'Menos tiempo de carga en el home de un ecommerce, de 4.4 s a 1 s.',
    'metrics.label2': 'Lo que tomaba armar un reporte de ventas, comportamiento y búsquedas, ahora con MARI.',
    'metrics.label3': 'Países donde se usan los productos que diseñé: El Salvador, Guatemala, Costa Rica y Nicaragua.',
    'contact.label': 'Contacto',
    'contact.title': 'Construyamos algo que la gente quiera usar.',
    'contact.cv': 'Descargar CV',
    'blog.kicker': 'Blog',
    'blog.title': 'Ideas, procesos y aprendizajes de diseño.',
    'blog.summary': 'Notas sobre producto, UX y el oficio de diseñar: decisiones, herramientas y lo que voy aprendiendo en el camino.',
    'blog.empty.title': 'Pronto, las primeras publicaciones',
    'blog.empty.body': 'Estoy preparando el contenido. Vuelve pronto o sígueme en LinkedIn para no perderte las próximas publicaciones.',
    'blog.backHome': 'Volver al inicio',
    'footer.tagline': 'Diseñado con intención, construido con cuidado.',
    'footer.privacy': 'Privacidad',
    'privacy.label': 'Aviso de privacidad',
    'privacy.notice': 'Este sitio usa Microsoft Clarity y cookies para entender cómo se navega.',
    'privacy.more': 'Más información',
    'privacy.ok': 'Entendido',
  },
  en: {
    'meta.title': 'Elmer Osorio — UX Lead & Product Design Lead',
    'meta.description': 'Portfolio of a UX Lead and Product Design Lead specialized in digital experiences, ecommerce and design systems.',
    'a11y.skip': 'Skip to content',
    'a11y.nav': 'Main navigation',
    'nav.profile': 'Profile',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'I design digital products that connect <em>people and business.</em>',
    'hero.copy': 'I lead end-to-end digital experiences, combining research, strategy and product design that are useful, scalable and measurable.',
    'hero.ctaPrimary': 'View projects <span class="button__icon" aria-hidden="true">↘</span>',
    'hero.ctaSecondary': 'Contact me',
    'hero.meta.baseLabel': 'Based in',
    'hero.meta.baseValue': 'San Salvador · Remote',
    'hero.meta.specialtyLabel': 'Specialty',
    'hero.meta.expLabel': 'Experience',
    'hero.meta.expValue': '+5 years',
    'about.label': 'Profile',
    'about.title': 'Strategy, design and technology in one conversation.',
    'about.body': 'I work at the intersection of user experience, product, content and business. My approach turns complex problems into clear decisions and experiences that teams can ship and measure.',
    'about.cap1.title': 'Product strategy & discovery',
    'about.cap1.tag': 'Direction',
    'about.cap2.title': 'UX research & service design',
    'about.cap2.tag': 'Insights',
    'about.cap3.title': 'Interaction & visual design',
    'about.cap3.tag': 'Experience',
    'about.cap4.title': 'Design systems & frontend',
    'about.cap4.tag': 'Scale',
    'projects.label': 'Selected work',
    'projects.title': 'Cases that combine impact and execution.',
    'projects.body': "Here's how I work: the research, the tough calls, and the results they led to.",
    'projects.card1.title': 'Home',
    'projects.card1.desc': 'Restructuring an ecommerce homepage: smart search, load times and WCAG 2.2 accessibility.',
    'projects.card1.meta': 'UX Designer<br>2024',
    'projects.card2.title': 'PDP',
    'projects.card2.desc': "Product page redesign on the ROMBO design system: what you're buying, what you'll pay and how it gets to you, in the first view.",
    'projects.card2.meta': 'UX Lead<br>2026',
    'projects.card3.title': 'Getbeautyfull App',
    'projects.card3.desc': 'End-to-end design of a beauty loyalty program: customer and in-store advisor apps, admin panel and landing page.',
    'projects.card3.meta': 'Product Designer<br>2023',
    'projects.card4.title': 'MARI',
    'projects.card4.desc': "Designing an internal panel that merges sales, behavior and search into one view, read differently depending on who's using it.",
    'projects.card4.meta': 'UX Lead<br>2025–2026',
    'projects.placeholder': 'Under construction',
    'metrics.label1': 'Faster load time on an ecommerce home page, from 4.4 s to 1 s.',
    'metrics.label2': 'Time to build a sales, behavior and search report, now with MARI.',
    'metrics.label3': 'Countries where the products I designed are used: El Salvador, Guatemala, Costa Rica and Nicaragua.',
    'contact.label': 'Contact',
    'contact.title': "Let's build something people want to use.",
    'contact.cv': 'Download Resume',
    'blog.kicker': 'Blog',
    'blog.title': 'Ideas, process, and design learnings.',
    'blog.summary': "Notes on product, UX, and the craft of design: decisions, tools, and what I'm learning along the way.",
    'blog.empty.title': 'First posts on the way',
    'blog.empty.body': "Content is in the works. Check back soon, or follow me on LinkedIn so you don't miss the next posts.",
    'blog.backHome': 'Back to home',
    'footer.tagline': 'Designed with intention. Built with detail.',
    'footer.privacy': 'Privacy',
    'privacy.label': 'Privacy notice',
    'privacy.notice': 'This site uses Microsoft Clarity and cookies to understand how people browse it.',
    'privacy.more': 'Learn more',
    'privacy.ok': 'Got it',
  },
};

/** Applies the stored/browser language to every [data-i18n] node and wires the toggle. */
export function initI18n() {
  const root = document.documentElement;
  const supported = Object.keys(DICTIONARY);

  let stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch { /* private mode / blocked storage */ }

  let lang = supported.includes(stored) ? stored : (supported.includes(root.getAttribute('lang')) ? root.getAttribute('lang') : DEFAULT_LANG);

  function apply(nextLang) {
    lang = supported.includes(nextLang) ? nextLang : DEFAULT_LANG;
    root.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = DICTIONARY[lang][key];
      if (value === undefined) return;
      const attr = node.getAttribute('data-i18n-attr');
      if (attr) node.setAttribute(attr, value);
      else node.innerHTML = value;
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('[data-lang-content]').forEach((node) => {
      node.hidden = node.getAttribute('data-lang-content') !== lang;
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode / blocked storage */ }
  }

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.getAttribute('data-lang-btn')));
  });

  apply(lang);
}
