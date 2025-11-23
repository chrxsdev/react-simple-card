import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState<number>((initialValues && initialValues.count) || value);
  const isMounted = useRef<boolean>(false);

  // Determine if the component is controlled by external props or internal hook
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    /**
     * Avoid to update the counter when we reach the maxCount or minCount
     */
    if (value > 0 && initialValues && initialValues.maxCount && counter === initialValues.maxCount) return;
    if (value < 0 && counter === 0) return;

    // If is controlled, we only call onChange
    if (isControlled && onChange) {
      return onChange({ count: value, product });
    }

    // Get new counter value
    let newValue = Math.max(counter + value, 0);

    if (initialValues && initialValues.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    // Change value when increaseBy
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter((initialValues && initialValues.count) || 0);
  };

  useEffect(() => {
    isControlled.current = true;
  }, []);

  useEffect(() => {
    // Skip the first render
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValues && initialValues.maxCount,
    isMaxCountReached: !!(initialValues && initialValues.maxCount) && initialValues.maxCount === counter,
  };
};
