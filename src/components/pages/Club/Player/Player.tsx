import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import s from './Player.module.sass'

interface IPlayerArr {
  image: IImage,
  player: IPlayer
}

interface IImage {
  _id: string,
  image_url: string,
  player_id: string
}

interface IPlayer {
  _id: string,
  age: number,
  goal_count: number,
  match_count: number,
  name: string,
  surname: string,
  position: string,
}

const Player: FC<IPlayerArr> = observer(({image, player}) => {

    return (
        <div className={s.player} style={{backgroundImage: `url(${image.image_url})`}}>
            <div className={s.player__title}>
                <p>{player.name} {player.surname}.</p>
                <p>{player.position}.</p>
            </div>
        </div>
    )
})

export default Player