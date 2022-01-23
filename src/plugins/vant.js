// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem } from 'vant'
import { Image as VanImage, Loading } from 'vant'
import { Lazyload } from 'vant'
import { Popup } from 'vant'
import { Sticky } from 'vant'
import { Tab, Tabs } from 'vant'
import { Icon } from 'vant'
import { Collapse, CollapseItem } from 'vant'
import { Form } from 'vant'
import { Field } from 'vant'
import { Picker } from 'vant'
import { Skeleton } from 'vant'
import { IndexBar, IndexAnchor } from 'vant'

Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Skeleton)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(Loading)
// Vue.use(VanLoading)
Vue.use(Lazyload)
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Popup)
Vue.use(Sticky)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.use(Form)
Vue.use(Field)
Vue.use(Picker)
