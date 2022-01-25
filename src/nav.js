export default function createNav(param) {
    const nav = document.createElement('nav');

    // Creating the Nav buttons and assigning a class to each one
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-button');

    const aboutUsBtn = document.createElement('button');
    aboutUsBtn.classList.add('about-us-button');

    const ourServicesBtn = document.createElement('button');
    ourServicesBtn.classList.add('our-services-button');

    const contactUsBtn = document.createElement('button');
    contactUsBtn.classList.add('contact-us-button');

    // Adding text in button boxes
    homeBtn.innerText = 'HOME';
    aboutUsBtn.innerText = 'ABOUT US';
    ourServicesBtn.innerText = 'OUR SERVICES';
    contactUsBtn.innerText = 'CONTACT US';

    nav.appendChild(homeBtn);
    nav.appendChild(aboutUsBtn);
    nav.appendChild(ourServicesBtn);
    nav.appendChild(contactUsBtn);

    param.appendChild(nav);

    return  nav ;

}