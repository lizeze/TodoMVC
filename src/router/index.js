import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
 import  todo from '../components/Todo/Todo';
 import  question from '../page/Question/index';
export default new Router({
  linkActiveClass: 'active',
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    },{
    path:'/question',
      name:'question',
      component:question
    }
  ]
});
