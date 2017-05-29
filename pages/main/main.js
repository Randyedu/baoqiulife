var app = getApp()
Page({
  data: {
    motto: '宝坵生活黄页',
    userInfo: {}
  },
  onButtonTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({ userInfo: res.userInfo })
            that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })

    var that = this
    setTimeout(() => {
      wx.navigateTo({
        url: './../index/index'
      })
    }, 1000)
    wx.showShareMenu()
    console.log('onLoad')
  }
})
