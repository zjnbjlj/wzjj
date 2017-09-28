var offsetwidth = 0;
var app = getApp();
function countdown(that) {
  var second = that.data.second;
  var stopClock = that.data.stopClock;
  if (second == 0) {
    // console.log("Time Out...");
    that.setData({
      second: 60,
      verifyInfo: "获取验证码"
    });
    return;
  }
  var time = setTimeout(function () {
    if(stopClock){
      that.setData({
        second: 60,
        verifyInfo: "获取验证码"
      });
    }else{
      that.setData({
        second: second - 1,
        verifyInfo: "重新发送(" + second + ")"
      });
      countdown(that);
    }
    
  } , second==60?0:1000)
}

function NewMobilecountdown(that) {
  var NewMobileSecond = that.data.NewMobileSecond;
  if (NewMobileSecond == 0) {
    // console.log("Time Out...");
    that.setData({
      NewMobileSecond: 60,
      NewMobileVerifyInfo: "获取验证码"
    });
    return;
  }
  var time = setTimeout(function () {
      that.setData({
        NewMobileSecond: NewMobileSecond - 1,
        NewMobileVerifyInfo: "重新发送(" + NewMobileSecond + ")"
      });
      NewMobilecountdown(that);
  }, NewMobileSecond == 60 ? 0 : 1000)
}
Page({  
  data: {
    tabs: ["验证", "填写", "确认", "提交"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    //tab:verify param
    IDcard:"",
    phoneNumber:"",
    verifyCode:"",
    second: 60,
    stopClock:false,
    verifyInfo:"获取验证码",
    //tab:newinfo param
    IDName:"A:居民身份证",
    IDCardLabel:"330324199107052279",
    Name:"张三",
    OldMobilePhone:"18357740058",
    NewMobilePhone:"",
    NewMobileSecond: 60,
    NewMobileVerifyInfo: "获取验证码",
    NewMobileVerifyCode:"",
    OldTelePhone:"",
    NewTelePhone:"",
    OldMail:"325000",
    NewMail:"",
    OldAddress:"温州数码城大厦",
    NewAddress:"",
    infoCheckDeptIndex: 0,
    infoCheckDeptID: "",
    infoCheckDepts:[]
  },
  onLoad: function () {
    var depts = app.globalData.configData.infoCheckDepts;
    if(!depts){
      // var common = require('../../commonJS/configData.js');
      // common.loadInfoCheckDepts(this);
      app.globalData.configData.infoCheckDepts = [
        { name: "JJJ", id: "jjj" },
        { name: "AAA", id: "aaa" },
        { name: "BBB", id: "bbb" },
        { name: "CCC", id: "ccc" }
      ]
    }
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          infoCheckDepts: app.globalData.configData.infoCheckDepts
        });
        offsetwidth = res.windowWidth / that.data.tabs.length;
      }
    });
  },
   nextClick: function (e) {
     var index = this.data.activeIndex;
     var IDcard = this.data.IDcard;
     var phoneNumer = this.data.phoneNumber;
     var verifyCode = this.data.verifyCode;
     var infoCheckDeptID = this.data.infoCheckDeptID;
     switch(index){
      case 0:
        // if(!firstVerify()){
        //   return;
        // } else if (verifyCode === "") {
        //   wx.showToast({
        //     title: "请输入验证码"
        //   });
        //   return;
        // } else {
        //   console.log("身份证号:" + IDcard + " 手机后四位:" + phoneNumer + " 验证码:" + verifyCode);
        //   //执行提交信息到接口
        //     gotoNextTab(e);
        // }
      break;
        case 1:
         wx.showModal({
           title: 'wscgs.wzsjj.cn',
           content: '提示：确定提交此条申请信息？\n若您提交后想取消申请，在车管所未受理的情况下可到办事进度查询中取消该条申请信息！\n按“确定”继续，或按“取消”返回上一步',
           confirmText: "确定",
           cancelText: "取消",
           success: function (res) {
             console.log(res);
             if (res.confirm) {
               //提交数据
               console.log(infoCheckDeptID);
               console.log("提交数据操作");
               gotoNextTab(e);
               wx.showModal({
                 title: 'wscgs.wzsjj.cn',
                 showCancel: false,
                 content: '提示：变更信息申请成功，请等待车管所工作人员审核',
                 confirmText: "确定",
                 success: function (res) {
                   console.log(res);
                   if (res.confirm) {
                     //关闭页面
                     console.log("完成");
                     wx.navigateBack({
                       delta: 1
                     })
                   } 
                 }
               });
             } else {
               gotoPreTab(e);
               return;
             }
           }
         });
        break;
     }
     gotoNextTab(e);
  }, preClick: function (e) {
    gotoPreTab(e);
  },
  IDcardInput:function(e){
    this.setData({
      IDcard: e.detail.value
    })
  },
  phoneNumberInput: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  }, 
  verifyCodeInput:function(e){
    this.setData({
      verifyCode: e.detail.value
    })
  },
  NewTeleInput:function(e){
    this.setData({
      NewTelePhone: e.detail.value
    })
  },
  NewMailInput:function (e) {
    this.setData({
      NewMail: e.detail.value
    })
  },
  NewAddressInput:function (e) {
    this.setData({
      NewAddress: e.detail.value
    })
  },
  // 验证界面获取验证码
  getVerifyCode:function(e){
    if (!firstVerify()){
      return;
    }else{
      this.setData({
        stopClock:false
      })
      countdown(this);
    }
  },
  // 填写tab获取验证码
  getNewMobileVerifyCode: function (e) {
    var NewMobileVerifyInfo = this.data.NewMobileVerifyInfo;
    var NewMobilePhone = this.data.NewMobilePhone;
    if (NewMobileVerifyInfo != "获取验证码") {
      wx.showToast({
        title: "您的操作过于频繁，请稍后重试"
      });
      return;
    } else if (NewMobilePhone === "") {
      wx.showToast({
        title: "请输入手机号码"
      });
      return;
    } else if (!isPhoneNum(NewMobilePhone)) {
      wx.showToast({
        title: "请输入完整的手机号"
      });
      return;
    }
    NewMobilecountdown(this);
  },
  NewMobileInput:function(e){
    this.setData({
      NewMobilePhone: e.detail.value
    })
  },
  infoCheckDeptChange:function(e){
    var infoCheckDepts = this.data.infoCheckDepts;
    this.setData({
      infoCheckDeptIndex:e.detail.value,
      infoCheckDeptID: infoCheckDepts[e.detail.value].id
    })
  }
});
//下一步
function gotoNextTab(e) {
  var that = getCurrentPages()[getCurrentPages().length - 1];
  that.data.activeIndex++;
  that.setData({
    sliderOffset: that.data.activeIndex * offsetwidth,
    activeIndex: that.data.activeIndex
    // ,
    // stopClock: true
  });
};
//上一步
function gotoPreTab(e) {
  var that = getCurrentPages()[getCurrentPages().length - 1];
  that.data.activeIndex--;
  that.setData({
    sliderOffset: that.data.activeIndex * offsetwidth,
    activeIndex: that.data.activeIndex
    // ,
    // stopClock: true
  });
}
// 验证身份证号是否合法
function isIDcardNo(s){
  var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; 
  var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if(s!=null){
    if(s.length == 15 && isIDCard1.test(s)){
      return true;
    }else if(s.length == 18 && isIDCard2.test(s)){
      return true;
    }else{
      return false;
    }
  }
}
function isPhoneNum(s){
  if(s !=null && s.length == 11){
    return true;
  }else{
    return false;
  }
}
function isPhoneNumFour(s) {
  if (s != null && s.length == 4) {
    return true;
  } else {
    return false;
  }
}
function firstVerify(){
  var that = getCurrentPages()[getCurrentPages().length - 1];
  var IDcard = that.data.IDcard;
  var phoneNumer = that.data.phoneNumber;
  if (IDcard === "") {
    wx.showToast({
      title: "请输入身份证号"
    });
    return false;
  } else if (!isIDcardNo(IDcard)) {
    wx.showToast({
      title: "请输入合法的身份证号"
    });
    return false;
  } else if (phoneNumer === "") {
    wx.showToast({
      title: "请输入手机后四位"
    });
    return false;
  } else if (!isPhoneNumFour(phoneNumer)) {
    wx.showToast({
      title: "请输入完整的手机后四位"
    });
    return false;
  }
  return true;
}