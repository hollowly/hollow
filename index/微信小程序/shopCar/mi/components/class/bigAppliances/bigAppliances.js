const app = getApp();
// components/class/bigAppliances/bigAppliances.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    airConditioner: {
      type:Array
    },
    washingMachine: {
      type:Array
    },
    refrigerator: {
      type:Array
    },
    bigKitchenElectrical: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg:app.StoragePath + '/img/class/bigAppliances/bigAppliances.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
