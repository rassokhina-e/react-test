import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles.module.scss'

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
            <NavLink to="/posts" className={styles.navLink}>Posts</NavLink>
        </div>
        <div className={styles.navLogin}>
            <button className={styles.navBtn}>Log in</button>
        </div>
    </nav>
)

export default React.memo(Header)
