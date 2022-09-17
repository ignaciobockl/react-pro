import { ReactElement } from 'react';

interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductButtonsProps {
    className?: string;
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]; // tambien puede ser () => JSX.Element
    className?: string;
    product: Product;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductImageProps {
    className?: string;
    img?: string;
}

export interface ProductTitleProps {
    className?: string;
    title?: string;
}
