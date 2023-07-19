import { galleryItems } from "./gallery-items.js";
// Change code below this line

const newGallery = document.querySelector(".gallery");

const newItemsGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class = "gallery__item">
 <a class = "gallery__link" href = "${original}">
 <img 
 class ="gallery__image" 
 src = "${preview}" 
 data-source = "${original}" 
 alt = "${description}" 
 />
 </a> 
 </li> `;
  })
  .join("");

const onClick = (evt) => {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const imgList = evt.target.closest(".gallery__image");
  const currentList = imgList.dataset.source;
  const currentDescription = imgList.alt;

  const instance = basicLightbox.create(
    `<img src="${currentList}" alt="${currentDescription}"/>`
  );
  instance.show();

  newGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
};

newGallery.insertAdjacentHTML("afterbegin", newItemsGallery);
newGallery.addEventListener("click", onClick);
