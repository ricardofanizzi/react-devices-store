import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../states/products/productSlice';
import styles from './Searcher.module.css';

const Searcher = () => {
  const dispatch = useDispatch();
  const MIN_SEARCH_LENGTH = 3;
  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    if (text.length >= MIN_SEARCH_LENGTH) {
      dispatch(filterProducts(e.target.value));
    } else if (text.length === 0) {
      dispatch(filterProducts(''));
    }
  };

  return (
    <div className={styles.searcher__container}>
      <input
        onChange={handleChange}
        className={styles.searcher__input}
        type="text"
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
