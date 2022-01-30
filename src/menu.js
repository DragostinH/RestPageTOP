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



export default function menu(content, mainContentDiv) {
    // Image div for the left hand side image
    const imageDiv = createDiv();
    imageDiv.id = 'menu-image';
    
    content.insertBefore(imageDiv, content.firstChild);

    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    const footer = createFooter(mainContentDiv);

    const menuButtonContainer = createDiv();
    menuButtonContainer.id = 'menu-item-div';

    const images = getImagesArray()

    const ramenMenuLink = createDiv();
    const ramenBtn = document.createElement('button');
    ramenBtn.id = 'ramen-btn';
    ramenBtn.innerText='Ramen Menu'
    ramenBtn.addEventListener('click', () => {
        imageDiv.style.backgroundImage = `url(${ramenMenu})`;
       
    })
    ramenMenuLink.appendChild(ramenBtn);


    const sushiMenuLink = createDiv();
    const sushiBtn = document.createElement('button');
    sushiBtn.id = 'sushi-btn';
    sushiBtn.innerText = 'Sushi Menu'
    sushiBtn.addEventListener('click', () => {
        imageDiv.style.backgroundImage = `url(${sushiMenu})`;
       
    })
    sushiMenuLink.appendChild(sushiBtn);

    const drinksMenuLink = createDiv();
    const drinksBtn = document.createElement('button');
    drinksBtn.id = 'drinks-button';
    drinksBtn.innerText = 'Drinks Menu'
    drinksBtn.addEventListener('click', () => {
        imageDiv.style.backgroundImage = `url(${drinksMenu})`;
       
    })
    drinksMenuLink.appendChild(drinksBtn);

    const dessertsMenuLink = createDiv();
    const desertsBtn = document.createElement('button');
    desertsBtn.id = 'desert-btn';
    desertsBtn.innerText = 'Deserts Menu'
    desertsBtn.addEventListener('click', () => {
        imageDiv.style.backgroundImage = `url(${dessertsMenu})`;
       
    })
    dessertsMenuLink.appendChild(desertsBtn);



    multipleAppends(menuButtonContainer, ramenMenuLink, sushiMenuLink, drinksMenuLink, dessertsMenuLink);






    article.article.appendChild(menuButtonContainer);


    return { menu };
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