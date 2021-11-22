const app = getApp();
// pages/my/my.js
Page({
  data: {
    camera:'back',
    isWarrant:true,
    user:null,
    orderRight:app.StoragePath + '/img/my/right.png',
    orderImg: [],
    myOptionImg: [
      {id:1,value:'会员中心',img:app.StoragePath + '/img/my/member.png'},
      {id:2,value:'我的优惠',img:app.StoragePath + '/img/my/discount.png'},
      {id:3,value:'服务中心',img:app.StoragePath + '/img/my/service.png'},
      {id:4,value:'小米之家',img:app.StoragePath + '/img/my/xiaomiHome.png'},
      {id:5,value:'联系客服',img:app.StoragePath + '/img/my/customerService.png'},
      {id:6,value:'我的F码',img:app.StoragePath + '/img/my/Fcode.png'},
      {id:7,value:'礼物码兑换',img:app.StoragePath + '/img/my/giftExchange.png'},
      {id:8,value:'设置',img:app.StoragePath + '/img/my/setting.png'},
    ]
  },

  warrant() {
    wx.getUserProfile({
      desc: '设置用户账号',
      success: (res) => {
        console.log(res);
        // 存储信息，以便以后直接使用
        wx.setStorageSync('userinfo', res);
        this.setData({user:res,isWarrant:false})
      }
    })
  },
  // 打电话
  callTel() {
    wx.makePhoneCall({
      phoneNumber: '13980524660'
    })
  },

  // 摄像头
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 读取用户的授权数据
    let userinfo = wx.getStorageSync('userinfo');

    if(userinfo) {
      this.setData({ user:userinfo,isWarrant:false })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // orderImg
    wx.request({
      url: app.Server + '/api/getOrderImg',
      success: res => {
        var result = res.data;
        // console.log('订单请求结果：',result);
        for(let i = 0; i < result.length; i++) {
          result[i].img = app.StoragePath + result[i].img
        }
        this.setData({orderImg:result})
      }
    });
    // myOptionImg
    // wx.request({
    //   url: app.Server + '/api/getMyOptionImg',
    //   success: res => {
    //     var result = res.data;
    //     console.log(result);
    //     for(let i = 0; i < result.length; i++) {
    //       result[i].img = app.StoragePath + result[i].img;
    //     }
    //     this.setData({myOptionImg:result})
    //   }
    // });
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