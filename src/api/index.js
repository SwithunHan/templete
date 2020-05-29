import axios from '@/libs/api.request';

const api = {
  getData: '/',
};
export const getData = () => {
  return axios.request({
    url: api.getData,
    method: 'get',
  });
};
