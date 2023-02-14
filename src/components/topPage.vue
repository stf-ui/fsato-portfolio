<template>
  <div class="tab">
    <div class="headLineWrap">
      <h1 class="headLine">{{ tittle }}</h1>
      <h2 class="headLine">{{ position }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topPage',
  data () {
    return {
      tittle: "Fumi Sato's portfolio",
      position:'Front Egineer / Coder'
    }
  }
}
</script>
<style scoped>
.headLineWrap h1 {
  display: inline-block;
  font-size: 5.4em;
  background: #333;
  color: #FFC800;
  font-family: "Anton", sans-serif;
  padding: 3px;
}
.headLineWrap h2 {
  font-size: 4.5em;
  color: #333;
  font-family: "Anton", sans-serif;
}
</style>
