/* =====================================================
   WILLIAM GOLDBERG — Image lightbox / carousel
   Collects hero + gallery images on product pages.
   Click to open. Arrows / click arrows to navigate.
   Esc / X / backdrop to close.
   ===================================================== */
(function () {
  function init() {
    const imgs = [];
    const hero = document.querySelector('.product-hero-inner img');
    if (hero && hero.getAttribute('src')) imgs.push(hero);

    document.querySelectorAll('.product-gallery .media img').forEach((img) => {
      if (img.getAttribute('src')) imgs.push(img);
    });

    if (imgs.length === 0) return;

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = `
      <button class="lightbox-close" aria-label="Close">×</button>
      <button class="lightbox-nav prev" aria-label="Previous">‹</button>
      <img class="lightbox-img" src="" alt="">
      <button class="lightbox-nav next" aria-label="Next">›</button>
      <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(lb);

    const lbImg = lb.querySelector('.lightbox-img');
    const lbCounter = lb.querySelector('.lightbox-counter');
    const btnClose = lb.querySelector('.lightbox-close');
    const btnPrev = lb.querySelector('.lightbox-nav.prev');
    const btnNext = lb.querySelector('.lightbox-nav.next');

    let idx = 0;

    function show() {
      const target = imgs[idx];
      lbImg.src = target.src;
      lbImg.alt = target.alt || '';
      lbCounter.textContent = `${idx + 1} / ${imgs.length}`;
    }
    function open(i) {
      idx = i;
      show();
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }
    function prev(e) {
      if (e) e.stopPropagation();
      idx = (idx - 1 + imgs.length) % imgs.length;
      show();
    }
    function next(e) {
      if (e) e.stopPropagation();
      idx = (idx + 1) % imgs.length;
      show();
    }

    imgs.forEach((img, i) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        open(i);
      });
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    lbImg.addEventListener('click', (e) => e.stopPropagation());
    lb.addEventListener('click', (e) => {
      if (e.target === lb) close();
    });

    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
