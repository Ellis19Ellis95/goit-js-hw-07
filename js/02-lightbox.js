import { galleryItems } from './gallery-items.js';
// Change code below this line







console.log(galleryItems);
import SimpleLightbox from 'simplelightbox'; // Підключення бібліотеки SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css'; // Підключення стилів SimpleLightbox
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

function renderGallery(galleryItems) {
  const galleryElements = galleryItems.map(createGalleryItem);
  galleryList.append(...galleryElements);
}

renderGallery(galleryItems);

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });





