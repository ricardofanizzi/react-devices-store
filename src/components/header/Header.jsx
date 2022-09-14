import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <a>
        <h1 className={styles.headerTitle}>Device Store</h1>
      </a>
      <nav></nav>
    </header>
  );
};

export default Header;
