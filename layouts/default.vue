<template>
  <div id="main" class="md:pl-56">
    <Sidebar
      :setParentWidth="setParentWidth"
      :categories="categories"
      :show="showSideBar"
      :showMenu="showMenu"
    />
    <div class="min-h-screen bg-gray-100 relative px-4">
      <Header :showMenu="showMenu" />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import { mapGetters } from "vuex";
export default {
  loading: false,
  data: () => {
    return {
      collapsed: false,
      showSideBar: false,
    };
  },
  components: {
    Sidebar,
    Header,
    Footer,
  },
  methods: {
    setParentWidth(collapsed) {
      this.collapsed = collapsed;
    },
    showMenu() {
      this.showSideBar = this.showSideBar ? false : true;
      console.log("click showhide", this.showSideBar);
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/get",
    }),
  },
  mounted() {
    setTimeout(() => {
      this.$nuxt.$loading.finish();
    }, 1000);
  },
};
</script>