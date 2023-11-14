import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true,
    docClose: true,
  });

  gallery.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      lightbox.open();
    }
  });

  lightbox.on('show.simplelightbox', function () {
    const prevButton = document.querySelector('.sl-prev');
    const nextButton = document.querySelector('.sl-next');

    if (prevButton) prevButton.innerHTML = '&lt;';
    if (nextButton) nextButton.innerHTML = '&gt;';
  });
});







