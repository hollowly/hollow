const app = getApp();
// components/class/xiaomiPhone/xiaomiPhone.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xiaomiDigital: {
      type:Array
    },
    xiaomiMix: {
      type:Array
    },
    xiaomiPhoneAccessories: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topImg:app.StoragePath + '/img/class/xiaomiPhone/xiaomiPhone.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
