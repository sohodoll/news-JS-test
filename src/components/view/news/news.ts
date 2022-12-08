type Item = {
    urlToImage: string;
    source: {
        name: string;
    };
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
};

class News {
    draw(data: []) {
        const news = data.length >= 10 ? data.filter((_item: Item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: Item, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const clonePhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const cloneAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const cloneItem = newsClone.querySelector('.news__item') as HTMLElement;
            const cloneTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const cloneSrc = newsClone.querySelector('.news__description-source') as HTMLElement;
            const cloneDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const cloneContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const cloneMore = newsClone.querySelector('.news__read-more a') as HTMLElement;

            if (idx % 2) cloneItem.classList.add('alt');

            clonePhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            cloneAuthor.textContent = item.author || item.source.name;
            cloneDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            cloneTitle.textContent = item.title;
            cloneSrc.textContent = item.source.name;
            cloneContent.textContent = item.description;
            cloneMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = <HTMLElement>document.querySelector('.news');
        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
