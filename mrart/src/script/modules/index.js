/**
 * Created by Administrator on 2016/9/14.
 */

module.exports = function () {
    function getF_Info() {
        $.ajax({
            url: '/api/getIndexList',
            type: 'get',
            data: {},
            success:function(data){
                for(var i=0;i<data.length;i++){
                    var dataObj=JSON.parse(data[i].Data);
                    var liOb=$("<li>"
                        +"<a href=\"#\">"
                        +"<img src=\"img/"+dataObj.src+"\">"
                        +"</a>"
                        +"</li>");
                    $($(".sLis")[0]).append(liOb);
                }
            },
        })
    }
    getF_Info();

};