import React, { FC, useEffect } from 'react'
import s from './App.module.sass'
import Navbar from './components/app/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/pages/Main/Main'
import Footer from './components/app/Footer/Footer'
import { observer } from 'mobx-react-lite'
import Tickets from './components/pages/Tickets/Tickets'
import Club from './components/pages/Club/Club'
import Merch from './components/pages/Merch/Merch'
import News from './components/pages/News/News'
import Stadium from './components/pages/Stadium/Stadium'
import Cart from './components/pages/Cart/Cart'
import UserStore from './mobx/stores/user.store'
import CartStore from './mobx/stores/cart.store'

const App: FC = observer(() => {

    const user = UserStore.user
    
    useEffect(() => {
        !!user && CartStore.getCustomerCart(user._id)
    }, [user])

    return (
        <BrowserRouter>
            <main className={s.main}>
                <Navbar />
                <div className={s.main__wrapper}>
                    <Routes>
                        <Route path={'/'} element={<Main />} />
                        <Route path={'/matches'} element={<Tickets />} />
                        <Route path={'/club'} element={<Club />} />
                        <Route path={'/merch'} element={<Merch />} />
                        <Route path={'/news'} element={<News />} />
                        <Route path={'/stadium'} element={<Stadium />} />
                        <Route path={'/cart'} element={<Cart />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </BrowserRouter>
    )
})

export default App
