export default {
  state: {
    userList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  mutations: {
    add(state, newData) {
      state.userList.push(newData);
    },
  },
  actions: {
    asyncAdd({commit}, newData) {
      setTimeout(()=>{
        commit('add', newData);
      }, 1000);
    },
  },
};
