import { CSSProperties, ReactElement } from 'react';

export interface OnChangeArgs {
    count: number;
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]; // tambien puede ser () => JSX.Element
    className?: string;
    onChange?: (args: OnChangeArgs) => void;
    product: Product;
    style?: CSSProperties;
    value?: number;
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
    style?: CSSProperties;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface ProductTitleProps {
    className?: string;
    title?: string;
    style?: CSSProperties;
}

export interface useProductsArgs {
    onChange?: ( args: OnChangeArgs ) => void;
    product: Product;
    value?: number;
}
