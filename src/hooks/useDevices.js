import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeviceList } from '../services/devices';
import { initDeviceList } from '../states/devices/deviceSlice';

export const useDevices = () => {
  const deviceList = useSelector(({ devices }) => devices);
  const dispatch = useDispatch();

  useEffect(() => {
    if (deviceList.length === 0) {
      getDeviceList().then((response) =>
        dispatch(initDeviceList(response.data))
      );
    }
  }, []);

  return { deviceList };
};
