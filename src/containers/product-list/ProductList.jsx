import React from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ productList }) => {
  return (
    <section className={styles.container}>
      <ul className={styles.product__list}>
        {productList?.length > 0 &&
          productList.map((product) => (
            <li className={styles.product__card_container} key={product.id}>
              <ProductCard
                brand={product.brand}
                model={product.model}
                price={product.price}
                imgUrl={product.imgUrl}
                id={product.id}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProductList;
