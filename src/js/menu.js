import {addImage, addText, addTitle} from "./homepage";
import image from "../img/menu.png";

export default function renderMenu() {

    const contentContainer = document.querySelector('.content-container')
    addTitle(contentContainer, 'Our Menu');
    addText(contentContainer);
    addImage(contentContainer, image)

}


