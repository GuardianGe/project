/**
 * Created by Administrator on 2016/9/11.
 */
/**
 * Created by Administrator on 2016/9/8.
 */
$(function () {
//头部导航栏
    var hnav = document.getElementById("hnav");
    var liList = hnav.getElementsByTagName("li");
    var navList = document.getElementsByClassName("navList");
    for (var i = 0; i < navList.length; i++) {
        liList[i].index = i;
        if (i == 2) {
            continue;
        } else {
            liList[i].onmouseover = function () {
                navList[this.index].style.display = "block";
            };
            liList[i].onmouseout = function () {
                navList[this.index].style.display = "none";
            };
        }
    }


//用户注册
    //注册信息
    $("#submit").click(function () {
        var zz=$("#zz").html();
        var yz=$("#yz").html();
        var mm=$("#mm").html();
        if(zz=="正确"&&yz=="用户名可用"&&mm==""){
            var nameValue = $("#myUser").val();
            var passwordValue = $("#myPassword").val();
            var ajaxurl = "http://localhost:8080//user/registerGet?name=" + nameValue+"&password=" + passwordValue;
            $.ajax({
                url: ajaxurl,
                data: {
                    name: nameValue,
                    password: passwordValue
                },
                success: function (data) {
                    if (data == 1) {
                        alert("注册成功");
                    }else{
                        alert("注册失败");
                    }
                },
                dataType: "jsonp"
            });
        } else {
            alert("请填写正确的用户信息");
        }
    });

    //正则判断
    //用户名
    $("#myUser").blur(function () {
        var myuse=$("#myUser").val();
        var le=/^[a-zA-Z0-9_]{6,16}$/;  //用户名
        var tel=/^1[0-9]{10}$/;          //电话
        var emil=/^[\d,a-z]([\w\.\-]+)@([a-z0-9\-]+).([a-z\.]+[a-z])$/i;  //邮箱
        if(!((le.test(myuse)||tel.test(myuse)||emil.test(myuse)))){
            $("#yz").html("用户名格式不正确");
        }else{
            var ajaxurl = "http://localhost:8080//user/CheckUserNameGet?username=" + myuse;
            $.ajax({
                url: ajaxurl,
                data: {
                    username: myuse
                },
                success: function (data) {
                    if (data == 1) {
                        $("#yz").html("用户名已存在");
                    } else {
                        $("#yz").html("用户名可用");
                    }
                },
                dataType: "jsonp"
            })
        }
    });
    //密码
    $("#myPassword").blur(function () {
        var myuse=$("#myPassword").val();
        var leng=/^\d{6,}$/;  //长度
        if(!leng.test(myuse)){
            $("#mm").html("密码长度少于6位");
        }else{
            $("#mm").html("");
        }
    })
    $("#myPassword2").blur(function () {
       if( $("#myPassword2").val()==$("#myPassword").val()){
          $("#mm2").html("");
       }else{
           $("#mm2").html("两次密码不一致");
       }
    })
});