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
      <!-- 榜单背景 -->
      <div class="box">
        <div class="bg_top"></div>
        <div class="bg_center"></div>
        <div class="bg_bottom"></div>
      </div>

      <!-- 排行榜标题 -->
      <div class="list_title">
        <div class="rank_title">排名</div>
        <div class="time_title">通关时间</div>
        <div class="nickname_title">用户ID</div>
      </div>
      <!-- 简单题排行榜 -->
      <div class="list" v-show="num===0">
        <div
          class="list_item"
          :class="'rank'+index+'_item'"
          v-for="(item,index) in item0s"
          :key="item.index"
        >
          <div class="rank" :class="'icon'+index">{{setNumber(index)}}</div>
          <div class="time">{{item.time}}s</div>
          <div class="nickname">{{item.nickname}}</div>
        </div>
      </div>
      <!-- 一般题排行榜 -->
      <div class="list" v-show="num===1">
        <div
          class="list_item"
          :class="'rank'+index+'_item'"
          v-for="(item,index) in item0s"
          :key="item.index"
        >
          <div class="rank" :class="'icon'+index">{{setNumber(index)}}</div>
          <div class="time">{{item.time}}s</div>
          <div class="nickname">{{item.nickname}}</div>
        </div>
      </div>
      <!-- 困难题排行榜 -->
      <div class="list" v-show="num===2">
        <div
          class="list_item"
          :class="'rank'+index+'_item'"
          v-for="(item,index) in item0s"
          :key="item.index"
        >
          <div class="rank" :class="'icon'+index">{{setNumber(index)}}</div>
          <div class="time">{{item.time}}s</div>
          <div class="nickname">{{item.nickname}}</div>
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
// 返回按钮
.btn {
  width: 83px;
  height: 85px;
  position: absolute;
  top: 17px;
  left: 12px;
}
// 排行榜标题
.title {
  width: 402px;
  height: 130px;
  margin: 46px 170px 20px 170px;
}
// 难度类别
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
    background-image: url("../assets/img/ranking/easy_active.png");
  }
  .oridinary {
    width: 200px;
    height: 100px;
    background-image: url("../assets/img/ranking/oridinary.png");
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
    background-image: url("../assets/img/ranking/hard_active.png");
  }
}
// 榜单内容
.content {
  width: 638px;
  margin: auto auto;
  padding-bottom: 52px;
  overflow: hidden;
  // 榜单背景
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
  // 榜单信息小标题
  .list_title {
    width: 496px;
    height: 44px;
    margin: 60px 70px 26px 74px;
    font-family: "yueHei";
    font-size: 36px;
    color: #720606;
    position: relative;
    letter-spacing: 2px;
    .rank_title {
      width: 80px;
      position: absolute;
      left: 10px;
    }
    .time_title {
      width: 152px;
      position: absolute;
      left: 166px;
    }
    .nickname_title {
      width: 114px;
      position: absolute;
      left: 384px;
      overflow: hidden;
    }
  }
  // 排行榜列表
  .list {
    width: 496px;
    margin: auto 70px;
    position: relative;
    // 每一条信息
    .list_item {
      height: 60px;
      display: flex;
      justify-content: space-between;
      font-family: "yueHei";
      font-size: 28px;
      color: #720606;
      line-height: 100%;
      .rank {
        width: 97px;
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
      .time {
        width: 152px;
        height: 60px;
        position: absolute;
        left: 166px;
        text-align: center;
        line-height: 60px;
      }
      .nickname {
        width: 114px;
        height: 60px;
        position: absolute;
        left: 384px;
        text-align: center;
        line-height: 60px;
      }
    }
    // 前三名不同设置
    .rank0_item {
      height: 60px;
      margin-bottom: 18px;
      color: #ee3737;
      .icon0 {
        width: 97px;
        height: 60px;
        background: url("../assets/img/ranking/first.jpg");
        background-size: cover;
      }
    }
    .rank1_item {
      height: 60px;
      margin-bottom: 18px;
      color: #ee3737;
      .icon1 {
        width: 97px;
        height: 60px;
        background: url("../assets/img/ranking/second.jpg");
        background-size: cover;
      }
    }
    .rank2_item {
      height: 60px;
      margin-bottom: 18px;
      color: #ee3737;
      .icon2 {
        width: 97px;
        height: 60px;
        background: url("../assets/img/ranking/third.jpg");
        background-size: cover;
      }
    }
  }
}
.hint {
  font-family: "yueHei";
    font-size: 28px;
    color: #ffeabf;
    text-align: center;
    line-height: 60px;
}
</style>