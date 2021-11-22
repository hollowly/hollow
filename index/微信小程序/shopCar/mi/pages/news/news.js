const app = getApp();
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      {id:1,title:'小米集团2020全年财报正式',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/1.png'},
      {id:2,title:'#小米618#全平台支付突破30亿！',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/2.png'},
      {id:3,title:'你期待Note10搭配那颗真芯',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/3.png'},
      {id:4,title:'小米AIoT路由器AX6000亮相4',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/4.png'},
      {id:5,title:'小米AIoT路由器AX6000亮相5',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/5.png'},
      {id:6,title:'小米AIoT路由器AX6000亮相6',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/6.png'},
      {id:7,title:'小米AIoT路由器AX6000亮相7',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/7.png'},
      {id:8,title:'小米AIoT路由器AX6000亮相8',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/8.png'},
      {id:9,title:'小米AIoT路由器AX6000亮相9',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/9.png'}
    ],
    dataAll: [
      {id:1,title:'小米集团2020全年财报正式',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/1.png'},
      {id:2,title:'#小米618#全平台支付突破30亿！',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/2.png'},
      {id:3,title:'你期待Note10搭配那颗真芯',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/3.png'},
      {id:4,title:'小米AIoT路由器AX6000亮相4',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/4.png'},
      {id:5,title:'小米AIoT路由器AX6000亮相5',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/5.png'},
      {id:6,title:'小米AIoT路由器AX6000亮相6',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/6.png'},
      {id:7,title:'小米AIoT路由器AX6000亮相7',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/7.png'},
      {id:8,title:'小米AIoT路由器AX6000亮相8',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/8.png'},
      {id:9,title:'小米AIoT路由器AX6000亮相9',date:'2021-6-1',hits:'256',url:app.StoragePath + '/img/class/readmiPhone/readmiK/9.png'}
    ],
    inputvalue:'',
    add:app.StoragePath + '/img/news/add.png',
    isShow:false
  },
  setinput(e) {
    this.setData({
      inputvalue:e.detail.value
    })
  },

  search() {
    var dataAll = JSON.parse(JSON.stringify(this.data.dataAll))
    for(let i = 0; i < dataAll.length;i++) {
      let str1 = this.data.inputvalue
      let str2 = dataAll[i].title
      let existence = str2.includes(str1)
      if(!existence) {
        dataAll.splice(i,1)
        i--;
      }
    }
    this.setData({newsList:dataAll})
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
    console.log('开始加载数据');
    // 在导航条上显示加载动画
    wx.showNavigationBarLoading();
    setTimeout(() => {
      console.log('数据加载完成');
    }, 1500);
    wx.stopPullDownRefresh({
      success: (res) => {
        console.log('停止加载');
      },
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 页面触底显示消息
    this.setData({
      isShow:true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})