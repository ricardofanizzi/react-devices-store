import axios from 'axios';

export const useHttp = () => {
  const get = (url) => {
    return axios.get(url);
  };

  return { get };
};
