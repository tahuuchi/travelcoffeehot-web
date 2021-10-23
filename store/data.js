process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const API_URL = process.env.API_URL;
import { find }  from 'lodash';
export const state = () => ({
  list: {}
})

export const mutations = {
  SAVE_DATA (state, data) {
    state.list = data;
  },
}

export const getters = {
  get (state) {
    return state.list;
  },
}

export const actions = {
  async fetchYoutube ({ commit }, params) {
    const data = await this.$axios.$get(`${API_URL}/fakes/readYoutube`, params);
    commit('SAVE_DATA', data);
  },
}