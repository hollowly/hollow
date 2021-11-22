const app = getApp();
// components/class/generalMerchandise/generalMerchandise.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    HouseholdDailyUse: {
      type:Array
    },
    ProtectionCleaning: {
      type:Array
    },
    personalCare: {
      type:Array
    },
    healthy: {
      type:Array
    },
    footwearAccessories: {
      type:Array
    },
    bedFurniture: {
      type:Array
    },
    giftPeriphery: {
      type:Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg: app.StoragePath + '/img/class/outdoorTravel/outdoorTravel.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
