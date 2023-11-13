export default function renderNav() {
    const contentDiv = document.querySelector('#content')

    const nav = navConstruct()
    contentDiv.appendChild(nav)


}


function navConstruct() {
    const nav = document.createElement('nav');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container')
    nav.appendChild(buttonContainer);

    const buttons = createButtons();
    for (const button of buttons) {
        buttonContainer.appendChild(button)
    }

    return nav;
}

function createButtons() {
    const buttonAbout = document.createElement('button');
    buttonAbout.textContent = 'Contact';
    buttonAbout.classList.add('contact');

    const buttonMenu = document.createElement('button');
    buttonMenu.textContent = 'Menu';
    buttonMenu.classList.add('menu');

    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Home';
    buttonHome.classList.add('homepage');


    return [buttonHome, buttonMenu, buttonAbout];
}