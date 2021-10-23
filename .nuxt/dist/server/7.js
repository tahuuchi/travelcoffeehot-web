exports.ids = [7];
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/destinations/province.vue?vue&type=template&id=2373c6b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode("<div class=\"content py-4\">","</div>",[_vm._ssrNode("<h1 class=\"p-2\">"+_vm._ssrEscape(_vm._s(_vm.destination.title))+"</h1> "),_vm._ssrNode("<div class=\"block md:flex pb-4\">","</div>",[_vm._ssrNode("<div class=\"w-full\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('ads')],1),_vm._ssrNode(" "),(_vm.destination.thumb)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.destination.thumb),expression:"destination.thumb"}],staticClass:"w-full md:float-left md:pr-4 md:max-w-sm xl:max-w-xl",attrs:{"src":_vm.destination.thumb,"alt":_vm.destination.title}},[]):_vm._e(),_vm._ssrNode(" <div>"+(_vm._s(_vm.destination.intro))+"</div>")],2)]),_vm._ssrNode(" "),(_vm.destination.children)?_vm._ssrNode("<div class=\"block\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",_vm._l((_vm.destination.children),function(children){return _c('nuxt-link',{key:children.slug,staticClass:"bg-gray-200 p-1 m-1 inline-block rounded hover:bg-blue-200",attrs:{"to":("/destinations/" + (_vm.$route.params.country) + "/" + (_vm.destination.slug) + "/" + (children.slug)),"title":children.title}},[_vm._v("\n          "+_vm._s(children.title)+"\n        ")])}),1)]):_vm._e(),_vm._ssrNode(" <div class=\"clearfix\"></div> "),_c('PostList',{attrs:{"listOfCat":_vm.listOfCat}}),_vm._ssrNode(" <div class=\"clearfix\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/destinations/province.vue?vue&type=template&id=2373c6b1&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/PostList.vue + 4 modules
var PostList = __webpack_require__(41);

// EXTERNAL MODULE: ./components/ads.vue + 2 modules
var ads = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/destinations/province.vue?vue&type=script&lang=js&
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



const BASE_URL = "http://localhost:4001";
/* harmony default export */ var provincevue_type_script_lang_js_ = ({
  head() {
    let {
      title,
      des,
      thumb
    } = this.$store.state.destinations.current;
    const imgUrl = thumb || `${BASE_URL}/thumb.jpg`;
    const siteTitle = `The most famous tourist destinations in ${title}`;
    const description = des || `Point of interest  ${title}, thing to do in ${title}, travel guide in ${title}, hotel in ${title}, food in ${title} `;
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
        hid: "og:image",
        name: "og:image",
        content: imgUrl
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
        hid: "twitter:image",
        name: "twitter:image",
        content: imgUrl
      }, {
        name: "title",
        content: siteTitle
      }, {
        name: "image",
        content: imgUrl
      }, {
        name: "keywords",
        content: `point of interest  ${title}, thing to do in ${title}, travel guide in ${title}, hotel in ${title}, food in ${title} `
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
    await store.dispatch("destinations/fetchOne", {
      slug: params.province
    });

    if (store.state.destinations && store.state.destinations.current && store.state.destinations.current.children) {
      const desId = [];
      desId.push(store.state.destinations.current._id);

      for (let des of store.state.destinations.current.children) {
        desId.push(des._id);
      }

      await store.dispatch("posts/listOfCat", {
        desId,
        type: store.state.destinations.current.type
      });
    }
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
    PostList: PostList["a" /* default */],
    ads: ads["a" /* default */]
  },
  methods: {},
  computed: { ...Object(external_vuex_["mapGetters"])({
      destination: "destinations/getCurrent",
      listOfCat: "posts/getListOfCat"
    })
  }
});
// CONCATENATED MODULE: ./pages/destinations/province.vue?vue&type=script&lang=js&
 /* harmony default export */ var destinations_provincevue_type_script_lang_js_ = (provincevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/destinations/province.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  destinations_provincevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b94e206"
  
)

/* harmony default export */ var province = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map