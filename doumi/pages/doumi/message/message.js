Page({
    data:{
        news:[],
        loadingHidden:false,
        refreshHidden:true,
        loadmoreHidden:true
    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/news.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                    news: res.data,
                    loadingHidden:true
                });
            },
            fail: function (error) {
                console.log(error);
            }
        });
    },
    actionToupper: function () {
        var that = this;
        this.setData({
            refreshHidden:false
        });
        wx.request({
            url: 'http://localhost/mock/news.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    news: res.data.concat(that.data.news),
                    refreshHidden:true
                });
            }
        });
    },

    actionTolower: function () {
        var that = this;
        this.setData({
            loadmoreHidden:true
        });
        wx.request({
            url: 'http://localhost/mock/news.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    news: that.data.news.concat(res.data),
                    loadmoreHidden:false
                });
            }
        });
    }
});