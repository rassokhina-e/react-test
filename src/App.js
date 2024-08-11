import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';
import './App.scss';
import { Layout } from './components/Layout/index';
import { Spinner } from './components/Spinner';

// const HomePage = React.lazy(() => import('./pages/HomePage'));
// const UsersPage = React.lazy(() => import('./pages/UsersPage/index'));

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
                    {/* <Route path="/" component={HomePage} /> */}
                    <Route path="/users" element={<UsersPage />} />
                    {/* <Route path="/users" component={UsersPage} /> */}
                    {/* <Route path="/users/:userId" element={<div>personal user page</div>} /> */}
                </Routes>
            </React.Suspense>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
