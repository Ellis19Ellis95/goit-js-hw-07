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


    //document.addEventListener('DOMContentLoaded', function () {
        //const galleryList = document.querySelector('.gallery');
        //const imagesToDisplay = 9;
      
        //function createGalleryItem({ preview, original, description }) {
          //return `
            //<li class="gallery__item">
             // <a class="gallery__link" href="${original}">
               //<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
              //</a>
            //</li>
          //`;
        //}
      
        function renderGallery(galleryItems) {
          const galleryElements = galleryItems.slice(0, imagesToDisplay).map(createGalleryItem).join('');
          galleryList.innerHTML = galleryElements;
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
  
    
  
    







