// 调用全局
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
    data: {
      swiperList: [],
      gridList: [],
      goodList: [],
      recommendList: [],
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 先检查是否已经认证，如果没有认证，则跳转到登录认证页面
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      // 调用 API 读取数据库中的数据
      // gridList
        wx.request({
          url: app.Server + '/api/getgridList',
          success:(res) => {
            // console.log('gridList服务端返回的数据：',res.data);
            // 取回的数据做修改
            let list = res.data;
            list.map((c) => {
              c.img = app.StoragePath + c.img
            })
            this.setData({
              gridList:list
            })
          },
          fail:(err) => {
            console.log('远程调用失败',err);
          }
        })
  
        // goodList
        wx.request({
          url:app.Server + '/api/getgoodList',
          success:(res) => {
            // console.log('goodList服务端返回的数据：',res.data);
            // 取回的数据做修改
            let list = res.data;
            list.map((c) => {
              c.img = app.StoragePath + c.img
            })
            this.setData({
              goodList:list
            })
          },
          fail:(err) => {
            console.log('远程调用失败',err);
          }
        })
  
        // swiperList
        wx.request({
          url:app.Server + '/api/getswiperList',
          success:(res) => {
            // console.log('swiperList服务端返回的数据：',res.data);
            // 取回的数据做修改
            let list = res.data;
            list.map((c) => {
              c.img = app.StoragePath + c.img
            })
            this.setData({
              swiperList:list
            })
          },
          fail:(err) => {
            console.log('远程调用失败',err);
          }
        })
  
        // recommendList
        wx.request({
          url:app.Server + '/api/getrecommendList',
          success:(res) => {
            // console.log('recommendList服务端返回的数据：',res.data);
            // 取回的数据做修改
            let list = res.data;
            list.map((c) => {
              c.img = app.StoragePath + c.img
            })
            this.setData({
              recommendList:list
            })
          },
          fail:(err) => {
            console.log('远程调用失败',err);
          }
        })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})