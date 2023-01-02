import Vue from 'vue'

// 引入了app.vue
import App from './12.全选反选案例.vue'

Vue.config.productionTip = false

// 我们界面里面渲染的组件，在main.js里面进行引入的

// 把App组件渲染到html里面的#app这个节点里面
new Vue({
  render: h => h(App),
}).$mount('#app')
