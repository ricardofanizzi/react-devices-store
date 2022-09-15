import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header__container}>
      <nav className={styles.nav__container}>
        <Link to={'/'}>
          <h1 className={styles.nav__title}>Device Store</h1>
        </Link>
        <div className={styles.shopping__cart}>
          <FontAwesomeIcon
            className={styles.shopping__cart_icon}
            icon={faShoppingCart}
          />
          <span className={styles.shopping__cart_number}>2</span>
        </div>
      </nav>
      {location.pathname.length !== 1 && <Breadcrumb location={location} />}
    </header>
  );
};

export default Header;
