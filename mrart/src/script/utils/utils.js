/**
 * Created by Administrator on 2016/9/14.
 */

var Common = {
    renderHtml: function (str) {
        $('body').prepend(str);
    }
};

module.exports = Common;