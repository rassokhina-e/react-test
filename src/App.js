import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Spinner } from './components/Spinner';

import './App.scss';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const Users = React.lazy(() => import('./pages/Users'));

function App() {
  React.useCallback(() => onClick, [])

  const onClick = () => {
    console.log('clicked')
  }

  return (
    <BrowserRouter>
        <Layout>
            <React.Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<HomePage onClick={onClick} />} />
                    <Route path="/users/*" element={<Users />}/>
                </Routes>
            </React.Suspense>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
