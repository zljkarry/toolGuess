<template>
  <div class="home">
    <background-img></background-img>
    <div class="title"></div>
    <div class="top_words">
      <p>劳动最光荣!</p>
      <p>劳动最崇高!</p>
      <p>劳动最伟大!</p>
      <p>劳动最美丽!</p>
    </div>
    <div class="masking" v-show="isShow"></div>
    <div class="explain" v-show="isShow">
      <img src="../assets/img/icon/close.png" class="close_btn" @click="closeExplain" />
      <div class="small_title">活动规则</div>
      <div class="explain_content">
        <div class="center">
          <p>1.玩家在进入关卡时，可自主选择游戏难度，每种难度都会有独立的排行榜。</p>
          <p>2.玩家在游戏中需根据题目的问题，从系统提供的文字中选择该器具名字或涉及领域。若选择正确，将会进入下一道题目；若选择错误，玩家需重新选择文字，若5次选择错误，则会自动给出正确答案，但是时间会增加10秒。</p>
          <p>3.每种难度玩家可随意挑战，但每种难度仅前2次挑战中最优的成绩会进入排名，后续通关成绩将不会进入排名。</p>
          <p>4.每种难度的前三名将会获得由红岩网校工作站提供的奖品，获奖情况将会由“重邮小帮手公众号”公布。</p>
        </div>
      </div>
    </div>
    <img class="rule" @click="hintMsg" src="../assets/img/home/rule.png" />

    <img class="enter_game_btn" @click="startJoin" src="../assets/img/home/enter_game.png" />
    <img class="ranking_btn" @click="goRanking" src="../assets/img/home/ranking.png" />
  </div>
</template>

<script>
import backgroundImg from "@/components/backgroundimg.vue";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    backgroundImg
  },
  methods: {
    hintMsg() {
      this.isShow = true;
    },
    closeExplain() {
      this.isShow = false;
    },
    startJoin() {
      this.$router.push("/choose");
    },
    goRanking() {
      this.$router.push("/ranking");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  .explain {
    width: 592px;
    height: 887px;
    background-image: url("../assets/img/home/rule_bg.png");
    background-size: contain;
    position: absolute;
    top: 168px;
    left: 88px;
    right: 72px;
    bottom: 152px;
    z-index: 3;
    .close_btn {
      width: 83px;
      height: 83px;
      position: absolute;
      top: 0;
      right: 0;
    }
    .small_title {
      font-family: "fangZheng";
      font-size: 40px;
      color: #973333;
      text-align: center;
      margin: 110px 0 60px 0;
      transform: translate(-14px);
    }
    .explain_content {
      font-family: "yueHei";
      font-size: 28px;
      color: #8b5454;
      letter-spacing: -0.5px;
      line-height: 40px;
      .center {
        width: 466px;
        height: 584px;
        margin: auto auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: justify;
      }
    }
  }
  .masking {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #530101;
    opacity: 0.4;
  }
  .rule {
    width: 57px;
    height: 57px;
    margin: 16px 16px 0 676px;
  }
  .title {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    background-image: url("../assets/img/home/home.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .enter_game_btn {
    width: 302px;
    height: 115px;
    margin: 708px 214px 0 220px;
  }
  .top_words {
    width: 345px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "yueHei";
    font-size: 26px;
    color: #ffada0;
    letter-spacing: 2px;
    line-height: 36px;
  }
  .ranking_btn {
    width: 252px;
    height: 115px;
    margin: 12px 228px auto 246px;
  }
}
@media only screen and (min-height: 690px) {
  .home {
    .explain{
      top: 300px;
    }
    .title {
      background-image: url("../assets/img/home/home_2.png");
    }
    .enter_game_btn{
      margin-top: 780px;
    }
    .top_words {
      width: 420px;
      top: 38px;
      font-size: 32px;
      line-height: 40px;
    }
  }
}
</style>