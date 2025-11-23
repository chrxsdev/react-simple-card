import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug!',
};

const App = () => {
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 4 }}>
        {_ => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
