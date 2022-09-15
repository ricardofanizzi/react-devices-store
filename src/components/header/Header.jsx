import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className={styles.header__container}>
      <Link to={'/'}>
        <h1 className={styles.header__title}>Device Store</h1>
      </Link>
      <div className={styles.shopping__cart}>
        <FontAwesomeIcon
          className={styles.shopping__cart_icon}
          icon={faShoppingCart}
        />
        <span className={styles.shopping__cart_number}>2</span>
      </div>
    </header>
  );
};

export default Header;
