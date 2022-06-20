import React, { FC, ReactNode, memo, useState, useCallback, FormEvent } from 'react'
import ProductStore from '../../../mobx/stores/product.store'
import { observer } from 'mobx-react-lite'

interface MerchEditCategoryModal {
    handleCloseModal: () => void,
    modalEditMerchId: string,
    children?: ReactNode,
}

const MerchEditCategoryModal: FC<MerchEditCategoryModal> = observer(({handleCloseModal, modalEditMerchId}) => {

    const [inputTitleValue, setInputTitleValue] = useState('')

    const handleSubmitFrom = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await ProductStore.updateProductType(modalEditMerchId, {title: inputTitleValue }).then(handleCloseModal)
    },[inputTitleValue])

    return (
        <form onSubmit={handleSubmitFrom}>
            <input type='text' value={inputTitleValue} onChange={(e) => setInputTitleValue(e.target.value)}/>
            <input type='submit' value={'Реадктировать'}/>
        </form>
    )
})

export default memo(MerchEditCategoryModal)