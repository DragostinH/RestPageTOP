import getImagesArray from "./imagesArray";
import createDiv from "./div";

export default function carousel(param) {
    const imageDiv = createDiv();
    imageDiv.classList.add('carousel');
    imageDiv.classList.add('fade');
    param.insertBefore(imageDiv, content.firstChild);
    const images = getImagesArray();

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