import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/error404/Error404';
import ProductDetail from '../pages/product-detail/ProductDetail';
import Products from '../pages/products/Products';
import { NAVIGATION } from './navigation.const';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route
        path={`${NAVIGATION.PRODUCTS}/:productId`}
        element={<ProductDetail />}
      />
      <Route path={`${NAVIGATION.PRODUCTS}`} element={<Products />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
