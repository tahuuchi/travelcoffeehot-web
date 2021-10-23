exports.ids = [2];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PostList.vue?vue&type=template&id=3fe30b36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.listOfCat)?_c('div',{staticClass:"w-full"},_vm._l((_vm.listOfCat),function(cats){return _vm._ssrNode("<div class=\"block pb-4\">","</div>",[(!_vm.$helpers.isEmpty(cats.posts))?_vm._ssrNode("<div class=\"w-ful\">","</div>",[_vm._ssrNode("<h2 class=\"md:text-2xl text-blue-600\">"+_vm._ssrEscape(_vm._s(cats.title))+"</h2> <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-solid border-1 border-gray-600\">","</div>",_vm._l((cats.posts),function(post){return _vm._ssrNode("<div class=\"inline-block pb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center h-48 overflow-hidden\">","</div>",[_c('router-link',{staticClass:"block",attrs:{"to":("/" + (cats.slug) + "/article/" + (post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(post.thumb),expression:"post.thumb"}],attrs:{"src":post.thumb,"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"text-base\">","</h4>",[_c('router-link',{attrs:{"to":("/" + (cats.slug) + "/article/" + (post.slug))}},[_vm._v(_vm._s(post.title))])],1)],2)}),0)],2):_vm._e()])}),0):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostList.vue?vue&type=template&id=3fe30b36&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostListvue_type_script_lang_js_ = ({
  props: ["listOfCat"],

  data() {
    const params = this.$route.query;
    const path = this.$route.path;
    return {
      params: params,
      path: path
    };
  }

});
// CONCATENATED MODULE: ./components/PostList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostListvue_type_script_lang_js_ = (PostListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PostList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36aff4e4"
  
)

/* harmony default export */ var PostList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
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


const BASE_URL = "http://localhost:4001";
const API_URL = "http://localhost:5001";
/* harmony default export */ __webpack_exports__["a"] = ({
  head() {
    let title = "Tourist destinations, Point of interest, thing to do, travel guide";
    const imgUrl = `${BASE_URL}/thumb.jpg`;
    const siteTitle = `The most famous tourist destinations`;
    const description = `The most famous tourist destinations, ${title}`;
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
  data: function () {
    const params = this.$route.query;
    const baseNoImage = "https://via.placeholder.com/300x200.png?text=No+image";
    return {
      params: params,
      baseNoImage,
      listOfCat: []
    };
  },
  components: {
    PostList: _components_PostList_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  methods: {},
  computed: {},

  mounted() {
    if (this.$store.state.categories.list) {
      for (let cat of this.$store.state.categories.list) {
        if (cat.count == 0) {
          continue;
        }

        fetch(`${API_URL}/posts/listOfCat`, {
          method: "POST",
          body: new URLSearchParams({
            categories: cat._id
          })
        }).then(res => res.json().then(res => {
          this.listOfCat.push({ ...cat,
            posts: res
          });
        }));
      }
    }
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URLSearchParams"]))

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2e0ddf6d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode("<div class=\"content py-4\">","</div>",[(_vm.listOfCat.length > 0)?_c('PostList',{attrs:{"listOfCat":_vm.listOfCat}}):_vm._e(),_vm._ssrNode(" <div class=\"py-8 h-40 text-center\">Loadding data...</div> <div class=\"clearfix\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2e0ddf6d&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(46);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c0f5e204"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map