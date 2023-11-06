// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import router from './vue-app/router.js'
import routes from './routes';

Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
// });

const router = new VueRouter({
    routes: [
      {
        path: '/',
        component: App,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      ...routes,
    ],
  });


const app = new Vue({
  router,
  el: '#app',
  components: {
    App,
  },
});
