import home from ".";
import createHeader from "./header";
import createNav from "./nav";
import aboutUs from "./aboutUs";

const webste = (() => {
    const content = document.getElementById('content');
    const mainLogoDiv = document.getElementById('main-logo-div');
    const mainContentDiv = document.getElementById('main-content-div');
    const header = createHeader(mainContentDiv);
    const nav = createNav(header);
    home();
    let childNodesArray = Array.from(mainContentDiv.childNodes);
    console.log(header);
    console.log(childNodesArray);

    const homeBtn = document.getElementById('home-button')
    const aboutUsBtn = document.getElementById('about-us-button');
    const menuBtn = document.getElementById('menu-button');
    const contactUsBtn = document.getElementById('contact-us-button');

    homeBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });
        // Remove previous image
        content.removeChild(mainLogoDiv);
        content.insertBefore(mainLogoDiv, content.firstChild);
        home();
    }
    aboutUsBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        // Remove previous image
        // mainLogoDiv.removeChild(mainLogoDiv.lastChild);
        content.removeChild(mainLogoDiv);
        content.insertBefore(mainLogoDiv, content.firstChild);
        aboutUs();

    }
    menuBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        // Remove previous image
        mainLogoDiv.removeChild(mainLogoDiv.lastChild);

    }
    contactUsBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        alert('chushki');
    }

})();