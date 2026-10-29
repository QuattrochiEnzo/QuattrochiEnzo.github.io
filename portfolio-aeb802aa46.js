const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const setMenu = open => {
  navLinks?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
};
menuButton?.addEventListener('click', () => setMenu(!navLinks?.classList.contains('open')));
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
// Content stays visible even when JavaScript is disabled.
document.documentElement.classList.remove('no-js');
const imageDialog = document.querySelector('.image-dialog');
const imageFull = document.querySelector('#image-full');
const imageCaption = document.querySelector('#image-caption');
if (imageDialog && typeof imageDialog.showModal === 'function') {
  document.querySelectorAll('.image-zoom').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      imageFull.src = link.href;
      imageFull.alt = link.querySelector('img')?.alt || '';
      imageCaption.textContent = link.dataset.caption || '';
      imageDialog.showModal();
      document.body.classList.add('image-open');
    });
  });
  document.querySelector('.dialog-close')?.addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', event => {
    if (event.target === imageDialog) {
      const bounds = imageDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
    }
  });
  imageDialog.addEventListener('close', () => document.body.classList.remove('image-open'));
}
