export default function renderHomepage() {
    const contentContainer = document.querySelector('.content-container');

    addTitle(contentContainer);
    addText(contentContainer);
    addImage(contentContainer);
}


function addTitle(contentContainer) {
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.className = 'restaurant-title'
    restaurantTitle.textContent = 'Welcome to Anime Lorem Ipsum Cafe!'
    contentContainer.appendChild(restaurantTitle)
}

function addText(contentContainer) {
    const homepageText = document.createElement('div');
    homepageText.className = 'homepage-text';
    homepageText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur deleniti doloremque esse excepturi magnam, molestias necessitatibus nihil perspiciatis porro, qui ratione reiciendis sint suscipit, ullam veritatis. Id, unde?'
    contentContainer.append(homepageText);

}

function addImage(contentContainer) {

}

// TODO small section about the restaurant and a picture