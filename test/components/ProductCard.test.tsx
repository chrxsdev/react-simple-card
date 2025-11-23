import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ProductCard } from '../../src/components';

import { product } from '../data/products';

describe('ProductCard', () => {
  it('Should show the child component properly', () => {
    const { container } = render(
      <ProductCard product={product}>{() => <h1>ProductCard</h1>}</ProductCard>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should increment the count when the card is clicked', () => {
    const { container } = render(
      <ProductCard product={product}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>{count}</button>
          </>
        )}
      </ProductCard>
    );

    expect(container).toMatchSnapshot();

    // Select the 3rd child (index 2) which is the button
    const button = container.firstChild?.childNodes[2] as HTMLElement;
    fireEvent.click(button);
  
    const span = container.querySelector('span');
    
    expect(span?.innerHTML).toBe('1');
  });
});
