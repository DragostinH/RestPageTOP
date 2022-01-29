import './style.css';
import Logo from './img/logo.png';
import createArticle from "./article";
import createFooter from "./footer";
import carousel from './carousel';

export default function home(topLevelWrapper, mainContentDiv) {
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);
    
    carousel(topLevelWrapper);
    topLevelWrapper.appendChild(mainContentDiv);





    // Text inside the page
    article.headline.innerText = 'Welcome';
    article.section.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ducimus dicta natus totam odit maiores repudiandae assumenda excepturi sit soluta molestiae dolorem amet perferendis quo, libero at, doloremque reprehenderit. Voluptatibus.';

    return { home };
};


// console.log(content);