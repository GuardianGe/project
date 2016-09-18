/**
 * Created by Administrator on 2016/9/17.
 */
$(function () {
    //头部导航栏
    var hnav = document.getElementById("hnav");
    console.log($("#aaa"));

    var liList = hnav.getElementsByTagName("li");
    var navList = document.getElementsByClassName("navList");
    for (var i = 0; i < navList.length; i++) {
        liList[i].index = i;
        if (i == 2) {
            continue;
        }else{
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
    //获取购物车商品
    function secMain(indexv,sizev,mytype){
        var pageSizeV =sizev;
        var pageIndexV=indexv;
        var myType=mytype;
        function getF_Info() {
            $.ajax({
                url:"http://localhost:8080/product/GetProductsByPage_get?type="+myType,
                data:{
                    "pagesize":pageSizeV,
                    "pageindex":pageIndexV,
                    "type":myType
                },
                success:function(data){
                    for(var i=0;i<data.length;i++){
                        //把data 里面的string 主动转成对象；
                        var dataObj=JSON.parse(data[i].Data);
                        var liOb=$("<div class=\"pl\" id=\"p_0\"><div class=\"c1\">"
                            +"<span><img src="+dataObj.src+" class=\"pimg\"></span>"
                            +"<p class='pname' code='8001'>"+dataObj.name+"</p>"
                            +"</div>"
                            +"<div class=\"c2 pprice\">"+dataObj.price+"</div>"
                            +"<div class=\"c2\" id=\"c2\">"
                            +"<span>"
                            +"<a href=\"#\" class=\"jian\">-</a>"
                            +"<input type=\"text\" value=\""+dataObj.num+"\" class=\"pnum\">"
                            +"<a href=\"#\" class=\"jia\">+</a>"
                            +"</span>"
                            +"</div>"
                            +"<div class=\"c3\">"
                            +"<a href=\"#\" class='shan'>删除</a></div></div>");
                        $("#cart-list").append(liOb);
                    }

                    //总价格
                    function sumPrice(){
                        if($(".pl")){
                            var sum=0;var count=0;
                            for(var i=0;i<$(".pl").length;i++){
                                var oprice=$($(".pl")[i]).find(".pprice").html();
                                var onum=$($(".pl")[i]).find(".pnum").val();
                                var osum=parseInt(oprice)*parseInt(onum);
                                count+=parseInt(onum);
                                sum+=osum;
                            }
                            var esum="￥"+sum+".00";
                            $("#yuan").html(esum);
                            $("#shopnum").html(count);
                        }
                    }
                    sumPrice();
                    //点击加减商品数量
                    $(".jian").on("click",function () {
                        var Snum = $(this).siblings(".pnum").val();
                        if (Snum > 1) {
                            Snum--;
                            $(this).siblings(".pnum").val(Snum);
                            sumPrice();
                            var pid= $(this).parent().parent().parent().find(".pname").attr("code");
                            var pimg =   $(this).parent().parent().parent().find(".pimg").attr("src");
                            var pname = $(this).parent().parent().parent().find(".pname").html();
                            var pprice =  $(this).parent().parent().parent().find(".pprice").html();
                            var pnum =   $(this).siblings(".pnum").val();
                            var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
                            var ajaxDataJson = {
                                src: pimg,
                                name: pname,
                                price: pprice,
                                num: pnum
                            };
                            var dataStr = JSON.stringify(ajaxDataJson);
                            $.ajax({
                                url: ajaxurl,
                                data: {
                                    ID: pid,
                                    datajson: dataStr,
                                    type: 100
                                },
                                dataType: "jsonp"
                            });
                        }
                    });
                    $(".jia").on("click",function () {
                        var Snum = $(this).siblings(".pnum").val();
                        if (Snum < 1000000) {
                            Snum++;
                            $(this).siblings(".pnum").val(Snum);
                            sumPrice();
                            var pid= $(this).parent().parent().parent().find(".pname").attr("code");
                            var pimg =   $(this).parent().parent().parent().find(".pimg").attr("src");
                            var pname = $(this).parent().parent().parent().find(".pname").html();
                            var pprice =  $(this).parent().parent().parent().find(".pprice").html();
                            var pnum =   $(this).siblings(".pnum").val();
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
                                dataType: "jsonp"
                            });
                        }
                    });
                    //删除购物车商品
                    $(".shan").on("click",function () {
                        var pid=$(this).parent().parent().find(".pname").attr("code");
                        $(this).parent().parent().remove();
                        sumPrice();
                        var ajaxurl = "http://localhost:8080//product/DeleteProductById_get?id="+pid;
                        $.ajax({
                            url: ajaxurl,
                            data: {
                                ID: pid
                            },
                            dataType: "jsonp"
                        });
                    });
                },
                dataType:"jsonp"
            })
        }
        getF_Info();
    }
    secMain(1,100000,100);
    //提交按钮
    $("#submit").click(function () {
        alert("提交订单成功");
    });
});
