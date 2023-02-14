import { createRouter, createWebHistory } from 'vue-router'
import topPage from '@/components/topPage.vue'
import profilePage from '@/components/profilePage.vue'
import skillPage from '@/components/skillPage.vue'
import workPage from '@/components/workPage.vue'
import contactPage from '@/components/contactPage.vue'

const routes = [
  {
    path: '/',
    name: 'topPage',
    component: topPage
  },
  {
    path: '/profile',
    name: 'profilePage',
    component: profilePage
  },
  {
    path: '/skill',
    name: 'skillPage',
    component: skillPage
  }
  ,
  {
    path: '/work',
    name: 'workPage',
    component: workPage
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage
  },
  // {
  //   path: '/thanks',
  //   name: 'thanks',
  //   component: thanksPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router