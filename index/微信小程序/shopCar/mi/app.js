
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    allSwiper: {
      s1: [
        {
          id:1,
          img:"/img/detailed/1.jpg",
          title:'小米11 Pro',
          price:'4799',
          old_price:'5299',
          name:'「299米金兑换10元优惠券；华夏信用卡分期满1500减60元；赠Keep会员7天体验卡」',
          intro1:'①【高能强芯】7nm工艺制程，游戏更畅快',
          intro2:'②【超长续航】5000mAh充电宝级大电量',
          intro3:'③【旗舰体验】立体声双扬声器+双5G待机',
          footimg:'/img/detailed/s1.jpg',
          cid:1
        },
        {id:2,img:"/img/detailed/2.jpg"},
        {id:3,img:"/img/detailed/3.jpg"},
        {id:4,img:"/img/detailed/4.jpg"},
      ],
      s2: [
        {
          id:1,
          img:"/img/detailed/5.jpg",
          title:'MIX FOLD 折叠屏手机',
          price:'9999',
          name:'「米金兑换1000元优惠券；购机赠价值399元芳纶纤维保护壳」',
          intro1:'①【外观惊艳】符合持握的黄金折叠比例，操作舒适方便',
          intro2:'②【系统稳定】全新定制化的MIUI操作系统，运行高速流畅',
          intro3:'③【经久耐用】精密的铰链设计，超高的折叠寿命',
          footimg:'/img/detailed/s2.jpg',
          cid:2
        },
        {id:2,img:"/img/detailed/6.jpg"},
        {id:3,img:"/img/detailed/7.jpg"},
        {id:4,img:"/img/detailed/8.jpg"}
      ],
      s3: [
        {
          id:1,
          img:"/img/detailed/9.jpg",
          title:'Note 9 5G',
          price:'1199',
          old_price:'1299',
          name:'「299米金兑换10元优惠券；华夏信用卡分期满1500减60元；赠Keep会员7天体验卡」',
          intro1:'①【高能强芯】7nm工艺制程，游戏更畅快',
          intro2:'②【超长续航】5000mAh充电宝级大电量',
          intro3:'③【旗舰体验】立体声双扬声器+双5G待机',
          footimg:'/img/detailed/s3.jpg',
          cid:3
        },
        {id:2,img:"/img/detailed/10.jpg"},
        {id:3,img:"/img/detailed/11.jpg"},
        {id:4,img:"/img/detailed/12.jpg"}
      ],
      s4: [
        {
          id:1,img:"/img/detailed/13.jpg",
          price:'2999',
          old_price:'3299',
          title:'小米10S',
          name:'「至高享24期免息，赠蓝牙耳机+环保袋；大学生首次认证减100元；信用卡分期至高减100元；全款支付套装赠果冻包」',
          intro1:'①【高端音质】对称式双扬立体声 多场景360°立体音效',
          intro2:'②【旗舰新秀】骁龙870+LPDDR5+Wi-Fi 6',
          intro3:'③【计算摄影】1亿像素 8K电影相机',
          footimg:'/img/detailed/s4.jpg',
          cid:4
        },
        {id:2,img:"/img/detailed/14.jpg"},
        {id:3,img:"/img/detailed/15.jpg"},
        {id:4,img:"/img/detailed/16.jpg"}
      ],
      s5: [
        {
          id:1,
          img:"/img/detailed/17.jpg",
          price:'1499',
          old_price:'1799',
          title:'Note Pro 5G',
          name:'「Note 9 Pro 8G+128G优惠立减100元； 299米金兑换10元优惠券；华夏信用卡分期满1500减60元」',
          intro1:'①【液冷游戏芯】国内首发骁龙750G+液冷散热',
          intro2:'②【一亿像素】一亿像素夜景相机，专为夜景而生',
          intro3:'③【变速高刷】120Hz六档变速高刷，流畅又省电',
          footimg:'/img/detailed/s5.jpg',
          cid:5
        },
        {id:2,img:"/img/detailed/18.jpg"},
        {id:3,img:"/img/detailed/19.jpg"},
        {id:4,img:"/img/detailed/20.jpg"}
      ], 
      s6: [
        {
          id:1,
          img:"/img/detailed/21.jpg",
          price:'3799',
          title:'小米11',
          name:'「米金兑券下单立减100元；加749元得MiCare保障服务;全款支付赠99元果冻包（请选择“果冻包套装”下单）」',
          intro1:'①【一块好屏】2K+120Hz四曲面 获DisplayMate A+认证',
          intro2:'②【性能跃进】全新骁龙888+LPDDR5满血版+WiFi6 增强版',
          intro3:'③【计算摄影】1亿像素+视频超级夜景',
          footimg:'/img/detailed/s6.jpg',
          cid:6
        },
        {id:2,img:"/img/detailed/22.jpg"},
        {id:3,img:"/img/detailed/23.jpg"},
        {id:4,img:"/img/detailed/24.jpg"}
      ],
    },
    goods: [
      {id:1,cid:10,img:'/img/goods1.jpg',title:'小米11 Ultra 8GB+256GB 陶瓷黑',price:'5999',state:false,count:1},
      {id:2,cid:11,img:'/img/goods2.jpg',title:'稻妻生产电视机',price:'2999',state:false,count:1}
    ],
    orders:{
      order1:[
        // {id:1,img:'/img/goods1.jpg',title:'小米11 Ultra 8GB+256GB 陶瓷黑',price:5999,count:1},
        // {id:2,img:'/img/goods2.jpg',title:'稻妻生产电视机',price:2999,count:1},
      ],
      order2:[]
    }
  },
  // 读取数据的服务器（后端）
  // Server:'http://192.168.227.206:8000',
  // StoragePath: 'http://192.168.227.206:8000/storage'
  Server:'http://127.0.0.1:8000',
  StoragePath: 'http://127.0.0.1:8000/storage'
})

