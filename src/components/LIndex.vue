<template>
  <div v-if="list.length>0">
    <van-index-bar :index-list="indexList"  @select="selectIndex">
    <div v-for="(item,index) in list" :key="index">
      <van-index-anchor  :index="item.name" > </van-index-anchor>
      <van-skeleton title avatar :row="0" v-for="itemindex in item.child" :key="itemindex.name" :loading="loading">
        <van-cell :title="itemindex.name" @click="openInfo(itemindex)">
            <template #icon>
            <van-image
                round
                width="1rem"
                height="1rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </template>
        </van-cell>
      </van-skeleton>
    </div>
    </van-index-bar>
    <van-popup v-model="show">
        <div class="user-info">
            <i class="iconfont icon-arrow-up font-icon-up" @click="upFunc" />
            <i class="iconfont icon-arrow-down font-icon-down" @click="downFunc" />
            <div class="userinfo-content">
                <div class="userinfo-content-header">
                <van-image
                round
                width="3rem"
                height="3rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />

                 {{user.name}}

                </div>
            </div>
        </div>
    </van-popup>
  </div>
</template>
<script>
import { parseTime } from '@/utils/index'
export default {
  data() {
    return {
      show: false,
      user: {}
    }
  },
  props: {
    infoList: Array,
    loading: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    indexList: {
      type: Array,
      default: () => {
        return []
      }
    },
    list: {
      type: Array,
      default: () => {
        return [{
          name: 'A',
          child: [{ name: 'A01' }]
        }]
      }
    }
  },
  mounted() {
    console.log(this.infoList)
  },
  methods: {
    selectIndex(index) {
      this.$emit('select', index)
    },
    openInfo(data) {
      this.show = true
      this.user = data
      this.user.date = parseTime(new Date())
      this.$store.dispatch('setSearchList', this.user)
    },
    upFunc() {
      const name = this.user.name
      const index = this.infoList.findIndex(function(item) {
        return item.name === name
      })

      if (index === 0) {
        this.user = this.infoList[this.infoList.length - 1]
        this.user.date = parseTime(new Date())
        this.$store.dispatch('setSearchList', this.user)
      } else {
        this.user = this.infoList[index - 1]
        this.user.date = parseTime(new Date())
        this.$store.dispatch('setSearchList', this.user)
      }
    },
    downFunc() {
      const name = this.user.name
      const index = this.infoList.findIndex(function(item) {
        return item.name === name
      })
      if (index === this.infoList.length - 1) {
        this.user = this.infoList[0]
        this.user.date = parseTime(new Date())
        this.$store.dispatch('setSearchList', this.user)
      } else {
        this.user = this.infoList[index + 1]
        this.user.date = parseTime(new Date())
        this.$store.dispatch('setSearchList', this.user)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.font-icon-up{
    font-size: 2rem;
    font-size: 2rem;
    position: absolute;
    top: -20px;
    left: 43%;
    color: #100f0f;
}
.font-icon-down{
    font-size: 2rem;
    position: absolute;
    bottom: -20px;
    left: 43%;
    font-size: 2rem;
    color: #100f0f;
}
/deep/.van-cell__title{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.user-info{
    width: 100vw;
    height: 440px;
    border-top: 50px solid transparent;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
}
.userinfo-content{
    background: #fff;
     width: 80vw;
    height: 350px;
    border-radius: 5px;
    padding: 20px;
}
/deep/.van-popup{
        overflow: hidden;
}
</style>
