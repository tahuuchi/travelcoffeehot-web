<template>
<!--Container header-->
<div class="header w-full block pt-4">
  <div class="w-full flex mt-2 float-left md:w-2/4 md:mt-0 xl:w-2/4">
    <span class="pr-2 cursor-pointer md:hidden" v-on:click="showMenu()" id="menuButton">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="fill-current w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
    </span>
    <div class="relative w-full">
      <input type="search" placeholder="Enter keywords" class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-500 rounded py-2 px-2 pl-10 appearance-none leading-normal" @keyup.enter="event => submit(event)" />
      <div class="absolute search-icon" style="top: 0.35rem;left: 0.75rem;">
        <svg class="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
</div>

</template>

<script>
import {
  mapState
} from 'vuex';
export default {
  props: ["showMenu"],
  data: () => {
    return {}
  },
  components: {},
  methods: {
    submit: function (event) {
      if (event.target.value !== '') {
        this.$router.push(`/search?s=${event.target.value}`);
      }
    }
  },
  computed: {

  },
}
</script>
