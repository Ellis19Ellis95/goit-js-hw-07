import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
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
  });

  // Add event listeners for next and previous buttons
  nextButton.addEventListener('click', () => lightbox.next());
  prevButton.addEventListener('click', () => lightbox.prev());
});
   















