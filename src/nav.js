import Logo from './img/logo.png';
export default function createNav(param) {
    const logoIcon = new Image();
    logoIcon.id = 'nav-logo';
    logoIcon.src = Logo;
    const nav = document.createElement('nav');



    // Creating the Nav buttons and assigning a class to each one
    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-button';

    const aboutUsBtn = document.createElement('button');
    aboutUsBtn.id = 'about-us-button';

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-button';

    const contactUsBtn = document.createElement('button');
    contactUsBtn.id = 'contact-us-button';

    // Adding text in button boxes
    homeBtn.innerText = 'HOME';
    aboutUsBtn.innerText = 'ABOUT US';
    menuBtn.innerText = 'MENU';
    contactUsBtn.innerText = 'CONTACT US';

    nav.appendChild(logoIcon);
    nav.appendChild(homeBtn);
    nav.appendChild(aboutUsBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactUsBtn);


    param.appendChild(nav);

    return { nav, homeBtn, aboutUsBtn, menuBtn, contactUsBtn };

}