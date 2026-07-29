document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-video]').forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.dataset.video;
      const overlay = document.createElement('div');
      overlay.className = 'video-overlay';
      overlay.innerHTML = `
        <div class="video-overlay__content">
          <button class="video-overlay__close" aria-label="Close video">
            <span class="material-symbols-outlined">close</span>
          </button>
          <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      `;
      overlay.querySelector('.video-overlay__close').addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
      });
      document.body.appendChild(overlay);
    });
  });
});
