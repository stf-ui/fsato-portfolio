<template>
  <menu-list></menu-list>
  <router-view />
</template>

<script>
import menuList from '@/components/menuList.vue'
export default {
  name: 'App',
  components: {
    menuList
  },
  methods : {
    setMeta(route){
      if(route.meta.title){
        let setTitle = route.meta.title;
        document.title = setTitle;
      }
      if(route.meta.desc){
        let setDesc = route.meta.desc;
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      }
    }
  },
  mounted(){
    let route = this.$route;
    this.setMeta(route);
  },
  watch: {
    '$route' (route, from) {
      this.setMeta(route);
    }
  }
}
</script>