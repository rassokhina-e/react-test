import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';

const UsersPage = React.lazy(() => import('./components/UsersPage'));

function Users() {
  return (
    <React.Suspense fallback={<Spinner />}>
        <Routes>
            {<Route path="page1" element={<div>User page 1</div>} />}
            {<Route path=":userId" element={<div>Personal user page</div>} />}
            <Route path="/" element={<UsersPage />} />
        </Routes>
    </React.Suspense>
  );
}

export default React.memo(Users);
