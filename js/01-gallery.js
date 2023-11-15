import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');
    const imagesToDisplay = 9;
  
    function createGalleryItem({ preview, original, description }) {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </li>
      `;
    }
  
    function renderGallery(galleryItems) {
      const galleryElements = galleryItems.slice(0, imagesToDisplay).map(createGalleryItem).join('');
      galleryList.innerHTML = galleryElements;
    }
  
    renderGallery(galleryItems);
  });
  
    







