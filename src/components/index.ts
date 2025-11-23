import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductPropsComponent } from '../interfaces/interfaces';



export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

/**
 * Export Compound Component Pattern with <Parent.Children />
 */

// Assing new Properties and export properties
export const ProductCard: ProductPropsComponent = Object.assign(ProductCardComponent, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

// Exporting Default
export default ProductCard;
