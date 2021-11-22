const app = getApp();
const globalData = getApp().globalData
// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    totalPiece: 0,
    totalCount:0,
    isCKAll:false,
    delIcon: app.StoragePath + '/img/shopcar/icon/delete.png',
    Reloading:false,
    slideButtons:null
  },
// ------------------------------自定义函数--------------------------------------
  // -------------------计算总和
  setTotal() {
    let list = this.data.goods; // 找到当前商品，修改状态
    let ototalPiece = 0; // 定义总价
    let ototalCount = 0; //定义件数
    for(let i = 0 ;i < list.length; i++) {
      if(list[i].state) {
        ototalCount++;
        ototalPiece += (list[i].price) * list[i].count;
      }
    }
    this.setData({
      goods:list,
      totalPiece: ototalPiece,
      totalCount:ototalCount
    })
  },
  // -------------------设置状态
  setState(e) {
    let list = this.data.goods; // 找到当前商品，修改状态
    list[e.target.id].state = !list[e.target.id].state  //取它自身的相反
    // 调用求总和函数
    this.setTotal();
    for(let i = 0;i < list.length;i++) {
      if(!list[i].state) {
        this.setData({isCKAll: false});
        return
      } else {
        this.setData({isCKAll: true});
      }
    }
  },

  // -------------------改变数量和单个总价
  setCount(e) {
    let i = e.target.id;  //第几个
    let f = e.target.dataset.flg; //加还是减
    let list = this.data.goods; // 找到当前商品，修改状态
    // 判断为加还是减
    if(f == '+') {
      list[i].count++;
    } else {
      list[i].count--;
    }
    // 让购买数量最少为1个
    if(list[i].count < 1) {
      list[i].count = 1;
      wx.showToast({
        title: '已经达到最小购买数量',  // 标题
        icon: 'none',
        duration: 1500 
      })
      // 超过7个提示已经购买上限
    } else if(list[i].count >= 7) {
      list[i].count = 7;
      wx.showToast({
        title: '已经达到最大购买数量!',  // 标题
        icon: 'none',   // 图标类型，默认success
        duration: 1500   // 提示窗停留时间，默认1500ms
      })
    }
    // 调用求总和函数
    this.setTotal();
  },

  // -------------------全选
  ckAll() {
    let list = this.data.goods; //找出要改变的数据
    list.map((item) => {
      item.state = !this.data.isCKAll;
    });

    this.setData({goods:list,isCKAll:!this.data.isCKAll});
    this.setTotal();
  },
  // -------------------滑动删除事件
  slideButtonTap(e) {
    let shop = e.target.id
    let alldata = this.data.goods
    alldata.splice(shop,1)
    // 如果商品为空，则全选自动取消
    if(alldata == '') {
      this.setData({isCKAll:false})
    }
    this.setData({goods:alldata})
    wx.showToast({
      title: '删除成功',  // 标题
      icon: 'success',   // 图标类型，默认success
      duration: 1500   // 提示窗停留时间，默认1500ms
    })
    this.setTotal();
  },
  // 结算
  pay(e) {
    let list = e.target.dataset.item
    let sendData = []
    for(let i = 0;i < list.length;i++) {
      if(list[i].state == true) {
        sendData.push(list[i])
      }
    }
    if(sendData == '') {
      wx.showToast({
        title: '请先选择你要购买的商品',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    globalData.orders.order2.unshift(sendData)
    wx.showToast({
      title: '成功，正在跳转',
      icon: 'success',
      duration: 1000,
      success() {
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/order/order',
           })
        },500)
      }
    })
  },
// 获取并加载数据

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
    // console.log(globalData.goods);
    this.setData({goods:globalData.goods})
    
    if( wx.getStorageSync('token')) {
      if(this.data.Reloading) { return; } //判断如果加载过一个数据了，第二次就不用加载了
      this.setData({
        slideButtons: [{
          type: 'warn',
          text: '删除'
        }],
      });
      // 加载右化删除
      wx.request({
        url:app.Server + '/api/getShopCar',
        success: (res) => {
          var result = res.data;
          // console.log(result);
          // 状态重置为false
          result.map((item) => {
            item.state = false
            return item.img = app.StoragePath + item.img;
          });
          this.setData({
            // goods:result,
            Reloading:true
          })
        },
        fail: (err) => {
          console.log('请求失败'+ err);
        }
      });
    } else {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
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