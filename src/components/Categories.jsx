import React from 'react';
import styles from './Categories.module.css';
import PopUp from './PopUp/PopUp';

const Categories = ({items}) => {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className={styles.main}>
            <div className={styles.categories}>
                <ul>
                    <li className={`${styles.item} ${activeItem === null ? styles.active : ''}`}
                    onClick={() => {onSelectItem(null)}}>Все</li>
                    {items && items.map((item, index) => 
                        <li key={`${item}_${index}`} 
                        className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
                        onClick={() => onSelectItem(index)}>{item}</li>)}
                </ul>
            </div>
            {/* <h3>{items[activeItem]}</h3> */}
            <PopUp items={[
                {name:'популярности',type: 'popular'},
                {name: 'цене', type:'price'},
                {name: 'алфавиту', type: 'alphabet'}]}/>
        </div>
    )
}


export default Categories;