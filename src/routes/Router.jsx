import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeviceDetail from '../pages/device-detail/DeviceDetail';
import Devices from '../pages/devices/Devices';
import Error404 from '../pages/error404/Error404';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Devices />}></Route>
        <Route path="devices/:id" element={<DeviceDetail />}></Route>
        <Route path="devices" element={<Devices />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
