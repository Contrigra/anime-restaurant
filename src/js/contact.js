import {addImage, addText, addTitle} from "./homepage";
import image from '../img/location.png'

export default function renderContact() {
    const contentContainer = document.querySelector('.content-container');

    addTitle(contentContainer, 'Contact Us');
    addText(contentContainer);
    addImage(contentContainer, image);

}

