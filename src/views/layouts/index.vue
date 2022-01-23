<template>
  <div class="app-container">
    <!-- <van-sticky> -->
    <!-- </van-sticky> -->
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>

    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>

import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '通讯录',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '通讯录查询记录',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }

      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-code {
  background: #e8e8e8;
  text-align: center;
  padding: 30px;
  line-height: 25px;
}
</style>
