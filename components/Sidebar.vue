<template>
  <!-- Sidebar -->
  <div
    class="
      md:block
      relative
      sidebar
      h-full
      min-h-screen
      max-h-screen
      overflow-auto
      w-48
      md:w-56
    "
    :class="show ? 'block' : 'hidden'"
  >
    <div class="xl:py-2">
      <div class="flex xitems-center text-left shadow-light py-2 px-4">
        <div class="text-xl pl-2">MAIN MENU</div>
      </div>
    </div>
    <div class="xl:py-2">
      <div
        class="
          hidden
          xl:block
          uppercase
          font-bold
          text-grey-darker text-xs
          px-4
          py-2
        "
      >
        <nuxt-link
          to="/"
          class="
            text-gray-900 text-base
            no-underline
            hover:no-underline
            font-extrabold
          "
          >travelcoffeehot</nuxt-link
        >
      </div>
    </div>
    <div class="group relative" v-for="cat of categories" v-bind:key="cat._id">
      <nuxt-link
        :to="`/category/${cat.slug}`"
        v-on:click="showMenu()"
        ro
        class="
          flex
          items-center
          text-left
          shadow-light
          py-2
          px-4
          border-l-4 border-transparent
          hover:bg-gray-400
        "
      >
        <span v-html="cat.icon"></span>
        <div class="text-sm pl-2">{{ cat.title }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["setParentWidth", "destinations", "categories", "show", "showMenu"],
  methods: {
    onResize() {
      this.width = window.screen.width;
      console.log("Resized:", this.width, $nuxt.$device.isMobile);
      /* if (this.width <= 768 && this.show) {
                this.showMenu();
            } */
    },
  },
  mounted() {
    this.setParentWidth($nuxt.$device.isMobile || this.width <= 768);
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
    let self = this;
    let button = document.getElementById("menuButton");
    window.addEventListener("click", function (e) {
      if (
        !self.$el.contains(e.target) &&
        !button.contains(e.target) &&
        self.show
      ) {
        self.showMenu();
      }
    });
  },
};
</script>
