import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LoginComponent },
  // Egyéb útvonalak
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
