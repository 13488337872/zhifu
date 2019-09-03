import Vue from 'vue';
import App from './App.vue';


import VueRouter from 'vue-router';
Vue.use(VueRouter);



// import VueResource from 'vue-resource'
// Vue.use(VueResource);
// Vue.config.productionTip = false


//1.创建组件
import AlipayIndex from './components/AlipayIndex.vue';
import AlipayMy from './components/AlipayMy.vue';
import AlipayExpressage from './components/AlipayExpressage.vue';

//2.配置路由

const routes = [
  {path: '/alipayindex',component: AlipayIndex},
  {path: '/alipaymy',component: AlipayMy},
  {path: '/alipayexpressage',component: AlipayExpressage}

]


//3.实例化VueRouter
const router = new VueRouter({
  routes //(缩写)相当于routes:routes
})

//4.挂载路由
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
