import React from 'react';
import styles from './logo.module.css';
import logo from '../../assets/images/burger.png'
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={logo}></img>
            </Link>
            <div>
                <span className={styles.logo_text}>Самый вкусный бургер на свете!</span>
                <span className={styles.logo_text}><b>Burger React</b></span>
            </div>
        </div>
    )
}

export default Logo;