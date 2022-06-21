import React, { FC, memo, ReactNode } from 'react'
import s from './Cart.module.sass'
import { IProductImages } from '../../../intarfaces/product/IProductImages'
import CartStore from '../../../mobx/stores/cart.store'
import { observer } from 'mobx-react-lite'
import UserStore from '../../../mobx/stores/user.store'

interface ProductRow {
  id: string
  key: string,
  amount: number,
  title: string,
  price: number,
  image: Array<IProductImages>,
  children?: ReactNode,
}

const ProductRow: FC<ProductRow> = observer(({id, amount,image , title, price}) => {
    const user = UserStore.user

    const handleUpdAmountProduct = (amountValue: number) => {
        user && CartStore.changeProductAmountInCart({
            user_id: user._id,
            cartProduct: {
                type: 'PRODUCT',
                entity_id: id,
                amount: amount
            }
        }, amountValue)
    }

    return (
        <div className={s.cart__row}>
            <div className={s.cart__row_left}>
                <div className={s.cart__row_image}>
                    <img src={image[0].image_url} alt={title} />
                </div>
                <p>{title}</p>
            </div>
            <div className={s.cart__row_right}>
                <p className={s.cart__row_item}>{price} Руб.</p>
                <div className={s.cart__row_item}>
                    <button onClick={() => handleUpdAmountProduct(1)} className={s.cart__row_btn}>+</button>
                    <div className={s.cart__row_amount}>
                        {amount}
                    </div>
                    <button onClick={() => handleUpdAmountProduct(-1)} className={s.cart__row_btn}>-</button>
                </div>
                <p className={s.cart__row_item}>{price * amount} Руб.</p>
            </div>
        </div>
    )

})

export default memo(ProductRow)