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
          language:"HTML/Sass/Vue",
          other:"PhotoShop/素材 photolibrary(https://www.photolibrary.jp)"
        }
      ]
    };
  }
}
</script>
<style lang="scss" scoped>
$pc: 1024px;
$tab: 680px;
$sp: 480px;
@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.tab {
  ul {
    list-style: none;
    li {
      // background: #333;
      color: #333;
      margin-bottom: 30px;
      .imgWrap {
        width: 50%;
        max-width: 240px;
        height: auto;
        box-sizing: border-box;
        img {
          width: 100%;
          height: auto;
          border: #333 solid 1px;
        }
        @include tab {
          margin: 0 auto;
          width: 100%;
        };
      }
      .txtWrap {
        margin-left: 15px;
        width: 50%;
        box-sizing: border-box;
        @include tab {
          width: 100%;
          margin-left: 0;
        };
        .txtDetailWrap {
          margin-top: 42px;
          background: #333;
          color: #fff;
          padding: 6px;
          width: 100%;
          word-wrap: break-word;
          p {
            font-size: 1.1em;
            font-weight: bold;
          }
          @include tab {
            margin-top: 24px;
          };
        }
      }
      .siteTtl {
        position: relative;
        background: #333;
        padding: 9px;
        text-align: center;
        filter:drop-shadow(5px 5px 0 #FFC800);
        &::before {
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
        h4 {
          color: #FFC800;
          font-size: 1.2em;
        }
        &.pc-view {
          @include tab {
            display: none;
          };
        }
        &.sp-view {
          display: none;
          @include tab {
            display: block;
            margin-bottom: 35px;
          };
        }
      }
    }
  }
  .d-flex {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @include tab {
      display: block;
    };
  }
}
</style>
