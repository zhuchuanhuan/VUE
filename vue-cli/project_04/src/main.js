// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入UI-element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入自己的css
import './assets/css/global.css'

// 引入自己的组件
import Tabs from '@/components/tabs/tabs'
import DiceGame from '@/components/Dice/DiceGame'
import CurrencyGroup from '@/components/Currency/CurrencyGroup'
import Notice from '@/components/Notice/Notice'
// 注册全局组件
Vue.component(Tabs.name,Tabs)
Vue.component(DiceGame.name,DiceGame)
Vue.component(CurrencyGroup.name,CurrencyGroup)
Vue.component(Notice.name,Notice)

// 配置axios
import Axios from 'axios'
Vue.prototype.$axios=Axios;

// 安装UI
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
