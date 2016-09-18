function sTop(indexv,sizev,mytype){
    //获取商品信息
        var pageSizeV=sizev;
        var pageIndexV=indexv;
        var myType=mytype;
//ajax 获取数据 load
    /*    var sLis=$(".topList").get();*/
        function getF_Info() {
            $.ajax({
                url:"http://localhost:8080/product/GetProductsByPage_get?type="+myType,
                data:{
                    "pagesize":pageSizeV,
                    "pageindex":pageIndexV
                },
                success:function(data){
                    for(var i=0;i<data.length;i++){
                        var dataObj=JSON.parse(data[i].Data);
                        var liOb=$("<li class=\"topli"+pageIndexV+"\">"
                            +"<div class=\"gname"+pageIndexV+"\">"
                            +"<span class=\"h1 hcolor\">No."+dataObj.id+"</span>"
                            +"<h6>"+"<a href=\"#\">"+dataObj.name+"</a>"+"</h6>"
                            +"</div>"
                            +"<div class=\"gbody"+pageIndexV+"\">"
                            +"<div class=\"gbody-left\">"
                            +"<span class=\"h2\">No."+dataObj.id+"</span>"
                            +"<a href=\"goodsinfo.html\"><img src=\"img/"+dataObj.src+"\" alt=\"\"></a>"
                            +"</div>"
                            +"<ul class=\"gbody-right\">"
                            +"<li><h6><a href=\"#\">"+dataObj.name+"</a></h6></li>"
                            +"<li><span class=\"price1\">"+dataObj.price+"</span></li>"
                            +"<li><del>"+dataObj.op+"</del></li>"
                            +"</ul>"
                            +"</div>"
                            +"</li>");
                        $($(".topList")[pageIndexV-1]).append(liOb);
                    }
                },
                dataType:"jsonp"
            })
        }
    getF_Info();
}
sTop(1,10,2);
sTop(2,10,2);
sTop(3,10,2);
sTop(4,10,2);
sTop(5,10,2);
