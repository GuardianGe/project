/**
 * Created by Administrator on 2016/9/14.
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
//轮播图
    //开始轮换
    var imgul=document.getElementById("imgul");
    var s=document.getElementById("navul").children;
    var timer;
    var page=1;
    startTime();
    function startTime() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (page > 4) {
                imgul.style.left = 0;
                page = 1;
            }
            var num = -(page - 1) * 1280;
            var target = {
                left: num
            };
            move(imgul, target);
            bg(page);
            page++;

        }, 2500)
    }

    //对应背景转换
    function bg(page) {
        for (var i = 0; i < s.length; i++) {
            s[i].className = "liun"
        }
        if (page == 4) {
            s[0].className = "lion";
        } else {
            s[page - 1].className = "lion";
        }
    }

    for (var i = 0; i < s.length; i++) {
        s[i].onmouseover = function () {
            clearInterval(timer);
            var a = this.childNodes[0].innerHTML;
            page = parseInt(a);
            var num = -(page - 1) * 1280;
            var target = {
                left: num
            };
            move(imgul, target);
            bg(page);
            page++;
            startTime();
        }
    }
    //给图片绑定鼠标悬停事件
    var imgLis = document.getElementById("imgul").children;
    for (var i = 0; i < imgLis.length; i++) {
        imgLis[i].onmouseover = function () {
            clearInterval(timer);
        }
        imgLis[i].onmouseout = function () {
            startTime();
        }
    }

//商品列表
    var list=document.getElementsByClassName("list")[0];
    var listLi=list.getElementsByTagName("li");
    var catchild=document.getElementsByClassName("catchild");
    for(var i=0;i<listLi.length;i++){
        listLi[i].index=i;
        listLi[i].onmouseover= function () {
            catchild[this.index].style.display="block";
        };
        listLi[i].onmouseout= function () {
            catchild[this.index].style.display="none";
        }
    }
//小轮播图
    var imgul02=document.getElementById("imgul02");
    var timer01;
    var page01=1;
    startTime01();
    function startTime01() {
        clearInterval(timer01);
        timer01 = setInterval(function () {
            if (page01 > 4) {
                imgul02.style.top = 0;
                page01 = 1;
            }
            var num = -(page01 - 1) * 110;
            var target = {
                top: num
            };
            move(imgul02, target);
            page01++;
        }, 1500)
    }
    //给图片绑定鼠标悬停事件
    var imgLis02 = document.getElementById("imgul02").children;
    for (var i = 0; i < imgLis02.length; i++) {
        imgLis02[i].onmouseover = function () {
            clearInterval(timer01);
        }
        imgLis02[i].onmouseout = function () {
            startTime01();
        }
    }

//商标事件
    var bimg=document.getElementsByClassName("bimg");
    for(var i=0;i<bimg.length;i++){
        bimg[i].onmouseover= function () {
            var target={
                top:-97
            }
            var mm=this.childNodes[0].childNodes[0];
            move(mm,target);
        }
        bimg[i].onmouseout= function () {
            var target={
                top:0
            }
            var mm=this.childNodes[0].childNodes[0];
            move(mm,target);
        }
    }
//商标导航
    var brandLi=document.getElementsByClassName("brandli");
    var bpage=document.getElementsByClassName("bpage");
    var index=10;
    for(var i=0;i< brandLi.length;i++){
        brandLi[i].aaa=i;
        brandLi[i].onmouseover=function(){
            bpage[this.aaa].style.zIndex=index++;
        }
    }

//更多品牌事件
    var hd=document.getElementById("hd");
    var hdChild=document.getElementById("hdchild");
    hd.onmouseover= function () {
        hdChild.style.display="block";
    };
    hd.onmouseout= function () {
        hdChild.style.display="none";
    };
});

//热销榜事件
function topmat (topli,gname,gbody){
    $(document).on("mouseover",topli, function () {
        $(gname).css("display","block");
        $(gbody).css("display","none");
        $(this).children(gname).css("display","none");
        $(this).children(gbody).css("display","block")
    })
}
topmat(".topli1",".gname1",".gbody1");
topmat(".topli2",".gname2",".gbody2");
topmat(".topli3",".gname3",".gbody3");
topmat(".topli4",".gname4",".gbody4");
topmat(".topli5",".gname5",".gbody5");

/**
 * Created by Administrator on 2016/8/17.
 */
function move(element,target,fn){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var isComplete=true;
        for(var attr in target){
            /*var cur=Math.round(parseFloat(getStyle(element,attr)));*/
            if (attr == 'opacity') {        //注意：在写opacity属性透明度时，数值要*100；
                var cur = parseInt(parseFloat(getStyle(element, attr)) * 100);
            } else {
                var cur = Math.round(parseFloat(getStyle(element, attr)));
            }
            if(!cur){
                cur=0;
            }
            var speed=(target[attr]-cur)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
            if(cur==target[attr]){
                //sclearInterval(timer);
            }else{
                isComplete=false;
                /*  element.style[attr]=cur+speed+"px";*/
                if (attr == 'opacity') {
                    element.style.filter = 'alpha(opacity:' + parseInt(cur + speed) + ')';
                    element.style.opacity = parseInt(cur + speed) / 100;
                } else {
                    element.style[attr] = (cur + speed) + 'px';
                }
            }
        }
        if(isComplete){
            clearInterval(element.timer);
            if(fn){
                fn();
            }
        }
    },20);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {   //ie
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, false)[attr];  //非ie
    }
}






