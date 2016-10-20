Page({
    data:{
        commend:[]
    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: 'http://localhost/mock/commend.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                that.setData({
                    commend: res.data,
                });
            },
            fail: function (error) {
                console.log(error);
            }
        });
    }
});