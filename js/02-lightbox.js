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