import React from 'react';
import { render } from '@testing-library/react';

import { ProductCard, ProductImage } from '../../src/components';

import { product2 } from '../data/products';

describe('ProductImage', () => {
  it('Should show the component with the custom image', () => {
    const { container } = render(
      <ProductImage img="https://example.com/custom-image.jpg" />
    );
    expect(container).toMatchSnapshot();
  });

  it('Should show the component with product image', () => {
    const { container } = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(container).toMatchSnapshot();
  });
});
