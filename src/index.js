import './css/normalize.css'
import './css/style.css'
import renderNav from "./js/nav.js";
import renderHomepage from "./js/homepage.js";


renderNav()
createContentContainer()

renderHomepage()
addEventListenersToButtons()

function resolvePageHandler() {
// TODO function that should render a proper subpage according to its class (menu - menu)
}



function createContentContainer() {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container');

    const root = document.querySelector('#content');
    root.appendChild(contentContainer);
}
function clearContent() {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.remove();
    createContentContainer();
}

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('.button')
    for (const button of buttons) {
        button.addEventListener('click', e => {
            resolvePageHandler(e)
        })
    }
}

// TODO не заморачиваться над дизайном. Цель потренировать модули и вебпак
