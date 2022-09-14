import React from 'react';
import Header from './components/header/Header';
import Router from './routes/Router';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.appContainer}>
        <Router />
      </div>
    </div>
  );
};

export default App;
