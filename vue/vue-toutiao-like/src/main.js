// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.css'
import './rem.js'
import store  from './store/index'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'

Vue.config.productionTip = false;
// function () => {}
// { install: }
Vue.use((foo) => {
  // foo === vue
  foo.component('header-bar', HeaderBar);
  foo.component('footer-bar', FooterBar);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
