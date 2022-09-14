import React from 'react';
import styles from './DeviceList.module.css';

const DeviceList = ({ deviceList }) => {
  //console.log(deviceList);
  return (
    <section className={styles.container}>
      {deviceList?.length > 0 &&
        deviceList.map((device) => <p key={device.id}>{device.name}</p>)}
    </section>
  );
};

export default DeviceList;
