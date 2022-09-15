import { ReactElement } from 'react';

interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]; // tambien puede ser () => JSX.Element
    product: Product;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: () => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}
