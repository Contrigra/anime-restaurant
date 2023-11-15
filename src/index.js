import './css/normalize.css'
import './css/style.css'
import renderNav from "./js/nav.js";
import renderHomepage from "./js/homepage.js";
import renderMenu from "./js/menu.js";
import renderContact from "./js/contact.js";


renderNav()
createContentContainer()

renderHomepage()
addEventListenersToButtons()


function resolvePageHandler(e) {

    switch (e.target.className) {
        case 'homepage': {
            clearContent()
            renderHomepage();
            break
        }
        case 'menu': {
            clearContent();
            renderMenu();
            break
        }
        case 'contact': {
            clearContent();
            renderContact();
            break
        }
    }
}

function createContentContainer() {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container');

    const root = document.querySelector('#content');
    root.appendChild(contentContainer);
}

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('button')
    for (const button of buttons) {
        button.addEventListener('click', e => {
            clearContent()
            resolvePageHandler(e)
        })
    }
}

function clearContent() {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.remove();
    createContentContainer();
}

