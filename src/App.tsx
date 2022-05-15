import React, { FC } from 'react';
import s from './App.module.sass';
import Navbar from './components/app/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main/Main';
import Footer from './components/app/Footer/Footer';
import Tickets from './components/pages/Tickets/Tickets';
import Club from './components/pages/Club/Club';

const App: FC = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Navbar />
        <div className={s.main__wrapper}>
          <Routes>
            <Route path={`/`} element={<Main />} />
            <Route path={`/matches`} element={<Tickets />} />
            <Route path={`/club`} element={<Club />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
