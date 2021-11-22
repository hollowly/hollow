const app = getApp();
// components/class/readmiPhone/readmiPhone.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    readmiNote: {
      type:Array
    },
    readmiK: {
      type:Array
    },
    readmiX: {
      type:Array
    },
    readmiDigital: {
      type:Array
    },
    readmiPhoneAccessories:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topImg:app.StoragePath + '/img/class/readmiPhone/readmiPhone.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
