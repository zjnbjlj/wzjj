//index.js
//获取应用实例
var app = getApp();
var lvUtil=require("../../utils/lvUtil.js");
var utils=require("../../utils/util.js");
var that;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad');
     that = this;
    lvUtil.initLv(that,"WebCall.Mall.DataDevice.axd/GetDeviceList",
        function(params){
          params.userId='100';
          // params.type = 2;
          // params.sourceType = 0;
          // params.labelId = 0;
          // params.priceType = 2;
          // params.categoryIds = "";
        },
        function (netData){
          console.log('index-AAA');
          console.log(netData);
          return netData;
        },
        function(item){
         // utils.showAlbumItemPriceText(item);
        }
    )
  },
  onReady: function () {
  }
})
