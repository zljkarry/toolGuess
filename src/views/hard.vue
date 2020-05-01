<template>
  <div class="game">
    <background-img></background-img>
    <!-- 蒙版 -->
    <div class="masking" v-show="isWarn"></div>
    <div class="masking" v-show="pageShow"></div>
    <!-- 返回提示区 -->
    <div class="warning" v-show="isWarn">
      <div class="msg">是否返回主页，若返回,该此成绩将不会被记录。</div>
      <img class="yes_btn" @click="goHome" src="../assets/img/game/yes.png" />
      <img class="no_btn" @click="closeWarn" src="../assets/img/game/no.png" />
    </div>
    <!-- 顶栏信息 -->
    <div class="top">
      <img class="back" @click="overBack" src="../assets/img/icon/back.png" />
      <div class="show_time">
        <div class="time">{{time}}s</div>
      </div>
    </div>
    <!-- 答题区域 -->
    <div v-if="questions[n]">
      <div class="answer_hint">答案提示：{{questions[n].definition.length}}个字</div>
    </div>
    <div class="obj_img">
      <div class="img_box" v-if="questions[n]">
        <img :src="'/game/toolguess2020/questions/'+ questions[n].img" />
      </div>
    </div>
    <div class="question" v-if="questions[n]">
      <div class="state" v-show="questions[n].sort == 0">{{n+1}}. 以上图片中器具的名称是</div>
      <div class="state" v-show="questions[n].sort == 1">{{n+1}}. 以上劳动工具常用于哪个行业</div>
      <div class="answer_box">
        <input class="answer" ref="answer" onfocus="this.blur()" />
      </div>
    </div>
    <!-- 选项 -->
    <div class="options" v-if="questions[n]">
      <div
        class="option"
        v-for="word in questions[n].words"
        :key="word.index"
        @click="getWord(word,$event)"
      >{{word}}</div>
    </div>
    <!-- 提示区域 -->
    <div class="hint" v-show="isShow">答案错误！请重新选择</div>
    <!-- 工具介绍页 -->
    <div class="introduce" v-show="pageShow" v-if="questions[n]">
      <div class="img">
        <div class="img_box" v-if="questions[n]">
          <img :src="'/game/toolguess2020/questions/'+ questions[n].img" />
        </div>
      </div>
      <!-- 正确时right会显示，错误时wrong会显示 -->
      <div class="right" v-show="(!wrongShow)&&(questions[n].sort == 1)">{{questions[n].name}}</div>
      <div class="right" v-show="(!wrongShow)&&(questions[n].sort == 0)">{{questions[n].definition}}</div>
      <div class="wrong" v-show="wrongShow">本题正确答案为：{{questions[n].definition}}！</div>
      <div class="text_box">
        <div class="introduce_words" v-if="questions[n]">{{questions[n].introduction}}</div>
      </div>

      <!-- 假按钮，即禁用状态的下一题按钮 -->
      <div class="fake_next" v-show="!realNext"></div>
      <!-- 真正的下一题按钮 -->
      <div class="next" v-show="realNext" @click="goNext"></div>
    </div>
  </div>
</template>

<script>
import backgroundImg from "@/components/backgroundimg.vue";
import { ResultService } from "../common/service/api.js";
import { FETCH_SUCCESS } from "../store/type/actions_type";
import md5 from "js-md5";
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
      questions: [
        {
          img: "镰刀.jpg",
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
            "具"
          ],
          sort: 0
        },
        {
          img: "镰刀_pro.jpg",
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
            "具"
          ],
          sort: 1
        },
        {
          img: "镰刀_pro.jpg",
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
            "具"
          ],
          sort: 1
        },
        {
          img: "镰刀_pro.jpg",
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
            "具"
          ],
          sort: 1
        },
        {
          img: "镰刀_pro.jpg",
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
            "具"
          ],
          sort: 1
        }
      ]
    };
  },
  components: {
    backgroundImg
  },
  created() {
    // 请求题目资源
    this.$axios
      .get("https://wx.redrock.team/wxapi/wuyitools/questions?level=2", {
        headers: {
          Authorization: localStorage.getItem("id_token_toolguess")
        }
      })
      .then(response => {
        this.questions = response.data.questions;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
    // this.questions = ResultService.enterGame(0).then(data =>{ console.log(data.data) });
    console.log(this.questions);
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
        // 将所有文字颜色设为原来颜色
        for (var i = 0; i < 12; i++) {
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
      if (this.n < 9) {
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
        // 将关卡数字和通关时间以application/x-www-form-urlencoded数据形式传到后端
        let time_delivery = this.time * 1000;
        let data = new FormData();
        data.append("level", 2);
        console.log(time_delivery);
        data.append("time", time_delivery);
        // data.append("key", md5(time_delivery*10));
        console.log(this.time);
        console.log(data);

        // 模拟数据
        // let data = {
        //   time: this.time
        // };

        this.$store.dispatch(FETCH_SUCCESS, data);
        setTimeout(() => {
          this.$router.push("/over");
        }, 500);
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
@import "@/assets/css/game.scss";
</style>