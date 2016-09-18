/**
 * Created by Administrator on 2016/9/10.
 */

function sTop(indexv,sizev,mytype) {
    //获取商品信息
    var pageSizeV = sizev;
    var pageIndexV = indexv;
    var myType = mytype;
    function getF_Info() {
        $.ajax({
            url: "http://localhost:8080/product/GetProductsByPage_get?type=" + myType,
            data: {
                "pagesize": pageSizeV,
                "pageindex": pageIndexV
            },
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    //把data 里面的string 主动转成对象；
                    var dataObj = JSON.parse(data[i].Data);
                    var liOb = $("<tr>"
                        + "<td class='pid'>" + dataObj.id + "</td>"
                        + "<td class='pname'>" + dataObj.name + "</td>"
                        + "<td class='pimg'>" + dataObj.src + "</td>"
                        + "<td class='pprice'>" + dataObj.price + "</td>"
                        + "<td class='pop'>" + dataObj.op + "</td>"
                        + "<td class='cz'><input type='button' value='删除' class='sc'></td>"
                        + "<td class='cz'><input type='button' value='编辑' class='bj'></td>"
                        + "</tr>");
                    $("#goods02").append(liOb);
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
                    var ajaxName=$(this).parent().parent().find(".pname").html();
                    var ajaxSrc=$(this).parent().parent().find(".pimg").html();
                    var ajaxPrice=$(this).parent().parent().find(".pprice").html();
                    var ajaxOp=$(this).parent().parent().find(".pop").html();
                    var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
                    var ajaxDataJson = {
                        id: ajaxId,
                        name:ajaxName,
                        num:ajaxId,
                        src:ajaxSrc,
                        price:ajaxPrice,
                        op:ajaxOp
                    };
                    var dataStr = JSON.stringify(ajaxDataJson);
                    $.ajax({
                        url: ajaxurl,
                        data: {
                            id: ajaxId,
                            datajson: dataStr,
                            "type":2
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
sTop(1,10,2);
$("#btn01").click(function () {
    if(n>1){
        $("#goods02").html("");
        n--;
        sTop(n,10,2);
    }
});
$("#btn02").click(function () {
    $("#goods02").html("");
    n++;
    sTop(n,10,2);
});
//添加商品
$("#bt1").click(function () {
    //ajax;
    alert(5);
    var ajaxId=$("#txtid").val();
    var ajaxName=$("#txtname").val();
    var ajaxNum=$("#txtnum").val();
    var ajaxSrc=$("#txtimg").val();
    var ajaxPrice=$("#txtprice").val();
    var ajaxOp=$("#txtoprice").val();
    $(".goods02").append($("<tr>"
        +"<td>" +ajaxId +"</td>"
        +"<td>" +ajaxName +"</td>"
        +"<td>No." +ajaxNum +"</td>"
        +"<td>" +ajaxSrc +"</td>"
        +"<td>" +ajaxPrice +"</td>"
        +"<td>" +ajaxOp +"</td>"
        +"<td><input type='button' value='删除' class='sc'></td>"
        +"</tr>"));
    var ajaxurl = "http://localhost:8080//product/CreateUpdateProduct_get";
    var ajaxDataJson = {
        id: ajaxId,
        name:ajaxName,
        num:ajaxNum,
        src:ajaxSrc,
        price:ajaxPrice,
        op:ajaxOp
    };
    var dataStr = JSON.stringify(ajaxDataJson);
    $.ajax({
        url: ajaxurl,
        data: {
            id: ajaxId,
            datajson: dataStr,
            "type":2
        },
        dataType:"jsonp"
    });

    $("input[type='text']").val("");
})


var oTable=document.getElementById("goods02");
oTable.onclick=function(event){
    event=EventUtil.getEvent(event);
    //创建一个input ；
    //把td的内容赋值给input
    //删除td的内容，
    //把input放到td中。
    var oTxt=document.createElement("input");
    oTxt.style.width="180px";
    oTxt.style.height="30px";
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


