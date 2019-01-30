import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//多组件所共用的公共存储仓库，公共数据读取数据方法：this.$store.state.adminName
export default new Vuex.Store({
  //当前数据的状态，类似于组件对象的data属性
  state: {
    adminName: '', //当前登录的管理员名
    //项目的全局设置信息
    globalSettings: {
      apiUrl: 'http://127.0.0.1:8090' //初始默认值
    }
  },
  //控制数据的进化（即用于修改state），类似于组件对象中的methods——用mutations修改数据可以保证数据的“响应式”
  //公共数据修改方法：this.$store.commit('setAdminName', 'boss')
  //公共数据修改方法：this.$store.commit('setGlobalSettings', { ... })
  mutations: {
    setAdminName(state, value) {
      state.adminName = value;
    },
    setGlobalSettings(state, value){
      state.globalSettings = value;
    }
  },
  actions: {

  }
})
