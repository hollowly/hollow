const app = getApp();
// components/class/television/television.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    television: {
      type:Array
    },
    TvMaster: {
      type:Array
    },
    TvAccessories: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg: app.StoragePath + '/img/class/television/television.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
