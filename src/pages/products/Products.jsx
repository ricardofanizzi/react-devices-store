import React from 'react';
import Searcher from '../../components/searcher/Searcher';
import ProductList from '../../containers/product-list/ProductList';
import { useProducts } from '../../hooks/useProducts';
import styles from './Products.module.css';

const Products = () => {
  const { productList } = useProducts();
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h3>LIST VIEW</h3>
        <Searcher />
      </section>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
