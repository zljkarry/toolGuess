import {
    ResultService
  } from "../common/service/api.js";

import {FETCH_SUCCESS} from "./type/actions_type"
import {
    SET_TIME,
    SET_RANK,
    SET_VALID,
} from "./type/mutations_type"

export default {
    async [FETCH_SUCCESS]({
        commit
    }, params) {
        let {
          data
        } = await ResultService.gameSucceed(params)

        // 模拟数据，假定排名为1，闯关信息不计入排名
        // let resData = {
        //     time: params.time,
        //     rank: 1,
        //     valid: false,
        // }
        // let data = resData;

        let _time = data.time
        let _rank = data.rank
        let _valid = data.valid
        // 修改state里的数据
        commit(SET_TIME, _time)
        commit(SET_RANK, _rank)
        commit(SET_VALID, _valid)
    }
}