/**
 * Created by Administrator on 2016/9/16.
 */
var util=require('./utils/utils.js');
var thead=require('./str/common.head.string');
var tbody=require('./str/goodsinfo.body.string');
var tfoot=require('./str/common.foot.string');
var troot=require('./str/common.root.string');
util.renderHtml(thead+tbody+tfoot+troot);
require('./js/goodsinfo.js');