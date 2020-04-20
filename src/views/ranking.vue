<template>
  <div>
    <background-img></background-img>

    <img class="btn" @click="goHome" src="../assets/img/back.png" alt />

    <img class="title" src="../assets/img/ranking/rank_title.png" alt />

    <!-- 选择不同类别排行榜按钮 -->
    <div class="tabs">
      <div @click="num=0" :class="{active0: num===0}" class="easy"></div>
      <div @click="num=1" :class="{active1: num===1}" class="oridinary"></div>
      <div @click="num=2" :class="{active2: num===2}" class="hard"></div>
    </div>
    <div class="content">
      <div class="box">
        <div class="bg_top"></div>
        <div class="bg_center"></div>
        <div class="bg_bottom"></div>
      </div>

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
import backgroundImg from "@/components/backgroundimg.vue";
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
      ],
      item1s: [
        {
          nickname: "赵丽佳2",
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
      ],
      item2s: [
        {
          nickname: "赵丽佳3",
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
  components: {
    backgroundImg
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
.btn {
  width: 83px;
  height: 85px;
  position: absolute;
  top: 17px;
  left: 12px;
}
.title {
  width: 402px;
  height: 130px;
  margin: 46px 170px 20px 170px;
}
.tabs {
  width: 628px;
  height: 100px;
  margin: auto auto;
  transform: translateX(5px);
  display: flex;
  justify-content: space-around;
  .easy {
    font-family: "fangzheng";
    font-size: 36px;
    line-height: 100px;
    color: #8b4545;
    width: 200px;
    height: 100px;
    background-image: url("../assets/img/ranking/easy.png");
    background-size: cover;
  }
  .active0 {
    background-image: url("../assets/img/ranking/easy.png");
  }
  .oridinary {
    width: 200px;
    height: 100px;
    background-image: url("../assets/img/ranking/oridinary_active.png");
    background-size: cover;
  }
  .active1 {
    background-image: url("../assets/img/ranking/oridinary_active.png");
  }
  .hard {
    width: 200px;
    height: 100px;
    background-image: url("../assets/img/ranking/hard.png");
    background-size: cover;
  }
  .active2 {
    background-image: url("../assets/img/ranking/hard.png");
  }
}
.content {
  width: 638px;
  margin: auto auto;
  .box {
    width: 638px;
    z-index: -1;
    position: absolute;
    .bg_top {
      width: 100%;
      height: 148px;
      background-image: url("../assets/img/ranking/box_top.png");
      background-size: 100%;
    }
    .bg_center {
      width: 100%;
      height: 610px;
      background-image: url("../assets/img/ranking/box.jpg");
      background-repeat: repeat-y;
      background-size: 100%;
    }
    .bg_bottom {
      width: 100%;
      height: 71px;
      background-image: url("../assets/img/ranking/box_bottom.png");
      background-size: 100%;

    }
  }
}
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