<template>
  <div>
    <div class="explain">
      <img src alt />
    </div>
    <div class="title">劳动器具猜猜看</div>
    <div class="show">
      <img src alt />
    </div>
    <div class="btn" @click="startJoin">开始游戏</div>
    <div class="btn">排行榜</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    startJoin() {
      this.$router.push("/choose");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>