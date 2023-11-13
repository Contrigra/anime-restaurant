
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

}

function addImage(contentContainer) {

}

// TODO small section about the restaurant and a picture