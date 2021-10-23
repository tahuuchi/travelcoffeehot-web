import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b37e3f9a = () => interopDefault(import('../layouts/error.vue' /* webpackChunkName: "" */))
const _35d2225c = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "" */))
const _7f33a994 = () => interopDefault(import('../pages/destinations/country.vue' /* webpackChunkName: "" */))
const _2ad92a80 = () => interopDefault(import('../pages/destinations/province.vue' /* webpackChunkName: "" */))
const _4f891a97 = () => interopDefault(import('../pages/destinations/wards.vue' /* webpackChunkName: "" */))
const _968ff69c = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _91bd939a = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _20a787ab = () => interopDefault(import('../pages/tag/_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _19104bb8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/error",
    component: _b37e3f9a,
    name: "error"
  }, {
    path: "/:category/article/:slug",
    component: _35d2225c,
    name: "category-article"
  }, {
    path: "/destinations/:country",
    component: _7f33a994,
    name: "country"
  }, {
    path: "/destinations/:country/:province",
    component: _2ad92a80,
    name: "province"
  }, {
    path: "/destinations/:country/:province/:wards",
    component: _4f891a97,
    name: "wards"
  }, {
    path: "/article",
    component: _35d2225c,
    name: "article"
  }, {
    path: "/search",
    component: _968ff69c,
    name: "search"
  }, {
    path: "/destinations/country",
    component: _7f33a994,
    name: "destinations-country"
  }, {
    path: "/destinations/province",
    component: _2ad92a80,
    name: "destinations-province"
  }, {
    path: "/destinations/wards",
    component: _4f891a97,
    name: "destinations-wards"
  }, {
    path: "/category/:id?",
    component: _91bd939a,
    name: "category-id"
  }, {
    path: "/tag/:id?",
    component: _20a787ab,
    name: "tag-id"
  }, {
    path: "/",
    component: _19104bb8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
