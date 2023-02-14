<template>
  <div class="tab">
    <h3 class="headLine">{{ pageTtl_1 }}</h3>
    <div class="txtArea">
      <p>{{ deta_1 }}</p>
    </div>
    <h3 class="headLine">{{ pageTtl_2 }}</h3>
    <div class="txtArea">
      <p>{{ deta_2 }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "skillPage",
  data () {
    return {
      pageTtl_1: "Programming",
      deta_1:"HTML/CSS/Sass/Javascript/jQuery/etc.",
      pageTtl_2:"Other",
      deta_2:"Photoshop/AdobeXd/JIRA/Redmine/Git/SVN/etc.",
    }
  }
};
</script>
<style lang="scss" scoped>
.tab {
  h3 {
      background: #333;
      color: #FFC800;
      font-size: 4.2em;
      display: inline-block;
      padding: 3px;
      font-family: 'Anton', sans-serif;
  }
  .txtArea {
    margin: 15px 0 30px 0;
    background: #333;
    color: #fff;
    padding: 12px;
    h4 {
      font-size: 3.2em;
    }
    p {
      font-size: 1.5em;
      word-wrap: break-word;
    }
  }
}
</style>

