// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImageElement(galleryItems);
galleryContainer.innerHTML = cardsMarkup;

function createImageElement(images) {
    return images.map((image) => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
            </a>
        </div>`
    ).join("");
};

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () { }
);
