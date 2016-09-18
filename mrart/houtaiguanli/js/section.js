/**
 * Created by Administrator on 2016/9/10.
 */
function secMain(indexv,sizev,mytype) {
//获取商品信息
    var pageSizeV =sizev;
    var pageIndexV=indexv;
    var myType=mytype;
//ajax 获取数据 load
    /*var sLis=$(".goods").get();*/
    function getF_Info() {
        $.ajax({
            url: "http://localhost:8080/product/GetProductsByPage_get?type="+myType,
            data: {
                "pagesize": pageSizeV,
                "pageindex": pageIndexV
            },
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    //把data 里面的string 主动转成对象；
                    var dataObj = JSON.parse(data[i].Data);
                    var liOb = $("<tr>"
                        + "<td class='pid'>"
                        + dataObj.id
                        + "</td>"
                        + "<td class='pimg'>"
                        + dataObj.src
                        + "</td>"
                        + "<td class='cn'><input type=\"button\" value=\"删除\" class=\"sc\"></td>"
                        + "<td class='cn'><input type=\"button\" value=\"编辑\" class=\"bj\"></td>"
                        + "</tr>");
                    $("#goods").append(liOb);
                }
                $("tr:odd").css("background-color", "#bbbbff");
                //删除商品
                $(".sc").click(function () {
                    var pid=$(this).parent().parent().find(".pid").html();
                    $(this).parent().parent().remove();
                    var ajaxurl = "http://localhost:8080//product/DeleteProductById_get?id="+pid;
                    $.ajax({
                        url: ajaxurl,
                        data: {
                            ID: pid
                        },
                        dataType: "jsonp"
                    });
                });
                //编辑文件
                $(".bj").click(function () {
                    var ajaxId=$(this).parent().parent().find(".pid").html();
                    var ajaxSrc=$(this).parent().parent().find(".pimg").html();
                    var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
                    var ajaxDataJson = {
                        id: ajaxId,
                        src:ajaxSrc
                    };
                    var dataStr = JSON.stringify(ajaxDataJson);
                    $.ajax({
                        url: ajaxurl,
                        data: {
                            ID: ajaxId,
                            datajson: dataStr,
                            type:1
                        },
                        dataType:"jsonp"
                    });
                })
            },
            dataType: "jsonp"
        })
    }
    getF_Info();
}
var n=1;
secMain(1,7,1);
$("#btn01").click(function () {
    if(n>1){
        $("#goods").html("");
        n--;
        secMain(n,7,1);
    }
});
$("#btn02").click(function () {
    $("#goods").html("");
    n++;
    secMain(n,7,1);
});

//添加商品
$("#bt1").click(function () {
    //ajax;
    var ajaxId=$("#txtid").val();
    var ajaxSrc=$("#txtimg").val();
    $(".goods").append($("<tr>"
        +"<td>"
        +ajaxId
        +"</td>"
        +"<td>"
        +ajaxSrc
        +"</td>"
        +"<td class='cn'><input type='button' value='删除' class='sc'></td>"
        +"<td class='cn'><input type='button' value='编辑' class='bj'></td>"
        +"</tr>"));
    var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
    var ajaxDataJson = {
        id: ajaxId,
        src:ajaxSrc
    }
    var dataStr = JSON.stringify(ajaxDataJson);
    $.ajax({
        url: ajaxurl,
        data: {
            ID: ajaxId,
            datajson: dataStr,
            type:1
        },
        dataType:"jsonp"
    });
    $("input[type='text']").val("");
})


var oTable=document.getElementById("goods");
oTable.onclick=function(event){
    event=EventUtil.getEvent(event);
    //创建一个input ；
    //把td的内容赋值给input
    //删除td的内容，
    //把input放到td中。
    var oTxt=document.createElement("input");
    oTxt.type="text";
    oTxt.value=EventUtil.getTarget(event).innerHTML;  //td  的内容    table
    EventUtil.getTarget(event).innerHTML="";  //this td
    EventUtil.getTarget(event).appendChild(oTxt);
    oTxt.focus();
    oTxt.onclick=function(event){
        var event=EventUtil.getEvent(event);
        EventUtil.stopPropagation(event);
    }
    oTxt.onblur=function(){
        //把txt的值存储下来。
        //删除txt
        //把txt的值赋值给td
        var txtValue=this.value;  // oTxt
        this.parentNode.innerHTML=txtValue;
    }
}






