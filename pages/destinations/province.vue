<template>
  <div id="page-container">
    <!--Container body-->
    <div class="content py-4">
      <h1 class="p-2">{{ destination.title }}</h1>
      <div class="block md:flex pb-4">
        <div class="w-full">
          <div class="text-center">
            <ads></ads>
          </div>
          <img
            v-if="destination.thumb"
            v-lazy="destination.thumb"
            :src="destination.thumb"
            :alt="destination.title"
            class="w-full md:float-left md:pr-4 md:max-w-sm xl:max-w-xl"
          />
          <div v-html="destination.intro"></div>
        </div>
      </div>
      <div class="block" v-if="destination.children">
        <div class="text-center">
          <nuxt-link
            :to="`/destinations/${$route.params.country}/${destination.slug}/${children.slug}`"
            v-for="children of destination.children"
            v-bind:key="children.slug"
            :title="children.title"
            class="bg-gray-200 p-1 m-1 inline-block rounded hover:bg-blue-200"
          >
            {{ children.title }}
          </nuxt-link>
        </div>
      </div>
      <div class="clearfix"></div>
      <PostList :listOfCat="listOfCat"></PostList>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "~/components/PostList.vue";
import ads from "~/components/ads.vue";

const BASE_URL = process.env.BASE_URL;
export default {
  head() {
    let { title, des, thumb } = this.$store.state.destinations.current;
    const imgUrl = thumb || `${BASE_URL}/thumb.jpg`;
    const siteTitle = `The most famous tourist destinations in ${title}`;
    const description =
      des ||
      `Point of interest  ${title}, thing to do in ${title}, travel guide in ${title}, hotel in ${title}, food in ${title} `;
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
          hid: "og:image",
          name: "og:image",
          content: imgUrl,
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
          hid: "twitter:image",
          name: "twitter:image",
          content: imgUrl,
        },

        {
          name: "title",
          content: siteTitle,
        },
        {
          name: "image",
          content: imgUrl,
        },
        {
          name: "keywords",
          content: `point of interest  ${title}, thing to do in ${title}, travel guide in ${title}, hotel in ${title}, food in ${title} `,
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
    await store.dispatch("destinations/fetchOne", {
      slug: params.province,
    });
    if (
      store.state.destinations &&
      store.state.destinations.current &&
      store.state.destinations.current.children
    ) {
      const desId = [];
      desId.push(store.state.destinations.current._id);
      for (let des of store.state.destinations.current.children) {
        desId.push(des._id);
      }
      await store.dispatch("posts/listOfCat", {
        desId,
        type: store.state.destinations.current.type,
      });
    }
  },
  data: function () {
    const params = this.$route.query;
    const baseNoImage = process.env.baseNoImage;
    return {
      params: params,
      baseNoImage,
    };
  },
  components: {
    PostList,
    ads,
  },
  methods: {},
  computed: {
    ...mapGetters({
      destination: "destinations/getCurrent",
      listOfCat: "posts/getListOfCat",
    }),
  },
};
</script>
