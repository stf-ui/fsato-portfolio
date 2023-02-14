<template>
  <div class="tab">
    <h3 class="headLine">{{ pageTtl }}</h3>
    <div class="txtArea">
      <div id="postForm">
        <form class="form" v-on:submit.prevent="submit" v-if="showForm">
          <div class="item">
            <label class="itemTtl" for="guestName">
              お名前
              <span class="required">必須</span>
            </label>
            <input id="guestName" type="text" class="input" v-model="guestName" required>
          </div>
          <div class="item">
            <label class="itemTtl" for="email">
              メールアドレス
              <span class="required">必須</span>
            </label>
            <input id="email" type="email" class="input" v-model="email" required>
          </div>
          <div class="item">
            <label class="itemTtl" for="content">
              お問い合わせ内容
              <span class="required">必須</span>
            </label>
            <textarea  class="input" id="content" type="text" v-model="content" required>
            </textarea>
          </div>
          <div class="submit">
            <input type="submit" value="送信する">
          </div>
        </form>
        <div class="p-formSucess" v-else>
          <p class="thanksMsg">お問い合わせいただき、ありがとうございました。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contactPage",
  el: "#postForm",
  data() {
    return {
      pageTtl: "Mail",
      showForm: true,
      guestName: "",
      email: "",
      content: ""
    };
  },
  methods: {
    submit: function () {
      const submitParams = new FormData();
      submitParams.append("entry.1822095156", this.guestName);
      submitParams.append("entry.495354288", this.email);
      submitParams.append("entry.51125974", this.content);

      const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScihBM08UKGGtto02W6lkfAXFStff7x1wxreegvSkqHP8EsMw/formResponse";
      // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

      axios.post( GOOGLE_FORM_ACTION, submitParams).then( res => {
        // フォーム非表示
        this.showForm = false;
        console.log(res);
      });
      // フォーム非表示
      this.showForm = false;
    }
  }
};
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
  padding: 24px 12px;
}
.tab .txtArea .thanksMsg {
  font-size: 1.5em;
  width: 100%;
  max-width: 750px;
}
.tab .txtArea .form {
  margin: 0 auto;
  width: 100%;
  max-width: 750px;
}
.tab .txtArea .item {
  margin-bottom: 24px;
}
.tab .txtArea .item .itemTtl {
  display: block;
  font-size: 1.2em;
  width: 100%;
  margin-bottom: 15px;
}
.tab .txtArea .item .input {
  font-size: 1.2em;
  border: solid 1px #333;
  border-radius: 4px;
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 12px;
}
.tab .txtArea .item .input:focus-visible {
  outline: #FFC800 auto 1px;
}
.tab .txtArea .item textarea {
  height: 160px;
}
.tab .txtArea .item .required {
  color: #FFC800;
  border: #FFC800 solid 1px;
  padding: 0 12px;
  margin: 0 0 0 6px;
}
.tab .txtArea .submit {
  text-align: center;
}
.tab .txtArea .submit input {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  background-color: #FFC800;
  border: solid 1px #FFC800;
  padding: 9px 90px;
  transition: 0.4s;
  cursor: pointer;
}
.tab .txtArea .submit input:hover {
  color: #FFC800;
  background-color: transparent;
}
</style>
