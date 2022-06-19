import React, { FC, useEffect, useRef } from 'react'
import s from './App.module.sass'
import Navbar from './components/app/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/pages/Main/Main'
import Footer from './components/app/Footer/Footer'
import { observer } from 'mobx-react-lite'
import UserStore from './mobx/stores/user.store'
import Tickets from './components/pages/Tickets/Tickets'
import Club from './components/pages/Club/Club'
import Merch from './components/pages/Merch/Merch'

const App: FC = observer(() => {

    const {current: refreshUser} = useRef(async () => {
        await UserStore.refresh()
    })

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
                    </Routes>
                </div>
            </main>
            <Footer />
        </BrowserRouter>
    )
})

export default App
