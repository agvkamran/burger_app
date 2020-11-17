import React from 'react';
import styles from './PopUp.module.css'


const PopUp = ({ items }) => {
    const [show, toggle] = React.useState(false);
    const toggleVisiblePopUp = () => {
        toggle(!show);
    };

    const handleClickOutside = (e) => {
        if (e.target.id !== "popUp") {
           toggle(false);
       }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
    }, [])
    
    // const sortRef = React.useRef();

    const [activeItem, setActiveItem] = React.useState(0);
    
    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className={styles.sort_container}> 
            <div onClick={toggleVisiblePopUp} className={styles.sort}>
                <b className={styles.sort_by}>Сортировать по: </b>
                <span className={`${styles.list} ${styles.active}`} id={"popUp"}>{items[activeItem]}</span>
            </div>
            {show && (
            <div className={styles.pop_up_list}>
                <ul>
                    {
                    items.map((item, index) => <li className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
                        key={`${item}_${index}`} onClick={() => onSelectItem(index)}>{item}</li>)  
                    }
                </ul>
            </div>
            )
            }
        </div>
    )
}

export default PopUp;
