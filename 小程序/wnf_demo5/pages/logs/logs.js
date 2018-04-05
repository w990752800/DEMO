Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    pageList: {},
    searchLoading: true, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false,  //“没有数据”的变量，默认false，隐藏  
    isFromSearch: true,   // 用于判断searchSongList数组是不是空数组，默认true，空的数组  
    current_page: 1,
  },
  //绑定点击事件
  bindClick: function (e) {
    // console.log(e.target.dataset.current);
    var that = this;
    var currentTab = e.target.dataset.current


    if (currentTab != that.data.currentTab || that.data.pageList.length == 0) {
      that.setData({
        currentTab: currentTab
      })

      wx.showLoading({
        title: '加载中'
      })

      setTimeout(function () {
        wx.hideLoading()
      }, 1000)


      wx.request({
        url: 'http://211.67.172.109:8080/YGGK_WX/source/WeChat_YGGK/public/api/article/article-list?page=' + currentTab,
        success: function (res) {
          // console.log(res.data);
          // console.log(res.data.Datas.data)
          that.setData({
            pageList: res.data.Datas.data
          })
        }
      })
    }
  },
  //加载更多
  loadMore: function (currentTab, current_page) {
    var that = this;
    wx.request({
      url: 'http://211.67.172.109:8080/YGGK_WX/source/WeChat_YGGK/public/api/article/article-list',
      data: { category_id: currentTab, page: current_page },
      success: function (res) {
        // console.log(res);
        if (res.data.Datas.data != 0) {
          let searchList = {};
          searchList = that.data.pageList.concat(res.data.Datas.data);
          // console.log(searchList)
          that.setData({
            pageList: searchList
          })
          // console.log(that.data.pageList)
          searchLoading: true   //把"上拉加载"的变量设为false，显示  
        } else {
          that.setData({
            searchLoadingComplete: true, //把“没有数据”设为true，显示  
            searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
          });
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var current = options.current;
    // console.log(options);
    that.setData({
      currentTab: options.current
    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)

    wx.request({
      url: 'http://211.67.172.109:8080/YGGK_WX/source/WeChat_YGGK/public/api/article/article-list?page=' + current,
      success: function (res) {
        // console.log(res.data);
        // console.log(res.data.Datas.data)
        that.setData({
          pageList: res.data.Datas.data
        })
      }
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  //scroll-view获取数据
  searchScrollLower: function () {
    var that = this;
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)

      that.setData({
        current_page: that.data.current_page + 1,  //每次触发上拉事件，把searchPageNum+1  
        isFromSearch: false  //触发到上拉事件，把isFromSearch设为为false  
      });
      // console.log(that.data.current_page)
      that.loadMore(7, that.data.current_page);
    }
  }
})