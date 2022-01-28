import home from ".";
import aboutUs from "./aboutUs";
import createHeader from "./header";
import createNav from "./nav";
import contactUs from "./contactUs";

const webste = (() => {
    const content = document.getElementById('content');
    const mainContentDiv = document.getElementById('main-content-div'); // Right side content on each page
    const header = createHeader(mainContentDiv); //Creating the header to add to the main content Div
    const nav = createNav(header); // ADding the nav bar in the header container
    home(content); //Loading the main page with each load of the website.

    // All 4 nav buttons for the page.
    const homeBtn = document.getElementById('home-button')
    const aboutUsBtn = document.getElementById('about-us-button');
    const menuBtn = document.getElementById('menu-button');
    const contactUsBtn = document.getElementById('contact-us-button');


    // Listeners for each button to change the page.

    homeBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        content.removeChild(content.firstElementChild);

        home(content);
    }
    aboutUsBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        // Remove previous image
        content.removeChild(content.firstElementChild);
        aboutUs(content);

    }
    menuBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        // Remove previous image
        content.removeChild(content.firstElementChild);
        menu(content);
    }
    contactUsBtn.onclick = () => {
        // Remove all children under the content div apart from the header
        Array.from(mainContentDiv.childNodes).filter(child => {
            if (child !== header) {
                mainContentDiv.removeChild(child);
            }
        });

        // Remove previous image
        content.removeChild(content.firstElementChild);
        contactUs(content);
    }

})();