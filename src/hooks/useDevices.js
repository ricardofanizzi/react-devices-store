import { useSelector } from 'react-redux';

export const useDevices = () => {
  const deviceList = useSelector(({ devices }) => devices);

  return { deviceList };
};
