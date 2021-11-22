// pages/index/detailed/detailed.js
var globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    all:'',
    icon:[
      {id:1,text:'首页',iconSrc:'/img/detailed/icon-1.jpg',url:'/pages/index/index'},
      {id:2,text:'客服',iconSrc:'/img/detailed/icon-2.jpg'},
      {id:3,text:'购物车',iconSrc:'/img/detailed/icon-3.jpg',url:'/pages/shopcar/shopcar'}
    ],

  },


  joinShop(e) {
    var isOK = false;   //判断该商品是否已存在
    let sendData = this.data.swiperList[0]  //该条数据
    // console.log(sendData);
    let oldData = globalData.goods
    sendData.count = 1
    sendData.state = false
    // 购物车没商品的情况
    if(oldData.length == 0) {
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
      globalData.goods.push(sendData);
      return;
    }
    for(let i = 0; i < oldData.length;i++) {
      console.log(1);
      if(oldData[i].cid == sendData.cid) {
        wx.showToast({
          title: '该商品已添加',
          icon: 'error',
          duration: 2000
        })
        isOK = false;
        return;
      } else {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
        isOK = true;
      }
    }

    if(isOK) {
      globalData.goods.push(sendData);
    }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let allData = globalData.allSwiper;
    if(id == 1) {
      this.setData({
        swiperList:allData.s1,
        all:allData.s1[0],
      })
    } else if(id == 2) {
      this.setData({
        swiperList:allData.s2,
        all:allData.s2[0],
      })
    } else if(id == 3) {
      this.setData({
        swiperList:allData.s3,
        all:allData.s3[0],
      })
    } else if(id == 4) {
      this.setData({
        swiperList:allData.s4,
        all:allData.s4[0],
      })
    } else if(id == 5) {
      this.setData({
        swiperList:allData.s5,
        all:allData.s5[0],
      })
    } else if(id == 6) {
      this.setData({
        swiperList:allData.s6,
        all:allData.s6[0],
      })
    }
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