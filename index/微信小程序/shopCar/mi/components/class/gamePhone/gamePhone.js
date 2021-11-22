const app = getApp();
// components/class/gamePhone/gamePhone.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gamePhone: {
      type:Array
    },
    gamePhoneAccessories: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topImg:app.StoragePath + '/img/class/gamePhone/gamePhone.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
