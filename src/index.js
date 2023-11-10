import './css/normalize.css'
import './css/style.css'
import renderNav from "./js/nav.js";
import renderHomepage from "./js/homepage.js";

renderNav()
createContentContainer()

renderHomepage()


const buttons = document.querySelectorAll('.button')
for (const button of buttons) {
    button.addEventListener('click', e => {
        resolvePage(e)
    })
}

function resolvePage() {
// TODO function that should render a proper subpage according to its class (menu - menu)
}

console.log(buttons)

// TODO не заморачиваться над дизайном. Цель потренировать модули и вебпак

function createContentContainer() {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container')

    const root = document.querySelector('#content')

    root.appendChild(contentContainer)
}