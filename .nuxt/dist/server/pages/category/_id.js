exports.ids = [1];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=template&id=23da4b36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode("<div class=\"content py-4\">","</div>",[_c('PostListCat',{attrs:{"posts":_vm.listCat,"cat":_vm.cat}}),_vm._ssrNode(" <div class=\"clearfix\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=template&id=23da4b36&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PostListCat.vue?vue&type=template&id=2cb9f453&
var PostListCatvue_type_template_id_2cb9f453_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.posts)?_c('div',{staticClass:"w-full"},[(!_vm.$helpers.isEmpty(_vm.posts))?_vm._ssrNode("<div class=\"w-ful\">","</div>",[_vm._ssrNode("<h2 class=\"md:text-2xl text-blue-600\">"+_vm._ssrEscape(_vm._s(_vm.cat.title))+"</h2> <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"\n        grid\n        gap-4\n        grid-cols-1\n        md:grid-cols-3\n        lg:grid-cols-4\n        xl:grid-cols-5\n        border-solid border-1 border-gray-600\n      \">","</div>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<div class=\"inline-block pb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center h-48 overflow-hidden\">","</div>",[_c('router-link',{staticClass:"block",attrs:{"to":("/" + (_vm.cat.slug) + "/article/" + (post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(post.thumb),expression:"post.thumb"}],attrs:{"src":post.thumb,"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"text-base\">","</h4>",[_c('router-link',{attrs:{"to":("/" + (_vm.cat.slug) + "/article/" + (post.slug))}},[_vm._v(_vm._s(post.title))])],1)],2)}),0)],2):_vm._e()]):_vm._e()}
var PostListCatvue_type_template_id_2cb9f453_staticRenderFns = []


// CONCATENATED MODULE: ./components/PostListCat.vue?vue&type=template&id=2cb9f453&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostListCat.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var PostListCatvue_type_script_lang_js_ = ({
  props: ["posts", "cat"],

  data() {
    const params = this.$route.query;
    const path = this.$route.path;
    return {
      params: params,
      path: path
    };
  }

});
// CONCATENATED MODULE: ./components/PostListCat.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostListCatvue_type_script_lang_js_ = (PostListCatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PostListCat.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostListCatvue_type_script_lang_js_,
  PostListCatvue_type_template_id_2cb9f453_render,
  PostListCatvue_type_template_id_2cb9f453_staticRenderFns,
  false,
  null,
  null,
  "2fc63098"
  
)

/* harmony default export */ var PostListCat = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    let {
      title
    } = this.$store.state.categories.current;
    const imgUrl = `${BASE_URL}/thumb.jpg`;
    const siteTitle = `${title}`;
    const description = `The most  ${title}`;
    return {
      title: siteTitle,
      meta: [{
        hid: "og:site_name",
        name: "og:site_name",
        content: "travelcoffeehot.com"
      }, {
        hid: "og:type",
        name: "og:type",
        content: "article"
      }, {
        hid: "og:description",
        name: "og:description",
        content: description
      }, {
        hid: "og:title",
        name: "og:title",
        content: siteTitle
      }, {
        hid: "twitter:card",
        name: "twitter:card",
        content: "article"
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: description
      }, {
        hid: "twitter:title",
        name: "twitter:title",
        content: siteTitle
      }, {
        name: "title",
        content: siteTitle
      }, {
        name: "keywords",
        content: `${title} `
      }, {
        name: "description",
        content: description
      }]
    };
  },

  watchQuery: ["page", "s"],

  async asyncData({
    store,
    params,
    $axios
  }) {
    await store.dispatch("categories/fetchOne", {
      _id: params.id
    });
    await store.dispatch("posts/listCat", {
      categories: store.state.categories.current._id
    });
  },

  data: function () {
    const params = this.$route.query;
    const baseNoImage = "https://via.placeholder.com/300x200.png?text=No+image";
    const cat = this.$store.state.categories.current;
    return {
      params: params,
      baseNoImage,
      cat
    };
  },
  components: {
    PostListCat: PostListCat
  },
  methods: {},
  computed: { ...Object(external_vuex_["mapGetters"])({
      listCat: "posts/getListCat"
    })
  }
});
// CONCATENATED MODULE: ./pages/category/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/category/_id.vue





/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  category_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9a254fa6"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map