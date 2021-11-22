const app = getApp();
// components/class/smallAppliances/smallAppliances.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    smallKitchenElectrical: {
      type:Array
    },
    floorCleaning: {
      type:Array
    },
    airPurification: {
      type:Array
    },
    lifeAppliance: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg:app.StoragePath + '/img/class/smallAppliances/smallAppliances.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
