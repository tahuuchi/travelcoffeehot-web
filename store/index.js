export const strict = false;
export default {
  actions: {
    async nuxtServerInit({ dispatch }) {
      // await dispatch("destinations/fetchRoot");
      await dispatch("categories/fetchAll");
      /* await dispatch('menus/fetchAll');
      await dispatch('posts/getPost', {sort: 'views:desc', limit: 5});
      await dispatch('tags/fetchAll', {limit: 15}); */
    }
  }
};
