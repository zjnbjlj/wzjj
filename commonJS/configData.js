var app = getApp();
function loadConfigData() {
  wx.showLoading();
  wx.request({
    url: 'https://wzjj.wzcc.com/Api/Index/getCarTypes/',
    data: {
    }
    , method: 'POST'
    , header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      wx.hideLoading();
      console.log(res.data);

      app.globalData.configData.brandDepts = [
        { name: "JJJ", id: "jjj" },
        { name: "AAA", id: "aaa" },
        { name: "BBB", id: "bbb" },
        { name: "CCC", id: "ccc" }
      ]
      console.log(app.globalData.configData.brandDepts);
    }, fail(res) {
      console.log(res.data);
      wx.hideLoading();
    },
    complete(res){
      console.log(res.data);
      app.globalData.configData.brandDepts = [
        { name: "JJJ", id: "jjj" },
        { name: "AAA", id: "aaa" },
        { name: "BBB", id: "bbb" },
        { name: "CCC", id: "ccc" }
      ]
    }
  })
}
function loadInfoCheckDepts(ctx) {
  wx.showLoading();
  wx.request({
    url: 'https://wzjj.wzcc.com/Api/Index/getCarTypes/',
    data: {
    }
    , method: 'POST'
    , header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      wx.hideLoading();
      console.log(res.data);

      app.globalData.configData.infoCheckDepts = [
        { name: "JJJ", id: "jjj" },
        { name: "AAA", id: "aaa" },
        { name: "BBB", id: "bbb" },
        { name: "CCC", id: "ccc" }
      ]
      if(ctx){
        ctx.setData({
          infoCheckDepts: app.globalData.configData.infoCheckDepts
        })
      }
      console.log(app.globalData.configData.infoCheckDepts);
    }, fail(res) {
      console.log(res.data);
      wx.hideLoading();
    },
    complete(res) {
      console.log(res.data);
      app.globalData.configData.infoCheckDepts = [
        { name: "JJJ", id: "jjj" },
        { name: "AAA", id: "aaa" },
        { name: "BBB", id: "bbb" },
        { name: "CCC", id: "ccc" }
      ]
      if (ctx) {
        ctx.setData({
          infoCheckDepts: app.globalData.configData.infoCheckDepts
        })
      }
    }
  })
}
function sayHello(name) {
  console.log(`Hello ${name} !`)
}


module.exports.sayHello = sayHello;
module.exports.loadConfigData = loadConfigData;
module.exports.loadInfoCheckDepts = loadInfoCheckDepts;