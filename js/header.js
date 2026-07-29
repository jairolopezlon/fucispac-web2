document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const langMenu = document.querySelector('[data-lang-menu]');
  const langOptions = document.querySelectorAll('[data-lang]');
  const langCurrent = document.querySelector('[data-lang-current]');
  const currentPage = document.body.dataset.page || '';

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('header__nav--open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen
        ? '<span class="material-symbols-outlined">close</span>'
        : '<span class="material-symbols-outlined">menu</span>';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('header__nav--open')) {
        menu.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        toggle.focus();
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      });
    });
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = !langMenu.hidden;
      langMenu.hidden = isVisible;
      langToggle.setAttribute('aria-expanded', !isVisible);
    });

    document.addEventListener('click', (e) => {
      if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    langToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        langMenu.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');
        langToggle.focus();
      }
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      langOptions.forEach(o => o.classList.remove('header__lang-option--active'));
      opt.classList.add('header__lang-option--active');
      if (langCurrent) langCurrent.textContent = lang.toUpperCase();
      langMenu.hidden = true;
      langToggle.setAttribute('aria-expanded', 'false');
      document.documentElement.lang = lang === 'es' ? 'es' : 'en';
      localStorage.setItem('fucispac-lang', lang);
    });
  });

  const savedLang = localStorage.getItem('fucispac-lang');
  if (savedLang) {
    const opt = document.querySelector(`[data-lang="${savedLang}"]`);
    if (opt) {
      opt.click();
    }
  }

  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(link => {
    const page = link.dataset.page;
    if (page === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
