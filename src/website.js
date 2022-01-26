import home from ".";
import createNav from "./nav";
import aboutUs from "./aboutUs";

const webste = (() => {
    const content = document.getElementById('content');
    home();
    // console.log(home().nav.nav)


    const homeBtn = document.getElementById('home-button')
    const aboutUsBtn = document.getElementById('about-us-button');
    const menuBtn = document.getElementById('menu-button');
    const contactUsBtn = document.getElementById('contact-us-button');

    homeBtn.onclick = () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
       home();
    }
    aboutUsBtn.onclick = () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        aboutUs();

    }
    console.log(content.lastChild)
    console.log(content.hasChildNodes());
    menuBtn.onclick = () => {
        alert('chushki');
    }
    contactUsBtn.onclick = () => {
        alert('chushki');
    }

})();