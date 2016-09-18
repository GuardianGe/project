/**
 * Created by Administrator on 2016/9/15.
 */
$(function() {
    //头部导航栏
    var hnav = document.getElementById("hnav");
    console.log($("#aaa"));

    var liList = hnav.getElementsByTagName("li");
    var navList = document.getElementsByClassName("navList");
    for (var i = 0; i < navList.length; i++) {
        liList[i].index = i;
        if (i == 2) {
            continue;
        } else {
            liList[i].onmouseover = function () {
                navList[this.index].style.display = "block";
                this.style.background = "#fff";
            };
            liList[i].onmouseout = function () {
                navList[this.index].style.display = "none";
                this.style.background = "#f2f2f2";
            };
        }
    }

    //放大镜
    var ione = $(".one"),
        ithe = $(".thebox"),
        itwo = $(".two img"),
        tthe = $(".the img");

    var arr = ["img/gs01.jpg", "img/gs02.jpg", "img/gs03.jpg"];
    var oarr = ["img/gs01.jpg", "img/gs02.jpg", "img/gs03.jpg"];
    itwo.each(function (i) {
        $(this).click(function () {
            $(".one img").attr("src", arr[i])
            tthe.attr("src", oarr[i])
            itwo.removeClass("active")
            $(this).addClass("active")
        })
        ione.mousemove(function (a) {
            var evt = a || window.event
            ithe.css('display', 'block')
            var ot = evt.clientY - ($(".one").offset().top - $(document).scrollTop()) - 133;
            var ol = evt.clientX - ($(".one").offset().left - $(document).scrollLeft()) - 100;
            if (ol <= 0) {
                ol = 0;
            }
            if (ot <= 0) {
                ot = 0;
            }
            if (ol >= 200) {
                ol = 200
            }
            if (ot >= 200) {
                ot = 200
            }
            $("#sp").css({'left': ol, 'top': ot});
            var ott = ot / 400 * 600;
            var oll = ol / 400 * 600;
            tthe.css({'left': -oll, 'top': -ott})
        })
        ione.mouseout(function () {
            ithe.css('display', 'none')
        })
    });
    //点击加减商品数量
    $("#jian").click(function () {
        var Snum = $("#pnum").val();
        if (Snum > 1) {
            Snum--;
            $("#pnum").val(Snum);
        }
    });
    $("#jia").click(function () {
        var Snum = $("#pnum").val();
        if (Snum < 100000) {
            Snum++;
            $("#pnum").val(Snum);
        }
    });
    //点击购买生成商品
    $("#gou").click(function () {
        var pid=$("#pname").attr("code");
        var pimg = $("#pimg").attr("src");
        var pname = $("#pname").html();
        var pprice = $("#pprice").html();
        var pnum = $("#pnum").val();
        var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
        var ajaxDataJson = {
            src: pimg,
            name: pname,
            price: pprice,
            num: pnum
        }
        var dataStr = JSON.stringify(ajaxDataJson);
        $.ajax({
            url: ajaxurl,
            data: {
                ID: pid,
                datajson: dataStr,
                type: 100
            },
            success: function () {
                var p= $("#pnum").val();
                $("#shopnum").html(p);
                alert("添加成功");
            },
            dataType: "jsonp"
        });
    })
});
