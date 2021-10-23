const API_URL = process.env.API_URL;
const LIMIT = process.env.LIMIT;
import helpers from "~/helpers/utils.js";

export const state = () => ({
  list: [],
  listOfCat: [],
  listCat: [],
  topView: [],
  postCategory: [],
  count: 0,
  detail: {},
  rating: {},
  viewType: "slide",
  paginate: {}
});

export const mutations = {
  SAVE_DATA(state, data) {
    state.list = data;
  },
  SAVE_TOPVIEW(state, data) {
    state.topView = data;
  },
  SAVE_POS_TCATEGORY(state, data) {
    state.postCategory = data;
  },
  SAVE_COUNT(state, count) {
    state.count = count;
  },
  SAVE_DETAIL(state, data) {
    state.detail = data;
  },
  SAVE_LIST_OF_CAT(state, data) {
    state.listOfCat = data;
  },
  SAVE_LIST_CAT(state, data) {
    state.listCat = data;
  },
  SAVE_RATING(state, data) {
    state.rating = data;
  },
  SAVE_PAGINATE(state, data) {
    state.paginate = data;
  }
};

export const getters = {
  get(state) {
    return state.list;
  },
  getListOfCat(state) {
    return state.listOfCat;
  },
  getListCat(state) {
    return state.listCat;
  },
  getOne(state) {
    return state.detail;
  },
  getTopView(state) {
    return state.topView;
  },
  getPostCategory(state) {
    return state.postCategory;
  },
  getRating(state) {
    return state.rating;
  }
};

export const actions = {
  async fetchAll({ commit }, params) {
    const page = this.app.context.query.page || 1;
    const s = this.app.context.query.s || null;
    const filter = { _sort: "createdAt:desc" };
    if (params && params.category) {
      filter.categories_in = params.category;
    }
    if (params && params.tag) {
      filter.tags_in = params.tag;
    }
    if (s && s !== "") {
      filter.slug_contains = s;
    }
    const start = (page - 1) * LIMIT;
    const data = await this.$axios.$get(`${API_URL}/posts`, {
      params: { _start: start, _limit: LIMIT, ...filter }
    });
    const count = await this.$axios.$get(`${API_URL}/posts/count`, {
      params: filter
    });
    await commit("SAVE_COUNT", count);
    await commit("SAVE_DATA", data);
    commit("SAVE_PAGINATE", helpers.paginate(count, page, LIMIT));
  },

  async getPost({ commit }, params) {
    const filter = {};
    if (params.sort) {
      filter._sort = params.sort;
    }
    if (params && params.category) {
      filter.categories_in = params.category;
    }
    const data = await this.$axios.$get(`${API_URL}/posts`, {
      params: { _start: 0, _limit: params.limit, ...filter }
    });
    if (params && params.category) {
      commit("SAVE_POST_CATEGORY", data);
    }
    commit("SAVE_TOPVIEW", data);
  },

  async findOne({ commit }, { slug }) {
    const data = await this.$axios.$get(
      `${API_URL}/posts/getOne/${encodeURI(slug)}`
    );
    if (data && data.destination.parent) {
      const des = [];
      const destinationParent = await this.$axios.$post(
        `${API_URL}/destinations/info/`,
        { desId: data.destination.parent }
      );
      if (destinationParent) {
        data.destinationParent = destinationParent;
        if (data.destinationParent.parent) {
          des.push({
            title: data.destinationParent.parent.title,
            slug: data.destinationParent.parent.slug,
            link: `/destinations/${data.destinationParent.parent.slug}`
          });
          des.push({
            title: data.destinationParent.title,
            slug: data.destinationParent.slug,
            link: `/destinations/${data.destinationParent.parent.slug}/${data.destinationParent.slug}`
          });
          des.push({
            title: data.destination.title,
            slug: data.destination.slug,
            link: `/destinations/${data.destinationParent.parent.slug}/${data.destinationParent.slug}/${data.destination.slug}`
          });
        } else {
          des.push({
            title: data.destinationParent.title,
            slug: data.destinationParent.slug,
            link: `/destinations/${data.destinationParent.slug}`
          });
          des.push({
            title: data.destination.title,
            slug: data.destination.slug,
            link: `/destinations/${data.destinationParent.slug}/${data.destination.slug}`
          });
        }
      } else {
        des.push({
          title: data.destination.title,
          slug: data.destination.slug,
          link: `/destinations/${data.destination.slug}`
        });
      }
      data.des = des;
    }
    commit("SAVE_DETAIL", data);
  },
  async getOne({ commit }, { slug }) {
    const p = await this.$axios.$get(
      `${API_URL}/posts/getOne/${encodeURI(slug)}`
    );
    const data = p.post;
    data.destination = p.des;
    data.destinationParent = p.desP;
    data.tags = p.tags;
    const des = [];
    if (data.destinationParent) {
      des.push({
        title: data.destinationParent.title,
        slug: data.destinationParent.slug,
        link: `/destinations/${data.destinationParent.slug}`
      });
      des.push({
        title: data.destination.title,
        slug: data.destination.slug,
        link: `/destinations/${data.destinationParent.slug}/${data.destination.slug}`
      });
    } else {
      des.push({
        title: data.destination.title,
        slug: data.destination.slug,
        link: `/destinations/${data.destination.slug}`
      });
    }
    data.des = des;
    commit("SAVE_DETAIL", data);
  },
  async listOfCat({ commit }, params) {
    const s = this.app.context.query.s || null;
    if (s && s !== "") {
      params.s = s;
    }
    const data = await this.$axios.$post(`${API_URL}/posts/listOfCat`, params);
    commit("SAVE_LIST_OF_CAT", data);
  },
  async listCat({ commit }, params) {
    const s = this.app.context.query.s || null;
    if (s && s !== "") {
      params.s = s;
    }
    const data = await this.$axios.$post(`${API_URL}/posts/listOfCat`, params);
    commit("SAVE_LIST_CAT", data);
  },
  async rating({ commit }, ratingData) {
    await this.$axios.$post(`${API_URL}/ratings/post`, ratingData);
  },
  async ratingGet({ commit }, post) {
    const data = await this.$axios.$get(`${API_URL}/ratings/get`, {
      params: post
    });
    commit("SAVE_RATING", data);
  },
  async setView({ commit }, post) {
    const data = await this.$axios.$put(
      `${API_URL}/posts/setView/${post.postId}`
    );
  }
};
