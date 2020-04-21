<template>
  <div>
    <background-img></background-img>
    <img class="btn" @click="goHome" src="../assets/img/back.png" alt />
    <img class="title" src="../assets/img/choose/title.png" alt />
    <div class="list">
      <img class="choice1" @click="goEasy" src="../assets/img/choose/easy.png" alt />
      <div class="right">
        <img class="choice2" @click="goOridinary" src="../assets/img/choose/oridinary.png" alt />
        <img class="choice3" @click="goHard" src="../assets/img/choose/hard.png" alt />
      </div>
    </div>
    <div class="hint">
      <div class="notice">
        注：每种难度仅
        <span>前2次</span>挑战用时会进入排名，
      </div>
      <div class="notice">之后用时将不会参加排名。</div>
    </div>
  </div>
</template>

<script>
import backgroundImg from "@/components/backgroundimg.vue";
export default {
  data() {
    return {};
  },
  components: {
    backgroundImg
  },
  methods: {
    goEasy() {
      this.$router.push("/easy");
    },
    goOridinary() {
      this.$router.push("/oridinary");
    },
    goHard() {
      this.$router.push("/hard");
    },
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss" scoped>
// 返回按钮
.btn {
  width: 83px;
  height: 85px;
  position: absolute;
  top: 17px;
  left: 12px;
}
// 标题
.title {
  width: 723px;
  height: 332px;
  margin: 124px 16px 64px 16px;
}
// 选项
.list {
  width: 663px;
  height: 494px;
  margin: auto auto;
  display: flex;
  .choice1 {
    width: 373px;
    height: 492px;
    margin-right: 21px;
    border-radius: 18px;
    box-shadow: 5px 5px #ba2c2e;
  }
  .right {
    .choice2 {
      width: 269px;
      height: 237px;
      margin-bottom: 18px;
      border-radius: 18px;
      box-shadow: 4px 4px #ba2c2e;
      // box-shadow: 0 0 6px 4px #efb1a3;
    }
    .choice3 {
      width: 269px;
      height: 237px;
      border-radius: 18px;
      box-shadow: 4px 4px #ba2c2e;
      // box-shadow: 0 0 6px 4px #efb1a3;
    }
  }
}
// 提示信息
.hint {
  margin-top: 105px;
  .notice {
    font-family: "yueHei";
    font-size: 28px;
    color: #ffeabf;
    text-align: center;
    line-height: 36px;
    span {
      color: #ffffff;
    }
  }
}
</style>