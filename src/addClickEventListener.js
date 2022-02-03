export default function addClickEvenListener(element, parent, imgURL){
    element.addEventListener('click', ()=>{
        parent.style.backgroundImage = `url(${imgURL})`;
    })
}