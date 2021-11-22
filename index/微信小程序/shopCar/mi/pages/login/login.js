// 调用全局
const app = getApp();

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:'1',
    pwd:'8888',
  },
  // 实现登录.
  login() {
    wx.request({
      url: app.Server + '/api/login',
      data:{uid:this.data.uid,pwd:this.data.pwd },
      method:'POST',
      success:(res) => {
        console.log('登录的结果：',res);
        if(res.data.token) {
          wx.setStorageSync('token', res.data.token); // 登录成功之后，记录tooken(存储到本地)，下次访问携带
          wx.setStorageSync('uid', this.data.uid);
          // 存储token后，跳转到首页
          wx.switchTab({
            url: '/pages/index/index',
          })
        } else {
          wx.showLoading({
            title: '密码或账号错误',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 1500)
        }
      },
      fail:(err) => {
        console.log('失败的结果：', err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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