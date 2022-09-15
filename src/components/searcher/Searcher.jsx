import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Searcher.module.css';

const Searcher = () => {
  const handleChange = () => {};

  return (
    <div className={styles.searcher__container}>
      <input
        onChange={handleChange}
        className={styles.searcher__input}
        type="text"
        name=""
        placeholder="Type to search"
      />
      <FontAwesomeIcon
        className={styles.searcher__icon}
        icon={faMagnifyingGlass}
      />
    </div>
  );
};

export default Searcher;
