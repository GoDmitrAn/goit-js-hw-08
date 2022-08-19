// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.css'
import '../css/common.css';
import '../css/01-gallery.css'

const mainGalleryTask2 = document.querySelector('.gallery');
function createItemTemplateTask2({preview, original,description}) {
    
    const template = `<div class="gallery__item"><a class="gallery__link" href="${original}">
                            <img class="gallery__image"
                                src="${preview}" 
                                alt="${description}" 
                                
                            />
                            </a>
                        </div>` ;
    return template;
}
function renderGalleryItemsTask2() {
    const fullTemplate = galleryItems.reduce((acc, item) => `${acc} ${createItemTemplateTask2(item)}`, '')
    mainGalleryTask2.insertAdjacentHTML('beforeend', fullTemplate);
}
renderGalleryItemsTask2();
new SimpleLightbox('.gallery a', {
    captionsData: "alt" , 
    captionDelay: 250,
});



console.log(galleryItems);