import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
// import { UsersPage } from './pages/UsersPage';
import { Layout } from './components/Layout';
import { Spinner } from './components/Spinner';

import './App.scss';

// const HomePage = React.lazy(() => import('./pages/HomePage'));
const UsersPage = React.lazy(() => import('./pages/UsersPage/index'));

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
                <Route
                    path="/users"
                    element={(
                        <React.Suspense fallback={<Spinner />}>
                            <UsersPage />
                        </React.Suspense>
                    )}
                />
                {/* <Route path="/users" element={<UsersPage />} /> */}
                {/* <Route path={["/users", "/users/:userId"]} element={<UsersPage />} /> */}
                {/* <Route path="/users/:userId" element={<div>personal user page</div>} /> */}
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
