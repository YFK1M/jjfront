import React, { FC, ReactNode, memo } from 'react'
import { observer } from 'mobx-react-lite'
import { Modal } from '@mantine/core'
import { merchType } from '../../../assets/constants/merchType.constants'
import MerchCategoryModal from './MerchCategoryModal'
import MerchEditCategoryModal from './MerchEditCategoryModal'
import MerchAddProductModal from './MerchAddProductModal'
import { IProduct } from '../../../intarfaces/product/IProduct'
import MerchEditProductModal from './MerchEditProductModal'

interface IMerchAdminModal {
    isModalOpened: boolean,
    modalType: string,
    handleCloseModal: () => void,
    handleOpenModal: () => void,
    modalEditMerchId: string,
    modalAddProductId: string,
    modalEditProduct: IProduct,
    children?: ReactNode,
}

const MerchAdminModal: FC<IMerchAdminModal> = observer(({isModalOpened, modalType, handleCloseModal, handleOpenModal, modalEditMerchId, modalAddProductId, modalEditProduct}) => {

    const getModalTitle = () => {
        switch (modalType) {
        case merchType.CATEGORY: return 'Новая категория'
        case merchType.EDIT_CATEGORY: return 'Редактор категории'
        case merchType.ADD_PRODUCT: return 'Новый товар'
        case merchType.EDIT_PRODUCT: return 'Редактор товара'
        }
    }

    const getModalLayout = () => {
        switch (modalType) {
        case merchType.CATEGORY: return <MerchCategoryModal handleCloseModal={handleCloseModal}/>
        case merchType.EDIT_CATEGORY: return <MerchEditCategoryModal handleCloseModal={handleCloseModal} modalEditMerchId={modalEditMerchId}/>
        case merchType.ADD_PRODUCT: return <MerchAddProductModal handleCloseModal={handleCloseModal} modalAddProductId={modalAddProductId}/>
        case merchType.EDIT_PRODUCT: return <MerchEditProductModal handleCloseModal={handleCloseModal} modalEditProduct={modalEditProduct}/>
        }
    }

    return (
        <Modal
            opened={isModalOpened}
            onClose={handleCloseModal}
            title={getModalTitle()}
        >
            <div>
                {getModalLayout()}
            </div>
        </Modal>
    )
})

export default memo(MerchAdminModal)