import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API } from "@/common/config";    //后端url

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API
        this.setHeader()

    },
    //每次发送请求时 把获得的token放在请求头里
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `${localStorage.getItem('id_token_toolguess')}`
        console.log(localStorage.getItem('id_token_toolguess'))
    },

    // 封装axios

    get(resource) {
        return Vue.axios.get(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    patch(resource, params) {
        return Vue.axios.patch(resource, params);
    },

    put(resource, params) {
        return Vue.axios.put(resource, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;

export const ResultService = {
    // 难度选择之后进入游戏向后端请求游戏题目数据，根据传入的难度参数返回长度不同的数组
    // 数组中每个对象的属性包括器具图片url，器具名称，16个乱序字数组
    enterGame(params) {
        return ApiService.get(`questions?level=${params}`)
    },
    // 闯关成功，给后端发送用户成功难度级别，用时
    // 后端返回此次闯关用时，排名，此次成绩是否计入排行（即是否已挑战过两次以上）
    gameSucceed(params) {
        return ApiService.post(`success`,params)
    },
    // 获取排行榜，根据传入的难度参数返回不同类别排行榜
    // 排行榜数据为数组，数组中每个对象的属性包括昵称与用时，数组顺序和排名一致
    getRanking(params) {
        return ApiService.get(`ranking?level=${params}`)
    }
}




