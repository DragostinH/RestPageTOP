import createHeader from "./header";
import createNav from "./nav";
import createDiv from "./div";
import './style.css';
import Logo from './img/logo.png';

const website = (() => {
    const content = document.getElementById('content');
    const mainLogo = new Image();  // Logo of the rest page that will use
    mainLogo.src = Logo;
    mainLogo.id = 'index-logo';

    const header = createHeader(content);
    header.classList.add('main-header')
    const nav = createNav(header);

    const mainLogoDiv = createDiv('main-logo-div'); // Div for index logo
    content.appendChild(mainLogoDiv);
    mainLogoDiv.appendChild(mainLogo);

    const mainContentDiv = createDiv('main-content-div');
    mainContentDiv.appendChild(header);
    content.appendChild(mainContentDiv);

    




    return { content };


})();


// console.log(content);