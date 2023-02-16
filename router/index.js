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
    meta: { title: 'ページタイトル1', desc: 'ディスクリプションを記述' }
  },
  {
    path: '/profile',
    name: 'profilePage',
    component: profilePage,
    meta: { title: 'ページタイトル2', desc: 'ディスクリプションを記述' }
  },
  {
    path: '/skill',
    name: 'skillPage',
    component: skillPage,
    meta: { title: 'ページタイトル3', desc: 'ディスクリプションを記述' }
  }
  ,
  {
    path: '/work',
    name: 'workPage',
    component: workPage,
    meta: { title: 'ページタイトル4', desc: 'ディスクリプションを記述' }
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage,
    meta: { title: 'ページタイトル5', desc: 'ディスクリプションを記述' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router