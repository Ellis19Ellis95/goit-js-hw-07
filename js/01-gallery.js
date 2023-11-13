import { galleryItems } from './gallery-items.js';
// Change code below this line

//Створення та рендер розмітки галереї

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
  image.setAttribute('data-source', original);
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


//Реалізація делегування та отримання URL великого зображення

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') return;

  const largeImageUrl = target.dataset.source;

  openModal(largeImageUrl);
}

//Відкриття модального вікна та заміна значення атрибута src

function openModal(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);

  instance.show();
}


//Заборона переадресації при кліку на зображення

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  galleryItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = item.original;
    a.classList.add('gallery__link');
    
    img.src = item.preview;
    img.alt = item.description;
    img.dataset.source = item.original;
    img.classList.add('gallery__image');

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });

  gallery.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
      const largeImageSource = event.target.dataset.source;

      
      const instance = basicLightbox.create(`
        <img src="${largeImageSource}" alt="Modal Image">
      `);

      instance.show();
    }
  });
});

