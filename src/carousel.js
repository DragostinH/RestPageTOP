import getImagesArray from "./imagesArray";

export default function carousel() {
    const images = getImagesArray();
    const imageDiv = document.getElementById('main-logo-div');

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