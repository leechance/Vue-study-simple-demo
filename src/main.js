import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  Loading,
  Checkbox,
  Tip,
  Popup,
  Toast,
  Picker,
  Scroll,
  Slide,
  createAPI
} from 'cube-ui'
import App from './App'
import SubscribeDialog from './components/subscribe-dialog/subscribe-dialog'
import router from './router';
import store from './store';

createAPI(Vue, SubscribeDialog, [], true)

Vue.use(Button)
Vue.use(Loading)
Vue.use(Checkbox)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(Scroll)
Vue.use(Slide)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
