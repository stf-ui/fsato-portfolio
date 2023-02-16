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
  },
  methods : {
      createTitleDesc : function(routeInstance){
        //titleを設定する処理
        if(routeInstance.meta.title){
            var setTitle = routeInstance.meta.title + ' | サイト名など(任意)';
            document.title = setTitle;
        } else {
            document.title = 'ルートでtitleがセットされていない場合に表示するテキスト'
        }
        // メタタグのdescription設定処理
        if(routeInstance.meta.desc){
            var setDesc = routeInstance.meta.desc + ' | 共通表示名';
            document.querySelector("meta[name='description']").setAttribute('content', setDesc)
        } else {
            document.querySelector("meta[name='description']").setAttribute('content', 'ディスクリプションはありません')
        }
  },
  mounted : function(){
      var routeInstance = this.$route;
      this.createTitleDesc(routeInstance);
  },
  watch: {
      '$route' (routeInstance, from) {
          this.createTitleDesc(routeInstance);
      }
  }
}
}
</script>