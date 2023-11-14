import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true,
    docClose: true,
  });

  lightbox.on('show.simplelightbox', function () {
    const prevButton = document.createElement('div');
    prevButton.className = 'sl-prev';
    prevButton.innerHTML = '&lt;';

    const nextButton = document.createElement('div');
    nextButton.className = 'sl-next';
    nextButton.innerHTML = '&gt;';

    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);

    prevButton.addEventListener('click', () => lightbox.prev());
    nextButton.addEventListener('click', () => lightbox.next());
  });

  lightbox.on('close.simplelightbox', function () {
    const prevButton = document.querySelector('.sl-prev');
    const nextButton = document.querySelector('.sl-next');

    if (prevButton) prevButton.remove();
    if (nextButton) nextButton.remove();
  });
});







