import './style.css';
import Logo from './img/logo.png';
import createArticle from "./article";
import createFooter from "./footer";
import createDiv from './div';
import createHeader from './header';
import carousel from './carousel';

export default function home(param) {
    const mainContentDiv = document.getElementById('main-content-div'); //Container for right side of website
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);
    
    carousel(param);
    param.appendChild(mainContentDiv);





    // Text inside the page
    article.headline.innerText = 'Welcome';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';

    return { home };
};


// console.log(content);