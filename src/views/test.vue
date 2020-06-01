<template>
    <p class="test">{{data}}</p>
</template>

<script>
import {getData} from '@/api';
export default {
  name: 'test',
  data() {
    return {
      data: '',
    };
  },
  created() {
    getData().then((res)=>{
      this.data = res.data;
    });
  },
};
</script>

<style scoped>
    .test{
        background: #fe5f6a;
    }
</style>
