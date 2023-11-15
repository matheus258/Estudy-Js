import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import { defineAsyncComponent } from 'vue'

const Home = () => import('')
const Feedbacks = () => import('')
const Credencials = () => import('')

// const Feedbacks = defineAsyncComponent({
//   loader: () => import('../components/Feedbacks.vue')
// })

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router
