import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps, InitialValues } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardHandlers {
  count: number,
  maxCount?: number;
  product: Product, 
  increaseBy : (value : number) => void, 
  reset : () => void,
}

export interface Props {
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void; 
  initialValues: InitialValues; 
 }

 export const ProductCard = ({ children, product, className, style, onChange, initialValues}: Props) => {
  const{counter,increaseBy, reset, maxCount} = useProduct({onChange, product, initialValues});
        return (
          <Provider value={{ product, counter,increaseBy }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
            {children({
                count: counter,
                maxCount: initialValues?.maxCount, 
                product,
                increaseBy,
                reset
                 })
                }
            </div>
          </Provider>
        );
    };