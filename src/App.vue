<template>
  <menu-list></menu-list>
  <router-view />
</template>

<script>
import menuList from '@/components/menuList.vue'
export default {
  name: 'App',
  components: { 
    //使用するコンポーネントの指定
    menuList
  }
}
</script>