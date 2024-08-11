import React from 'react';
// import { LandingComponent } from './components/LandingComponent/index'
const LandingComponent = React.lazy(() => import('./components/LandingComponent/index'));

const HomePage = (props) => {
  return (
    <div onClick={props.onClick}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LandingComponent />
      </React.Suspense>
    </div>
  );
}

export default React.memo(HomePage);
