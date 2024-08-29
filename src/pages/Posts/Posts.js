import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';

const PostsPage = React.lazy(() => import('./components/PostsPage'));

function Users() {
    return (
        <React.Suspense fallback={<Spinner />}>
            <Routes>
                {<Route path=":postId" element={<div>Post page</div>} />}
                <Route path="/" element={<PostsPage />} />
            </Routes>
        </React.Suspense>
    );
}

export default React.memo(Users);
