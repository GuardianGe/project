/**
 * Created by Administrator on 2016/9/14.
 */
var util=require('./utils/utils.js');
var thead=require('./str/index.head.string');
var tbody=require('./str/index.body.string');
var tfoot=require('./str/common.foot.string');
var troot=require('./str/common.root.string');
    util.renderHtml(thead+tbody+tfoot+troot);
    require('./js/act.js');
    require('./js/get_pro.js');
    require('./js/get_pro02.js');

