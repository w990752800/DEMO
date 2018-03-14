import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = (state.totalTime-0) + (time-0)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = (state.totalTime-0) - (time-0)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'http://img5.imgtn.bdimg.com/it/u=361243120,3981478277&fm=27&gp=0.jpg';

    state.list.push(
      Object.assign({ name: 'wnf', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
