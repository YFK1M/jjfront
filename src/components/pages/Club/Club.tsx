import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import s from './Club.module.sass'
import PlayerStore from '../../../mobx/stores/player.store'
import Player from './Player/Player'

const Club: FC = observer(() => {

    const team = PlayerStore.getAllPlayers().map(playerArr => {
        return <Player key={playerArr.player._id} image={playerArr.images[0]} player={playerArr.player}/>
    })

    return (
        <div className={s.club}>
            <div className={s.club__header}>
                <h1 className={s.club__h1}>СОСТАВ КОМАНДЫ</h1>
            </div>
            <div className={s.club__content}>
                {team}
            </div>
        </div>
    )
})

export default Club