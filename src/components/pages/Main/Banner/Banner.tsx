import React, { FC, ReactNode } from 'react'
import s from './Banner.module.sass'
import { Link } from 'react-router-dom'

interface IBanner {
  bannerNumber: string,
  bannerBackgroundUrl: string,
  h2: string,
  p?: string,
  link: string,
  small: boolean,
  children?: ReactNode,
}

const Banner: FC<IBanner> = ({ bannerNumber, bannerBackgroundUrl, h2, p, link, small }) => {

    const titleSize = small ? s.banner__title_small : s.banner__title_big

    return (
        <Link to={link} className={s[bannerNumber]}>
            <div className={s.banner} style={{ backgroundImage: `url(${bannerBackgroundUrl})` }}>
                <div className={`${s.banner__title} ${titleSize}`}>
                    <h2 className={s.banner__h2}>{h2}</h2>
                    {p !== '' ? <p className={s.banner__p}>{p}</p> : <></>}
                </div>
            </div>
        </Link>
    )
}

export default Banner