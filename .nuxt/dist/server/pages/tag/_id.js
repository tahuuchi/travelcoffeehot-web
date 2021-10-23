exports.ids = [4];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("ae66e53e", content, true, context)
};

/***/ }),

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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ads_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ads_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ads_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ads_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ads_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".s300-250{width:300px;margin:auto}.s-728x90{width:728px;margin:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ads.vue?vue&type=template&id=13466c32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('client-only',[(_vm.$device.isDesktopOrTablet)?_c('div',{staticClass:"block text-center s-728x90"},[_c('a',{attrs:{"href":"https://www.vultr.com/?ref=6872180"}},[_c('img',{attrs:{"src":"https://www.vultr.com/media/banners/banner_728x90.png","width":"728","height":"90"}})])]):_c('div',{staticClass:"block text-center s300-250"},[_c('a',{attrs:{"href":"https://www.vultr.com/?ref=6872180"}},[_c('img',{attrs:{"src":"https://www.vultr.com/media/banners/banner_300x250.png","width":"300","height":"250"}})])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ads.vue?vue&type=template&id=13466c32&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ads.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "48f977d0"
  
)

/* harmony default export */ var ads = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_id.vue?vue&type=template&id=6421c794&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode("<div class=\"content py-4\">","</div>",[(!_vm.$helpers.isEmpty(_vm.posts.list))?_vm._ssrNode("<div class=\"block p-4\">","</div>",[_vm._ssrNode("<h2 class=\"md:text-2xl text-blue-600 capitalize\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.tags.current.title)+"\n      ")+"</h2> "),_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('ads')],1),_vm._ssrNode(" <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-solid border-1 border-gray-600\">","</div>",_vm._l((_vm.posts.list),function(post){return _vm._ssrNode("<div class=\"inline-block pb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center h-48 overflow-hidden\">","</div>",[(post.thumb)?_c('router-link',{staticClass:"block",attrs:{"to":("/" + (post.categories[0].slug) + "/article/" + (post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(post.thumb),expression:"post.thumb"}],attrs:{"src":post.thumb,"alt":""}})]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"text-base\">","</h4>",[_c('router-link',{attrs:{"to":("/" + (post.categories[0].slug) + "/article/" + (post.slug))}},[_vm._v(_vm._s(post.title))])],1)],2)}),0)],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tag/_id.vue?vue&type=template&id=6421c794&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(15);

// EXTERNAL MODULE: ./components/PostList.vue + 4 modules
var PostList = __webpack_require__(41);

// EXTERNAL MODULE: ./components/ads.vue + 2 modules
var ads = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_id.vue?vue&type=script&lang=js&
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




/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    const tag = this.$store.state.tags.current;
    const title = `${tag.title}`;
    const description = `The most ${tag.title}`;
    const thumb = `${"http://localhost:4001"}/thumb.jpg`;
    return {
      title: title,
      meta: [{
        hid: "og:site_name",
        name: "og:site_name",
        content: "travelcoffeehot.com"
      }, {
        hid: "og:type",
        name: "og:type",
        content: "ComicSeries"
      }, {
        hid: "og:description",
        name: "og:description",
        content: description
      }, {
        hid: "og:title",
        name: "og:title",
        content: title
      }, {
        hid: "og:image",
        name: "og:image",
        content: thumb
      }, {
        hid: "twitter:card",
        name: "twitter:card",
        content: "ComicSeries"
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: description
      }, {
        hid: "twitter:title",
        name: "twitter:title",
        content: title
      }, {
        hid: "twitter:image",
        name: "twitter:image",
        content: thumb
      }, {
        name: "tile",
        content: title
      }, {
        name: "image",
        content: thumb
      }, {
        name: "keywords",
        content: `${tag.title}`
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
    route
  }) {
    await store.dispatch("tags/fetchOne", {
      _id: params.id
    });
    await store.dispatch("posts/fetchAll", {
      tag: store.state.tags.current._id
    });
  },

  data: function () {
    const params = this.$route.query;
    return {
      params: params
    };
  },
  components: {
    Sidebar: Sidebar["a" /* default */],
    PostList: PostList["a" /* default */],
    ads: ads["a" /* default */]
  },
  methods: {},
  computed: Object(external_vuex_["mapState"])(["posts", "tags"])
});
// CONCATENATED MODULE: ./pages/tag/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/tag/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "460edd1e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map