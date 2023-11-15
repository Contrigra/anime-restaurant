import image from "../img/menu.png";

export default function renderMenu() {

    const contentContainer = document.querySelector('.content-container')
    addTitle(contentContainer, 'Our Menu');
    addText(contentContainer);
    addImage(contentContainer)

}

function addTitle(contentContainer, htmlText) {
    const titleElement = document.createElement('h1')
    titleElement.className = 'title';
    titleElement.innerHTML = htmlText
    contentContainer.appendChild(titleElement)
}

function addText(contentContainer) {
    const textDiv = document.createElement('div');
    textDiv.className = 'text-div';
    textDiv.textContent = 'Lorem s dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur deleniti doloremque esse excepturi magnam, molestias necessitatibus nihil perspiciatis porro, qui ratione reiciendis sint suscipit, ullam veritatis. Id, unde?'
    contentContainer.append(textDiv);

}

function addImage(contentContainer) {
    const homepageImage = new Image();
    homepageImage.className = 'image'
    homepageImage.src = image;
    contentContainer.appendChild(homepageImage);
}
