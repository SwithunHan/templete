import Vue from 'vue';
import Router from 'vue-router';
// import Index from '../views/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: './',
  scrollBehavior: () => ({y: 0}),
  routes: [{
    path: '/',
    name: 'index',
    component: ()=>import('@/views/index'),
    meta: {title: '首页'},
  }],
});
