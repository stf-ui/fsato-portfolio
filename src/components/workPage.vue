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
                  <h5>■ このサイトについて</h5>
                  <p>{{ lists.detail }}</p>
                  <h5>■ 使用している言語など</h5>
                  <p>{{ lists.language }}</p>
                  <h5>■ その他</h5>
                  <p>{{ lists.other }}</p>
                  <div class="btn">
                    <a :href="lists.github">CODE</a>
                  </div>
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
          detail:"平成の『懐メロ』で振り返ることで世代を超えたコミュケーションのお手伝いができないか考え、作成しました。ページ読込ごとにランダムで曲名が表示されます。",
          language:"HTML/CSS/Javascript/jQuery",
          other:"ロゴやバナーはPhotoShopで作成しました。",
          github:"https://github.com/stf-ui/sayonara_heisei"
        },
        { name : "推しと作業ができるタイマー",
          url:"https://stf-ui.github.io/pomodoro_timer/",
          img:"https://stf-ui.github.io/pomodoro_timer/image/bnr.png",
          detail:"「1行コードを書くごとに『推し』に褒められたい……」という夢を、25分ごとに『推し』が労ってくれるタイマーという形で叶えました。",
          language:"HTML/Sass/Javascript",
          other:"バナーやタイトルはPhotoShopで作成しました。",
          github:"https://github.com/stf-ui/pomodoro_timer"
        },
        { name : "ポートフォリオ",
          url:"https://stf-ui.github.io/fsato-portfolio/",
          detail:"近年のトレンドである、『レトロポップ』な要素を取り入れ、現在学習中のVueで作成しました。",
          img:require("./img/bnr.png"),
          language:"HTML/CSS/Vue",
          other:"バナーはPhotoShopで作成しました。動画素材は、photolibrary様(https://www.photolibrary.jp)よりお借りしました。",
          github:"https://github.com/stf-ui/fsato-portfolio"
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
  margin-bottom: 45px;
}
.tab ul li .imgWrap {
  width: 50%;
  max-width: 240px;
  height: auto;
  box-sizing: border-box;
  background: #333;
}
.tab ul li .imgWrap img {
  width: 100%;
  height: auto;
  border: #333 solid 1px;
  box-sizing: border-box;
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
.tab ul li .txtWrap .btn a {
  background: #333;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 280px;
  padding: 3px 12px;
  color: #FFC800;
  transition: 0.3s ease-in-out;
  border: solid 1px #FFC800;
  font-family: "Anton", sans-serif;
  text-decoration: none;
  font-size: 1.5em;
}
.tab ul li .txtWrap .btn {
  margin: 15px 0;
}
.tab ul li .txtWrap .btn a:hover {
    background: #FFC800;
    color: #333;
}
.tab ul li .txtWrap .btn a:after {
    content: '';
    width: 5px;
    height: 5px;
    border-top: 3px solid #FFC800;
    border-right: 3px solid #FFC800;
    transform: rotate(45deg) translateY(-50%);
    position: absolute;
    top: 50%;
    right: 20px;
    border-radius: 1px;
    transition: 0.3s ease-in-out;
}
.tab ul li .txtWrap .btn a:hover:after {
    border-color: #333;
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
  padding: 12px;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
}
.tab ul li .txtWrap .txtDetailWrap p {
  font-size: 1.1em;
  margin-bottom: 6px;
}
.tab ul li .txtWrap .txtDetailWrap h5 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 3px;
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
  font-weight: bold;
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
</style>
