import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DeviceDetail from '../pages/device-detail/DeviceDetail';
import Devices from '../pages/devices/Devices';
import Error404 from '../pages/error404/Error404';
import { NAVIGATION } from './navigation.const';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Devices />} />
      <Route
        path={`${NAVIGATION.DEVICES}/:deviceId`}
        element={<DeviceDetail />}
      />
      <Route path={`${NAVIGATION.DEVICES}`} element={<Devices />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
