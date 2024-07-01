import React from 'react';
import styles from './styles.module.scss'

const LandingComponent = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.mainContent}>
          <div>
            <h1>Save birds, save the environment to save ourselves</h1>
            <div className={styles.mainBtnWrap}>
              <button className={styles.mainBtn}>Discover the projects</button>
             </div>
          </div>
          <div className={styles.geoMap}>
            <img className={styles.geoImg} src="/georgia.png" alt="Georgia" />
            <img className={styles.geoPin} src="/georgia-pin.png" alt="Flag" />
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(LandingComponent)
