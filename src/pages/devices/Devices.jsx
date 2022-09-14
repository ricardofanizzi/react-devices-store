import React from 'react';
import { useDevices } from '../..//hooks/useDevices';
import Searcher from '../../components/searcher/Searcher';
import DeviceList from '../../containers/device-list/DeviceList';
import styles from './Devices.module.css';

const Devices = () => {
  const { deviceList } = useDevices();
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h3>LIST VIEW</h3>
        <Searcher />
      </section>
      <DeviceList deviceList={deviceList} />
    </div>
  );
};

export default Devices;
