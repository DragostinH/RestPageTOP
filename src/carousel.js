import getImagesArray from "./imagesArray";
import createDiv from "./div";
import CookingSushi1 from './img/Menu/cooking-sushi1.jpg'
import CookingSushi2 from './img/Menu/cooking-sushi2.jpg'
import CookingSushi3 from './img/Menu/cooking-sushi3.jpg'
import CookingRamen1 from './img/Menu/cooking-ramen1.jpg'
import CookingRamen2 from './img/Menu/cooking-ramen2.jpg'
import CookingRamen3 from './img/Menu/cooking-ramen3.jpg'

export default function carousel(param) {
    const cookingSushi1 = new Image();
    cookingSushi1.src = CookingSushi1;

    const cookingSushi2 = new Image();
    cookingSushi2.src = CookingSushi2;

    const cookingSushi3 = new Image();
    cookingSushi3.src = CookingSushi3;

    const cookingRamen1 = new Image();
    cookingRamen1.src = CookingRamen1;

    const cookingRamen2 = new Image();
    cookingRamen2.src = CookingRamen2;

    const cookingRamen3 = new Image();
    cookingRamen3.src = CookingRamen3;

    const imageDiv = createDiv();
    imageDiv.classList.add('carousel');
    imageDiv.classList.add('fade');
    param.insertBefore(imageDiv, content.firstChild);
    const images = getImagesArray(cookingSushi1.src, cookingSushi2.src, cookingSushi3.src, cookingRamen1.src, cookingRamen2.src, cookingRamen3.src);

    const interval = setInterval(() => {
        startCarousel();
    }, 3000);

    let index = 1;

    function startCarousel() {
        imageDiv.style.backgroundImage = `url(${images[index++]})`;
        imageDiv.classList.remove('fade');
        void imageDiv.offsetWidth;
        imageDiv.classList.add('fade');
        if (index > images.length - 1) {
            index = 0;
        }
    }

    return { carousel };

}