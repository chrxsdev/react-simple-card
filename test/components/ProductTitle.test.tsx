import React from 'react';
import { render } from '@testing-library/react';

import { ProductTitle, ProductCard } from '../../src/components';

import { product } from '../data/products';

describe('ProductTitle', () => {
  it('Should show the component with the custom title', () => {
    const { container } = render(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(container).toMatchSnapshot();
  });

  it('Should show the component with the product name', () => {
    const { container } = render(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );

    expect(container).toMatchSnapshot();
  });
});
