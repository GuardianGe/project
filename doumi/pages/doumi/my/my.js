Page({
    data:{
        modelHidden1:true,
        modelHidden2:true,
        toastHidden1:true,
        toastHidden2:true,
        userInfo: {
            username: '',
            password: ''
        },
        actionSheet:{
            actionSheetHidden:true,
            actionSheetItems:['帮助','关于']
        } 
    },
    onLoad: function () {
        console.log(this.data.modelHidden2);
    },
    // onShow:function(){
    //   var u = wx.getStorageSync('username');
    //   if(!u) {
    //     this.setData({
    //       userInfo: {
    //         username: '',
    //         password: ''
    //       },
    //         modalHidden1: false
    //     });
    //   }  
    // },
    actionConfirm:function(){
        wx.setStorageSync('username',this.data.userInfo.username);
        wx.setStorageSync('password',this.data.userInfo.password);
        wx.setData({
            modelHidden1:true,
            modelHidden2:true
        })
    },
    actiinCancel:function(){
        this.setData({
            modelHidden1:true,
            modelHidden2:true
        })
    },
    saveUsername:function(event){
        setDate({
            'userInfo.username':event.detail.value
        })
    },
    savePassword:function(event){
        setDate({
            'userInfo.password':event.detail.value
        })
    },
    bindItemTap:function(event){
        switch(event.target.name){
            case '投诉':
                this.setData({
                    toastHidden:false
                })
                break;
            case '帮助':
                this.setDate({
                    toastHidden:false
                })
                break;
        }
    },
     toastChange1: function () {
        this.setData({
            toastHidden1: true
        });
     },
     toastChange2: function () {
        this.setData({
            toastHidden2: true
        });
     },
     signIn:function(){
         this.setData({
            modelHidden1:false
        });
        console.log(modelHidden1)
     },
     signOut:function(){
         this.setData({
            modelHidden2:false
        });
     }
});