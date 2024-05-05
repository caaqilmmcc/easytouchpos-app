import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session.js'
import { userResource } from './data/user.js'

const routes = [
  {
    path: '/',
    name: 'Public',
    redirect: '/',
    component: () => import('./layout.vue'),
    children: [
      // recent-sales
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: '/recent-sales',
        name: 'Recent Sales',
        component: () => import('@/pages/recent-sales.vue'),
      },
    ],
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/posapp'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
