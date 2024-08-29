import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Spinner } from './components/Spinner';
import { ErrorBoundary } from './components/ErrorBoundary'

import './App.scss';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const Users = React.lazy(() => import('./pages/Users'));
const Posts = React.lazy(() => import('./pages/Posts'));

function App() {
  React.useCallback(() => onClick, [])

  const onClick = () => {
    console.log('clicked')
  }

  return (
    <BrowserRouter>
        <ErrorBoundary>
            <Layout>
                <React.Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<HomePage onClick={onClick} />} />
                        <Route path="/users/*" element={<Users />}/>
                        <Route path="/posts/*" element={<Posts />}/>
                    </Routes>
                </React.Suspense>
            </Layout>
        </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
