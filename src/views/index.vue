<template>
    <div>
        <p class="test">{{data}}</p>
        <Test/>
    </div>
</template>

<script>
import './index.less';
import {getData} from '@/api';
import Test from './test';

export default {
  name: 'index',
  components: {Test},
  data() {
    return {
      data: '',
    };
  },
  created() {
    getData().then((res) => {
      this.data = res.data;
    });
  },
};

</script>

<style scoped lang="less">
    .test {
        background: #3a8ee6;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
    }
</style>
