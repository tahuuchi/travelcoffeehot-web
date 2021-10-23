
export const state = () => ({
  list: [],
})

export const mutations = {
  SAVE_DATA (state, data) {
    state.list.push(data);
  },
  SAVE_DATA_KEY (state, data) {
    state.list = [{path: '/', name:'Home'}, ...data];
  },
}

export const getters = {
  get (state) {
    return state.list;
  },
  getOne (state, key) {
    return state.list[key];
  },
}

export const actions = {
  async setData ({ commit }, data) {
    commit('SAVE_DATA', data);
  },

  async setDataKey ({ commit }, data) {
    commit('SAVE_DATA_KEY', data);
  },
}