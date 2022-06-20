import React, { FC, ReactNode, memo, useState, useCallback, FormEvent } from 'react'
import ProductStore from '../../../mobx/stores/product.store'
import { observer } from 'mobx-react-lite'

interface IMerchCategoryModal {
    handleCloseModal: () => void,
    children?: ReactNode,
}

const MerchCategoryModal: FC<IMerchCategoryModal> = observer(({handleCloseModal}) => {

    const [inputTitleValue, setInputTitleValue] = useState('')

    const handleSubmitFrom = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await ProductStore.setProductType({
            title: inputTitleValue
        }).then(handleCloseModal)
    },[inputTitleValue])

    return (
        <form onSubmit={handleSubmitFrom}>
            <input type='text' value={inputTitleValue} onChange={(e) => setInputTitleValue(e.target.value)}/>
            <input type='submit' value={'Добавить'}/>
        </form>
    )
})

export default memo(MerchCategoryModal)