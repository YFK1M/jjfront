import React, { FC, memo, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../mobx/stores/product.store'
import { IProduct } from '../../../intarfaces/product/IProduct'
import s from './Merch.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import MerchAdminModal from './MerchAdminModal'
import { merchType } from '../../../assets/constants/merchType.constants'
import trashIcon from '../../../assets/images/all/trash.svg'
import editIcon from '../../../assets/images/all/edit.svg'

const Merch: FC = observer(() => {

    const isAdmin = UserStore.isAdmin
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [modalType, setModalType] = useState('')
    const [modalEditMerchId, setModalEditMerchId] = useState('')
    const [modalAddProductId, setModalAddProductId] = useState('')

    const { current: handleOpenModal } = useRef(() => {
        setIsModalOpened(true)
    })
    const { current: handleCloseModal } = useRef(() => {
        setIsModalOpened(false)
    })

    const { current: handleOpenMerchAdminModal } = useRef((merchType: string) => {
        setModalType(merchType)
        setIsModalOpened(true)
    })

    const { current: handleOpenEditMerchAdminModal } = useRef((merchType: string, id: string) => {
        setModalType(merchType)
        setModalEditMerchId(id)
        setIsModalOpened(true)
    })

    const { current: handleOpenAddProductAdminModal } = useRef((merchType: string, type_id: string) => {
        setModalType(merchType)
        setModalAddProductId(type_id)
        setIsModalOpened(true)
    })

    const sortingProductsArr = ProductStore.getSortingProducts()

    const productsTypeArr = (product: IProduct) => (
        <div className={s.category__item} key={product._id}>
            <img src={product.productImage[0]?.image_url} alt={product.title} />
            <button>{product.price} рублей</button>
        </div>
    )

    const deleteProductCategory = (id: string) => {
        ProductStore.deleteProductType(id)
    }

    const sortingProducts = sortingProductsArr.map(
        productType => (isAdmin || !!productType.products.length) && (
            <div className={s.category} key={productType._id}>
                <div className={s.category__title}>
                    <h2>{productType.title}</h2>
                    <div className={s.category__icons}>
                        <img src={trashIcon} alt={'Иконка удаления'} onClick={() => deleteProductCategory(productType._id)} />
                        <img src={editIcon} alt={'Иконка изменения'}
                            onClick={() => handleOpenEditMerchAdminModal(merchType.EDIT_CATEGORY, productType._id)} />
                    </div>
                </div>
                <div className={s.category__content}>
                    {
                        isAdmin && (
                            <div className={s.category__item} onClick={() => handleOpenAddProductAdminModal(merchType.ADD_PRODUCT, productType._id)}>
                                <p className={s.category__plus}>+</p>
                            </div>
                        )
                    }
                    {
                        productType.products.map(
                            product => productsTypeArr(product),
                        )
                    }
                </div>
            </div>
        ),
    )

    return (
        <>
            {sortingProducts}
            {
                isAdmin && (
                    <>
                        <div className={s.category} onClick={() => handleOpenMerchAdminModal(merchType.CATEGORY)}>
                            <p className={`${s.category__plus} ${s.category__title}`}>+</p>
                        </div>
                        <MerchAdminModal modalType={modalType} isModalOpened={isModalOpened} handleCloseModal={handleCloseModal}
                            handleOpenModal={handleOpenModal} modalEditMerchId={modalEditMerchId}
                            modalAddProductId={modalAddProductId} />
                    </>
                )
            }
        </>
    )
})

export default memo(Merch)