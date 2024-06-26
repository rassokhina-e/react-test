import React from 'react';
import styles from './styles.module.less'

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src="/birdlogo.png" alt="Logo" />
            <div className={styles.logoText}>Birds of Georgia</div>
          </div>
          <div className={styles.social}>
            <div className={styles.socialLink}>Instagram</div>
            <div className={styles.socialLink}>Telegram</div>
            <div className={styles.socialLink}>Facebook</div>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.infoLink}>FAQs</div>
            <div className={styles.infoLink}>Help & Support</div>
            <div className={styles.infoLink}>Contact us</div>
          </div>
          <div>
            <div className={styles.infoLink}>Terms & Conditions</div>
            <div className={styles.infoLink}>Privacy Policy</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default React.memo(Footer)
