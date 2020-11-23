import React from 'react';
import styles from './Header.module.css';
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/button';
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
        <div className={styles.main}>
            <Logo />
            <Link to='/cart'><Button click='buttonClick'/></Link> 
        </div>
    )
}

export default Header;