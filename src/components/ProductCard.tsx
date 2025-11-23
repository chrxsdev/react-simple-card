import React, { createContext, CSSProperties } from 'react';

import styles from '../styles/styles.module.css';

import { useProducts } from '../hooks/useProducts';

import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => React.JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

// Define Context
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter: count,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProducts({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter: count, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count,
          isMaxCountReached,
          product,
          maxCount,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
