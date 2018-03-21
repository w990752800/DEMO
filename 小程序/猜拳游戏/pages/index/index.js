//index.js
//获取应用实例
const app = getApp()

var imagePaths = ['../images/1.jpg','../images/2.jpg','../images/3.jpg'];
var imageIndex = 0;

Page({
  data: {
    imagePath:imagePaths[0],
    title:'开始',
    isRuning:false,
    userInfo:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  change:function(e){ 
    imageIndex++;
    if(imageIndex>2){ 
      imageIndex=0;
    }
    this.setData({  
      imagePath:imagePaths[imageIndex]
    })
  },
  guess:function(){ 
    let isRuning = this.data.isRuning;
    if(!isRuning){  
      this.setData({  
        title:'停止',
        isRuning:true
      });
      this.timer = setInterval((function(){  
        this.change();
      }).bind(this),100)
    }else{  
      this.setData({
        title:'开始',
        isRuning:false
      });
      this.timer && clearInterval(this.timer);
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
