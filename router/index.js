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
    meta: { title: "Fumi Sato's portfolio - TOP | f.Sato" }
  },
  {
    path: '/profile',
    name: 'profilePage',
    component: profilePage,
    meta: { title: "Fumi Sato's portfolio - PROFILE | f.Sato", desc: 'ディスクリプションを記述' }
  },
  {
    path: '/skill',
    name: 'skillPage',
    component: skillPage,
    meta: { title: "Fumi Sato's portfolio - SKILL | f.Sato" }
  }
  ,
  {
    path: '/work',
    name: 'workPage',
    component: workPage,
    meta: { title: "Fumi Sato's portfolio - WORK | f.Sato" }
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage,
    meta: {  title: "Fumi Sato's portfolio - CONTACT | f.Sato" }
  }
]
const DEFAULT_TITLE = "Fumi Sato's portfolio | f.Sato";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router