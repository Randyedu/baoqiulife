//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    var detail = wx.getStorageSync('detail') || {}
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData: {
    heroes: [
      {
        "name": "百年老字号-锦成糖店",
        "title": "郭少群，郭少先",
        "phone": "15089392983，13430068034",
        "des": "百年老字号-锦成糖店", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/baoqiuren_1469981650.jpg",
        "content": "主营：1、锦成大饼（宝坵特产）；2、各式喜糖。",
        "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170508000526.jpg",
      },
      {
        "name": "红毛肠粉",
        "title": "红毛",
        "phone": "",
        "des": "红毛肠粉", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/baoqiuren_1468785581.jpg",
        "content": "主营：宝坵人喜爱的肠粉。",
        "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/image-1.jpg",
      },
      {
        "name": "宝坵老字号理发店",
        "title": "",
        "phone": "",
        "des": "宝坵老字号理发店", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/image-27-e1461152399602.jpg",
        "content": "1、宝坵专有的理发师。",
      },
      {
        "name": "宝坵牛铃",
        "title": "郭金水",
        "phone": "13413987491",
        "des": "宝坵牛铃", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/niuling1.jpg",
        "content": "主营：专业养牛几十载，新鲜牛奶牛铃。",
        "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/niuling2.jpg",
      },
      {
        "name": "宝坵鼎了粿",
        "title": "",
        "phone": "",
        "des": "宝坵鼎了粿", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/image-21-e1460908804311.jpg",
        "content": "主营：几十年的味道。",
        "picture": "",
      },
      {
        "name": "宝坵杂咸",
        "title": "",
        "phone": "",
        "des": "宝坵杂咸", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/baoqiuren_1471645423.jpg",
        "content": "主营：一看到那个酸菜就想流口水！",
        "picture": "",
      },
      {
        "name": "宝坵农村淘宝",
        "title": "郭志彬",
        "phone": "13510782454",
        "des": "方便的宝坵农村淘宝", "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/zhibin2.jpg",
        "content": "主营：1、宝坵快递接收发放；2、网上代购；3、日用百货。",
        "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/zhibin1.jpg",
      },
      {
        "name": "宝坵滴滴司机",
        "title": "郭楚冬",
        "phone": "13828124501",
        "des": "放心的宝坵滴滴司机",
        "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/chudong1.jpg",
        "content": "主营：广东地区包车。接送。结婚用车，公司用车，私人用车。安全放心。司机驾龄10年以上。价钱优惠合理。不用担心被宰。", "picture": ""
      }
      ,
      {
        "name": "宝坵第四卫生室",
        "title": "郭泽全",
        "phone": "15889115938",
        "des": "宝坵第四卫生室",
        "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/doctor.jpg",
        "content": "主营：执业助理医师", "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/doctor2.jpg"
      }
      ,
      {
        "name": "宝坵司机教练",
        "title": "郭锐波",
        "phone": "13682790666",
        "des": "宝坵司机教练",
        "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/drivercoach.jpg",
        "content": "主营：润通驾校C1手波教练（通过微信小程序报名有优惠哦！）。", "picture": ""
      }
      ,
      {
        "name": "专业汽车贴膜",
        "title": "郭浩东",
        "phone": "13580186765",
        "des": "专业汽车贴膜",
        "photo": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/car1.jpg",
        "content": "主营：专业汽车贴膜，家居玻璃贴膜，经营低，中，高档防爆膜，提供上门服务，价格实惠，质量保证。", "picture": "http://baoqiuren.oss-cn-shenzhen.aliyuncs.com/huangye/car2.jpg"
      }

    ]
  }
})
