import React, { FC, ReactNode, memo } from 'react'
import { observer } from 'mobx-react-lite'
import s from './Stadium.module.sass'
import { stadiumConstant } from '../../../assets/constants/stadium.constant'
import { IStadium } from '../../../intarfaces/stadium/IStadium'

interface IStadiumFC {
    children?: ReactNode,
}

const Stadium: FC<IStadiumFC> = observer(() => {

    const stadiumArray: Array<IStadium> = stadiumConstant

    const stadiumLayout = stadiumArray.map(
        block => (
            <div key={block._id} className={block._id % 2 ? s.stadium__item : `${ s.stadium__item} ${s.stadium__item_revert}`}>
                <div className={s.stadium__image}>
                    <img src={block.image_url} alt={`Фотография стадиона №${block._id}`} />
                </div>
                <div className={s.stadium__empty}/>
                <div className={s.stadium__info}>
                    <p>{block.description}</p>
                </div>
            </div>
        )
    )

    return (
        <div className={s.stadium}>
            {stadiumLayout}
        </div>
    )
})

export default memo(Stadium)