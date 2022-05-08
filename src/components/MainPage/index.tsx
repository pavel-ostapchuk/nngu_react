import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './MainPage.module.scss';
import ItemsList from '../ItemsList';

const MainPage = () => {
  return (
    <div className={style.main_page}>
      <Header />
      <ItemsList />
      <Footer />
    </div>
  );
};

export default MainPage;
