import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');
  let galleryMarkup = '';

  galleryItems.forEach(({ preview, original, description }) => {
    galleryMarkup += `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
  });

  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});