import { galleryItems } from './gallery-items.js';
// Change code below this line


document.addEventListener('DOMContentLoaded', function () {
  const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true,
    docClose: true,
    close: true,
    nav: true,
    buttons: true,
  });
});







