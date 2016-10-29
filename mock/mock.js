var list = require('./list');
var navlist = require('./navlist');
var listmore = require('./listmore');
var listrefresh = require('./listrefresh');
var news = require('./news');
var detail = require('./detail');

module.exports = function() {
    return {
        "navlist":navlist,
        "list": list,
        "listmore":listmore,
        "listrefresh":listrefresh,
        "news":news,
        "detail":detail
    }
}
