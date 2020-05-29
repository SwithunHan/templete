<template>
    <p class="test">{{data}}</p>
</template>

<script>
import './index.less';
import {getData} from '@/api';

export default {
  name: 'index',
  data() {
    return {
      data: '',
    };
  },
  created() {
    getData().then((res) => {
        this.data = res.data
    });
  },
};

</script>

<style scoped>
    .test {
        background: #3a8ee6;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
    }
</style>
