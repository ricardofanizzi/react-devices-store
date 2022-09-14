import React from 'react';
import styles from './Searcher.module.css';

const Searcher = () => {
  const handleChange = () => {};

  return (
    <input
      type="text"
      className={styles.searcher}
      onChange={handleChange}
      value=""
    />
  );
};

export default Searcher;
