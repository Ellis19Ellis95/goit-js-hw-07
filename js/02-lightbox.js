import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true,
    docClose: true,
    nav: true, // Додає кнопки гортання
  });

  gallery.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      const src = event.target.getAttribute('src');
      const alt = event.target.getAttribute('alt');
      lightbox.open({ source: src, caption: alt });
    }
  });
});




