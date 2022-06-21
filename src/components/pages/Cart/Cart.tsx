import React, { FC, ReactNode, memo, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import s from './Cart.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import { useNavigate } from 'react-router-dom'
import CartStore, { ICart } from '../../../mobx/stores/cart.store'
import ProductRow from './ProductRow'

interface ICartFC {
    children?: ReactNode,
}

const Cart: FC<ICartFC> = observer(() => {
    const user = UserStore.user
    const userLoad = UserStore.userLoad
    const navigate = useNavigate()
    const cartLoad = CartStore.getCartLoad()
    const [cart, setCart] = useState<ICart | null>()
    
    useEffect(() => {
        userLoad && !user && navigate('/')
    }, [user])

    useEffect(() => {
        cartLoad && setCart(CartStore.getCart())
    }, [cartLoad])

    const zxc = () => !!cart && cart.cart.map(item => <ProductRow key={item._id} id={item._id} amount={item.amount} image={item.productImage} title={item.title} price={item.price}/>)

    const clearCart = () => {
        !!user && CartStore.removeCustomerCart(user._id)
        navigate('/')
    }
    
    return (
        <div className={s.cart}>
            <h1 className={s.cart__header}>Оформление заказа</h1>
            <div className={s.cart__content}>
                { cart ?
                    <>
                        <div className={s.cart__table}>
                            <div className={s.cart__row}>
                                <h2>Товары</h2>
                                <div className={s.cart__row_right}>
                                    <p className={s.cart__row_head}>Цена</p>
                                    <p className={s.cart__row_head}>Количетсво</p>
                                    <p className={s.cart__row_head}>Сумма</p>
                                </div>
                            </div>
                            {zxc()}
                        </div>
                        <button className={s.cart__buy} onClick={clearCart}>Купить</button>
                    </>
                    :
                    <div className={s.cart__table}>
                        <p className={s.cart__empty}>Корзина пуста</p>
                    </div>
                }
            </div>

        </div>
    )
})

export default memo(Cart)