<template lang="html">
  <div class="loading-page" v-if="loading">
    <img src="~/assets/icon/loading.svg" class="m-auto" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start () {
      this.loading = true
      console.log('loading');
    },
    finish () {
      this.loading = false
    }
  },
  components: {
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 9999;
}
.loading-page img {
  position: relative;
  top:50%;
  margin-top: -45px;
}
</style>