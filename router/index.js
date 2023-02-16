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
    component: topPage,
    meta: { title: 'ページタイトル1' }
  },
  {
    path: '/profile',
    name: 'profilePage',
    // component: profilePage,
    component: () => import(/* webpackChunkName: "about" */ '../src/components/profilePage.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/skill',
    name: 'skillPage',
    component: skillPage,
    meta: { title: 'ページタイトル3' }
  }
  ,
  {
    path: '/work',
    name: 'workPage',
    component: workPage,
    meta: { title: 'ページタイトル4' }
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage,
    meta: { title: 'ページタイトル5'}
  }
]
const DEFAULT_TITLE = 'Default Title'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router