import { FC, ReactChild } from 'react'
import s from './Command.module.sass'

interface ICommand {
  image: string,
  title: string,
  children?: ReactChild,
}

const Command :FC<ICommand> = ({image, title}) => {
    return (
        <div className={s.command}>
            <img src={image} alt={title} />
            <p className={s.command__title}>{title}</p>
        </div>
    )
}

export default Command