import { useState } from 'react';

import { useProductsArgs } from '../interfaces';

export const useProduct = ({ onChange, product }: useProductsArgs) => {

    const [counter, setCounter] = useState<number>(0);

    const increaseBy = (value: number): void => {
        const newValue = Math.max(counter + value, 0);

        setCounter(newValue);

        onChange && onChange({ count: counter, product });
    }

    return {
        counter,
        increaseBy,
    }

};