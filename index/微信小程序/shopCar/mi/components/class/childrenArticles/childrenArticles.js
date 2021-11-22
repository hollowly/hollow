const app = getApp()
// components/class/childrenArticles/childrenArticles.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    childrenArticles: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bottomImg: app.StoragePath + '/img/class/childrenArticles/childrenArticles.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
