import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';

const PostsPage = React.lazy(() => import('./components/PostsPage'));
const PostPage = React.lazy(() => import('./components/PostPage'));

function Posts() {
    return (
        <React.Suspense fallback={<Spinner />}>
            <Routes>
                <Route path=":postId" element={<PostPage />} />
                <Route path="/" element={<PostsPage />} />
            </Routes>
        </React.Suspense>
    );
}

export default React.memo(Posts);
