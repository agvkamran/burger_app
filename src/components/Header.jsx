import React from 'react';
import styles from './Header.module.css';
import Logo from '../components/Logo/Logo';

const Header = () => {
    return ( 
        <div className={styles.main}>
            <Logo />
        </div>
    )
}

export default Header;