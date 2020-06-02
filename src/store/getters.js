const getters = {
  getMax: (state) => Math.max(...state.user.userList),
  getUserList: (state) => state.user.userList,
};

export default getters;
