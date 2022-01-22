export default function createHeader(param){

   
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    param.appendChild(header)
    param.appendChild(nav);

    return { header, nav };

}

