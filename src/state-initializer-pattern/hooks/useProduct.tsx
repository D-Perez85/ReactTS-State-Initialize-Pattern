import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
  }

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [counter, setCounter] = useState(0);
        const increaseBy = (value: number) => {
            setCounter((prev) => Math.max(prev + value, 0));
            const newValue = Math.max(counter + value, 0);
            setCounter(newValue);
            onChange && onChange({ count: newValue, product });
        };
        return {
            counter,
            increaseBy,
        };
    };