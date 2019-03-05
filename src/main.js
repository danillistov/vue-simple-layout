// import Vue from 'vue'
// import App from './App'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify, {iconfont: 'mdi',
//   theme: {
//     primary: '#ee44aa',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107'
//   }
// })

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',

//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: '#fff',
  }
})
Vue.use(Vuetify)
 
new Vue({
  el: '#app',
  render: h => h(App)
})
