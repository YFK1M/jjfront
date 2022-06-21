import React, { memo } from 'react'
import { observer } from 'mobx-react-lite'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import s from './Navbar.module.sass'
import UserStore from '../../../mobx/stores/user.store'
import { Link } from 'react-router-dom'

const UserAndCartPanel = observer(() => {
  
    const handlerExit = () => UserStore.logout()
  
    return (
        <div style={{display: 'flex'}} className={s.navbar__user}>
            <Link to={'/cart'} className={s.navbar__cart}><ShoppingCartOutlinedIcon/></Link>
            <button className={`${s.navbar__button} ${s.navbar__exit}`} onClick={handlerExit}>Выход</button>
        </div>
    )
})

export default memo(UserAndCartPanel)