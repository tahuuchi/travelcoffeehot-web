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
  SAVE_CURRENT (state, slug) {
    state.current = find(state.list, item => item.slug === slug);
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
  async fetchAll ({ commit }) {
    const data = await this.$axios.$get(`${API_URL}/menus`);
    commit('SAVE_DATA', data);
  }
}