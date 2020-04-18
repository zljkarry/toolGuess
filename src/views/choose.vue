<template>
  <div>
    <div class="back" @click="goHome"></div>
    <div class="title">选择你需要挑战的难度</div>
    <div class="btn" @click="goEasy">简单</div>
    <div class="btn" @click="goOridinary">一般</div>
    <div class="btn" @click="goHard">困难</div>
    <div class="notice">注：每种难度仅前2次挑战用时会进入排名，之后用时将不会参加排名。</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>