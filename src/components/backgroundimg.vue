<template>
  <div class="bg">
    <div class="decorate top_left"></div>
    <div class="decorate top_right"></div>
    <div class="decorate bottom_left"></div>
    <div class="decorate bottom_right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.bg {
  z-index: -3;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/img/bg/bg.jpg");
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-size: 100%;
  .decorate {
    width: 99px;
    height: 66px;
    background-image: url("../assets/img/bg/decorate.png");
    background-size: 100%;
  }
  .top_right {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(180deg);
  }
  .bottom_left {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotateX(180deg);
  }
  .bottom_right {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }
}
</style>