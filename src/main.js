import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue'



// 自定义引用
import 'zico/css/zico.min.css';
import Meta from 'vue-meta'


Vue.config.productionTip = false
Vue.use(Meta)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
