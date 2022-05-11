import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps, InitialValues } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void; 
  initialValues: InitialValues; 
 }

 export const ProductCard = ({ children, product, className, style, onChange, initialValues}: Props) => {
  const{counter,increaseBy} = useProduct({onChange, product, initialValues});
        return (
          <Provider value={{ product, counter,increaseBy }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
              {children}
            </div>
          </Provider>
        );
    };