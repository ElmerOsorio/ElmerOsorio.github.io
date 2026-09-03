const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'es';

const DICTIONARY = {
  es: {
    'meta.title': 'Elmer Osorio — UX Lead & Product Design Lead',
    'meta.description': 'Portfolio de UX Lead y Product Design Lead especializado en experiencias digitales, ecommerce y sistemas de diseño.',
    'a11y.skip': 'Saltar al contenido',
    'a11y.nav': 'Navegación principal',
    'nav.profile': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    'hero.title': 'Diseño productos digitales que conectan <em>personas y negocio.</em>',
    'hero.copy': 'Lidero experiencias digitales de principio a fin, combinando investigación, estrategia y diseño de producto útiles, escalables y medibles.',
    'hero.ctaPrimary': 'Ver proyectos <span class="button__icon" aria-hidden="true">↘</span>',
    'hero.ctaSecondary': 'Contactarme',
    'hero.meta.baseLabel': 'Base',
    'hero.meta.baseValue': 'San Salvador · Remoto',
    'hero.meta.specialtyLabel': 'Especialidad',
    'hero.meta.expLabel': 'Experiencia',
    'hero.meta.expValue': '+5 años',
    'about.label': 'Perfil',
    'about.title': 'Estrategia, diseño y tecnología en una misma conversación.',
    'about.body': 'Trabajo en la intersección entre experiencia de usuario, producto, contenido y negocio. Mi enfoque traduce problemas complejos en decisiones claras y experiencias que los equipos pueden ejecutar y medir.',
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
    'projects.card1.desc': 'Reestructuración del home de un ecommerce: buscador inteligente, tiempos de carga y accesibilidad WCAG 2.2.',
    'projects.card1.meta': 'UX Designer<br>2024',
    'projects.card2.title': 'PDP y Checkout',
    'projects.card2.desc': 'Caso en preparación — pronto el detalle completo.',
    'projects.card2.meta': 'Próximamente',
    'projects.card3.title': 'Getbeautyfull App',
    'projects.card3.desc': 'Caso en preparación — pronto el detalle completo.',
    'projects.card3.meta': 'Próximamente',
    'projects.card4.title': 'Super App Siman',
    'projects.card4.desc': 'Caso en preparación — pronto el detalle completo.',
    'projects.card4.meta': 'Próximamente',
    'metrics.label1': 'Ejemplo de mejora en conversión o indicador principal.',
    'metrics.label2': 'Mercados, equipos o productos impactados.',
    'metrics.label3': 'Métrica adicional que demuestre escala o impacto.',
    'contact.label': 'Contacto',
    'contact.title': 'Construyamos algo que merezca ser usado.',
    'contact.cv': 'Descargar CV',
    'footer.tagline': 'Diseñado con intención. Construido con detalle.',
  },
  en: {
    'meta.title': 'Elmer Osorio — UX Lead & Product Design Lead',
    'meta.description': 'Portfolio of a UX Lead and Product Design Lead specialized in digital experiences, ecommerce and design systems.',
    'a11y.skip': 'Skip to content',
    'a11y.nav': 'Main navigation',
    'nav.profile': 'Profile',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
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
    'projects.card2.title': 'PDP y Checkout',
    'projects.card2.desc': 'Case in progress — full detail coming soon.',
    'projects.card2.meta': 'Coming soon',
    'projects.card3.title': 'Getbeautyfull App',
    'projects.card3.desc': 'Case in progress — full detail coming soon.',
    'projects.card3.meta': 'Coming soon',
    'projects.card4.title': 'Super App Siman',
    'projects.card4.desc': 'Case in progress — full detail coming soon.',
    'projects.card4.meta': 'Coming soon',
    'metrics.label1': 'Example of a conversion improvement or headline metric.',
    'metrics.label2': 'Markets, teams or products impacted.',
    'metrics.label3': 'Additional metric that shows scale or impact.',
    'contact.label': 'Contact',
    'contact.title': "Let's build something worth using.",
    'contact.cv': 'Download CV',
    'footer.tagline': 'Designed with intention. Built with detail.',
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

    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode / blocked storage */ }
  }

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.getAttribute('data-lang-btn')));
  });

  apply(lang);
}
