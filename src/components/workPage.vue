<template>
  <div class="tab">
    <div class="templateUl">
      <ul>
        <li v-for="lists in list" :key="lists.name">
            <div class="d-flex">
              <div class="siteTtl sp-view">
                  <h4>{{ lists.name }}</h4>
                </div>
              <div class="imgWrap">
                <p><a :href="lists.url"><img :src="lists.img"></a></p>
              </div>
              <div class="txtWrap">
                <div class="siteTtl pc-view">
                  <h4>{{ lists.name }}</h4>
                </div>
                <div class="txtDetailWrap">
                  <p>{{ lists.detail }}</p>
                  <p>{{ lists.language }}</p>
                  <p>{{ lists.other }}</p>
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'workPage',
  data() {
    return {
      list : [
        { name : "さよなら 平成",
          url:"https://stf-ui.github.io/sayonara_heisei/",
          img:"https://stf-ui.github.io/sayonara_heisei/image/bnr.png",
          detail:"平成の『懐メロ』で振り返ることで世代を超えたコミュケーションのお手伝いができないか考え、作成しました。ページ読込ごとにランダムで曲名が表示されます",
          language:"HTML/CSS/Javascript/jQuery",
          other:"PhotoShop"
        },
        { name : "推しと作業ができるタイマー",
          url:"https://stf-ui.github.io/pomodoro_timer/",
          img:"https://stf-ui.github.io/pomodoro_timer/image/bnr.png",
          detail:"「1行コードを書くごとに『推し』に褒められたい……」という夢を25分ごとに『推し』が労ってくれるタイマーという形で叶えました",
          language:"HTML/Sass/Javascript",
          other:"PhotoShop"
        },
        { name : "ポートフォリオ",
          url:"/",
          detail:"近年のトレンドである、『レトロポップ』な要素を取り入れ、現在学習中のVueで作成しました",
          img:require("./img/bnr.png"),
          language:"HTML/CSS/Vue",
          other:"PhotoShop/素材 photolibrary(https://www.photolibrary.jp)"
        }
      ]
    };
  }
}
</script>
<style scoped>
.tab ul {
  list-style: none;
}
.tab ul li {
  color: #333;
  margin-bottom: 30px;
}
.tab ul li .imgWrap {
  width: 50%;
  max-width: 240px;
  height: auto;
  box-sizing: border-box;
}
.tab ul li .imgWrap img {
  width: 100%;
  height: auto;
  border: #333 solid 1px;
}
@media (max-width: 680px) {
  .tab ul li .imgWrap {
    margin: 0 auto;
    width: 100%;
  }
}
.tab ul li .txtWrap {
  margin-left: 15px;
  width: 50%;
  box-sizing: border-box;
}
@media (max-width: 680px) {
  .tab ul li .txtWrap {
    width: 100%;
    margin-left: 0;
  }
}
.tab ul li .txtWrap .txtDetailWrap {
  margin-top: 42px;
  background: #333;
  color: #fff;
  padding: 6px;
  width: 100%;
  word-wrap: break-word;
}
.tab ul li .txtWrap .txtDetailWrap p {
  font-size: 1.1em;
  font-weight: bold;
}
@media (max-width: 680px) {
  .tab ul li .txtWrap .txtDetailWrap {
    margin-top: 24px;
  }
}
.tab ul li .siteTtl {
  position: relative;
  background: #333;
  padding: 9px;
  text-align: center;
  filter: drop-shadow(5px 5px 0 #FFC800);
}
.tab ul li .siteTtl::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 12px solid transparent;
  border-top-color: #333;
  border-left-color: #333;
}
.tab ul li .siteTtl h4 {
  color: #FFC800;
  font-size: 1.2em;
}
@media (max-width: 680px) {
  .tab ul li .siteTtl.pc-view {
    display: none;
  }
}
.tab ul li .siteTtl.sp-view {
  display: none;
}
@media (max-width: 680px) {
  .tab ul li .siteTtl.sp-view {
    display: block;
    margin-bottom: 35px;
  }
}
.tab .d-flex {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (max-width: 680px) {
  .tab .d-flex {
    display: block;
  }
}

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
