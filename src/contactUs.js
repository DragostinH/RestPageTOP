import createDiv from "./div";

export default function contactUs(param) {
    
    const iFrm = document.createElement('iframe');
    iFrm.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyBfN0u00w29owauiATlua00usxoCDj2VPU&q=Space+Needle,Seattle+WA");
    iFrm.style = "border:0";
    iFrm.loading = "lazy";
    const iFrameDiv = createDiv();
    iFrameDiv.id = 'iframe';
    iFrameDiv.appendChild(iFrm);

    param.insertBefore(iFrameDiv, param.firstChild);


    return {contactUs }



}