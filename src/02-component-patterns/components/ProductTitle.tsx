import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import { ProductTitleProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title, className }: ProductTitleProps) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={`${styles.productDescription} ${className}`}>
            {title ? title : product.title}
        </span>
    )
};