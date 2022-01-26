import GitHubIcon from './img/github.png';

export default function createFooter(param) {
    const footer = document.createElement('footer');
    const linkElement = document.createElement('a');
    const gitHubIcon = new Image();
    const span = document.createElement('span');
    span.innerText = 'Created By DragostinH ';
    gitHubIcon.src = GitHubIcon;
    linkElement.href = 'https://github.com/DragostinH';
    
    linkElement.appendChild(gitHubIcon);

    footer.appendChild(span);
    footer.classList.add('page-footer');
    footer.appendChild(linkElement);
    param.appendChild(footer);

    return footer ;
}