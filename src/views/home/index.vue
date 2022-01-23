<template>
    <van-list
      v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
    <L-index :list="userListPage" :indexList="indexList" :loading="loading" :infoList="infoList" @select="selectIndex"/>
</van-list>
</template>
<script>
import LIndex from '@/components/LIndex'
import { Toast } from 'vant'
export default {
  name: 'Home',
  components: {
    LIndex
  },
  data() {
    return {
      userListPage: [],
      infoList: [],
      userList: [{
        name: 'A',
        child: []
      },
      {
        name: 'B',
        child: []
      },
      {
        name: 'C',
        child: []
      }, {
        name: 'D',
        child: []
      }, {
        name: 'F',
        child: []
      },
      {
        name: 'J',
        child: []
      }, {
        name: 'O',
        child: []
      }, {
        name: 'P',
        child: []
      }, {
        name: 'Q',
        child: []
      }, {
        name: 'X',
        child: []
      },
      {
        name: 'Z',
        child: []
      }],
      loading: false,
      finished: false,
      indexList: ['A', 'B', 'C', 'D', 'F', 'J', 'O', 'P', 'Q', 'X', 'Z']
    }
  },
  mounted() {

  },
  beforeRouteLeave(to, from, next) {
    console.log(from)
    Toast.success('离开此页面路由，去执行查阅过的通讯信息，执行接口保存')
    setTimeout(() => {
      next()
    }, 1000)

    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  methods: {
    selectIndex(idx) {
      console.log(idx)
    },
    lazyLoading() {
      for (let i = 4; i < 11; i++) {
        this.userListPage.push(this.userList[i])
      }
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.userList.forEach(el => {
          for (let i = 0; i < 11; i++) {
            if (el.name === this.indexList[i]) {
              el.child.push({ name: this.indexList[i] + el.child.length + 1 })
            }
          }
        })

        // 加载状态结束
        this.loading = false
        // 数据全部加载完成

        if (this.userList[1].child.length >= 12) {
        //
          console.log(this.userList[1].child.length)
          for (let i = 0; i < 2; i++) {
            this.userListPage.push(this.userList[i])
          }
          this.finished = true
          //   setInterval(() => {
          setTimeout(() => {
            for (let i = 0; i < 11; i++) {
              this.userList[i].child.forEach(el => {
                this.infoList.push(el)
              })
            }

            setTimeout(() => {
              this.lazyLoading()
            }, 1000)
          }, 1000)
        }
      }, 200)
    }
  }
}
</script>
