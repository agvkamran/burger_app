import React from 'react';
import styles from './button.module.css';

const Button = () => {

    const onButtonClick = () => {
       
    }

    return (
        <button className={styles.button} onClick={onButtonClick}>Корзина</button>
    )
}

export default Button;