<template>
  <div>
    <div class="back" @click="overBack"></div>
    <div class="show_time">{{time}}</div>
    <div class="obj_img">
      <img :src="questions[n].img" />
    </div>
    <div class="state">.以上图片中器具的名称是</div>
    <div class="answer" ref="answer"></div>
    <div class="options">
      <div class="option" v-for="word in questions[n].words" :key="word.index" @click="getWord(word)">{{word}}</div>
    </div>
  </div>
</template>

<script>
import { ResultService } from "../common/service/api.js";
export default {
  data() {
    return {
      time: 0,
      timer: null,
      n: 0,
      questions: [
        {
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587141044912&di=6c45dc61a22feef0c42fbcc7687a93c1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          definition: "器具",
          words: ["器","具","器","具","器","具","器","具","器","具","器","具","器","具","器","具",]
        }
      ],
    };
  },
  created() {
    // 请求题目资源
    this.questions = ResultService.enterGame(0)
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
      let msg = confirm("是否返回主页，若返回该成绩将不会记录");
      if (msg) {
        this.$router.push("/home");
      } else {
        // 继续计时
        this.timer = setInterval(() => {
          this.time = this.time + 1000;
        }, 1000);
      }
    },

    // 点击相应文字时，获取所选文字并将其赋给answer的value
    getWord(word) {
      this.$refs.answer.value = this.$refs.answer.value + word;
    },
    //当用户已选完。什么时候判断用户已选完是个问题
    over() {
      if(this.$refs.answer.value === this.questions[n].definition){
        if(this.n < 4) {
          this.n++;
        }else{
          this.$router.push("/over");
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