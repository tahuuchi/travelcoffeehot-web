module.exports = [
  {
    name: 'wards',
    path: '/destinations/:country/:province/:wards',
    component: 'pages/destinations/wards.vue'
  },
  {
    name: 'province',
    path: '/destinations/:country/:province',
    component: 'pages/destinations/province.vue'
  },
  {
    name: 'country',
    path: '/destinations/:country',
    component: 'pages/destinations/country.vue'
  },
  {
    name: 'category-article',
    path: '/:category/article/:slug',
    component: 'pages/article.vue'
  },
  {
    name: 'error',
    path: '/error',
    component: 'layouts/error.vue'
  }
]