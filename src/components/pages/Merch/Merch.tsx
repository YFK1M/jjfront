import React, { FC, memo } from 'react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../mobx/stores/product.store'
import { IProduct } from '../../../intarfaces/product/IProduct'
import s from './Merch.module.sass'

const Merch: FC = observer(() => {

    const sortingProductsArr = ProductStore.getSortingProducts()

    const productsTypeArr = (product: IProduct) => (
        <div className={s.category__item} key={product._id}>
            <img src={product.productImage[0]?.image_url} alt={product.title} />
            <button>{product.price} рублей</button>
        </div>
    )

    const sortingProducts = sortingProductsArr.map(
        productType => !!productType.products.length && (
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
        </>
    )
})

export default memo(Merch)