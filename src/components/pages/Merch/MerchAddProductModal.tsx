import React, { FC, ReactNode, memo, useState, useCallback, FormEvent } from 'react'
import ProductStore from '../../../mobx/stores/product.store'
import { observer } from 'mobx-react-lite'
import { IProduct } from '../../../intarfaces/product/IProduct'
import { toJS } from 'mobx'
import s from './Merch.module.sass'

interface MerchAddProductModal {
    handleCloseModal: () => void,
    modalAddProductId: string,
    children?: ReactNode,
}

const MerchAddProductModal: FC<MerchAddProductModal> = observer(({handleCloseModal, modalAddProductId}) => {

    const [price, setPrice] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmitFrom = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await ProductStore.setProduct(
            {
                productsType_id: modalAddProductId,
                price: price,
                title: title,
                description: description,
            })
        await ProductStore.loadProducts()
        const products: Array<IProduct> = ProductStore.getAllProducts()
        console.log(toJS(products))
        const productId = products[products.length - 1]._id
        console.log(toJS(productId))

        await ProductStore.setProductImage(
            {
                product_id: productId,
                image_url: imageUrl
            }
        )
            .then(handleCloseModal)
    },[price, title, description, imageUrl])

    return (
        <form onSubmit={handleSubmitFrom} className={s.merch__form}>
            <p>Цена</p>
            <input type='number' value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder={'Цена'}/>
            <p>Название</p>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Название'}/>
            <p>Описание</p>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Описание'}/>
            <p>Путь к картинке</p>
            <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder={'Путь к картинке'}/>
            <button>Создать</button>
        </form>
    )
})

export default memo(MerchAddProductModal)