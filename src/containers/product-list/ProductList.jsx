import React from 'react';
import styles from './ProductList.module.css';

const ProductList = ({ productList }) => {
  return (
    <section className={styles.container}>
      {productList?.length > 0 &&
        productList.map((product) => <p key={product.id}>{product.brand}</p>)}
    </section>
  );
};

export default ProductList;
