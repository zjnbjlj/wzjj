var app = getApp()
Page({
  data: {
    grids: [{
      id: "0",
      name: '驾驶人联系方式变更',
      url: '../driverchange/driverchange',
      img: '../../res/images/JSR.png',
      bgColor: '#8a7de2'
    }, {
      id: "1",
      name: '机动车联系方式变更',
      url: '../list/list',
      img: '../../res/images/JDC.png',
      bgColor: '#4a94c6'
    }, {
      id: "2",
      name: 'AAAAA',
      url: '../login/login',
      img: '../../res/images/JDC.png',
      bgColor: '#5a84b6'
    }, {
      id: "3",
      name: '图片上传',
      url: '../imgUpload/imgUpload',
      img: '../../res/images/JDC.png',
      bgColor: '#5a84b6'
    }, {
      id: "4",
      name: 'list',
      url: '../list/list',
      img: '../../res/images/JDC.png',
      bgColor: '#5a84b6'
    }, {
      id: "5",
      name: 'face',
      url: '../face/face',
      img: '../../res/images/JDC.png',
      bgColor: '#5a84b6'
    }
    ]
  },
  onLoad: function () {
    console.log('onLoad');
    // 加载config数据
    var common = require('../../commonJS/configData.js');
    common.loadInfoCheckDepts();
    // common.loadConfigData();
    // var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },
  onReady: function () {
  },
  tap: function (e) {
    console.log('onLoad');
  },
  gridClick: function (e) {
    if (e.currentTarget.id == 0){
      wx.showActionSheet({
        itemList: ['办理', '预约'],
        success: function (res) {
          if (!res.cancel) {
            console.log(res.tapIndex)
            switch(res.tapIndex){
              case 0: 
              wx.navigateTo({
                url: "../driverchange/driverchange"
              })
              break;
            }
          }
        }
      });

    }else {
      wx.navigateTo({
        url: this.data.grids[e.currentTarget.id].url
      })
    }
  }
})
