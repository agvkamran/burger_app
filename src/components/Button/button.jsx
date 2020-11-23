import React from 'react';
import styles from './button.module.css';

const Button = () => {

    const [active, changeStyle] = React.useState(false);

    const onButtonClick = (active) => {
        changeStyle(active);
    }

    return (
        <button className={`${styles.button} ${active === true ? styles.active : ''}`} onClick={() => onButtonClick(!active)}>Корзина</button>
    )
}

export default Button;

