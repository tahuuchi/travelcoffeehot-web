(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{352:function(t,e,r){"use strict";r.r(e);r(27),r(13),r(26),r(44),r(45);var n=r(16),c=r(3),o=(r(7),r(18)),l={props:["posts","cat"],data:function(){return{params:this.$route.query,path:this.$route.path}}},d=r(12),h=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.posts?r("div",{staticClass:"w-full"},[t.$helpers.isEmpty(t.posts)?t._e():r("div",{staticClass:"w-ful"},[r("h2",{staticClass:"md:text-2xl text-blue-600"},[t._v(t._s(t.cat.title))]),t._v(" "),r("div",{staticClass:"clearfix"}),t._v(" "),r("div",{staticClass:"\n        grid\n        gap-4\n        grid-cols-1\n        md:grid-cols-3\n        lg:grid-cols-4\n        xl:grid-cols-5\n        border-solid border-1 border-gray-600\n      "},t._l(t.posts,(function(e){return r("div",{key:e._id,staticClass:"inline-block pb-2"},[r("div",{staticClass:"flex items-center h-48 overflow-hidden"},[r("router-link",{staticClass:"block",attrs:{to:"/"+t.cat.slug+"/article/"+e.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thumb,expression:"post.thumb"}],attrs:{src:e.thumb,alt:""}})])],1),t._v(" "),r("h4",{staticClass:"text-base"},[r("router-link",{attrs:{to:"/"+t.cat.slug+"/article/"+e.slug}},[t._v(t._s(e.title))])],1)])})),0)])]):t._e()}),[],!1,null,null,null).exports;function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={head:function(){var title=this.$store.state.categories.current.title,t=("".concat("http://localhost:4001","/thumb.jpg"),"".concat(title)),e="The most  ".concat(title);return{title:t,meta:[{hid:"og:site_name",name:"og:site_name",content:"travelcoffeehot.com"},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:description",name:"og:description",content:e},{hid:"og:title",name:"og:title",content:t},{hid:"twitter:card",name:"twitter:card",content:"article"},{hid:"twitter:description",name:"twitter:description",content:e},{hid:"twitter:title",name:"twitter:title",content:t},{name:"title",content:t},{name:"keywords",content:"".concat(title," ")},{name:"description",content:e}]}},watchQuery:["page","s"],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,t.$axios,e.next=3,r.dispatch("categories/fetchOne",{_id:n.id});case 3:return e.next=5,r.dispatch("posts/listCat",{categories:r.state.categories.current._id});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{params:this.$route.query,baseNoImage:"https://via.placeholder.com/300x200.png?text=No+image",cat:this.$store.state.categories.current}},components:{PostListCat:h},methods:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({listCat:"posts/getListCat"}))},v=f,w=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-container"}},[r("div",{staticClass:"content py-4"},[r("PostListCat",{attrs:{posts:t.listCat,cat:t.cat}}),t._v(" "),r("div",{staticClass:"clearfix"})],1)])}),[],!1,null,null,null);e.default=w.exports}}]);