import createHeader from "./header";
import createNav from "./nav";
import './style.css';
import Logo from './img/logo.png';
import createArticle from "./article";
import createFooter from "./footer";

export default function home() {
    const content = document.getElementById('content'); //Main content wrapper 
    const mainContentDiv = document.getElementById('main-content-div'); //Container for right side of website
    const mainLogoDiv = document.getElementById('main-logo-div'); // Div for index logo
    const header = createHeader(mainContentDiv);
    const nav = createNav(header);
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);
    const mainLogo = new Image();  // Logo of the restaurant page that will use
    content.appendChild(mainLogoDiv);
    content.appendChild(mainContentDiv);
    mainLogo.src = Logo;
    mainLogo.id = 'index-logo';
    mainLogoDiv.appendChild(mainLogo);

    header.classList.add('main-header')



    // Text inside the page
    article.headline.innerText = 'Welcome';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';

    return { home, nav };
};


// console.log(content);