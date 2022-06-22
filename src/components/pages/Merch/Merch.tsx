import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../mobx/stores/product.store'
import s from './Merch.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import MerchAdminModal from './MerchAdminModal'
import { merchType } from '../../../assets/constants/merchType.constants'
import trashIcon from '../../../assets/images/all/trash.svg'
import editIcon from '../../../assets/images/all/edit.svg'
import { IProduct } from '../../../intarfaces/product/IProduct'
import CartStore, { ICartConst } from '../../../mobx/stores/cart.store'
import { ICart } from '../../../intarfaces/cart/ICart'

const Merch: FC = observer(() => {

    const user = UserStore.user
    const cartLoad = CartStore.getCartLoad()
    const [cart, setCart] = useState<ICartConst | null>()

    useEffect(() => {
        cartLoad && setCart(CartStore.getCart())
    }, [cartLoad])
    const isAdmin = UserStore.getAdminValue()
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [modalType, setModalType] = useState('')
    const [modalEditMerchId, setModalEditMerchId] = useState('')
    const [modalAddProductId, setModalAddProductId] = useState('')
    const [modalEditProduct, setModalEditProduct] = useState<IProduct>({
        _id: '',
        productsType_id: '',
        price: 0,
        title: '',
        description: '',
        productImage: [
            {
                _id: '',
                product_id: '',
                image_url: ''
            }
        ]
    })

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

    const { current: handleOpenEditProductAdminModal } = useRef((merchType: string, product: IProduct) => {
        setModalType(merchType)
        setModalEditProduct(product)
        setIsModalOpened(true)
    })

    const { current: handleOpenAddProductAdminModal } = useRef((merchType: string, type_id: string) => {
        setModalType(merchType)
        setModalAddProductId(type_id)
        setIsModalOpened(true)
    })

    const handleAddProductToCart = (product: IProduct) => {
        const productAmount = !!cart && cart.cart.find((productAmount: ICart) => productAmount.product._id === product._id)?.amount
        !!user && CartStore.addProductToCart({
            user_id: user._id,
            cartProduct: {
                type: 'PRODUCT',
                amount: productAmount || 1,
                entity_id: product._id
            }
        })

    }

    const sortingProductsArr = ProductStore.getSortingProducts()

    const productsTypeArr = (product: IProduct) => product.productImage[0] && (
        <div className={s.category__item} key={product._id}>
            <img className={s.category__item_img} src={product.productImage[0]?.image_url} alt={product.title} />
            <button onClick={() => handleAddProductToCart(product)}>{product.price} рублей</button>
            {
                isAdmin && (
                    <div className={s.category__icons}>
                        <img src={trashIcon} alt={'Иконка удаления'} onClick={() => deleteProduct(product._id)} />
                        <img src={editIcon} alt={'Иконка изменения'}
                            onClick={() => handleOpenEditProductAdminModal(merchType.EDIT_PRODUCT, product)} />
                    </div>
                )
            }
        </div>
    )

    const deleteProductCategory = (id: string) => {
        ProductStore.deleteProductType(id)
    }

    const deleteProduct = (id: string) => {
        ProductStore.deleteProduct(id)
    }

    const sortingProducts = sortingProductsArr.map(
        productType => (isAdmin || !!productType.products.length) && (
            <div className={s.category} key={productType._id}>
                <div className={s.category__title}>
                    <h2>{productType.title}</h2>
                    {
                        isAdmin && (
                            <div className={s.category__icons}>
                                <img src={trashIcon} alt={'Иконка удаления'} onClick={() => deleteProductCategory(productType._id)} />
                                <img src={editIcon} alt={'Иконка изменения'}
                                    onClick={() => handleOpenEditMerchAdminModal(merchType.EDIT_CATEGORY, productType._id)} />
                            </div>
                        )
                    }
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
                            modalAddProductId={modalAddProductId} modalEditProduct={modalEditProduct}/>
                    </>
                )
            }
        </>
    )
})

export default memo(Merch)