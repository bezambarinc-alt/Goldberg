/* =====================================================
   WILLIAM GOLDBERG — Shared header & footer injector
   Active nav is set via data-active on <body>.
   ===================================================== */
(function () {
  const active = document.body.dataset.active || '';
  const isActive = (k) => (k === active ? 'active' : '');

  const header = `
  <header class="wg-header">
    <div class="wg-header-top">
      <div class="wg-utility">
        <span>In Production Pieces</span>
      </div>
      <a href="index.html" class="wg-wordmark">
        William Goldberg
        <span class="est">Est. 1948 &middot; New York</span>
      </a>
      <div class="wg-actions"></div>
    </div>
    <nav class="wg-nav">
      <a href="necklaces.html" class="${isActive('necklaces')}">Necklaces</a>
      <a href="rings.html" class="${isActive('rings')}">Rings</a>
      <a href="bracelets.html" class="${isActive('bracelets')}">Bracelets</a>
      <a href="earrings.html" class="${isActive('earrings')}">Earrings</a>
      <a href="aria.html" class="${isActive('aria')}">The Aria</a>
    </nav>
  </header>`;

  const footer = `
  <footer class="wg-footer" id="contact">
    <div class="wg-footer-inner">
      <div>
        <div class="wordmark-footer">WILLIAM&nbsp;GOLDBERG</div>
        <p>A private presentation of pieces currently in design and in production &mdash; presented for the William Goldberg clientele.</p>
      </div>
      <div>
        <h4>Collection</h4>
        <a href="necklaces.html">Necklaces</a>
        <a href="rings.html">Rings</a>
        <a href="bracelets.html">Bracelets</a>
        <a href="earrings.html">Earrings</a>
      </div>
      <div>
        <h4>Atelier</h4>
        <a href="aria.html">The Aria Necklace</a>
        <a href="#">Commission a Piece</a>
        <a href="#">The Ashoka&reg; Diamond</a>
      </div>
      <div>
        <h4>Visit</h4>
        <a href="#">589 Fifth Avenue</a>
        <a href="#">New York, NY 10017</a>
        <a href="#">By Appointment Only</a>
      </div>
    </div>
    <div class="legal">
      <span>&copy; William Goldberg. All rights reserved.</span>
      <span>Private &middot; Confidential &middot; For Presentation</span>
    </div>
  </footer>`;

  const hSlot = document.getElementById('wg-header-slot');
  const fSlot = document.getElementById('wg-footer-slot');
  if (hSlot) hSlot.outerHTML = header;
  if (fSlot) fSlot.outerHTML = footer;
})();
