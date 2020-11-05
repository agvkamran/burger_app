import React from 'react';
import styles from './button.module.css';

const Button = (props) => {

    const onButtonClick = () => {
        console.log(props.click);
    }

    return (
        <button className={styles.button} onClick={onButtonClick}>Button</button>
    )
}

export default Button;