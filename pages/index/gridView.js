
Page({
  data: {
    grids: [{
      name: '驾驶人联系',
      nameSub: '方式变更',
      url: 'login',
      img:'../../res/images/JSR.png',
      bgColor:'#8a7de2'
    }, {
      name: '机动车联系',
      nameSub: '方式变更',
      url: 'jdc',
      img: '../../res/images/JDC.png',
      bgColor: '#4a94c6'
      }, {
        name: 'AAAAA',
        nameSub: 'BBBB',
        url: 'TEST',
        img: '../../res/images/JDC.png',
        bgColor: '#5a84b6'
    }
    ]
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
  },
  onReady: function () {
  },
  tap: function (e) {
    console.log('onLoad');
    // for (var i = 0; i < order.length; ++i) {
    //   if (order[i] === this.data.toView) {
    //     this.setData({
    //       toView: order[i + 1]
    //     })
    //     break
    //   }
    // }
  }
})
