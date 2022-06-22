import React, { FC, memo, useCallback, useRef, useState } from 'react'
import s from './Navbar.module.sass'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/all/logo.svg'
import { REG_LOG_TABS_TYPES } from '../../../assets/constants/reglog.constant'
import RegLogModal from '../RegLog/RegLogModal'
import { observer } from 'mobx-react-lite'
import UserStore from '../../../mobx/stores/user.store'
import UserAndCartPanel from './UserAndCartPanel'
import useWindowDimensions from '../../../assets/hooks/useWindowDimensions'

const Navbar: FC = observer(() => {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [modalOpenedType, setModalOpenedType] = useState(REG_LOG_TABS_TYPES.SIGN_IN)
    const { width } = useWindowDimensions()

    const {current: handleOpenModal} = useRef(() => {
        setIsModalOpened(true)
    })
    const {current: handleCloseModal} = useRef(() => {
        setIsModalOpened(false)
    })

    const handleChangeModalOpenedType = useCallback((modalType: string) => {
        setModalOpenedType(modalType)
    }, [setModalOpenedType])

    const {current: handleOpenSignIn} = useRef(() => {
        setModalOpenedType(REG_LOG_TABS_TYPES.SIGN_IN)
        setIsModalOpened(true)
    })

    const {current: handleOpenSignUp} = useRef(() => {
        setModalOpenedType(REG_LOG_TABS_TYPES.SIGN_UP)
        setIsModalOpened(true)
    })

    return (
        <div className={s.navbar}>
            {
                width <= 768 && <div className={s.navbar__burger}><div className={s.navbar__burger_item} /></div>
            }
            <Link to={'/'} className={s.navbar__logo}>
                <img className={s.navbar__logo_img} src={logo} alt="Логотип"/>
            </Link>
            <div className={s.navbar__content}>
                {
                    width > 768 && (
                        <div className={s.navbar__links}>
                            <div className={s.navbar__link}>
                                <Link className={s.navbar__link_a} to={'/news'}>новости</Link>
                            </div>
                            <div className={s.navbar__link}>
                                <Link className={s.navbar__link_a} to={'/club'}>клуб</Link>
                            </div>
                            <div className={s.navbar__link}>
                                <Link className={s.navbar__link_a} to={'/matches'}>матчи</Link>
                            </div>
                            <div className={s.navbar__link}>
                                <Link className={s.navbar__link_a} to={'/stadium'}>стадион</Link>
                            </div>
                            <div className={s.navbar__link}>
                                <Link className={s.navbar__link_a} to={'/merch'}>мерч</Link>
                            </div>
                        </div>
                    )
                }
                {UserStore.user === null ? (
                    <div className={s.navbar__buttons}>
                        <div className={`${s.navbar__button} ${s.navbar__auth}`} onClick={handleOpenSignIn}>войти</div>
                        <div className={`${s.navbar__button} ${s.navbar__reg}`} onClick={handleOpenSignUp}>регистрация</div>
                    </div>
                )
                    : <UserAndCartPanel />
                }

            </div>
            <RegLogModal isModalOpened={isModalOpened}
                modalOpenedType={modalOpenedType}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                handleChangeModalOpenedType={handleChangeModalOpenedType}/>
        </div>
    )
})

export default memo(Navbar)