import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
/* 插件和全局成员的设置 */
//注册element-ui插件
Vue.use(ElementUI)
//把axios设置为所有vue组件实例的成员属性（全局）——this.$axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/* 创建全局过滤器 */
Vue.filter('date', (value) => {
  //把bigint转换为yyyy-mm-dd
  var date = new Date(value);
  var yy = date.getFullYear();
  var mm = date.getMonth() + 1;
  mm = mm > 9 ? mm : '0' + mm;
  var dd = date.getDay();
  dd = dd > 9 ? dd : '0' + dd;
  
  return yy + '-' + mm + '-' + dd
})
Vue.filter('datetime', (value) => {
  //把bigint转换为yyyy-mm-dd hh:mi:ss
  var date = new Date(value);
  var yy = date.getFullYear();
  var mm = date.getMonth() + 1;
  mm = mm > 9 ? mm : '0' + mm;
  var dd = date.getDay();
  dd = dd > 9 ? dd : '0' + dd;
  var hh = date.getHours();
  hh = hh > 9 ? hh : '0' + hh;
  var mi = date.getMinutes();
  mi = mi > 9 ? mi : '0' + mi;
  var ss = date.getSeconds();
  ss = ss > 9 ? ss : '0' + ss;
  
  return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;
})
Vue.filter('currency', (value) => {
  //把int转换为 ￥xx.yy
  return '￥' + value.toFixed(2);
})
Vue.filter('tableStatus', (value) => {
  if(value == 1) return '空闲';
  else if(value === 2) return '预定';
  else if(value === 3) return '占用';
  else return '其它';
})

new Vue({
  router,
  //指定当前项目唯一的Vuex存储仓库对象，其中保存着可供所有组件共享的数据
  store,
  render: h => h(App)
}).$mount('#app')
