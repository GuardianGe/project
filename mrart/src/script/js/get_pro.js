/**
 * Created by Administrator on 2016/9/6.
 */
function secMain(indexv,sizev,mytype){
        var pageSizeV =sizev;
        var pageIndexV=indexv;
        var myType=mytype;
//ajax 获取数据 load
      /*   var sLis=$(".sLis").get();*/
        function getF_Info() {
            $.ajax({
                url:"http://localhost:8080/product/GetProductsByPage_get?type="+myType,
                data:{
                    "pagesize":pageSizeV,
                    "pageindex":pageIndexV
                },
                success:function(data){
                    for(var i=0;i<data.length;i++){
                        //把data 里面的string 主动转成对象；
                        var dataObj=JSON.parse(data[i].Data);
                        var liOb=$("<li>"
                            +"<a href=\"detail.html\">"
                            +"<img src=\"img/"+dataObj.src+"\">"
                            +"</a>"
                            +"</li>");
                        $($(".sLis")[pageIndexV-1]).append(liOb);
                    }
                },
                dataType:"jsonp"
            })
        }
        getF_Info();
}
secMain(1,7,1);
secMain(2,7,1);
secMain(3,7,1);
secMain(4,7,1);
secMain(5,7,1);
