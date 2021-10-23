<template>
  <div id="page-container">
    <div class="content py-4">
      <div class="block p-4" v-if="!$helpers.isEmpty(posts.list)">
        <h2 class="md:text-2xl text-blue-600 capitalize">
          {{ tags.current.title }}
        </h2>
        <div class="text-center">
          <ads></ads>
        </div>
        <div class="clearfix"></div>
        <div
          class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-solid border-1 border-gray-600"
        >
          <div
            class="inline-block pb-2"
            v-for="post of posts.list"
            v-bind:key="post._id"
          >
            <div class="flex items-center h-48 overflow-hidden">
              <router-link
                :to="`/${post.categories[0].slug}/article/${post.slug}`"
                class="block"
                v-if="post.thumb"
                ><img :src="post.thumb" v-lazy="post.thumb" alt=""
              /></router-link>
            </div>
            <h4 class="text-base">
              <router-link
                :to="`/${post.categories[0].slug}/article/${post.slug}`"
                >{{ post.title }}</router-link
              >
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sidebar from "~/components/Sidebar.vue";
import PostList from "~/components/PostList.vue";
import ads from "~/components/ads.vue";

export default {
  head() {
    const tag = this.$store.state.tags.current;
    const title = `${tag.title}`;
    const description = `The most ${tag.title}`;
    const thumb = `${process.env.baseUrl}/thumb.jpg`;
    return {
      title: title,
      meta: [
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "travelcoffeehot.com",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "ComicSeries",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: thumb,
        },

        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "ComicSeries",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: thumb,
        },

        {
          name: "tile",
          content: title,
        },
        {
          name: "image",
          content: thumb,
        },
        {
          name: "keywords",
          content: `${tag.title}`,
        },
        {
          name: "description",
          content: description,
        },
      ],
    };
  },
  watchQuery: ["page", "s"],
  async asyncData({ store, params, route }) {
    await store.dispatch("tags/fetchOne", {
      _id: params.id,
    });
    await store.dispatch("posts/fetchAll", {
      tag: store.state.tags.current._id,
    });
  },
  data: function () {
    const params = this.$route.query;
    return {
      params: params,
    };
  },
  components: {
    Sidebar,
    PostList,
    ads,
  },
  methods: {},
  computed: mapState(["posts", "tags"]),
};
</script>
