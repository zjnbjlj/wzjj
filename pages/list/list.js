var url = "https://wzjj.wzcc.com/Api/Index/getCarTypes/";
var page = 0;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;


// 获取数据的方法，具体怎么获取列表数据大家自行发挥
var GetList = function (that) {
  that.setData({
    loadinghidden: false
  });
  setTimeout(function () {
    var list = [
      { id: "1", name: "测试1", short_description: "测试1描述" },
      { id: "2", name: "测试2", short_description: "测试2描述" },
      { id: "3", name: "测试3", short_description: "测试3描述" },
      { id: "4", name: "测试4", short_description: "测试4描述" },
      { id: "5", name: "测试5", short_description: "测试5描述" },
      { id: "7", name: "测试6", short_description: "测试6描述" },
      { id: "8", name: "测试6", short_description: "测试6描述" },
      { id: "9", name: "测试6", short_description: "测试6描述" },
      { id: "10", name: "测试6", short_description: "测试6描述" },
      { id: "11", name: "测试6", short_description: "测试6描述" },
      { id: "12", name: "测试6", short_description: "测试6描述" },
      { id: "13", name: "测试6", short_description: "测试6描述" },
      { id: "14", name: "测试6", short_description: "测试6描述" },
      { id: "15", name: "测试6", short_description: "测试6描述" },
      { id: "16", name: "测试6", short_description: "测试6描述" },
      { id: "17", name: "测试6", short_description: "测试6描述" },
      { id: "18", name: "测试6", short_description: "测试6描述" },
      { id: "19", name: "测试6", short_description: "测试6描述" },
      { id: "20", name: "测试6", short_description: "测试6描述" },
      { id: "21", name: "测试6", short_description: "测试6描述" },
      { id: "22", name: "测试6", short_description: "测试6描述" },
      { id: "23", name: "测试6", short_description: "测试6描述" },
      { id: "24", name: "测试6", short_description: "测试6描述" },
      { id: "25", name: "测试6", short_description: "测试6描述" },
      { id: "26", name: "测试6", short_description: "测试6描述" },
      { id: "27", name: "测试6", short_description: "测试6描述" },
      { id: "28", name: "测试6", short_description: "测试6描述" },
      { id: "29", name: "测试6", short_description: "测试6描述" },
      { id: "30", name: "测试6", short_description: "测试6描述" },
      { id: "6", name: "测试6", short_description: "测试6描述" },
    ];
    that.setData({
      list: list
    });
    page++;
    that.setData({
      loadinghidden: true,
      pulldownhidden: true,
      bottomhidden: true
    });
  }, 3000)
}
Page({
  data: {
    pulldownhidden:true,
    loadinghidden: true,
    bottomhidden:true,
    list: []
  },
  onLoad: function () {
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        
      }
    });
  },
  onShow: function () {
    //  在页面展示之后先获取一次数据
    console.log("获取数据");
    var that = this;
    GetList(that);
  },
  onPullDownRefresh: function () {
    page = 0;
    console.log("下拉刷新");
    this.setData({
      pulldownhidden: false
    });
    GetList(this);
    wx.stopPullDownRefresh()
  },
  // 上拉加载回调接口
  onReachBottom: function () {
    var that = this;
    this.setData({
      bottomhidden: false
    });
    GetList(that);
    console.log("加载更多");
  },
})