import React, { FC, ReactNode, useEffect, useState } from 'react'
import s from './Ticket.module.sass'
import Command from './Command/Command'
import CartStore, { ICartConst } from '../../../../mobx/stores/cart.store'
import UserStore from '../../../../mobx/stores/user.store'
import { ITicket } from '../../../../intarfaces/ticket/ITicket'
import { ICart } from '../../../../intarfaces/cart/ICart'

const Ticket: FC<ITicket> = ({_id, match, price }) => {

    const user = UserStore.user
    const userLoad = UserStore.userLoad
    const cartLoad = CartStore.getCartLoad()
    const firstCommand = match.first_command_id
    const secondCommand = match.second_command_id
    const date = match.date.split(',')
    const [cart, setCart] = useState<ICartConst | null>()

    useEffect(() => {
        cartLoad && setCart(CartStore.getCart())
    }, [cartLoad])

    const buyTicket = () => {
        const ticketAmount = !!cart && cart.cart.find((cartItem: ICart) => cartItem.product._id === _id)?.amount
        console.log(cart)
        userLoad && user && CartStore.addTicketToCart({
            user_id: user._id,
            cartTicket: {
                type: 'TICKET',
                amount: ticketAmount || 1,
                entity_id: _id
            }
        })
    }

    return (
        <div className={s.ticket}>
            <Command image={firstCommand.image} title={firstCommand.title}/>
            <Command image={secondCommand.image} title={secondCommand.title}/>
            <div className={s.ticket__btn} onClick={buyTicket}>{price} руб.</div>
            <div className={s.ticket__date}>
                <div className={s.ticket__day}>{date[0]}</div>
                <div className={s.ticket__time}>{date[1]}</div>
            </div>
        </div>
    )
}

export default Ticket