import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/index';
import { UsersPage } from './pages/UsersPage/index';
import './App.scss';
import { Layout } from './components/Layout/index';

function App() {
  React.useCallback(() => onClick, [])

  const onClick = () => {
    console.log('clicked')
  }

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage onClick={onClick} />} />
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
