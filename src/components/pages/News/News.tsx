import React, { FC, ReactNode, memo } from 'react'
import { observer } from 'mobx-react-lite'
import s from './News.module.sass'
import NewsStore from '../../../mobx/stores/news.store'

interface INews {
    children?: ReactNode,
}

const News: FC<INews> = observer(() => {

    const newsArray = NewsStore.getAllNews()

    const newsLayout = () => newsArray.map(
        news => news.newsImage[0] && (
            <div key={news._id} className={s.news__item}>
                <div className={s.news__image}>
                    <img src={news.newsImage[0].image_url} alt={news.title} />
                </div>
                <div className={s.news__info}>
                    <div className={s.news__text}>
                        <h2>{news.title}</h2>
                        <p>{news.description}</p>
                    </div>
                    <button>Развернуть</button>
                </div>
            </div>
        )
    )

    return (
        <div className={s.news}>
            {newsLayout()}
        </div>
    )
})

export default memo(News)