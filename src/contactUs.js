import createDiv from "./div";
import './style.css';
import Logo from './img/logo.png';
import createArticle from "./article";
import createFooter from "./footer";
import createForm from "./form";

export default function contactUs(content, mainContentDiv) {
    // Create form:
    const form = createForm();
    // Create article container
    const article = createArticle(mainContentDiv); //Wrapper for text inside main-content-div
    // Footer that has github link
    const footer = createFooter(mainContentDiv);
    // Creating the iframe to import from Google
    const iFrm = createIFrame();
    // Creating a container for the iframe. This is needed so we can remove it when switching tabs.
    const iFrameDiv = createDiv();
    iFrameDiv.id = 'iFrame';
    iFrameDiv.appendChild(iFrm);

    article.article.appendChild(form);
    content.insertBefore(iFrameDiv, content.firstChild);

    article.headline.innerText = 'Contact Us';
    article.section.innerText = 'If you would like to reach us with any feedback or any complaints, please use either the form below, our social media channels or give us a call'

    return { contactUs }

}

function createIFrame() {
    const iFrm = document.createElement('iframe');
    iFrm.setAttribute("src", "https://www.google.com/maps/embed/v1/search?q=I%20Don't%20Know%20Saloon%2C%20U.S.%20141%2C%20Middle%20Inlet%2C%20WI%2C%20USA&key=AIzaSyBfN0u00w29owauiATlua00usxoCDj2VPU");
    iFrm.style = "border:0";
    iFrm.loading = "lazy";
    return iFrm;
}
