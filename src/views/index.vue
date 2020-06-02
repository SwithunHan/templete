<template>
    <div>
        <div class="box">
            <p v-for="item in data" :key="item">{{item}}</p>
        </div>
        <el-button type="primary" size="small" @click="addData">添加</el-button>
    </div>
</template>

<script>
// import {getData} from '@/api';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'index',
  components: {},
  data() {
    return {
      data: [],
    };
  },
  computed: {
    ...mapGetters(['getMax', 'getUserList']),
  },
  created() {
    this.data = this.getUserList;
  },
  methods: {
    ...mapActions(['asyncAdd']),
    addData() {
      const newData = this.data.slice(-1);
      // this.$store.dispatch('asyncAdd', newData[0] + 1);
      this.$store.commit('add', newData[0] + 1);
    },
  },
};

</script>

<style scoped lang="less">
    .box {
        display: flex;
        flex-wrap: wrap;
        height: 300px;
        width: 300px;
        align-content: stretch;
        justify-content: space-between;
        p {
            width: 30%;
            background: aqua;
            text-align: center;
        }
    }
</style>
