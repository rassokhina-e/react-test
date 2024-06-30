import React from 'react';
import styles from './styles.module.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className={styles.nav}>
        <div className={styles.navLinks}>
            <Link to="/">
                <div>
                    <img className={styles.navLogo} src="/birdlogo.png" alt="Logo" />
                </div>
            </Link>
            <div className={styles.navLink}>About us</div>
            <NavLink to="/users" className={styles.navLink}>Members</NavLink>
            <div className={styles.navLink}>Projects</div>
        </div>
        <div className={styles.navLogin}>
            <button className={styles.navBtn}>Log in</button>
        </div>
    </nav>
)

export default React.memo(Header)
