import React, { FC, ReactNode, memo, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import s from './Cart.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import { useNavigate } from 'react-router-dom'
import CartStore, { ICartConst } from '../../../mobx/stores/cart.store'
import ProductRow from './ProductRow'
import TicketRow from './TicketRow'

interface ICartFC {
    children?: ReactNode,
}

const Cart: FC<ICartFC> = observer(() => {
    const user = UserStore.user
    const userLoad = UserStore.userLoad
    const navigate = useNavigate()
    const cartLoad = CartStore.getCartLoad()
    const [cart, setCart] = useState<ICartConst | null>()
    
    useEffect(() => {
        userLoad && !user && navigate('/')
    }, [user])

    useEffect(() => {
        cartLoad && setCart(CartStore.getCart())
        console.log(cartLoad)
    }, [cartLoad])

    const productRow = () => !!cart && cart.cart.map(item => {
        switch (item.type) {
        case 'PRODUCT': return <ProductRow key={item.product._id} product={item.product} amount={item.amount}/>
        case 'TICKET': return <TicketRow key={item.product._id} product={item.product} amount={item.amount}/>
        }
    })

    const clearCart = () => {
        !!user && CartStore.removeCustomerCart(user._id)
        window.alert('Заявка успешно отправлена на подтверждение адмсинистатору, после подверждения администратор отправит вам информацию об оплате на почту')
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
                            {productRow()}
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