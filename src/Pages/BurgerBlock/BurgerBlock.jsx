import React from 'react';
import styles from './BurgerBlock.module.css';
import PropTypes from 'prop-types';

const BurgerBlock = ({name, imageUrl, price, sizes}) => {
    const possibleSizes = ["S", "M", "L"];

    // sizes = ["S", "L"]
    // prices = [4, 6]

    const [activeSize, setActiveSize] = React.useState([
        possibleSizes.findIndex((el, idx, arr) => sizes.includes(el)), 
        possibleSizes.find((el, idx, arr) => sizes.includes(el))
    ]);
    // let activeBurgerSizeName = possibleSizes[activeSize];

    const onSelectSize = (index) => {
        setActiveSize([index, possibleSizes[index]]);
    }

    // console.log(sizes.findIndex((el, idx, arr) => el === activeBurgerSizeName));
    return (
        <div className={styles.container}>
            <div className={styles.content_top}>
                <img className={styles.burger_img} src={imageUrl}/>
            </div>
            <div className={styles.content_title}>
                <h3>{name}</h3>
            </div>
            <div className={styles.all_content_list}>
                <div className={styles.content_list_size}>
                    <ul>
                        {possibleSizes.map((size, index) => <li key={`${size}_${index}`}
                        onClick={() => onSelectSize(index)}
                        className={`${styles.items} ${activeSize[0] === index ? styles.active : ''} ${sizes.includes(size) ? '' : styles.disabled_size}`}>
                            {size}</li>)}
                    </ul>
                </div>
                <div className={styles.content_footer}>
                    <div className={styles.item_price}>
                        <h2>{price[sizes.findIndex((el, idx, arr) => el === activeSize[1])] + ' ₼'}</h2>
                    </div>
                    <div className={styles.button_add}>
                        <button>+ Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

BurgerBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BurgerBlock;