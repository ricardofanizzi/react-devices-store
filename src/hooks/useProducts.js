import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../services/products';
import { initProductList } from '../states/products/productSlice';

export const useProducts = () => {
  const productList = useSelector(({ products }) => products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productList.length === 0) {
      getProductList().then((response) =>
        dispatch(initProductList(response.data))
      );
    }
  }, []);

  return { productList };
};
