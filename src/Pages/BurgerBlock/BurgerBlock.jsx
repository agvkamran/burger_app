import React from 'react';
import styles from './BurgerBlock.module.css';

const BurgerBlock = ({name, imageUrl, price, sizes, types}) => {

    const [activeSize, setActiveSize] = React.useState(null);

    const onSelectSize = (index) => {
        setActiveSize(index);
    }


    const [activeType, setActiveType] = React.useState(null);

    const onSelectType = (index) => {
        setActiveType(index);
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.content__top}>
                <img className={styles.burger__img} src={imageUrl}/>
            </div>
            <div className={styles.content__title}>
                <h3>{name}</h3>
            </div>
            <div className={styles.all__content__list}>
                <div className={styles.content__list__top}>
                    {
                        types.map((type, index) => <li key={`${index}_${type}`}
                        onClick={() => onSelectType(index)}
                        className={`${styles.types} ${activeType === index ? styles.active : ''}`}>
                            {type}</li>)
                    }
                </div>
                <div className={styles.content__list__bottom}>
                    <ul>
                        {sizes.map((size, index) => <li key={`${size}_${index}`}
                        onClick={() => onSelectSize(index)}
                        className={`${styles.items} ${activeSize === index ? styles.active : '' }`}>
                            {size}</li>)}
                    </ul>
                </div>
                 <div className={styles.item__price}>
                     <h2>{price + ' ₼'}</h2>
                </div>
            </div>
        </div>
    )
}

export default BurgerBlock;