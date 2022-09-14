import { useState } from 'react';

export const useShoppingCart = () => {
  const [shoppingCart] = useState([]);

  return { shoppingCart };
};
