import React from 'react';
import Searcher from '../../components/searcher/Searcher';
import DeviceList from '../../containers/device-list/DeviceList';
import styles from './Devices.module.css';

const Devices = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h3>LIST VIEW</h3>
        <Searcher />
      </section>
      <DeviceList />
    </div>
  );
};

export default Devices;
