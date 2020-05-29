import axios from '@/utils/request';

const api = {
  getData: '/getData',
};
export const getData = () => {
  return axios.request({
    url: api.getData,
    method: 'get',
  });
};
