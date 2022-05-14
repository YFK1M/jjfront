import React, { FC } from 'react';
import s from './App.module.sass';
import Navbar from './components/app/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main/Main';

const App: FC = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Navbar />
        <div className={s.main__wrapper}>
          <Routes>
            <Route path={`/`} element={<Main />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
