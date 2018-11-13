import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWord',
      component: () => import('../pages/HelloWord')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
