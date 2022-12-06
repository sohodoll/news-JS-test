import './news.css'

interface NewsInterface {
  draw: (a: any) => void
}

class News implements NewsInterface {
  draw (data: any) {
    const news = data.length >= 10 ? data.filter((_item: any, idx: any) => idx < 10) : data

    const fragment = document.createDocumentFragment()
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement

    news.forEach((item: any, idx: any) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement
      const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement
      const metaElement = newsClone.querySelector('.news__meta-photo') as HTMLDivElement
      const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLDivElement
      const metaDate = newsClone.querySelector('.news__meta-date') as HTMLDivElement
      const newsDescription = newsClone.querySelector('.news__description-title') as HTMLDivElement
      const newsSource = newsClone.querySelector('.news__description-source') as HTMLDivElement
      const newsContent = newsClone.querySelector('.news__description-content') as HTMLDivElement
      const newsMore = newsClone.querySelector('.news__read-more a') as HTMLDivElement

      if (idx % 2) newsItem.classList.add('alt')

      metaElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`
      metaAuthor.textContent = item.author || item.source.name
      metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-')

      newsDescription.textContent = item.title
      newsSource.textContent = item.source.name
      newsContent.textContent = item.description
      newsMore.setAttribute('href', item.url)

      fragment.append(newsClone)
    })
    const newsElement = document.querySelector('.news') as HTMLDivElement
    newsElement.innerHTML = ''
    newsElement.appendChild(fragment)
  }
}

export default News
