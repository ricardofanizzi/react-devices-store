import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link to={'/'}>
        <h1 className={styles.headerTitle}>Device Store</h1>
      </Link>
      <div className={styles.shoppingCart}>
        <FontAwesomeIcon
          className={styles.shoppingCartIcon}
          icon={faShoppingCart}
        />
        <span>0</span>
      </div>
    </header>
  );
};

export default Header;
