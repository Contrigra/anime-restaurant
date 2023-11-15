import image from '../img/restaurant_1920.jpg'

export default function renderHomepage() {
    const contentContainer = document.querySelector('.content-container');
    addTitle(contentContainer, 'Welcome to <span class="title-name-span"> Anime Lorem Ipsum Cafe!</span>');
    addText(contentContainer);
    addImageAndAuthor(contentContainer);
}


export function addTitle(contentContainer, htmlText) {
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.className = 'title'
    restaurantTitle.innerHTML = htmlText
    contentContainer.appendChild(restaurantTitle)
}

export function addText(contentContainer) {
    const homepageText = document.createElement('div');
    homepageText.className = 'text-div';
    homepageText.textContent = 'Lorem s dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur deleniti doloremque esse excepturi magnam, molestias necessitatibus nihil perspiciatis porro, qui ratione reiciendis sint suscipit, ullam veritatis. Id, unde?'
    contentContainer.append(homepageText);

}

function addImageAndAuthor(contentContainer) {
    const homepageImage = new Image();
    homepageImage.className = 'image'
    homepageImage.src = image;
    contentContainer.appendChild(homepageImage);

    const author = document.createElement('h6')
    author.textContent = 'image by TotoroGuo';
    author.style.setProperty('margin-top', '8px');
    author.style.setProperty('text-align', 'right');
    contentContainer.appendChild(author)
}


export function addImage(contentContainer, imageLocation) {
    const homepageImage = new Image();
    homepageImage.className = 'image'
    homepageImage.src = imageLocation;
    contentContainer.appendChild(homepageImage);
}
