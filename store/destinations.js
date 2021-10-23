const API_URL = process.env.API_URL;
import { find } from "lodash";
export const state = () => ({
  list: [],
  root: {},
  current: {}
});

export const mutations = {
  SAVE_DATA(state, data) {
    state.list = data;
  },
  SAVE_ROOT(state, data) {
    state.root = data;
  },
  SAVE_CURRENT(state, data) {
    state.current = data;
  }
};

export const getters = {
  get(state) {
    return state.list;
  },
  getRoot(state) {
    return state.root;
  },
  getCurrent(state) {
    return state.current;
  }
};

export const actions = {
  async fetchAll({ commit }, { limit }) {
    const data = await this.$axios.$get(`${API_URL}/destinations`, {
      params: {
        status: true,
        _start: 0,
        _limit: limit || 20,
        _sort: "count:desc"
      }
    });
    commit("SAVE_DATA", data);
  },
  async fetchRoot({ commit }) {
    const data = await this.$axios.$get(`${API_URL}/destinations`, {
      params: { _start: 0, _limit: 20, parent_null: true, status: true }
    });
    commit("SAVE_ROOT", data);
  },
  async fetchOne({ commit }, params) {
    const data = await this.$axios.$get(
      `${API_URL}/destinations/getOne/${params.slug}`
    );
    if (data) {
      const desWiki = await this.$axios.$post(
        `${API_URL}/destinations/detail`,
        { title: data.title }
      );
      if (desWiki && desWiki.query && desWiki.query.pages) {
        const extractKey = Object.keys(desWiki.query.pages);
        if (desWiki.query.pages[extractKey].extract) {
          data.des = desWiki.query.pages[extractKey].extract;
        }
      }
      const intro = await this.$axios.$post(`${API_URL}/destinations/detail`, {
        title: data.title,
        type: "short"
      });
      if (intro && intro.query && intro.query.pages) {
        const extractKey = Object.keys(intro.query.pages);
        if (intro.query.pages[extractKey].extract) {
          data.intro = intro.query.pages[extractKey].extract;
        }
      }
      const children = await this.$axios.$get(
        `${API_URL}/destinations/filter?parent=${data._id}`
      );
      if (children) {
        data.children = children;
      }
    }
    commit("SAVE_CURRENT", data);
  }
};
