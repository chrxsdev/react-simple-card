import { Props as ProductPropsCard } from '../components/ProductCard';
import { Props as ProductPropsTitle } from '../components/ProductTitle';
import { Props as ProductPropsButton } from '../components/ProductButtons';
import { Props } from '../components/ProductImage';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
}

// Exporting interface for the components Parent.Children
export interface ProductPropsComponent {
  ({ product, children, className, style }: ProductPropsCard): React.JSX.Element;
  Title: (Props: ProductPropsTitle) => React.JSX.Element
  Image: (Props: Props) => React.JSX.Element
  Buttons: (Props: ProductPropsButton) => React.JSX.Element
}

// OnChange Methods Props
export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}