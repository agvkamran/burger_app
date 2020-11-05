import React from 'react';
import styles from './logo.module.css';
import logo from '../../assets/images/burger.png'

const Logo = () => {
    return (
        <img className={styles.logo} src={logo}></img>
    )
}

export default Logo;