//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    isDebug:true,
    apiHeadUrl: 'https://sbgl.wzcc.com/',//"https://api.qxinli.com/api/",//'http://www.qxinli.com:9001/api/',//todo 增加切换服务器的功能
    qiNiuHeadUrl:"http://static.qxinli.com/",//'http://static.qxinli.com/',
    defaultPageSize:10,
    configData: [{brandDepts:[]},{infoCheckDepts:null}]
  }
})