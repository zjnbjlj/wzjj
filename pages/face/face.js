Page({
  data: {
    name: "季隆建",
    idCardNumber: "330324199107052279"
  },
  faceClick: function (e) {
    console.log("name:" + this.data.name
      + "id:" + this.data.idCardNumber);
    wx.startFacialRecognitionVerify({
      name: this.data.name,
      idCardNumber: this.data.idCardNumber,
      success() {
        console.log("success");
        wx.showModal({
          title: 'success',
          showCancel: false,
          content: '成功',
          confirmText: "确定",
          success: function (res) {
            console.log(res);
            if (res.confirm) {
              //关闭页面
              console.log("完成");
              // wx.navigateBack({
              //   delta: 1
              // })
            }
          }
        });
      }, fail(res) {
        console.log("fail");
        var content = "fail" + res.verifyResult;
        wx.showModal({
          title: 'fail',
          showCancel: false,
          content: content,
          confirmText: "确定",
          success: function (res) {
            console.log(res);
            if (res.confirm) {
              //关闭页面
              console.log("完成");
              // wx.navigateBack({
              //   delta: 1
              // })
            }
          }
        });
        console.log(res.verifyResult);
      }
    })
  },
  inputName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  inputIdCardNumber: function (e) {
    this.setData({
      idCardNumber: e.detail.value
    })
  }
});