<template>
<div id="page-container">
  <!--Container body-->
  <div class="content py-4">
    <SearchList :listOfCat="listOfCat"></SearchList>
    <div class="clearfix"></div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
import SearchList from '~/components/SearchList.vue';
const BASE_URL = process.env.BASE_URL;
export default {
  
  head() {
    let title = 'Tourist destinations, Point of interest, thing to do, travel guide';
    const imgUrl = `${BASE_URL}/thumb.jpg`;
    const siteTitle = `The most famous tourist destinations`;
    const description = `The most famous tourist destinations, ${title}`;
    return {
      title: siteTitle,
      meta: [{
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'travelcoffeehot.com'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: siteTitle
        },

        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'article'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: siteTitle
        },

        {
          name: 'title',
          content: siteTitle
        },
        {
          name: 'keywords',
          content: `${title} `
        },
        {
          name: 'description',
          content: description
        },
      ]
    }
  },
  watchQuery: ['page', 's'],
  async asyncData({
    store,
    params,
    $axios
  }) {
    await store.dispatch('posts/listOfCat', {
      isHome: true
    });
  },
  data: function () {
    const params = this.$route.query;
    const baseNoImage = process.env.baseNoImage;
    return {
      params: params,
      baseNoImage,
    }
  },
  components: {
    SearchList
  },
  methods: {},
  computed: {
    ...mapGetters({
      listOfCat: 'posts/getListOfCat'
    }),
  }
}
</script>
