import ProductCard from '../components';
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';

import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div>
        <ProductCard key={product.id} product={product} initialValues={{ count: 4 }}>
          {(_) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
