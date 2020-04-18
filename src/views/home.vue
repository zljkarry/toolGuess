<template>
  <div>
    <img @click="hintMsg" src="../assets/img/btn.jpg" alt />
    <div class="explain" v-show="isShow">
      <div class="btn" @click="closeExplain">
        <img src="../assets/img/btn.jpg" alt />
        <div class="small_title">活动规则</div>
        <div class="explain_content">
          1.玩家在进入关卡时，可自主选择游戏难度，每种难度都会有独立的排行榜。<br>
          2.玩家在游戏中需根据器具图片，从系统提供的文字中选择该器具名字。若选择正确，将会进入下一道题目；若选择错误，玩家需重新选择文字。<br>
          3.每种难度玩家可随意挑战，但每种难度仅前2次挑战中最优的成绩会进入排名，后续通关成绩将不会进入排名。<br>
          4.每种难度的前三名将会获得由红岩网校工作站提供的奖品，获奖情况将会由“重邮小帮手公众号”公布。<br>
        </div>
      </div>
    </div>
    <div class="title">劳动器具猜猜看</div>
    <div class="img">
      <img src alt />
    </div>
    <div class="btn" @click="startJoin">开始游戏</div>
    <div class="btn" @click="goRanking">排行榜</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
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
</style>