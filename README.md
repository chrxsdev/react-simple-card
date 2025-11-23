# CJ Card

**Version:** 0.1.0

A flexible and customizable React product card component library built with TypeScript. CJ Card provides a composable component pattern that allows you to build product cards with counter functionality, custom styling, and controlled/uncontrolled modes.

## Features

- 🎨 Fully customizable with CSS classes and inline styles
- 🔢 Built-in counter with increment/decrement functionality
- 🎯 Controlled and uncontrolled component modes
- 📦 TypeScript support with full type definitions
- 🧩 Composable component architecture
- ⚡ Lightweight and performant
- 🎭 Supports custom images and titles
- 🔒 Optional maximum count limits

## Installation

```bash
npm install cj-card
```

or

```bash
yarn add cj-card
```

## Basic Usage

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'cj-card';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: 'https://example.com/image.jpg'
};

function App() {
  return (
    <ProductCard product={product} initialValues={{ count: 4 }}>
      {() => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
}
```

## Advanced Usage

### Controlled Component

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'cj-card';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleChange = ({ count, product }) => {
    console.log('Product:', product);
    setCartCount(count);
  };

  return (
    <ProductCard 
      product={product} 
      value={cartCount}
      onChange={handleChange}
    >
      {({ count, maxCount, isMaxCountReached, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
          <p>Count: {count}</p>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </ProductCard>
  );
}
```

### With Custom Styling

```tsx
<ProductCard 
  product={product}
  className="custom-card"
  style={{ border: '2px solid #333' }}
>
  {() => (
    <>
      <ProductImage 
        className="custom-img" 
        style={{ borderRadius: '10px' }} 
      />
      <ProductTitle 
        className="custom-title"
        title="Custom Title Override"
      />
      <ProductButtons 
        className="custom-buttons"
        style={{ marginTop: '10px' }} 
      />
    </>
  )}
</ProductCard>
```

### With Maximum Count

```tsx
<ProductCard 
  product={product}
  initialValues={{ count: 0, maxCount: 10 }}
>
  {({ count, maxCount, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
      {isMaxCountReached && <p>Maximum quantity reached!</p>}
      <p>{count} / {maxCount}</p>
    </>
  )}
</ProductCard>
```

## API Reference

### ProductCard

The main container component that provides context to all child components.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `product` | `Product` | Yes | - | Product object containing id, title, and optional img |
| `children` | `(args: ProductCardHandlers) => JSX.Element` | Yes | - | Render function receiving counter handlers and state |
| `className` | `string` | No | - | Additional CSS class for the card container |
| `style` | `CSSProperties` | No | - | Inline styles for the card container |
| `onChange` | `(args: OnChangeArgs) => void` | No | - | Callback fired when counter changes |
| `value` | `number` | No | `0` | Controlled mode: external counter value |
| `initialValues` | `InitialValues` | No | - | Initial counter value and optional max count |

#### ProductCardHandlers (children function arguments)

| Property | Type | Description |
|----------|------|-------------|
| `count` | `number` | Current counter value |
| `isMaxCountReached` | `boolean` | Whether the maximum count has been reached |
| `product` | `Product` | The product object passed to ProductCard |
| `maxCount` | `number \| undefined` | Maximum count limit if set |
| `increaseBy` | `(value: number) => void` | Function to increase/decrease counter |
| `reset` | `() => void` | Function to reset counter to initial value |

### ProductImage

Displays the product image with fallback support.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `img` | `string` | No | `product.img` | Custom image URL (overrides product.img) |
| `className` | `string` | No | - | Additional CSS class for the image |
| `style` | `CSSProperties` | No | - | Inline styles for the image |

### ProductTitle

Displays the product title.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | `product.title` | Custom title text (overrides product.title) |
| `className` | `string` | No | - | Additional CSS class for the title |
| `style` | `CSSProperties` | No | - | Inline styles for the title |

### ProductButtons

Renders increment and decrement buttons with counter display.

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | - | Additional CSS class for the buttons container |
| `style` | `CSSProperties` | No | - | Inline styles for the buttons container |

## Type Definitions

### Product

```typescript
interface Product {
  id: string;
  title: string;
  img?: string;
}
```

### InitialValues

```typescript
interface InitialValues {
  count?: number;      // Initial counter value
  maxCount?: number;   // Maximum allowed count
}
```

### OnChangeArgs

```typescript
interface OnChangeArgs {
  product: Product;
  count: number;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- React 16+

## Support

- **Issues:** [https://github.com/chrxsdev/cj-card/issues](https://github.com/chrxsdev/cj-card/issues)
- **License:** MIT

For bug reports and feature requests, please create an issue on the GitHub repository.

## Keywords

`products` · `card` · `ui` · `react` · `typescript` · `component-library`
