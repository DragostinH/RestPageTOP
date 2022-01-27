export default function createHeader(param) {


    const header = document.createElement('header');

    param.insertBefore(header, param.firstChild)

    return header;

}

