
import './style.css';
import createArticle from "./article";
import createFooter from "./footer";
import getImagesArray from "./imagesArray";
import carousel from './carousel';

export default function aboutUs() {
    const images = getImagesArray();
    const content = document.getElementById('content'); //Main content wrapper 
    const mainContentDiv = document.getElementById('main-content-div'); //Container for right side of website
    const mainLogoDiv = document.getElementById('main-logo-div'); // Div for index logo
    
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);
    const mainLogo = new Image();
    const aboutUsImg = new Image();
    carousel();


    
    content.appendChild(mainLogoDiv);
    content.appendChild(mainContentDiv);




    article.headline.innerText = 'About Us';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';


    return { aboutUs };
}