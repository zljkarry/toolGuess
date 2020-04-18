import {
    SET_TIME,
    SET_RANK,
    SET_VALID,
} from "./type/mutations_type"

export default {
    [SET_TIME](state, _time) {
        state.time = _time;
    },
    [SET_RANK](state, _rank) {
        state.rank = _rank;
    },
    [SET_VALID](state, _valid) {
        state.valid = _valid;
    }
}