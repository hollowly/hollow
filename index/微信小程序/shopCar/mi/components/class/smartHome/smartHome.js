const app = getApp();
// components/class/smartHome/smartHome.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    AndyLoudspeakerBox: {
      type:Array
    },
    routers: {
      type:Array
    },
    IntelligentSecurity:{
      type:Array
    },
    intelligentControl:{
      type:Array
    },
    IntelligentLamps:{
      type:Array
    },
    SmartCoolPlay:{
      type:Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg: app.StoragePath + '/img/class/smartHome/smartHome.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
