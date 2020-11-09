import React from 'react';
import styles from './Categories.module.css';

const Categories = ({items}) => {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div>
            <ul>
                <li className={`${styles.item} ${activeItem === null ? styles.active : ''}`}
                onClick={() => {onSelectItem(null)}}>Все</li>
                {items && items.map((item, index) => 
                    <li key={`${item}_${index}`} 
                    className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
                    onClick={() => onSelectItem(index)}>{item}</li>)}
            </ul>
            
        </div>
    )
}


export default Categories;