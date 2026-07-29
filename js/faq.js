document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-faq]').forEach(item => {
    const summary = item.querySelector('.faq__question');
    item.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', item.open);
    });
  });
});
