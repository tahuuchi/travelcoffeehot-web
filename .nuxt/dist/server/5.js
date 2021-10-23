exports.ids = [5];
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _components_ads_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _components_ads2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_4__);
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





const API_URL = "http://localhost:5001";
const BASE_URL = "http://localhost:4001";
/* harmony default export */ __webpack_exports__["a"] = ({
  head() {
    let {
      title,
      tags,
      thumb
    } = this.$store.state.posts.detail;
    const keywords = [];

    for (let tag of tags) {
      keywords.push(tag.title);
    }

    const imgUrl = thumb && thumb || `${BASE_URL}/thumb.jpg`;
    const siteTitle = `${title}`;
    const description = `${keywords.join(", ")}, ${title}`;
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
        content: `${description}, ${title}`
      }, {
        name: "description",
        content: description
      }]
    };
  },

  watchQuery: ["page", "s"],

  async asyncData({
    store,
    params
  }) {
    await store.dispatch("posts/getOne", {
      slug: params.slug
    });
  },

  data: function () {
    const params = this.$route.query;
    const media = [];
    let {
      title,
      tags,
      rate,
      totalRate
    } = this.$store.state.posts.detail;
    return {
      postImages: [],
      params: params,
      media,
      index: null,
      rate: {
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        name: title,
        aggregateRating: {
          "@type": "AggregateRating",
          bestRating: 5,
          ratingValue: rate,
          ratingCount: totalRate,
          worstRating: 0
        }
      }
    };
  },
  components: {
    PostList: _components_PostList_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    StarRating: (vue_star_rating__WEBPACK_IMPORTED_MODULE_4___default()),
    ads: _components_ads_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    ads2: _components_ads2_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  },
  methods: {},
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
      post: "posts/getOne"
    })
  },

  mounted() {
    if (this.$store.state.posts.detail) {
      fetch(`${API_URL}/posts/images`, {
        method: "POST",
        body: new URLSearchParams({
          postId: this.$store.state.posts.detail._id
        })
      }).then(res => res.json().then(res => {
        if (res) {
          for (let img of res) {
            if (img.link) {
              this.media.push({
                url: img.link,
                title: ""
              });
            }
          }
        }

        this.postImages = res;
      }));
    }
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URLSearchParams"]))

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ads2.vue?vue&type=template&id=3fe7b63c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('a',{attrs:{"href":"https://www.vultr.com/?ref=6872180"}},[_c('img',{attrs:{"src":"https://www.vultr.com/media/banners/banner_300x250.png","width":"300","height":"250"}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ads2.vue?vue&type=template&id=3fe7b63c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ads2.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5365a8dc"
  
)

/* harmony default export */ var ads2 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=template&id=318cfb76&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-container"}},[_vm._ssrNode(((this.rate && parseInt(_vm.post.totalRate) > 0)?("<script type=\"application/ld+json\">"+(_vm._s(this.rate))+"</script>"):"<!---->")+" "),_vm._ssrNode("<div class=\"content py-4\">","</div>",[(_vm.post.des)?_vm._ssrNode("<div class=\"block\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",_vm._l((_vm.post.des),function(des){return _c('nuxt-link',{key:des.slug,staticClass:"bg-gray-200 p-1 m-1 inline-block rounded hover:bg-blue-200",attrs:{"to":("" + (des.link)),"title":des.title}},[_vm._v(_vm._s(des.title))])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('ads')],1)],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block md:flex pb-4\">","</div>",[_vm._ssrNode("<div class=\"w-full md:flex\">","</div>",[_vm._ssrNode("<div class=\"w-full md:w-2/5\">","</div>",[(_vm.post.thumb)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.post.thumb),expression:"post.thumb"}],staticClass:"w-full md:float-left md:pr-4 md:max-w-full",attrs:{"src":_vm.post.thumb,"alt":_vm.post.title}},[]):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full md:w-3/5\">","</div>",[_vm._ssrNode("<h1 class=\"capitalize md:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h1> <p><strong>Address:</strong> <span>"+_vm._ssrEscape(_vm._s(_vm.post.address))+"</span></p> "),(_vm.post.data)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode(((_vm.post.data.international_phone_number)?("<p><strong>Phone:</strong> <span>"+_vm._ssrEscape(_vm._s(_vm.post.data.international_phone_number))+"</span></p>"):"<!---->")+" "),(_vm.post.data.website)?_vm._ssrNode("<p>","</p>",[_vm._ssrNode("<strong>Website:</strong> "),_c('router-link',{staticClass:"text-blue-500 hover:text-blue-700",attrs:{"to":("redirect/?link=" + (_vm.post.data.website))}},[_vm._v(_vm._s(_vm.post.data.website))])],2):_vm._e(),_vm._ssrNode(" "+((
                _vm.post.data.opening_hours &&
                _vm.post.data.opening_hours.weekday_text
              )?("<p><strong>Opening hours:</strong> <br> "+(_vm._ssrList((_vm.post.data.opening_hours.weekday_text),function(open,i){return ("<span>"+_vm._ssrEscape("\n                "+_vm._s(open)+"\n                ")+"<br></span>")}))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"w-full rating pb-4\">","</div>",[_c('client-only',[_c('StarRating',{attrs:{"rating":parseFloat(_vm.post.rate),"increment":0.1,"star-size":30,"text-class":"customTextRating","read-only":true,"round-start-rating":true,"fixed-points":1}})],1),_vm._ssrNode(" <span class=\"mt-4\""+(_vm._ssrStyle(null,null, { display: (_vm.post.rate) ? '' : 'none' }))+">\n                Rate:\n                "+((_vm.post.rate)?("<span>"+_vm._ssrEscape(_vm._s(_vm.post.rate)+"/5")+"</span>"):"<!---->")+" -\n                "+((_vm.post.totalRate)?("<span>"+_vm._ssrEscape(_vm._s(_vm.post.totalRate))+"</span>"):"<!---->")+"\n                Review.\n              </span> "),(_vm.post.tags)?_vm._ssrNode("<div class=\"w-full py-4\">","</div>",[_vm._ssrNode("<strong>Tags:</strong> "),_vm._l((_vm.post.tags),function(tag){return _c('nuxt-link',{key:tag._id,staticClass:"capitalize px-1",attrs:{"to":("/tag/" + (tag.slug))}},[_vm._v(_vm._s(tag.title))])})],2):_vm._e()],2)],2):_vm._e()],2)],2)]),_vm._ssrNode(" <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"w-full text-center\">","</div>",[_c('ads')],1),_vm._ssrNode(" <div class=\"clearfix\"></div> "),_vm._ssrNode("<div class=\"block w-full\">","</div>",[_vm._ssrNode("<h2 class=\"block p-6 text-xl\">Reviews</h2> "),_vm._ssrNode("<div class=\"rate\">","</div>",[(_vm.post.data && _vm.post.data.reviews)?_vm._ssrNode("<div class=\"w-full\">","</div>",_vm._l((_vm.post.data.reviews),function(review,index){return _vm._ssrNode("<div class=\"w-full m-2 block clearfix\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",review.profile_photo_url))+(_vm._ssrAttr("alt",review.author_name))+" class=\"w-1/2 m-auto md:w-1/12 md:float-left md:mr-4 max-w-sm\"> "),_c('client-only',[_c('StarRating',{attrs:{"rating":parseFloat(review.rating),"increment":0.1,"star-size":25,"read-only":true,"round-start-rating":true,"fixed-points":1}})],1),_vm._ssrNode(" <a"+(_vm._ssrAttr("href",review.author_url))+" target=\"_blank\"><span><strong>"+_vm._ssrEscape(_vm._s(review.author_name))+"</strong></span></a> <p>"+_vm._ssrEscape(_vm._s(review.text))+"</p> <p>"+_vm._ssrEscape(_vm._s(review.relative_time_description))+"</p>")],2)}),0):_vm._e()]),_vm._ssrNode(" "),(_vm.media)?_vm._ssrNode("<div class=\"gall\">","</div>",[_vm._ssrNode("<h2 class=\"text-center block\">Gallery</h2> <div class=\"p-4\"><div class=\"grid grid-cols-1 md:grid-cols-5 gap-4\">"+(_vm._ssrList((_vm.media),function(img,thumbIndex){return ("<div><a"+(_vm._ssrAttr("href",img.url))+" title=\"Click to open full photo\" onclick=\"return false\"><img"+(_vm._ssrAttr("src",img.url))+"></a></div>")}))+"</div></div> "),_c('client-only',[_c('gallery',{attrs:{"images":_vm.media,"index":_vm.index,"disable-scroll":true},on:{"close":function($event){_vm.index = null}}})],1)],2):_vm._e()],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article.vue?vue&type=template&id=318cfb76&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=script&lang=js&
var articlevue_type_script_lang_js_ = __webpack_require__(45);

// CONCATENATED MODULE: ./pages/article.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bb9a7bc"
  
)

/* harmony default export */ var article = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map