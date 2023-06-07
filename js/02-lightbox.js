import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

const newItemsGallery = galleryItems.map(({preview, original, description}) => {
 return `<li class = "gallery__item">
 <a class = "gallery__link" href = "${original}">
 <img 
 class ="gallery__image" 
 src = "${preview}"  
 alt = "${description}" 
 />
 </a> 
 </li> `
}).join('');

newGallery.insertAdjacentHTML('afterbegin',newItemsGallery);
newGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
       return;
}
};
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});