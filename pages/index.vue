<template>
  <div id="page-container">
    <!--Container body-->
    <div class="content py-4">
      <PostList v-if="listOfCat.length > 0" :listOfCat="listOfCat"></PostList>
      <div class="py-8 h-40 text-center">Loadding data...</div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "~/components/PostList.vue";
const BASE_URL = process.env.BASE_URL;
const API_URL = process.env.API_URL;
export default {
  head() {
    let title =
      "Tourist destinations, Point of interest, thing to do, travel guide";
    const imgUrl = `${BASE_URL}/thumb.jpg`;
    const siteTitle = `The most famous tourist destinations`;
    const description = `The most famous tourist destinations, ${title}`;
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
  data: function () {
    const params = this.$route.query;
    const baseNoImage = process.env.baseNoImage;
    return {
      params: params,
      baseNoImage,
      listOfCat: [],
    };
  },
  components: {
    PostList,
  },
  methods: {},
  computed: {},
  mounted() {
    if (this.$store.state.categories.list) {
      for (let cat of this.$store.state.categories.list) {
        if (cat.count == 0) {
          continue;
        }
        fetch(`${API_URL}/posts/listOfCat`, {
          method: "POST",
          body: new URLSearchParams({
            categories: cat._id,
          }),
        }).then((res) =>
          res.json().then((res) => {
            this.listOfCat.push({
              ...cat,
              posts: res,
            });
          })
        );
      }
    }
  },
};
</script>
