Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    


  },

  //跳转页面
  bindClick:function(e){
    var current = e.target.dataset.current;
    var id = e.target.dataset.id;
    wx.navigateTo({
      url: '../logs/logs?current=' + current+'&id='+id
    })
  }
})