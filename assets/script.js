/* ============================================
   SASSI DE LAAT — PORTFOLIO
   Script: i18n, nav, scroll animations
   ============================================ */

/* ---- TRANSLATIONS ---- */
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.experience': 'Expériences',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Data Engineer — LLMOps',
    'hero.title.1': 'Du pipeline',
    'hero.title.2': 'au LLM en production.',
    'hero.subtitle': "Étudiant ingénieur à l'EFREI, en alternance LLMOps au Crédit Agricole. J'industrialise des produits IA générative — observabilité, sécurité, déploiement — et j'entreprends à côté.",
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'hero.scroll': 'Défiler',

    'projects.label': 'Projets sélectionnés',
    'projects.title': 'Ce que je construis.',
    'projects.desc': 'Trois projets qui reflètent ma polyvalence : du machine learning appliqué à la conception système bas niveau, en passant par les structures de données avancées.',
    'project.1.desc': "Algorithme prédictif de la valeur immobilière utilisant le clustering K-Means et l'analyse exploratoire pour modéliser les dynamiques de prix.",
    'project.2.desc': "Simulateur d'IDE Assembly développé en Java. Un environnement complet pour écrire, compiler et exécuter du code bas niveau en temps réel.",
    'project.3.desc': "Boîte à outils pour l'exploration et l'analyse de graphes : algorithmes de parcours, plus courts chemins, et visualisations interactives.",
    'project.link': 'Voir sur GitHub →',

    'exp.label': 'Parcours professionnel',
    'exp.title': "Là où j'ai grandi.",
    'exp.desc': "Entre LLMOps dans un grand groupe bancaire, recherche scientifique et entrepreneuriat — trois expériences qui façonnent ma vision du métier.",
    'exp.1.meta': "Alternance · Oct. 2025 — Aujourd'hui",
    'exp.1.desc': "Industrialisation d'un assistant LLM de rédaction de mails clients (RAG, détection d'intention), déployé auprès de 49 000 conseillers via Kubernetes et AWS Bedrock. Observabilité ELK et monitoring de drift. Tirs de performance sur socle LLM interne. Remédiation d'audit de sécurité. Initialisation d'API FastAPI et repo de déploiement Helm.",
    'exp.2.meta': 'Stage · Nov. 2024 — Avril 2025',
    'exp.2.desc': "Pipeline d'analyse automatisé pour l'extraction et la visualisation d'expressions géniques. Séquençage à noyau unique (Python/R) pour la recherche sur la myopathie de Duchenne. Contribution à deux articles scientifiques.",
    'exp.3.meta': "Entrepreneuriat · Janv. 2023 — Aujourd'hui",
    'exp.3.desc': "Co-fondateur d'une marque de textile. Direction artistique, gestion de projet, boutiques éphémères, communication digitale et encadrement de stagiaires. Trois ans d'aventure entrepreneuriale avec deux associés.",

    'teaser.label': 'À propos',
    'teaser.title': "Curieux, rigoureux, entrepreneur dans l'âme.",
    'teaser.desc': "Passionné par l'industrialisation de l'IA et ce qu'elle permet de construire, je cherche à joindre technique et impact réel.",
    'teaser.cta': 'En savoir plus sur moi',

    'contact.label': 'Contact',
    'contact.title': 'Parlons ensemble.',
    'contact.desc': "Étudiant ingénieur en informatique, je recherche un CDI en Data Engineering et LLMOps.",
    'contact.cv': 'Télécharger mon CV',
    'contact.location': 'Localisation',
    'contact.phone': 'Téléphone',

    'footer.built': 'Conçu avec soin · Paris',

    // About page
    'about.label': 'À propos',
    'about.title': 'Bonjour, je suis Sassi.',
    'about.lead': "Étudiant ingénieur à l'EFREI en majeure Big Data & Machine Learning. En alternance, j'industrialise un assistant LLM en production au Crédit Agricole — observabilité, sécurité, déploiement Kubernetes.",
    'about.story.title': 'Mon parcours',
    'about.story.p1': "J'ai commencé par des classes préparatoires en biologie numérique avant de rejoindre le cycle ingénieur de l'EFREI. Ce double ancrage — sciences du vivant et informatique — m'a appris à aborder les problèmes avec rigueur et curiosité, qualités que je retrouve chaque jour dans le métier de Data Engineer.",
    'about.story.p2': "Aujourd'hui, je travaille sur l'industrialisation d'un produit IA générative déployé auprès de 49 000 conseillers bancaires au Crédit Agricole : chaîne d'observabilité ELK, monitoring de drift, remédiation de sécurité, déploiement Helm sur Kubernetes, tirs de performance. Avant cela, j'ai contribué à la recherche à l'INSERM, et j'ai co-fondé We Love Uni, une marque de textile que nous développons depuis trois ans.",
    'about.approach.title': 'Ma vision',
    'about.approach.p1': "Je crois que la valeur d'un produit IA ne se situe pas dans le choix du modèle, mais dans la qualité de tout ce qui l'entoure : observabilité, fiabilisation, sécurité, gouvernance. C'est ce que le LLMOps vise à structurer, et c'est là que je veux me spécialiser.",
    'about.approach.p2': "L'entrepreneuriat m'a appris l'autonomie et le sens des responsabilités ; la recherche scientifique, la rigueur méthodologique ; et l'alternance en grand groupe, l'importance du travail en équipe et de l'industrialisation. Je cherche aujourd'hui un CDI où je pourrai continuer à grandir sur ces trois axes.",
    'about.skills.title': 'Compétences',
    'about.skills.lang': 'Langages',
    'about.skills.libs': 'Bibliothèques',
    'about.skills.tools': 'Outils & Infra',
    'about.skills.viz': 'LLMOps',
    'about.beyond.title': 'Au-delà du code',
    'about.beyond.p1': "En dehors de l'écran, je suis guitariste depuis treize ans (dont cinq en conservatoire) et je touche au piano. J'aime aussi la création visuelle : direction artistique, montage vidéo sur Premiere Pro, photo sur Photoshop — des compétences que je mobilise pour We Love Uni.",
    'about.cta.cv': 'Télécharger mon CV',
    'about.cta.contact': 'Me contacter',
  },

  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Data Engineer — LLMOps',
    'hero.title.1': 'From pipeline',
    'hero.title.2': 'to LLM in production.',
    'hero.subtitle': "Engineering student at EFREI, currently working in LLMOps at Crédit Agricole. I industrialize generative AI products — observability, security, deployment — and run my own venture on the side.",
    'hero.cta.projects': 'View my work',
    'hero.cta.contact': 'Get in touch',
    'hero.scroll': 'Scroll',

    'projects.label': 'Selected projects',
    'projects.title': 'What I build.',
    'projects.desc': 'Three projects that reflect my versatility: from applied machine learning to low-level system design, including advanced data structures.',
    'project.1.desc': 'Predictive algorithm for real estate valuation using K-Means clustering and exploratory analysis to model price dynamics.',
    'project.2.desc': 'Assembly IDE simulator built in Java. A complete environment for writing, compiling and executing low-level code in real time.',
    'project.3.desc': 'A toolkit for graph exploration and analysis: traversal algorithms, shortest paths, and interactive visualizations.',
    'project.link': 'View on GitHub →',

    'exp.label': 'Professional journey',
    'exp.title': 'Where I grew.',
    'exp.desc': 'Between LLMOps in a major banking group, scientific research, and entrepreneurship — three experiences that shape my vision of the craft.',
    'exp.1.meta': 'Work-study · Oct. 2025 — Present',
    'exp.1.desc': 'Industrializing an LLM-powered email assistant (RAG, intent detection), deployed to 49,000 bank advisors via Kubernetes and AWS Bedrock. ELK observability and drift monitoring. Load testing on internal LLM platform. Security audit remediation. FastAPI initialization and Helm deployment setup.',
    'exp.2.meta': 'Internship · Nov. 2024 — Apr. 2025',
    'exp.2.desc': 'Automated analysis pipeline for extracting and visualizing gene expression. Single-nucleus sequencing (Python/R) for Duchenne muscular dystrophy research. Contributed to two scientific papers.',
    'exp.3.meta': 'Entrepreneurship · Jan. 2023 — Present',
    'exp.3.desc': 'Co-founder of a textile brand. Art direction, project management, pop-up stores, digital communication and mentoring interns. Three years of entrepreneurial adventure with two partners.',

    'teaser.label': 'About',
    'teaser.title': 'Curious, rigorous, entrepreneurial at heart.',
    'teaser.desc': 'Passionate about industrializing AI and what it enables us to build, I aim to combine technical craft with real-world impact.',
    'teaser.cta': 'Learn more about me',

    'contact.label': 'Contact',
    'contact.title': "Let's talk.",
    'contact.desc': "I'm a computer engineering student looking for a full-time role in Data Engineering and LLMOps.",
    'contact.cv': 'Download my resume',
    'contact.location': 'Location',
    'contact.phone': 'Phone',

    'footer.built': 'Crafted with care · Paris',

    // About page
    'about.label': 'About',
    'about.title': "Hi, I'm Sassi.",
    'about.lead': "Engineering student at EFREI, majoring in Big Data & Machine Learning. Currently industrializing an LLM assistant in production at Crédit Agricole — observability, security, Kubernetes deployment.",
    'about.story.title': 'My journey',
    'about.story.p1': 'I started in preparatory classes focused on computational biology before joining the engineering cycle at EFREI. This dual foundation — life sciences and computer science — taught me to approach problems with rigor and curiosity, qualities I draw on daily as a Data Engineer.',
    'about.story.p2': "Today, I work on industrializing a generative AI product deployed to 49,000 bank advisors at Crédit Agricole: ELK observability pipeline, drift monitoring, security remediation, Helm deployment on Kubernetes, load testing. Before that, I contributed to research at INSERM, and I co-founded We Love Uni, a textile brand we've been building for three years.",
    'about.approach.title': 'My vision',
    'about.approach.p1': "I believe the value of an AI product lies not in the model itself, but in the quality of everything around it: observability, reliability, security, governance. That is what LLMOps aims to structure, and that is where I want to specialize.",
    'about.approach.p2': "Entrepreneurship taught me autonomy and responsibility; scientific research, methodological rigor; and working in a large group, the importance of teamwork and industrialization. I'm now looking for a full-time role where I can keep growing on all three fronts.",
    'about.skills.title': 'Skills',
    'about.skills.lang': 'Languages',
    'about.skills.libs': 'Libraries',
    'about.skills.tools': 'Tools & Infra',
    'about.skills.viz': 'LLMOps',
    'about.beyond.title': 'Beyond the code',
    'about.beyond.p1': "Outside the screen, I've played guitar for thirteen years (five at a conservatory) and dabble in piano. I also love visual creation: art direction, video editing with Premiere Pro, and photo work in Photoshop — skills I put to work for We Love Uni.",
    'about.cta.cv': 'Download my resume',
    'about.cta.contact': 'Get in touch',
  }
};

/* ---- LANGUAGE SWITCHING ---- */
function getStoredLang() {
  try {
    return localStorage.getItem('lang') || 'fr';
  } catch {
    return 'fr';
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem('lang', lang);
  } catch {}
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update toggle button display
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    const current = toggle.querySelector('.lang-current');
    const other = toggle.querySelector('.lang-other');
    if (lang === 'fr') {
      current.textContent = 'FR';
      other.textContent = 'EN';
    } else {
      current.textContent = 'EN';
      other.textContent = 'FR';
    }
  }
}

function initLangToggle() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const currentLang = getStoredLang();
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setStoredLang(newLang);
    applyLanguage(newLang);
  });
}

/* ---- NAV SCROLL EFFECT ---- */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- SCROLL REVEAL (cards) ---- */
function initScrollReveal() {
  const cards = document.querySelectorAll('.card');
  if (!cards.length || !('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  cards.forEach(card => observer.observe(card));
}

/* ---- FOOTER ---- */
function initFooter() {
  // index.html → footer complet (avec titre + CTA CV)
  // about.html → footer compact (juste la grille de contact)
  const isAbout = window.location.pathname.includes('about');
  loadFooter(isAbout ? 'compact' : 'full');
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  initFooter();                    // 1. Injecter le footer HTML
  applyLanguage(getStoredLang());  // 2. Appliquer la langue (y compris au footer)
  initLangToggle();
  initNavScroll();
  initScrollReveal();
  initScrollSpy();
});

/* ---- NAV SCROLL SPY ---- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header.hero, footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  function getTargetId(link) {
    const href = link.getAttribute('href');
    if (href === 'index.html' || href === '/') return 'hero';
    if (href === 'about.html') return null;
    const hash = href.split('#')[1];
    return hash || null;
  }

  function updateActive() {
    let currentId = 'hero';
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      if (scrollY >= top) {
        currentId = section.id || 'hero';
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      currentId = 'contact';
    }

    navLinks.forEach(link => {
      const targetId = getTargetId(link);
      if (targetId === currentId) {
        link.classList.add('active');
      } else if (targetId !== null) {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}
