import { createRouter, createWebHistory } from 'vue-router'
import Customer from '../components/Customer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/customer'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:() => import('../components/Dashboard.vue'),
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer,
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