import React, { FC, useEffect, useRef } from 'react';
import s from './App.module.sass';
import Navbar from './components/app/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main/Main';
import Footer from './components/app/Footer/Footer';
import { observer } from 'mobx-react-lite';
import UserStore from './mobx/stores/user.store';
import Tickets from './components/pages/Tickets/Tickets';

const App: FC = observer(() => {

  const {current: refreshUser} = useRef(async () => {
    await UserStore.refresh()
  })

  useEffect( () => {
    refreshUser()
  }, [])

  return (
    <BrowserRouter>
      <main className={s.main}>
        <Navbar />
        <div className={s.main__wrapper}>
          <Routes>
            <Route path={`/`} element={<Main />} />
            <Route path={`/matches`} element={<Tickets />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
})

export default App;
