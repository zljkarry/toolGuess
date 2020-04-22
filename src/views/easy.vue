<template>
  <div class="game">
    <background-img></background-img>
    <!-- 顶栏信息 -->
    <div class="top">
      <img class="back" @click="overBack" src="../assets/img/icon/back.png" />
      <div class="show_time">
        <div class="time">{{time}}s</div>
      </div>
    </div>

    <!-- 返回提示区 -->
    <div class="warning" v-show="isWarn">
      <div class="msg">是否返回主页，若返回该此成绩将不会记录</div>
      <div class="btn" @click="goHome">确定</div>
      <div class="btn" @click="closeWarn">取消</div>
    </div>
    <!-- 答题区域 -->
    <div class="obj_img">
      <img :src="questions[n].img" />
    </div>
    <div class="question">
      <div class="state">{{n+1}}. 以上图片中器具的名称是</div>
      <input class="answer" ref="answer" />
    </div>
    <!-- 选项 -->
    <div class="options">
      <div
        class="option"
        v-for="word in questions[n].words"
        :key="word.index"
        @click="getWord(word,$event)"
        :class="{'white':toWhite}"
      >{{word}}</div>
    </div>
    <!-- 提示区域 -->
    <div class="hint" v-show="isShow">答案有误！请重新选择</div>
    <!-- 工具介绍页 -->
    <div class="introduce" v-show="pageShow">
      <div class="img">
        <img src="../assets/img/icon/back.png" alt />
      </div>
      <!-- 正确时right会显示，错误时wrong会显示 -->
      <div class="right" v-show="!wrongShow">{{questions[n].definition}}</div>
      <div class="wrong" v-show="wrongShow">本题正确答案为：{{questions[n].definition}}！</div>
      <div class="introduce_words">{{questions[n].introduction}}</div>
      <!-- 假按钮，即禁用状态的下一题按钮 -->
      <div class="fake_next" v-show="!realNext">假的下一题按钮</div>
      <!-- 真正的下一题按钮 -->
      <div class="next" v-show="realNext" @click="goNext">下一题</div>
    </div>
  </div>
</template>

<script>
import backgroundImg from "@/components/backgroundimg.vue";
import { ResultService } from "../common/service/api.js";
import { FETCH_SUCCESS } from "../store/type/actions_type";
export default {
  data() {
    return {
      time: 0.0,
      timer: null,
      n: 0,
      isWarn: false,
      isShow: false,
      pageShow: false,
      wrongShow: false,
      realNext: false,
      count: 0,
      toWhite: false,
      questions: [
        {
          img: "../assets/img/btn.jpg",
          definition: "器具",
          introduction:
            "这是工具描述介绍1这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍",
          words: [
            "器",
            "具",
            "1",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具"
          ]
        },
        {
          img: "../assets/img/btn.jpg",
          definition: "器具",
          introduction:
            "这是工具描述介绍2这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍",
          words: [
            "器",
            "具",
            "2",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具"
          ]
        },
        {
          img: "../assets/img/btn.jpg",
          definition: "器具",
          introduction:
            "这是工具描述介绍3这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍",
          words: [
            "器",
            "具",
            "3",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具"
          ]
        },
        {
          img: "../assets/img/btn.jpg",
          definition: "器具",
          introduction:
            "这是工具描述介绍4这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍",
          words: [
            "器",
            "具",
            "4",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具"
          ]
        },
        {
          img: "../assets/img/btn.jpg",
          definition: "器具",
          introduction:
            "这是工具描述介绍5这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍这是工具描述介绍",
          words: [
            "器",
            "具",
            "5",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具",
            "器",
            "具"
          ]
        }
      ]
    };
  },
  components: {
    backgroundImg
  },
  created() {
    // 请求题目资源
    // this.questions = ResultService.enterGame(0);
  },
  mounted() {
    this.start();
  },
  methods: {
    // 开始计时
    start() {
      this.timer = setInterval(() => {
        this.time = this.time + 0.01;
        this.time = parseFloat(this.time.toFixed(2));
      }, 10);
    },
    // 点击返回按钮后的响应
    overBack() {
      // 清除计时器
      clearInterval(this.timer);
      this.isWarn = true;
    },
    goHome() {
      this.$router.push("/home");
    },
    closeWarn() {
      this.isWarn = false;
      // 继续计时
      this.start();
    },

    // 点击相应文字时，获取所选文字并将其赋给answer的value
    getWord(word, event) {
      console.log(this.$refs.answer.value);
      this.$refs.answer.value = this.$refs.answer.value + word;
      console.log(this.$refs.answer.value);
      // 将文字设为红色
      event.target.style.color = "#f63a3a";
      this.over();
    },
    // 选择完毕时的相关处理
    // 当选择的文字等于答案文字时认为选择完毕（有问题，若答案三个字，选择了两个字，不会提醒用户选择错误)
    over() {
      if (
        this.$refs.answer.value.length ==
        this.questions[this.n].definition.length
      ) {
        // 选择次数加一
        this.count++;
        console.log(this.count);
        // 将所有文字颜色设为白色
        for (var i = 0; i < 16; i++) {
          event.target.parentNode.children[i].style.color = "#6b2e2e";
        }

        // 若答案正确
        if (this.$refs.answer.value == this.questions[this.n].definition) {
          console.log("答题正确");
          // 若提示输入错误的提示存在，则抹去
          if (this.isShow) {
            this.isShow = false;
          }
          // 停止计时
          console.log("这里清除了计时器");
          clearInterval(this.timer);
          // 显示工具介绍页
          this.pageShow = true;
          // 工具介绍页不显示提示错误文案
          this.wrongShow = false;
          // 两秒后再显示真正的激活状态的下一题按钮
          setTimeout(() => {
            this.realNext = true;
          }, 2000);
        } else {
          // 若答案不正确
          // 显示答案错误的提示
          this.isShow = true;
          // 将答题框值清零
          this.$refs.answer.value = "";
          // 若答题次数为5仍然未答对，则显示工具介绍页
          if (this.count === 5) {
            // 清除计时器
            console.log("这里清除了计时器");
            clearInterval(this.timer);
            // 时间加10s
            this.time += 10.0;
            // 显示工具介绍页
            this.pageShow = true;
            // 工具介绍页显示提示错误文案
            this.wrongShow = true;
            // 两秒后再显示真正的激活状态的下一题按钮
            setTimeout(() => {
              this.realNext = true;
            }, 2000);
          }
        }
      }
    },
    // 若该难度题目未答完，初始化数据后进入下一题；若答完，上传数据并跳转到闯关成功页面
    goNext() {
      if (this.n < 4) {
        // 若答案框有文字则清空
        if (this.$refs.answer.value != "") {
          this.$refs.answer.value = "";
        }
        // 将某一题答题次数清零
        this.count = 0;
        // 若工具介绍页在显示则关闭
        if (this.pageShow) {
          this.pageShow = false;
        }
        // 下一题按钮禁用
        this.realNext = false;
        // 若答案错误的提示存在，则抹去
        if (this.isShow) {
          this.isShow = false;
        }
        // 改变题目内容
        this.n++;
        // 若计时器已被清除，再继续计时
        this.start();
      } else {
        // 将关卡数字和通关时间以xxx-数据形式传到后端
        // let data = new FormData();
        // data.append("level", 0);
        // data.append("time", this.time);
        // console.log(this.time);
        // console.log(data);

        // 模拟数据
        let data = {
          time: this.time
        };

        this.$store.dispatch(FETCH_SUCCESS, data);
        this.$router.push("/over");
        // 清除计时器
        clearInterval(this.timer);
      }
    }
  },
  destroyed() {
    if (this.timer) {
      //如果定时器在运行则关闭
      clearInterval(this.timer);
      // console.log("定时器关闭");
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  background: none;
  outline: none;
  border: none;
}
input:focus {
  border: none;
}
.game {
  overflow: hidden;
  // 顶栏信息
  .top {
    display: flex;
    // 返回按钮
    .back {
      width: 83px;
      height: 85px;
      margin: 17px auto auto 12px;
    }
    .show_time {
      width: 180px;
      height: 80px;
      background-image: url("../assets/img/game/time_icon.png");
      background-size: 100%;
      margin: 13px auto auto 458px;
      .time {
        font-family: "yueHei";
        font-size: 28px;
        color: #fff;
        margin-left: 86px;
        line-height: 80px;
      }
    }
  }
  .obj_img {
    width: 643px;
    height: 386px;
    background-image: url("../assets/img/game/pic_box.png");
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 26px auto 32px auto;
    img {
      margin: auto auto;
    }
  }
  .question {
    display: flex;
    justify-content: center;
    .state {
      width: 489px;
      font-family: "fangZheng";
      font-size: 36px;
      color: #fff;
      text-align-last: justify;
    }
    .answer {
      width: 118px;
      margin-left: 15px;
      border-bottom: 2px solid #fff;
      text-align: center;
      font-family: "yueHei";
      font-size: 36px;
      color: #fce7d1;
    }
  }
  .options {
    width: 671px;
    height: 509px;
    margin: auto auto;
    background-image: url("../assets/img/game/options_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    font-family: "yueHei";
    font-size: 80px;
    color: #6b2e2e;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>