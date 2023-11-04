// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  el: '#app',
  components: {
    App,
  },
});