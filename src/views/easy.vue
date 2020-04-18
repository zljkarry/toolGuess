<template>
  <div>
    <!-- 顶栏信息 -->
    <div class="back" @click="overBack">
      <img src="../assets/img/btn.jpg" alt />
    </div>
    <div class="icon">
      <img src alt />
    </div>
    <div class="show_time">{{time}}s</div>
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
    <div class="state">{{n+1}}.以上图片中器具的名称是</div>
    <input class="answer" ref="answer" />
    <div class="options">
      <div
        class="option"
        v-for="word in questions[n].words"
        :key="word.index"
        @click="getWord(word)"
      >{{word}}</div>
    </div>
    <!-- 提示区域 -->
    <div class="hint" v-show="isShow">答案有误！请重新选择</div>
  </div>
</template>

<script>
import { ResultService } from "../common/service/api.js";
import { FETCH_SUCCESS } from "../store/type/actions_type"
// import {}
export default {
  data() {
    return {
      time: 0,
      timer: null,
      n: 0,
      isWarn: false,
      isShow: false,
      questions: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
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
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
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
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
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
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
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
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
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
        this.time = this.time + 1000;
      }, 1000);
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
      this.timer = setInterval(() => {
        this.time = this.time + 1000;
      }, 1000);
    },

    // 点击相应文字时，获取所选文字并将其赋给answer的value
    getWord(word) {
      console.log(this.$refs.answer.value);
      this.$refs.answer.value = this.$refs.answer.value + word;
      console.log(this.$refs.answer.value);
      this.over();
    },
    // 选择完毕时的相关处理
    // 当选择的文字等于答案文字时认为选择完毕（有问题，若答案三个字，选择了两个字，不会提醒用户选择错误)
    over() {
      if (
        this.$refs.answer.value.length ==
        this.questions[this.n].definition.length
      ) {
        if (this.$refs.answer.value == this.questions[this.n].definition) {
          console.log("答题正确");
          this.$refs.answer.value = "";
          // 若提示输入错误的提示存在，则抹去
          if (this.isShow) {
            this.isShow = false;
          }
          // 若题目未答完，进入下一题；若答完，上传数据并跳转到闯关成功页面
          if (this.n < 4) {
            this.n++;
          } else {
            // 将关卡数字和通关时间以xxx-数据形式传到后端
            // let data = new FormData();
            // data.append("level", 0);
            // data.append("time", this.time);
            // console.log(this.time);
            // console.log(data);

            // 模拟数据
            let data = {
              time: this.time,
            }

            this.$store.dispatch(FETCH_SUCCESS,data);
            this.$router.push("/over");
            // 清除计时器
            clearInterval(this.timer);
          }
        } else {
          this.isShow = true;
          this.$refs.answer.value = "";
        }
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
</style>