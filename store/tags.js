const API_URL = process.env.API_URL;
import { find }  from 'lodash';
export const state = () => ({
  list: [],
  current: {}
})

export const mutations = {
  SAVE_DATA (state, data) {
    state.list = data;
  },
  SAVE_CURRENT (state, data) {
    state.current = data;
  },
}

export const getters = {
  get (state) {
    return state.list;
  },
  getCurrent (state) {
    return state.current;
  }
}

export const actions = {
  async fetchAll ({ commit }, {limit}) {
    const data = await this.$axios.$get(`${API_URL}/tags`, {params: {_start: 0, _limit: limit || 20, _sort: 'count:desc'}});
    commit('SAVE_DATA', data);
  },
  async fetchOne ({ commit }, params ) {
    const data = await this.$axios.$get(`${API_URL}/tags/${params._id}`);
    commit('SAVE_CURRENT', data);
  }
}