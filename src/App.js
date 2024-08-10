import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage/index';
import './App.scss';
import { Layout } from './components/Layout/index';
import { Spinner } from './components/Spinner';

const HomePage = React.lazy(() => import('./pages/HomePage'));

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
                    {/* <Route path="/" element={<HomePage onClick={onClick} />} /> */}
                    <Route path="/" component={HomePage} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/users/:userId" element={<div>personal user page</div>} />
                </Routes>
            </React.Suspense>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
