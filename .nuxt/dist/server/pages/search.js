exports.ids = [3];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=df4a9eb0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode("<div class=\"content py-4\">","</div>",[_c('SearchList',{attrs:{"listOfCat":_vm.listOfCat}}),_vm._ssrNode(" <div class=\"clearfix\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=df4a9eb0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchList.vue?vue&type=template&id=422d2798&
var SearchListvue_type_template_id_422d2798_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.listOfCat)?_c('div',{staticClass:"w-full"},[_vm._ssrNode("<h2 class=\"md:text-2xl text-blue-600\">"+_vm._ssrEscape(_vm._s(_vm.$route.query.s))+"</h2> <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-solid border-1 border-gray-600 \">","</div>",_vm._l((_vm.listOfCat),function(post){return _vm._ssrNode("<div class=\"inline-block pb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center h-48 overflow-hidden\">","</div>",[(post.images && post.images.length > 0)?_c('router-link',{staticClass:"block",attrs:{"to":("/" + (post.categories[0].slug) + "/article/" + (post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.$helpers.shuffle(post.images).link),expression:"$helpers.shuffle(post.images).link"}],attrs:{"src":("" + (_vm.$helpers.shuffle(post.images).link)),"alt":""}})]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"text-base\">","</h4>",[_c('router-link',{attrs:{"to":("/" + (post.categories[0].slug) + "/article/" + (post.slug))}},[_vm._v(_vm._s(post.title))])],1)],2)}),0)],2):_vm._e()}
var SearchListvue_type_template_id_422d2798_staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchList.vue?vue&type=template&id=422d2798&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchListvue_type_script_lang_js_ = ({
  props: ['listOfCat'],

  data() {
    const params = this.$route.query;
    const path = this.$route.path;
    return {
      params: params,
      path: path
    };
  }

});
// CONCATENATED MODULE: ./components/SearchList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchListvue_type_script_lang_js_ = (SearchListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SearchList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchListvue_type_script_lang_js_,
  SearchListvue_type_template_id_422d2798_render,
  SearchListvue_type_template_id_422d2798_staticRenderFns,
  false,
  null,
  null,
  "94d4f6d4"
  
)

/* harmony default export */ var SearchList = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//


const BASE_URL = "http://localhost:4001";
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
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
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: description
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: siteTitle
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'article'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteTitle
      }, {
        name: 'title',
        content: siteTitle
      }, {
        name: 'keywords',
        content: `${title} `
      }, {
        name: 'description',
        content: description
      }]
    };
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
    const baseNoImage = "https://via.placeholder.com/300x200.png?text=No+image";
    return {
      params: params,
      baseNoImage
    };
  },
  components: {
    SearchList: SearchList
  },
  methods: {},
  computed: { ...Object(external_vuex_["mapGetters"])({
      listOfCat: 'posts/getListOfCat'
    })
  }
});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/search.vue





/* normalize component */

var search_component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0648aba8"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (search_component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map