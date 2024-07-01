import React from 'react';
import { LandingComponent } from './components/LandingComponent/index'

const HomePage = (props) => {
  return (
    <div onClick={props.onClick}>
      <LandingComponent />
    </div>
  );
}

export default React.memo(HomePage);
