import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../routes/navigation.const';
import style from './ProductCard.module.css';
const ProductCard = ({ brand, model, price, imgUrl, id }) => {
  return (
    <div className={style.card}>
      <Link to={`${NAVIGATION.PRODUCTS}/${id}`}>
        <div className={style.card__header}>
          <img src={imgUrl} className={style.card__image} />
        </div>
        <div className={style.card__body}>
          <span className={style.card__tag}>{brand}</span>
          <span className={style.card__title}>{model}</span>
          <span className={style.card__price}>Price: {price}€</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
