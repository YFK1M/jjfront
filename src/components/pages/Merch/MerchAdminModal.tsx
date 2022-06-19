import React, { FC, ReactNode, memo } from 'react'
import { observer } from 'mobx-react-lite'
import { Modal } from '@mantine/core'
import { merchType } from '../../../assets/constants/merchType.constants'
import MerchCategoryModal from './MerchCategoryModal'

interface IMerchAdminModal {
    isModalOpened: boolean,
    modalType: string,
    handleCloseModal: () => void,
    handleOpenModal: () => void,
    children?: ReactNode,
}

const MerchAdminModal: FC<IMerchAdminModal> = observer(({isModalOpened, modalType, handleCloseModal, handleOpenModal}) => {

    const getModalTitle = () => {
        switch (modalType) {
        case merchType.CATEGORY: return 'Новая категория'
        case merchType.ITEM: return 'Новый товар'
        }
    }

    const getModalLayout = () => {
        switch (modalType) {
        case merchType.CATEGORY: return <MerchCategoryModal handleCloseModal={handleCloseModal}/>
        // case merchType.ITEM: return 'Новый товар'
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