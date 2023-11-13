import image from '../img/restaurant_1920.jpg'

export default function renderHomepage() {
    const contentContainer = document.querySelector('.content-container');
    addTitle(contentContainer);
    addText(contentContainer);
    addImage(contentContainer);
}


function addTitle(contentContainer) {
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.className = 'restaurant-title'
    restaurantTitle.innerHTML = 'Welcome to <span class="title"> Anime Lorem Ipsum Cafe!</span>'
    contentContainer.appendChild(restaurantTitle)
}

function addText(contentContainer) {
    const homepageText = document.createElement('div');
    homepageText.className = 'homepage-text';
    homepageText.textContent = 'Lorem s dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur deleniti doloremque esse excepturi magnam, molestias necessitatibus nihil perspiciatis porro, qui ratione reiciendis sint suscipit, ullam veritatis. Id, unde?'
    contentContainer.append(homepageText);

}

function addImage(contentContainer) {
    const homepageImage = new Image();
    homepageImage.className = 'homepage-image'
    homepageImage.src = image;
    contentContainer.appendChild(homepageImage);

    const author = document.createElement('h6')
    author.textContent = 'image by TotoroGuo';
    author.style.setProperty('margin-top', '8px');
    author.style.setProperty('text-align', 'right');

    contentContainer.appendChild(author)

}


