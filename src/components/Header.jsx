import React from 'react';
import styles from './Header.module.css';
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/button';

const Header = () => {
    return ( 
        <div className={styles.main}>
            <Logo />
            <Button click='buttonClick'/>
        </div>
    )
}

export default Header;