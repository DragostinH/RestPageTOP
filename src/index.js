import createHeader from "./header";
import './style.css';
import Logo from './img/logo.png';

const website = (() => {
    const content = document.getElementById('content');
    const h1 = document.createElement('h1');
    const mainLogo = new Image();
    mainLogo.src = Logo;
    mainLogo.id = 'header-logo';

    h1.textContent = 'TEST';
    createHeader(content);
    const header = document.querySelector('header');
    header.appendChild(h1);
    header.appendChild(mainLogo);
    


    return { content };


})();

console.log('213123');

// console.log(content);