import createArticle from "./article";
import createDiv from "./div";
import createFooter from "./footer";
import getImagesArray from "./imagesArray";
import ramenMenu from "./img/Menu/ramen-menu.png"
import drinksMenu from "./img/Menu/drinks-menu.png"
import dessertsMenu from "./img/Menu/desserts-menu.png"
import sushiMenu from "./img/Menu/sushi-menu.png"
import ramenIcon from "./img/Menu/ramen-icon.png";
import sushiIcon from "./img/Menu/sushi-icon.png";
import drinksIcon from "./img/Menu/coffee-icon.png";
import dessertsIcon from "./img/Menu/dessert-icon.png";
import createAnchor from "./anchorTag";
import addClickEvenListener from "./addClickEventListener";



export default function menu(content, mainContentDiv) {
    // Image div for the left hand side image
    const imageDiv = createDiv();
    imageDiv.id = 'menu-image';
    
    content.insertBefore(imageDiv, content.firstChild);

    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    article.article.id = 'menu-article';
    const footer = createFooter(mainContentDiv);

    const menuButtonContainer = createDiv();
    menuButtonContainer.id = 'menu-item-div';

    const images = getImagesArray()

    // Create each button for changing the menu on the left side:
    const ramenMenuButton = createMenuButton(imageDiv,ramenMenu, ramenIcon);
    const sushimenuButton = createMenuButton(imageDiv,sushiMenu, sushiIcon)
    const drinksMenuButton = createMenuButton(imageDiv,drinksMenu, drinksIcon)
    const dessertsMenuButton = createMenuButton(imageDiv, dessertsMenu, dessertsIcon)



    multipleAppends(menuButtonContainer, ramenMenuButton, sushimenuButton, drinksMenuButton, dessertsMenuButton);

    
    
    
    
    article.article.appendChild(menuButtonContainer);
    
    
    return { menu };
}
function createMenuButton(menuImageDiv, menuImage ,foodIcon){
    const div = createDiv();
    div.id = 'menu-icon-div';
    div.style.backgroundImage = `url(${foodIcon})`

    div.addEventListener('click', ()=>{
        menuImageDiv.style.backgroundImage = `url(${menuImage})`
    });


   return div;
}

function multipleAppends(parent, ...children) {
    children.forEach(element => {
        parent.appendChild(element);
    });
    return parent;
}

function changeBackgroundImage(target, image) {
    target.style.backgroundImage = `url(${image})`
}