import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import UsersPage from './entities/UsersPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
    </Routes>
  );
};

export default App;
