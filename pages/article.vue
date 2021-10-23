<template>
  <div id="page-container">
    <script
      type="application/ld+json"
      v-if="this.rate && parseInt(post.totalRate) > 0"
      v-html="this.rate"
    ></script>

    <!--Container body-->
    <div class="content py-4">
      <div class="block" v-if="post.des">
        <div class="text-center">
          <nuxt-link
            v-for="des of post.des"
            :to="`${des.link}`"
            v-bind:key="des.slug"
            :title="des.title"
            class="bg-gray-200 p-1 m-1 inline-block rounded hover:bg-blue-200"
            >{{ des.title }}</nuxt-link
          >
        </div>
        <div class="text-center">
          <ads></ads>
        </div>
      </div>
      <div class="block md:flex pb-4">
        <div class="w-full md:flex">
          <div class="w-full md:w-2/5">
            <img
              v-if="post.thumb"
              v-lazy="post.thumb"
              :src="post.thumb"
              :alt="post.title"
              class="w-full md:float-left md:pr-4 md:max-w-full"
            />
          </div>
          <div class="w-full md:w-3/5">
            <h1 class="capitalize md:text-3xl">{{ post.title }}</h1>
            <p>
              <strong>Address:</strong>
              <span>{{ post.address }}</span>
            </p>
            <div v-if="post.data">
              <p v-if="post.data.international_phone_number">
                <strong>Phone:</strong>
                <span>{{ post.data.international_phone_number }}</span>
              </p>
              <p v-if="post.data.website">
                <strong>Website:</strong>
                <router-link
                  class="text-blue-500 hover:text-blue-700"
                  :to="`redirect/?link=${post.data.website}`"
                  >{{ post.data.website }}</router-link
                >
              </p>
              <p
                v-if="
                  post.data.opening_hours &&
                  post.data.opening_hours.weekday_text
                "
              >
                <strong>Opening hours:</strong>
                <br />
                <span
                  v-for="(open, i) of post.data.opening_hours.weekday_text"
                  v-bind:key="i"
                >
                  {{ open }}
                  <br />
                </span>
              </p>
              <div class="w-full rating pb-4">
                <client-only>
                  <StarRating
                    :rating="parseFloat(post.rate)"
                    :increment="0.1"
                    :star-size="30"
                    text-class="customTextRating"
                    :read-only="true"
                    :round-start-rating="true"
                    :fixed-points="1"
                  ></StarRating>
                </client-only>
                <span v-show="post.rate" class="mt-4">
                  Rate:
                  <span v-if="post.rate">{{ post.rate }}/5</span> -
                  <span v-if="post.totalRate">{{ post.totalRate }}</span>
                  Review.
                </span>
                <div v-if="post.tags" class="w-full py-4">
                  <strong>Tags:</strong>
                  <nuxt-link
                    :to="`/tag/${tag.slug}`"
                    v-for="tag of post.tags"
                    v-bind:key="tag._id"
                    class="capitalize px-1"
                    >{{ tag.title }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="w-full text-center">
        <ads></ads>
      </div>
      <div class="clearfix"></div>
      <div class="block w-full">
        <h2 class="block p-6 text-xl">Reviews</h2>
        <div class="rate">
          <div class="w-full" v-if="post.data && post.data.reviews">
            <div
              class="w-full m-2 block clearfix"
              v-for="(review, index) of post.data.reviews"
              v-bind:key="index"
            >
              <img
                :src="review.profile_photo_url"
                :alt="review.author_name"
                class="w-1/2 m-auto md:w-1/12 md:float-left md:mr-4 max-w-sm"
              />
              <no-ssr placeholder="loading...">
                <StarRating
                  :rating="parseFloat(review.rating)"
                  :increment="0.1"
                  :star-size="25"
                  :read-only="true"
                  :round-start-rating="true"
                  :fixed-points="1"
                ></StarRating>
              </no-ssr>

              <a :href="review.author_url" target="_blank">
                <span>
                  <strong>{{ review.author_name }}</strong>
                </span>
              </a>
              <p>{{ review.text }}</p>
              <p>{{ review.relative_time_description }}</p>
            </div>
          </div>
        </div>
        <div class="gall" v-if="media">
          <h2 class="text-center block">Gallery</h2>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div v-for="(img, thumbIndex) in media" :key="thumbIndex">
                <a
                  :href="img.url"
                  @click="
                    index = thumbIndex;
                    return false;
                  "
                  title="Click to open full photo"
                  onclick="return false"
                >
                  <img :src="img.url" />
                </a>
              </div>
            </div>
          </div>
          <client-only>
            <gallery
              :images="media"
              :index="index"
              :disable-scroll="true"
              @close="index = null"
            />
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "~/components/PostList.vue";
import ads from "~/components/ads.vue";
import ads2 from "~/components/ads2.vue";
import StarRating from "vue-star-rating";
const API_URL = process.env.API_URL;
const BASE_URL = process.env.BASE_URL;
export default {
  head() {
    let { title, tags, thumb } = this.$store.state.posts.detail;
    const keywords = [];
    for (let tag of tags) {
      keywords.push(tag.title);
    }
    const imgUrl = (thumb && thumb) || `${BASE_URL}/thumb.jpg`;
    const siteTitle = `${title}`;
    const description = `${keywords.join(", ")}, ${title}`;
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
          content: `${description}, ${title}`,
        },
        {
          name: "description",
          content: description,
        },
      ],
    };
  },
  watchQuery: ["page", "s"],
  async asyncData({ store, params }) {
    await store.dispatch("posts/getOne", {
      slug: params.slug,
    });
  },
  data: function () {
    const params = this.$route.query;
    const media = [];
    let { title, tags, rate, totalRate } = this.$store.state.posts.detail;
    return {
      postImages: [],
      params: params,
      media,
      index: null,
      rate: {
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        name: title,
        aggregateRating: {
          "@type": "AggregateRating",
          bestRating: 5,
          ratingValue: rate,
          ratingCount: totalRate,
          worstRating: 0,
        },
      },
    };
  },
  components: {
    PostList,
    StarRating,
    ads,
    ads2,
  },
  methods: {},
  computed: {
    ...mapGetters({
      post: "posts/getOne",
    }),
  },
  mounted() {
    if (this.$store.state.posts.detail) {
      fetch(`${API_URL}/posts/images`, {
        method: "POST",
        body: new URLSearchParams({
          postId: this.$store.state.posts.detail._id,
        }),
      }).then((res) =>
        res.json().then((res) => {
          if (res) {
            for (let img of res) {
              if (img.link) {
                this.media.push({
                  url: img.link,
                  title: "",
                });
              }
            }
          }
          this.postImages = res;
        })
      );
    }
  },
};
</script>
