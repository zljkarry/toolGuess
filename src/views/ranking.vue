<template>
  <div>
    <div class="btn" @click="goHome"></div>
    <div class="title">排行榜</div>
    <!-- 选择不同类别排行榜按钮 -->
    <div class="tabs">
      <div @click="num=0" :class="{active: num===0}">简单</div>
      <div @click="num=1" :class="{active: num===1}">一般</div>
      <div @click="num=2" :class="{active: num===2}">困难</div>
    </div>
    <div class="content">
      <!-- 排行榜标题 -->
      <div class="list_title">
        <div>排名</div>
        <div>通关时间</div>
        <div>用户名称</div>
      </div>
      <!-- 简单题排行榜 -->
      <div class="list" v-show="num===0">
        <div class="list_item" v-for="(item,index) in item0s" :key="item.index">
          <span class="icon" :class="setClass(index)">{{setNumber(index)}}</span>
          <span class="time">{{item.Second}}s</span>
          <span class="nickname">{{item.Nickname}}</span>
        </div>
      </div>
      <!-- 一般题排行榜 -->
      <div class="list" v-show="num===1">
        <div class="list_item" v-for="(item,index) in item1s" :key="item.index">
          <span class="icon" :class="setClass(index)">{{setNumber(index)}}</span>
          <span class="time">{{item.Second}}s</span>
          <span class="nickname">{{item.Nickname}}</span>
        </div>
      </div>
      <!-- 困难题排行榜 -->
      <div class="list" v-show="num===2">
        <div class="list_item" v-for="(item,index) in item2s" :key="item.index">
          <span class="icon" :class="setClass(index)">{{setNumber(index)}}</span>
          <span class="time">{{item.Second}}s</span>
          <span class="nickname">{{item.Nickname}}</span>
        </div>
      </div>
    </div>
    <div class="hint">排名信息将在每日0点更新！</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      // 或者改成三个接口
      item0s() {
        return this.$store.state.rankList.easyRank;
      },
      item1s() {
        return this.$store.state.rankList.oridinaryRank;
      },
      item2s() {
        return this.$store.state.rankList.hardRank;
      },
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>