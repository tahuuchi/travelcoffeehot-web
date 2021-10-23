<template>
<div class="w-full" v-if="listOfCat">
      <h2 class="md:text-2xl text-blue-600">{{$route.query.s}}</h2>
      <div class="clearfix"></div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-solid border-1 border-gray-600 ">
        <div class="inline-block pb-2" v-for="post of listOfCat" v-bind:key="post._id">
          <div class="flex items-center h-48 overflow-hidden">
            <router-link :to="`/${post.categories[0].slug}/article/${post.slug}`" class="block" v-if="post.images && post.images.length > 0">
              <img :src="`${$helpers.shuffle(post.images).link}`" v-lazy="$helpers.shuffle(post.images).link" alt="">
            </router-link>
          </div>
          <h4 class="text-base">
            <router-link :to="`/${post.categories[0].slug}/article/${post.slug}`">{{post.title}}</router-link>
          </h4>
        </div>
      </div>
</div>
</template>

<script>
export default {
  props: ['listOfCat'],
  data() {
    const params = this.$route.query;
    const path = this.$route.path;
    return {
      params: params,
      path: path,
    }
  },
}
</script>
