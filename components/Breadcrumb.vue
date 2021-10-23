<template>
  <div class="w-full my-2">
    <ul class="breadcrumbList">
      <li class="float-left" v-for="(crumb, index) in breadcrumb" v-bind:key="index">
        <nuxt-link :to="crumb.path">
          <span>{{crumb.name}}</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="clearfix"></div>
    <script type="application/ld+json" v-html="this.breadcrumbList"></script>
  </div>
    
</template>
<script>
import {  mapGetters } from 'vuex';
const BASE_URL = process.env.BASE_URL;

export default {
  data() {
    const breadcrumb = this.$store.state.breadcrumb.list;
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [],
    };
    if (breadcrumb) {
      let index = 0;
      breadcrumb.map(crumb => {
        index++;
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": index,
          "name": crumb.name,
          "item": `${BASE_URL}${crumb.path}`,
        });
      });
    }
    return {
      breadcrumbList,
    }
  },
  computed: {
    ...mapGetters({
      breadcrumb: 'breadcrumb/get'
    })
  }
};
</script>
