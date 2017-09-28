// pages/index/login.js
var app = getApp()
Page({
  data:{
    userN:'lf',
    passW:'123456',
    showTest:'测试！',
    modalHidden:true,
    returnText:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // 用户名与密码输入同时赋值
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  loginBtnClick:function(){
    const self=this;
    wx.request({
      url: 'https://sbgl.wzcc.com/WebCall.Mall.DataUser.axd/Login', 
      data: {
        userName:this.data.userN
        ,password:this.data.passW
        ,os:''
      }
      ,method:'POST'
      ,header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        var jsonData=res.data;
        if(jsonData.Status=='true'){
          var userData=jsonData.Data;
          // 设置全局变量
          var app = getApp(); 
          app.userId=userData[0].ID;
        }else{
            self.setData({
              showTest:jsonData.Info
              ,modalHidden:false
            })
        }
        // this.setData({
        //   returnText:res
        // })
      }
    })
    // this.setData({
    //   showTest:'A'+this.data.userN
    //   ,modalHidden:!this.data.modalHidden
    // })
    // if(this.data.userN.length == 0 || this.data.passW.length == 0){
    //   this.setData({
    //     infoMess:'温馨提示：用户名和密码不能为空！',
    //   })
    // }else{
    //   this.setData({
    //     infoMess:'',
    //     userName:'用户名：'+this.data.userN,
    //     passWd:'密码：'+this.data.passW
    //   })
    // }
  }
  // 弹出框事件
  ,modalBindaconfirm:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
      showTest:'您点击了【确认】按钮！',
      buttonDisabled:!this.data.buttonDisabled
    })
  },
  modalBindcancel:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
      showTest:'您点击了【取消】按钮！'
    })
  }
})