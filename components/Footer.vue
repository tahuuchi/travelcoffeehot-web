<template>
  <div class="block w-full">
    <div class="container m-auto">
      <p class="text-center py-4">Copyright © 2020 travelcoffeehot.com</p>
    </div>
    <button class="fixed bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 right-0 bottom-0" title="Lên đầu trang" onClick="window.scrollTo({ top: 0, behavior: 'smooth' });">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" class="fill-current w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  
  computed: mapState([
    'categories'
  ]),
};
</script>
