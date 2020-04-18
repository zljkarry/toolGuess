<template>
  <div>
    <div class="title">闯关成功</div>
    <div class="img"></div>
    <div class="time">用时：{{$store.state.time}}s</div>
    <div class="rank">排名：{{$store.state.rank}}</div>
    <div class="hint" v-show="!this.$store.state.valid">由于您在该难度已经挑战过3次，该次记录将不会记录于排行榜中</div>
    <div class="btn" @click="goHome">返回首页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      rank: 0
    };
  },
  mounted() {},
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>