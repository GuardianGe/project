Page({
    data:{
        list:[],
        loadingHidden:false,
        refreshHidden:true,
        loadmoreHidden:true,
        isScroll:false,
        headerTop:0,
        swiper: {
            indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 300
        }
    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/list.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                    list: res.data,
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
            refreshHidden:false,
            headerTop:"30px"
        });
        wx.request({
            url: 'http://localhost/mock/refresh.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    list: res.data.concat(that.data.list),
                    refreshHidden:true,
                    headerTop:0
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
            url: 'http://localhost/mock/more.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    list: that.data.list.concat(res.data),
                    loadmoreHidden:false
                });
            }
        });
    },
    actionScroll:function(event){
        if(event.detail.scrollTop>10){
            this.setData({
                isScroll:true
            })
        }else if(event.detail.scrollTop<10){
            this.setData({
                isScroll:false
            })
        }
    }
});