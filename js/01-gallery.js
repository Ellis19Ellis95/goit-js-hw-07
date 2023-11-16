import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');
    const imagesToDisplay = 9;
    let galleryMarkup = '';
  
    galleryItems.slice(0, imagesToDisplay).forEach(({ preview, original, description }) => {
      galleryMarkup += `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    });
  
    galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  
    galleryList.addEventListener('click', function (event) {
      event.preventDefault();
      const target = event.target;
  
      if (target.nodeName !== 'IMG') return;
  
      const largeImageUrl = target.dataset.source;
      
      const instance = basicLightbox.create(`
        <img src="${largeImageUrl}" alt="Modal Image">
      `);
  
      instance.show();
    });
  });

