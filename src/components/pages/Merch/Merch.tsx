import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../mobx/stores/product.store'
import { IProduct } from '../../../intarfaces/product/IProduct'
import s from './Merch.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import MerchAdminModal from './MerchAdminModal'
import { merchType } from '../../../assets/constants/merchType.constants'
import { toJS } from 'mobx'

const Merch: FC = observer(() => {

    const isAdmin = UserStore.isAdmin
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [modalType, setModalType] = useState('')

    const {current: handleOpenModal} = useRef(() => {
        setIsModalOpened(true)
    })
    const {current: handleCloseModal} = useRef(() => {
        setIsModalOpened(false)
    })

    const {current: handleOpenMerchAdminModal} = useRef( () => {
        setModalType(merchType.CATEGORY)
        setIsModalOpened(true)
    })

    const sortingProductsArr = ProductStore.getSortingProducts()

    const productsTypeArr = (product: IProduct) => (
        <div className={s.category__item} key={product._id}>
            <img src={product.productImage[0]?.image_url} alt={product.title} />
            <button>{product.price} рублей</button>
        </div>
    )

    const sortingProducts = sortingProductsArr.map(
        productType => (isAdmin || !!productType.products.length) && (
            <div className={s.category} key={productType._id}>
                <h2 className={s.category__title}>{productType.title}</h2>
                <div className={s.category__content}>
                    {
                        productType.products.map(
                            product => productsTypeArr(product)
                        )
                    }
                </div>
            </div>
        )
    )

    return (
        <>
            {sortingProducts}
            {
                isAdmin && (
                    <>
                        <div className={s.category} onClick={() => handleOpenMerchAdminModal()}>
                            <p className={`${s.category__plus} ${s.category__title}`}>+</p>
                        </div>
                        <MerchAdminModal modalType={modalType} isModalOpened={isModalOpened} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal}/>
                    </>
                )
            }
        </>
    )
})

export default memo(Merch)