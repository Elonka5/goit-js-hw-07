import { galleryItems } from "./gallery-items.js";

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

newGallery.insertAdjacentHTML("afterbegin", newItemsGallery);
newGallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const imgList = evt.target.closest(".gallery__image");

  const instance = basicLightbox.create(
    `<img src = '${imgList.dataset.source}' alt="${imgList.alt}" />`,
    {
      onShow: (instance) => {
        newGallery.addEventListener("keydown", onClickEscClose);
      },
    },
    {
      onClose: (instance) => {
        newGallery.removeEventListener("keydown", onClickEscClose);
      },
    }
  );
  instance.show();

  function onClickEscClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}


