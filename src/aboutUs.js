import createHeader from "./header";
import createNav from "./nav";
import createDiv from "./div";
import './style.css';
import Logo from './img/logo.png';
import createArticle from "./article";
import createFooter from "./footer";

export default function aboutUs() {
    const content = document.getElementById('content');
    const mainContentDiv = createDiv('main-content-div'); //Container for right side of website
    const mainLogoDiv = createDiv('main-logo-div'); // Div for index logo
    const header = createHeader(mainContentDiv);
    const nav = createNav(header);
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);
    const mainLogo = new Image();
    content.appendChild(mainLogoDiv);
    content.appendChild(mainContentDiv);
    mainLogo.src = Logo;
    mainLogo.id = 'index-logo';
    mainLogoDiv.appendChild(mainLogo);

    header.classList.add('main-header')


    article.headline.innerText = 'About Us';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';


    return { aboutUs };
}