<template>
  <div class="container m-auto mt-10">
    <div class="text-center py-8">
      <h1 v-if="error && error.statusCode === 404">{{error.message || 'Không tìm thấy trang bạn yêu cầu' }}</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/" class="font-bold text-blue-400">Quay lại trang chủ</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>