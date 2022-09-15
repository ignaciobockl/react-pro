import { ReactElement } from 'react';

interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]; // tambien puede ser () => JSX.Element
    product: Product;
};