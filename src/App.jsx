import React from 'react';
import Header from './components/header/Header';
import Router from './routes/Router';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.app__container}>
        <Router />
      </div>
    </div>
  );
};

export default App;
