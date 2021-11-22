const app = getApp();
// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    // 点击跳转
    jump:'xiaomiPhone',
    // ----------------class_Left系列----------------------------
    classLeftList: [
      {id:1,name:'小米手机',jump:'xiaomiPhone'},
      {id:2,name:'Readmi手机',jump:'readmiPhone'},
      {id:3,name:'游戏手机',jump:'gamePhone'},
      {id:4,name:'智能穿戴',jump:'smartWear'},
      {id:5,name:'电视',jump:'television'},
      {id:6,name:'电脑办公',jump:'computerOffice'},
      {id:7,name:'大家电',jump:'bigAppliances'},
      {id:8,name:'小家电',jump:'smallAppliances'},
      {id:9,name:'智能家居',jump:'smartHome'},
      {id:10,name:'户外出行',jump:'outdoorTravel'},
      {id:11,name:'日用百货',jump:'generalMerchandise'},
      {id:12,name:'儿童用品',jump:'childrenArticles'},
      {id:13,name:'小米服务',jump:'xiaomiService'},
      {id:14,name:'零售店',jump:'retailStores'},
    ],
    classRightListTitle: [
      {id:1,name:'小米数字系列'},
      {id:2,name:'小米MIX系列'},
      {id:3,name:'小米手机配件'},
      {id:4,name:'小米手机配件'}
    ],
    //----------------当前选项----------------------------
    current: 0,
    // ----------------小米手机----------------------------
    // 小米数字系列
    xiaomiDigital: [],
    // 小米MIX系列
    xiaomiMix: [],
    // 小米手机配件
    xiaomiPhoneAccessories: [],
    // ----------------红米手机----------------------------
    // 红米Note系列
    readmiNote:[],
    // 红米K系列
    readmiK:[],
    // 红米X系列
    readmiX:[],
    // 红米数字系列
    readmiDigital:[],
    // 红米手机配件
    readmiPhoneAccessories:[],
    // ----------------游戏手机----------------------------
    // 游戏手机
    gamePhone:[],
    // 游戏手机配件
    gamePhoneAccessories:[],
    //  ----------------智能穿戴----------------------------
    smartWear: [],
    //  ----------------电视----------------------------
    // 电视
    television: [],
    // 电视大师
    TvMaster:[],
    // 电视配件相关
    TvAccessories:[],
    // ----------------电脑办公----------------------------
    // ReadmiBook
    readmiBook:[],
    // 小米笔记本
    xiaomibook:[ ],
    // 显示器
    monitor: [],
    // 电脑配件
    computerAccessories: [],
    // 办公学习
    officeStudy: [],
    // ----------------大家电----------------------------
    // 空调
    airConditioner:[],
    // 洗衣机
    washingMachine:[],
    // 冰箱
    refrigerator:[],
    // 厨房大电
    bigKitchenElectrical: [],
    // ----------------小家电----------------------------
    // 厨房小电
    smallKitchenElectrical:[],
    // 地面清洁
    floorCleaning: [],
    // 空气净化
    airPurification: [],
    // 生活电器
    lifeAppliance: [],
    // ----------------智能家居----------------------------
    // 小爱音箱
    AndyLoudspeakerBox: [],
    // 路由器
    routers: [],
    // 智能安防
    IntelligentSecurity: [],
    // 智能控制
    intelligentControl: [],
    // 智能灯具
    IntelligentLamps: [],
    // 智能酷玩
    SmartCoolPlay: [],
    // ----------------户外出行----------------------------
    // 户外出行
    outdoorTravel: [],
    // 箱包
    luggageBag: [],
    // ----------------日用百货----------------------------
    // 家居日用
    HouseholdDailyUse: [],
    // 防护清洁
    ProtectionCleaning: [],
    // 个人护理
    personalCare: [],
    // 健康
    healthy: [],
    // 鞋服配饰
    footwearAccessories: [],
    // 床品家居
    bedFurniture: [],
    // 礼品周边
    giftPeriphery: [],
    // ----------------儿童用品----------------------------
    // 儿童用品
    childrenArticles: [],
    // ----------------小米服务----------------------------
    // 热门推荐
    hotRecommend: [],
    // 通信服务
    communicationServices: [],
    // 手机服务
    phoneService:[],
    // 笔记本服务
    notebookService: [],
    // 金融服务
    financeService: [],
    // 小米云服务
    cloudService: [],
    //  ----------------零售店----------------------------
    // 零售店
    retailStores: []
  },

  // 自定义方法 setCurrent，用于改变当前选中的类
  setCurrent(e) {
    console.log(e);
     var id = e.currentTarget.id; //点的是那个标签的id
     var jump = 'jump' + id;
    this.setData({
      current:id,
      jump:jump,
    });
    wx.pageScrollTo({
      scrollTop: 500,
      duration: 300
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({current:options.cid})
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
    wx.request({
      url: app.Server + '/api/getGoodsClassRight',
      success:(res) => {
        console.log('xiaomiDigital服务端返回的数据：',res.data);
        // 取回的数据做修改
        var result = res.data;
        var xiaomiDigital = []; //小米数字系列
        var xiaomiMix = []; //小米MIX系列
        var xiaomiPhoneAccessories = [];  //小米手机配件
        var readmiNote = [];  //红米Note系列
        var readmiK = [];  //红米K系列
        var readmiX = [];  //红米X系列
        var readmiDigital = [];  //红米数字系列
        var readmiPhoneAccessories = [];  //红米手机配件
        var gamePhone = [];  //游戏手机
        var gamePhoneAccessories = [];  //游戏手机配件
        var smartWear = [];  // 智能穿戴
        var television = [];  //电视
        var TvMaster = [];  //电视大师
        var TvAccessories = [];  //电视配件相关
        var readmiBook = [];  //ReadmiBook
        var xiaomibook = [];  //小米笔记本
        var monitor = [];  //显示器
        var computerAccessories = [];  //电脑配件
        var officeStudy = [];  //officeStudy
        var airConditioner = [];  //空调
        var washingMachine = [];  //washingMachine
        var refrigerator = [];  //空调
        var bigKitchenElectrical = [];  //厨房大电
        var smallKitchenElectrical = [];  //厨房小电
        var floorCleaning = [];  //地面清洁
        var airPurification = [];  //空气净化
        var lifeAppliance = [];  //生活电器
        var AndyLoudspeakerBox = [];  //小爱音箱
        var routers = [];  //路由器
        var IntelligentSecurity = [];  //智能安防
        var intelligentControl = [];  //智能控制
        var IntelligentLamps = [];  //智能灯具
        var SmartCoolPlay = [];  //智能酷玩
        var outdoorTravel = [];  //户外出行
        var luggageBag = [];  //箱包
        var HouseholdDailyUse = [];  //家居日用
        var ProtectionCleaning = [];  //防护清洁
        var personalCare = [];  //个人护理
        var healthy = [];  //健康
        var footwearAccessories = [];  //鞋服配饰
        var bedFurniture = [];  //床品家居
        var giftPeriphery = [];  //礼品周边
        var childrenArticles = [];  //儿童用品
        var hotRecommend = [];  //热门推荐
        var communicationServices = [];  //通信服务
        var phoneService = [];  //手机服务
        var notebookService = [];  //笔记本服务
        var financeService = [];  //金融服务
        var cloudService = [];  //云服务
        var retailStores = [];  //零售店
        for(let i = 0;i < res.data.length;i++) {
          result[i].img = app.StoragePath + result[i].img;
          if(result[i].category == 'xiaomiDigital') { xiaomiDigital.push(result[i]); }//小米数字系列
          if(result[i].category == 'xiaomiMix') { xiaomiMix.push(result[i]); }//小米MIX系列
          if(result[i].category == 'xiaomiPhoneAccessories') { xiaomiPhoneAccessories.push(result[i]); }//小米手机配件
          if(result[i].category == 'readmiNote') { readmiNote.push(result[i]); } //红米Note系列
          if(result[i].category == 'readmiK') { readmiK.push(result[i]); } //红米K系列
          if(result[i].category == 'readmiX') { readmiX.push(result[i]); } //红米X系列
          if(result[i].category == 'readmiDigital') { readmiDigital.push(result[i]); } //红米数字系列
          if(result[i].category == 'readmiPhoneAccessories') { readmiPhoneAccessories.push(result[i]); } //红米手机配件
          if(result[i].category == 'gamePhone') { gamePhone.push(result[i]); } //游戏手机
          if(result[i].category == 'gamePhoneAccessories') { gamePhoneAccessories.push(result[i]); } //游戏手机配件
          if(result[i].category == 'smartWear') { smartWear.push(result[i]); } //智能穿戴
          if(result[i].category == 'television') { television.push(result[i]); } //电视
          if(result[i].category == 'TvMaster') { TvMaster.push(result[i]); } //电视大师
          if(result[i].category == 'TvAccessories') { TvAccessories.push(result[i]); } //电视配件相关
          if(result[i].category == 'readmiBook') { readmiBook.push(result[i]); } //ReadmiBook
          if(result[i].category == 'xiaomibook') { xiaomibook.push(result[i]); } //小米笔记本
          if(result[i].category == 'monitor') { monitor.push(result[i]); } //显示器
          if(result[i].category == 'computerAccessories') { computerAccessories.push(result[i]); } //电脑配件
          if(result[i].category == 'officeStudy') { officeStudy.push(result[i]); } //办公学习
          if(result[i].category == 'airConditioner') { airConditioner.push(result[i]); } //空调
          if(result[i].category == 'washingMachine') { washingMachine.push(result[i]); } //洗衣机
          if(result[i].category == 'refrigerator') { refrigerator.push(result[i]); } //空调
          if(result[i].category == 'bigKitchenElectrical') { bigKitchenElectrical.push(result[i]); } //厨房大电
          if(result[i].category == 'smallKitchenElectrical') { smallKitchenElectrical.push(result[i]); } //厨房小电
          if(result[i].category == 'floorCleaning') { floorCleaning.push(result[i]); } //地面清洁
          if(result[i].category == 'airPurification') { airPurification.push(result[i]); } //空气净化
          if(result[i].category == 'lifeAppliance') { lifeAppliance.push(result[i]); } //生活电器
          if(result[i].category == 'AndyLoudspeakerBox') { AndyLoudspeakerBox.push(result[i]); } //小爱音箱
          if(result[i].category == 'routers') { routers.push(result[i]); } //路由器
          if(result[i].category == 'IntelligentSecurity') { IntelligentSecurity.push(result[i]); } //智能安防
          if(result[i].category == 'intelligentControl') { intelligentControl.push(result[i]); } //智能控制
          if(result[i].category == 'IntelligentLamps') { IntelligentLamps.push(result[i]); } //智能灯具
          if(result[i].category == 'SmartCoolPlay') { SmartCoolPlay.push(result[i]); } //智能酷玩
          if(result[i].category == 'outdoorTravel') { outdoorTravel.push(result[i]); } //户外出行
          if(result[i].category == 'luggageBag') { luggageBag.push(result[i]); } //箱包
          if(result[i].category == 'HouseholdDailyUse') { HouseholdDailyUse.push(result[i]); } //家居日用
          if(result[i].category == 'ProtectionCleaning') { ProtectionCleaning.push(result[i]); } //防护清洁
          if(result[i].category == 'personalCare') { personalCare.push(result[i]); } //个人护理
          if(result[i].category == 'healthy') { healthy.push(result[i]); } //健康
          if(result[i].category == 'footwearAccessories') { footwearAccessories.push(result[i]); } //鞋服配饰
          if(result[i].category == 'bedFurniture') { bedFurniture.push(result[i]); } //床品家居
          if(result[i].category == 'giftPeriphery') { giftPeriphery.push(result[i]); } //替换
          if(result[i].category == 'childrenArticles') { childrenArticles.push(result[i]); } //儿童用品
          if(result[i].category == 'hotRecommend') { hotRecommend.push(result[i]); } //热门推荐
          if(result[i].category == 'communicationServices') { communicationServices.push(result[i]); } //通信服务
          if(result[i].category == 'phoneService') { phoneService.push(result[i]); } //手机服务
          if(result[i].category == 'notebookService') { notebookService.push(result[i]); } //笔记本服务
          if(result[i].category == 'financeService') { financeService.push(result[i]); } //金融服务
          if(result[i].category == 'cloudService') { cloudService.push(result[i]); } //云服务
          if(result[i].category == 'retailStores') { retailStores.push(result[i]); } //零售店
        }
        this.setData({
          xiaomiDigital:xiaomiDigital,
          xiaomiMix:xiaomiMix,
          xiaomiPhoneAccessories:xiaomiPhoneAccessories,
          readmiNote:readmiNote,
          readmiK:readmiK,
          readmiX:readmiX,
          readmiDigital:readmiDigital,
          readmiPhoneAccessories:readmiPhoneAccessories,
          gamePhone:gamePhone,
          gamePhoneAccessories:gamePhoneAccessories,
          smartWear:smartWear,
          television:television,
          TvMaster:TvMaster,
          TvAccessories:TvAccessories,
          readmiBook:readmiBook,
          xiaomibook:xiaomibook,
          monitor:monitor,
          computerAccessories:computerAccessories,
          officeStudy:officeStudy,
          airConditioner:airConditioner,
          washingMachine:washingMachine,
          refrigerator:refrigerator,
          bigKitchenElectrical:bigKitchenElectrical,
          smallKitchenElectrical:smallKitchenElectrical,
          floorCleaning:floorCleaning,
          airPurification:airPurification,
          lifeAppliance:lifeAppliance,
          AndyLoudspeakerBox:AndyLoudspeakerBox,
          routers:routers,
          IntelligentSecurity:IntelligentSecurity,
          intelligentControl:intelligentControl,
          IntelligentLamps:IntelligentLamps,
          SmartCoolPlay:SmartCoolPlay,
          outdoorTravel:outdoorTravel,
          luggageBag:luggageBag,
          HouseholdDailyUse:HouseholdDailyUse,
          ProtectionCleaning:ProtectionCleaning,
          personalCare:personalCare,
          healthy:healthy,
          footwearAccessories:footwearAccessories,
          bedFurniture:bedFurniture,
          giftPeriphery:giftPeriphery,
          childrenArticles:childrenArticles,
          hotRecommend:hotRecommend,
          communicationServices:communicationServices,
          phoneService:phoneService,
          notebookService:notebookService,
          financeService:financeService,
          cloudService:cloudService,
          retailStores:retailStores,
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