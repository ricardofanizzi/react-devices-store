import { useHttp } from '../hooks/useHttp';

const URL = 'https://front-test-api.herokuapp.com';
const { get } = useHttp();

export const getDeviceList = async () => {
  return await get(`${URL}/api/product`);
};
