import React from 'react';
import styles from './styles.module.less'

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <div>
            <img className={styles.navLogo} src="/birdlogo.png" alt="Logo" />
          </div>
          <div className={styles.navLink}>About us</div>
          <div className={styles.navLink}>Members</div>
          <div className={styles.navLink}>Projects</div>
        </div>
        <div className={styles.navLogin}>
          <button className={styles.navBtn}>Log in</button>
        </div>
      </nav>
    </>
  );
}

export default React.memo(Header)
