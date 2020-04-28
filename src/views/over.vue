<template>
  <div class="success">
    <background-img></background-img>
    <!-- 蒙版 -->
    <div class="masking" v-show="isShow"></div>
    <!-- 总书记讲话 -->
    <div class="imp_words" v-show="isShow">
      <img src="../assets/img/icon/close.png" class="close_btn" @click="closeWords" />
      <div class="small_title">总书记话语</div>
      <div class="words">
        习近平总书记曾强调过：劳动最光荣、劳
        动最崇高、劳动最伟大、劳动最美丽，全
        社会都应该尊敬劳动模范、弘扬劳模精神，
        让诚实劳动、勤勉工作蔚然成风。劳动教
        育是国民教育体系的重要内容，是我们成
        长的必要途径。实施劳动教育重点是在系
        统的文化知识学习之外，有目的、有计划
        地参加日常生活劳动、生产劳动和服务性
        劳动，能够使我们树立正确劳动价值观和
        养成良好劳动品质。
      </div>
    </div>
    <div class="title"></div>
    <div class="time_bar">
      <img class="icon_time" src="../assets/img/icon/time.png" alt />

      <div class="time">{{$store.state.time}} s</div>
    </div>
    <div class="ranking_bar">
      <img class="icon_ranking" src="../assets/img/icon/ranking.png" alt />
      <div class="ranking">
        {{$store.state.rank+1}}
        <span>th</span>
      </div>
    </div>
    <img src="../assets/img/over/go_home.png" class="btn" @click="goHome" />
    <div class="hint" v-show="!this.$store.state.valid">
      <p>由于您在该难度已经挑战过3次</p>
      <p>该次记录将不会记录于排行榜中</p>
    </div>
  </div>
</template>

<script>
import backgroundImg from "@/components/backgroundimg.vue";
export default {
  data() {
    return {
      time: 0,
      rank: 0,
      isShow: true
    };
  },
  components: {
    backgroundImg
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    closeWords() {
      this.isShow = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.success {
  overflow: hidden;
  .masking {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #530101;
    opacity: 0.4;
  }
  .imp_words {
    width: 602px;
    height: 606px;
    background-image: url("../assets/img/over/words_bg.png");
    background-size: contain;
    position: absolute;
    top: 257px;
    left: 93px;
    right: 57px;
    z-index: 3;
    .close_btn {
      width: 83px;
      height: 83px;
      position: absolute;
      top: 42px;
      right: 0;
    }
    .small_title {
      font-family: "fangZheng";
      font-size: 36px;
      color: #973333;
      text-align: center;
      margin: 130px auto 20px auto;
      transform: translateX(-12px);
    }
    .words{
      width: 480px;
      height: 352px;
      margin: auto auto;
      font-family: "yueHei";
      font-size: 26px;
      line-height: 36px;
      color: #973333;
      transform: translateX(-12px);
      text-align: justify;
    }
  }
  .title {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    background-image: url("../assets/img/over/success.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .time_bar {
    height: 56px;
    margin: 662px auto auto 276px;
    display: flex;
    .icon_time {
      width: 55px;
      height: 56px;
      margin-right: 42px;
    }
    .time {
      font-family: "fangZheng";
      font-size: 44px;
      line-height: 56px;
      color: #973333;
    }
  }
  .ranking_bar {
    height: 68px;
    margin: 10px auto auto 276px;
    display: flex;
    .icon_ranking {
      width: 47px;
      height: 68px;
      margin-right: 50px;
    }
    .ranking {
      font-family: "fangZheng";
      font-size: 44px;
      line-height: 68px;
      color: #973333;
      span {
        font-size: 30px;
      }
    }
  }
  .btn {
    width: 252px;
    height: 98px;
    margin: 40px 0 42px 245px;
  }
  .hint {
    text-align: center;
    font-family: "yueHei";
    font-size: 24px;
    color: #7f2727;
    line-height: 34px;
  }
}
@media only screen and (min-height: 690px) {
  .success{
    .imp_words{
      top: 350px;
    }
    .title{
    background-image: url("../assets/img/over/success_2.png");
    }
    .time_bar{
      margin-top: 760px;
    }
    .btn{
      margin-top: 70px;
    }
  }
}
</style>