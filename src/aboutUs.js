
import './style.css';
import createArticle from "./article";
import createFooter from "./footer";
import carousel from './carousel';
import createDiv from './div';

export default function aboutUs(param) {
    const imageDiv = createDiv();
    imageDiv.classList.add('about-us-image');

    const mainContentDiv = document.getElementById('main-content-div'); //Container for right side of website   
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);


    param.appendChild(imageDiv);
    param.appendChild(mainContentDiv);

    article.headline.innerText = 'About Us';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';


    return { aboutUs };
}