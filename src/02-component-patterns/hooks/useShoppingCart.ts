import { useState } from 'react';

import { OnChangeArgs, ProductInCart } from '../interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: OnChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
            // UNA FORMA DE HACERLO
            // sumar o crear un producto
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            // borrar o restar un producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };


            // OTRA FORMA DE HACERLO
            // if (count === 0) {
            // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            // return rest;
            // }

            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count }
            // }
        });
    }

    return {
        onProductCountChange,
        shoppingCart,
    }
}
