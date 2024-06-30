import React from 'react';
import { Footer, LandingComponent } from './components/index'
import { Header } from '../../components/index'

const HomePage = (props) => {
  return (
    <div onClick={props.onClick}>
      <Header />
      <LandingComponent />
      <Footer />
    </div>
  );
}

export default React.memo(HomePage);
