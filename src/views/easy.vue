<template>
  <div>
    <div class="back" @click="overBack"></div>
    <div class="show_time"></div>
    <div class="obj_img"></div>
    <div class="state">.以上图片中器具的名称是</div>
    <div class="answer"></div>
    <div class="options"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    overBack(){
      let msg = confirm("是否返回主页，若返回该此成绩将不会记录");
      if(msg){
        this.$router.push("/home");
        // 清除计时器
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>