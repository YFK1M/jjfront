import React, { FC, ReactNode, memo, useState, useCallback, FormEvent } from 'react'
import ProductStore from '../../../mobx/stores/product.store'
import { observer } from 'mobx-react-lite'
import { IProduct } from '../../../intarfaces/product/IProduct'
import s from './Merch.module.sass'

interface MerchAddProductModal {
    handleCloseModal: () => void,
    modalEditProduct: IProduct,
    children?: ReactNode,
}

const MerchAddProductModal: FC<MerchAddProductModal> = observer(({handleCloseModal, modalEditProduct}) => {

    const [price, setPrice] = useState(modalEditProduct.price)
    const [title, setTitle] = useState(modalEditProduct.title)
    const [description, setDescription] = useState(modalEditProduct.description)
    const [imageUrl, setImageUrl] = useState(modalEditProduct.productImage[0].image_url)

    const handleSubmitFrom = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await ProductStore.updateProduct(
            modalEditProduct._id,
            {
                productsType_id: modalEditProduct.productsType_id,
                price: price,
                title: title,
                description: description,
            })
        await ProductStore.updateProductImage(
            modalEditProduct.productImage[0]._id,
            {
                product_id: modalEditProduct._id,
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
            <button>Реадктировать</button>
        </form>
    )
})

export default memo(MerchAddProductModal)