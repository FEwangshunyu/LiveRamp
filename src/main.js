
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn
import VideoPlayer from 'vue-video-player'

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
import '@/assets/scripts/normalData'
// filters
import './filters'

import qs from 'qs'
Vue.prototype.$qs = qs
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.config.productionTip = false

// 注册全局eventbus this.$bus.$on $emit
// Vue.prototype.$bus = new Vue()
Vue.prototype.$EventBus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
