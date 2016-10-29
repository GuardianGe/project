const state = {      // 创建一个对象来保存应用启动时的初始状态
  tabIndex: 0
}

const mutations = {     // 创建一个对象存储一系列我们接下来要写的 mutation 函数
  CHANGETAB (state, currentTabindex) {     // 放置我们的状态变更函数
    state.tabIndex = currentTabindex;
  }
}


// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,     //state:state
  mutations
});
