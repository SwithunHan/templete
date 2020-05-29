import axios from 'axios';

const baseUrl = 'api';

const service = axios.create({
  baseURL: baseUrl, // node环境的不同，对应不同的baseURL
  timeout: 500000, // 请求的超时时间
});

service.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});
service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response) {
        return Promise.reject(error.response.data); // 返回接口返回的错误信息
      }
    },
);

export default service;
