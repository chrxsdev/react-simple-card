import React, { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  // If img, show the image received, if not product img
  const imgToShow = img ? img : product.img ? product.img : noImage;

  return <img src={imgToShow} className={`${styles.productImg} ${className}`} alt='coffee-mug' style={style} />;
};
