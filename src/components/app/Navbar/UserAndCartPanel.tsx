import React, { memo } from 'react'
import { observer } from 'mobx-react-lite'
import { Avatar } from '@mantine/core'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const UserAndCartPanel = observer(() => {
    return (
        <div style={{display: 'flex'}}>
            <ShoppingCartOutlinedIcon />
            <Avatar radius="xl" />
        </div>
    )
})

export default memo(UserAndCartPanel)