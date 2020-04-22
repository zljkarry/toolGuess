<template>
  <div class="success">
    <background-img></background-img>
    <div class="title"></div>
    <div class="time_bar">
      <img class="icon_time" src="../assets/img/icon/time.png" alt />

      <div class="time">{{$store.state.time}} s</div>
    </div>
    <div class="ranking_bar">
      <img class="icon_ranking" src="../assets/img/icon/ranking.png" alt />
      <div class="ranking">
        {{$store.state.rank}}
        <span>th</span>
      </div>
    </div>
    <img src="../assets/img/over/go_home.png" class="btn" @click="goHome" />
    <div class="hint">
       <!-- v-show="!this.$store.state.valid" -->
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
      rank: 0
    };
  },
  components: {
    backgroundImg
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss" scoped>
.success {
  overflow: hidden;
  .title {
    width: 100%;
    height: 100%;
    z-index: -1;
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
</style>