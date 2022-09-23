import { useEffect, useState } from 'react';

import { useProductsArgs } from '../interfaces';

export const useProduct = ({ onChange, product, value = 0 }: useProductsArgs) => {

    const [counter, setCounter] = useState<number>(value);

    const increaseBy = (value: number): void => {
        const newValue = Math.max(counter + value, 0);

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => setCounter(value), [value]);

    return {
        counter,
        increaseBy,
    }

};