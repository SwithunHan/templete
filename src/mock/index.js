import Mock from 'mockjs';
import {getData} from './data/data';
Mock.setup({
  timeout: 1000,
});

Mock.mock(/\/getData/, getData);
export default Mock;
