/**
 * Created by Administrator on 2016/9/16.
 */
var util=require('./utils/utils.js');
var thead=require('./str/sign.head.string');
var tbody=require('./str/signin.body.string');
var troot=require('./str/common.root.string');
util.renderHtml(thead+tbody+troot);
require('./js/signin.js');
require('./js/js.KinerCode.js');
