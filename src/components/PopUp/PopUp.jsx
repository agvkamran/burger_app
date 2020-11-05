import React from 'react';
import styles from './PopUp.module.css'
const PopUp = () => {

    const [show, toggle] = React.useState(false);
    
    const toggleVisiblePopUp = () => {
        toggle(!show);
    }

    return (
        <div>
            <div onClick={toggleVisiblePopUp}>
                <b>Сортировать по: </b>
                <span className={styles.list}>популярности</span>
            </div>
            {show && (
            <div>
                <p className={styles.list}>цене</p>
                <p className={styles.list}>видимости</p>
            </div>
            )
            }
        </div>
    )
}

export default PopUp;