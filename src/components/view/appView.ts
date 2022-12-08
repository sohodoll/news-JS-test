import News from './news/news';
import Sources from './sources/sources';

type DataNews = {
    articles: [];
    sources: [];
};

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews | undefined) {
        const values: [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataNews | undefined) {
        const values: [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
