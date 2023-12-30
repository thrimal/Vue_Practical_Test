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
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/Test.vue'),
    },
  ],
})

export default router