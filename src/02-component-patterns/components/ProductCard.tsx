import { useState } from 'react';

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export const ProductCard = () => {

    const [counter, setCounter] = useState<number>(0);

    const increaseBy = (value: number): void => {
        setCounter(prev => Math.max(prev + value, 0));
    }

    return (
        <div className={styles.productCard}>
            <h1>Product Card</h1>
            <img
                alt='Coffee Mug'
                className={styles.productImg}
                src='./coffee-mug.png'
            />
            {/* <img
                alt='Coffee Mug'
                className={styles.productImg}
                src={noImage}
            /> */}

            <span className={styles.productDescription}>Coffee Mug</span>

            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
            </div>
        </div>
    )
}
