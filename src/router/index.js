import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../components/Customer.vue'),
    },
    {
      path: '/addCustomer',
      name: 'addCustomer',
      component: () => import('../components/AddCustomer.vue'),
    },
  ],
})

export default router