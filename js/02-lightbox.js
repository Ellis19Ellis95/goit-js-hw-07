import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');
  const imagesToDisplay = 9;

  function createGalleryItem({ preview, original, description }) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = preview;
    image.setAttribute('data-source', original);
    image.alt = description;

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
  }

  function renderGallery(galleryItems) {
    const galleryElements = galleryItems.slice(0, imagesToDisplay).map(createGalleryItem);
    galleryList.innerHTML = '';
    galleryList.append(...galleryElements);
  }

  renderGallery(galleryItems);

  // Initialize SimpleLightbox on gallery item click
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true, // Enable navigation with browser history
    elements: galleryItems.map(({ original, description }) => ({ src: original, caption: description })),
    docClose: true, // Allow closing the lightbox by clicking outside the image
  });

  // Add custom navigation buttons
  lightbox.on('show.simplelightbox', function () {
    const prevButton = document.createElement('button');
    prevButton.classList.add('custom-button', 'prev-button');
    prevButton.innerHTML = '&lt;';

    const nextButton = document.createElement('button');
    nextButton.classList.add('custom-button', 'next-button');
    nextButton.innerHTML = '&gt;';

    lightbox.content.appendChild(prevButton);
    lightbox.content.appendChild(nextButton);

    // Add event listeners for custom buttons
    prevButton.addEventListener('click', () => lightbox.prev());
    nextButton.addEventListener('click', () => lightbox.next());
  });
});













