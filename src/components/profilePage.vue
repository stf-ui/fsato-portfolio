<template>
  <div class="tab">
    <h3 class="headLine">{{ pageTtl }}</h3>
    <div class="txtArea">
      <h4>{{ name }}</h4>
      <p>{{ deta }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilePage",
  data () {
    return {
      pageTtl: "Adout Me",
      name: "佐藤　文",
      deta:"約2年半の教職経験（中学・高校）を経て、IT業界へ転職。その後、フロントエンドエンジニア・コーダーとして多くの客先へ出向させていただきました。出向先では、LPの新規作成や更新業務の他、非エンジニア向けの業務ツールの開発などにも携わりました。現在はモダンなフレームワークや、デザインについて学習中です。"
    }
  }
}
</script>
<style scoped>
.tab h3 {
  background: #333;
  color: #FFC800;
  font-size: 4.2em;
  display: inline-block;
  padding: 3px;
  font-family: "Anton", sans-serif;
}
.tab .txtArea {
  margin-top: 15px;
  background: #333;
  color: #fff;
  padding: 12px;
}
.tab .txtArea h4 {
  font-size: 3.2em;
}
.tab .txtArea p {
  font-size: 1.5em;
  word-wrap: break-word;
}
</style>
