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
    meta: { title: "Fumi Sato's portfolio - TOP | f.Sato", desc: 'ここは佐藤文のポートフォリオサイトです' }
  },
  {
    path: '/profile',
    name: 'profilePage',
    component: profilePage,
    meta: { title: "Fumi Sato's portfolio - PROFILE | f.Sato", desc: 'このページは佐藤文のプロフィールページです' }
  },
  {
    path: '/skill',
    name: 'skillPage',
    component: skillPage,
    meta: { title: "Fumi Sato's portfolio - SKILL | f.Sato", desc: 'このページは佐藤文のスキルページです' }
  }
  ,
  {
    path: '/work',
    name: 'workPage',
    component: workPage,
    meta: { title: "Fumi Sato's portfolio - WORK | f.Sato", desc: 'このページは佐藤文が学習のために制作した成果物一覧ページです' }
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage,
    meta: {  title: "Fumi Sato's portfolio - CONTACT | f.Sato", desc: 'このページは佐藤文へのお問い合わせページです' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router