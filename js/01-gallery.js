import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');
    const imagesToDisplay = 9;
  
    const galleryItems = [
      // Ось тут має бути масив об'єктів з даними для галереї
    ];
  
    const galleryElements = galleryItems.slice(0, imagesToDisplay).map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `).join('');
  
    galleryList.insertAdjacentHTML('beforeend', galleryElements);
  
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

