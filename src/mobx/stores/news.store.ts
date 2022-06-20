import { makeAutoObservable } from 'mobx'
import NewsService from '../services/news.service'
import { INews } from '../../intarfaces/news/INews'

class NewsStore {

    newsService = new NewsService()
    news: Array<INews> = []

    constructor() {
        makeAutoObservable(this)
        this.loadNews()
    }

    getAllNews = () => {
        return this.news
    }

    loadNews = async () => {
        this.news = await this.newsService.getNews()
    }
}


export default new NewsStore()