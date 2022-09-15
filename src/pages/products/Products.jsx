import React from 'react';
import Searcher from '../../components/searcher/Searcher';
import ProductList from '../../containers/product-list/ProductList';
import { useProducts } from '../../hooks/useProducts';
import styles from './Products.module.css';

const Products = () => {
  const { productList } = useProducts();
  return (
    <div className={styles.product__container}>
      <section className={styles.product__header}>
        <h3 className={styles.product__title}></h3>
        <Searcher />
      </section>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
