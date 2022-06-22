import React, { FC, memo, ReactNode } from 'react'
import s from './Cart.module.sass'
import CartStore from '../../../mobx/stores/cart.store'
import { observer } from 'mobx-react-lite'
import UserStore from '../../../mobx/stores/user.store'

interface TicketRow {
  product: any,
  amount: number,
  children?: ReactNode,
}

const TicketRow: FC<TicketRow> = observer(({product, amount}) => {
    const user = UserStore.user

    const handleUpdAmountProduct = (amountValue: number) => {
        user && CartStore.changeProductAmountInCart({
            user_id: user._id,
            cartProduct: {
                type: 'PRODUCT',
                entity_id: product._id,
                amount: amount
            }
        }, amountValue)
    }

    return (
        <div className={s.cart__row}>
            <div className={`${s.cart__row_left} ${s.cart__row_ticket}`}>
                <p>Билет на матч</p>
                <p>{product.match_id.first_command_id.title} против {product.match_id.second_command_id.title}</p>
                <p>{product.match_id.date}</p>
            </div>
            <div className={s.cart__row_right}>
                <p className={s.cart__row_item}>{product.price} Руб.</p>
                <div className={s.cart__row_item}>
                    <button onClick={() => handleUpdAmountProduct(1)} className={s.cart__row_btn}>+</button>
                    <div className={s.cart__row_amount}>
                        {amount}
                    </div>
                    <button onClick={() => handleUpdAmountProduct(-1)} className={s.cart__row_btn}>-</button>
                </div>
                <p className={s.cart__row_item}>{product.price * amount} Руб.</p>
            </div>
        </div>
    )

})

export default memo(TicketRow)