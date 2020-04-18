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
          <span class="time">{{item.time}}s</span>
          <span class="nickname">{{item.nickname}}</span>
        </div>
      </div>
      <!-- 一般题排行榜 -->
      <div class="list" v-show="num===1">
        <div class="list_item" v-for="(item,index) in item1s" :key="item.index">
          <span class="icon" :class="setClass(index)">{{setNumber(index)}}</span>
          <span class="time">{{item.time}}s</span>
          <span class="nickname">{{item.nickname}}</span>
        </div>
      </div>
      <!-- 困难题排行榜 -->
      <div class="list" v-show="num===2">
        <div class="list_item" v-for="(item,index) in item2s" :key="item.index">
          <span class="icon" :class="setClass(index)">{{setNumber(index)}}</span>
          <span class="time">{{item.time}}s</span>
          <span class="nickname">{{item.nickname}}</span>
        </div>
      </div>
    </div>
    <div class="hint">排名信息将在每日0点更新！</div>
  </div>
</template>

<script>
import { ResultService } from "../common/service/api.js";
export default {
  data() {
    return {
      num: 0,
      item0s: [
        {
          nickname: "赵丽佳",
          time: "20.10"
        },
        {
          nickname: "赵丽佳",
          time: "20.10"
        },
        {
          nickname: "赵丽佳",
          time: "20.10"
        },
        {
          nickname: "赵丽佳",
          time: "20.10"
        },
        {
          nickname: "赵丽佳",
          time: "20.10"
        }
      ]
    };
  },
  created() {
    let item0s = ResultService.getRanking(0);
    let item1s = ResultService.getRanking(1);
    let item2s = ResultService.getRanking(2);
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    // 标记排行
    setClass(index) {
      let obj = { rank: true };
      obj[`rank${index}`] = true;
      return obj;
    },
    setNumber(index) {
      if (index == 0 || index == 1 || index == 2) {
        return "";
      } else {
        return index + 1 + "th";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.rank0 {
  background: url("../assets/img/ranking/first.png");
  background-size: cover;
}
.rank1 {
  background: url("../assets/img/ranking/first.png");
  background-size: cover;
}
.rank2 {
  background: url("../assets/img/ranking/first.png");
  background-size: cover;
}
</style>