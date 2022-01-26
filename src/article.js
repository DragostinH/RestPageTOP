export default function createArticle(param) {

    const article = document.createElement('article');
    const headline = document.createElement('h1');
    const section = document.createElement('section');
    article.appendChild(headline);
    article.appendChild(section);
    param.appendChild(article);
    return { article, headline, section };

}