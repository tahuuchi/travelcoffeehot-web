<template>
  <div id="page-container">
    <!--Container body-->
    <div class="content py-4">
      <PostListCat :posts="listCat" :cat="cat"></PostListCat>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListCat from "~/components/PostListCat.vue";
const BASE_URL = process.env.BASE_URL;
export default {
  head() {
    let { title } = this.$store.state.categories.current;
    const imgUrl = `${BASE_URL}/thumb.jpg`;
    const siteTitle = `${title}`;
    const description = `The most  ${title}`;
    return {
      title: siteTitle,
      meta: [
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "travelcoffeehot.com",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "article",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: siteTitle,
        },

        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "article",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: siteTitle,
        },

        {
          name: "title",
          content: siteTitle,
        },
        {
          name: "keywords",
          content: `${title} `,
        },
        {
          name: "description",
          content: description,
        },
      ],
    };
  },
  watchQuery: ["page", "s"],
  async asyncData({ store, params, $axios }) {
    await store.dispatch("categories/fetchOne", {
      _id: params.id,
    });
    await store.dispatch("posts/listCat", {
      categories: store.state.categories.current._id,
    });
  },
  data: function () {
    const params = this.$route.query;
    const baseNoImage = process.env.baseNoImage;
    const cat = this.$store.state.categories.current;
    return {
      params: params,
      baseNoImage,
      cat,
    };
  },
  components: {
    PostListCat,
  },
  methods: {},
  computed: {
    ...mapGetters({
      listCat: "posts/getListCat",
    }),
  },
};
</script>
