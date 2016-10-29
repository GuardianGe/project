/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _guide = __webpack_require__(3);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	var _index = __webpack_require__(7);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(11);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _teg = __webpack_require__(14);
	
	var _teg2 = _interopRequireDefault(_teg);
	
	var _news = __webpack_require__(17);
	
	var _news2 = _interopRequireDefault(_news);
	
	var _my = __webpack_require__(20);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _detail = __webpack_require__(23);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _store = __webpack_require__(26);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 自定义 scroll 指令
	
	//require("../styles/usage/page/app.scss");
	_commonUtil2.default.dirScroll();
	
	//views 引入组件 ES6语法
	
	
	//开启debug模式
	Vue.config.debug = true;
	
	// 在根组件加入 store，让它的子组件和 store 连接
	
	
	var App = Vue.extend({ //根组件
	    store: _store2.default // 在根组件加入 store，让它的子组件和 store 连接
	});
	
	var router = new VueRouter();
	
	router.map({ //定义路由映射
	    '/': {
	        component: _guide2.default
	    },
	    '/index': {
	        name: 'index', //定义路由的名字，方便使用
	        component: _index2.default,
	        subRoutes: {
	            '/': { //进入子路由页面
	                component: _main2.default
	            },
	            '/teg': {
	                component: _teg2.default
	            },
	            '/news': {
	                component: _news2.default
	            },
	            '/my': {
	                component: _my2.default
	            }
	        }
	    },
	    '/detail/:id': {
	        name: 'detail',
	        component: _detail2.default
	    }
	});
	
	router.start(App, '#app'); //启动路由

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f4dcd3e/guide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(5);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      imgs: ['./images/guide.jpg', './images/guide04.png', './images/guide02.png']
	    };
	  },
	  ready: function ready() {
	    var mySwiper = new Swiper("#guide-swiper");
	    this.change(0);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="m-guide">
	//     <div class="swiper-container" id="guide-swiper">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-for="img in imgs">
	//           <img v-if="$index==2" v-bind:src="img" v-link="{path:'/index'}">
	//           <img v-else v-bind:src="img">
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//调用接口的定义
	// action 会收到 store 作为它的第一个参数
	// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
	// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
	var tabChanger = exports.tabChanger = function tabChanger(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGETAB', tabIndex);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-guide\">\n  <div class=\"swiper-container\" id=\"guide-swiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-for=\"img in imgs\">\n        <img v-if=\"$index==2\" v-bind:src=\"img\" v-link=\"{path:'/index'}\">\n        <img v-else v-bind:src=\"img\">\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6aefe014/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _getters = __webpack_require__(9);
	
	// <template>
	//   <div>
	//     <div class="index-container" id="index-container">
	//         <router-view :transition="transitionName" transition-mode="out-in"></router-view>
	//     </div>
	//     <footer id=footer>
	//         <ul>
	//             <li
	//             v-for="tab in tablist"
	//             v-bind:class="tabIndex == $index ? 'active' : ''"
	//             v-on:click="navigatorTo($index)"
	//             v-link="{path:tab.path}">
	//                 <i class='iconfont' v-html='tab.icon'></i>
	//                 <b v-html='tab.name'></b>
	//             </li>
	//            </ul>
	//     </footer>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    },
	    getters: {
	      tabIndex: _getters.getTabindex
	    }
	  },
	  data: function data() {
	    return {
	      cur: 0,
	      tablist: [{ path: '/index', icon: '&#x3478;', name: '首页' }, { path: '/index/teg', icon: '&#xe61f;', name: '特工' }, { path: '/index/news', icon: '&#xe630;', name: '消息' }, { path: '/index/my', icon: '&#xe641;', name: '我的' }],
	      transitionName: 'fade'
	    };
	  },
	
	  methods: {
	    navigatorTo: function navigatorTo(index) {
	      this.change(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.tabIndex;
	};
	//export const getIndex = function(state) {
	//   return state.tabIndex;
	// }

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"index-container\" id=\"index-container\">\n      <router-view :transition=\"transitionName\" transition-mode=\"out-in\"></router-view>\n  </div>\n  <footer id=footer>\n      <ul>\n          <li\n          v-for=\"tab in tablist\"\n          v-bind:class=\"tabIndex == $index ? 'active' : ''\"\n          v-on:click=\"navigatorTo($index)\"\n          v-link=\"{path:tab.path}\">\n              <i class='iconfont' v-html='tab.icon'></i>\n              <b v-html='tab.name'></b>\n          </li>\n         </ul>\n  </footer>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-678818e7/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _vueLoading = __webpack_require__(27);
	
	var _vueLoading2 = _interopRequireDefault(_vueLoading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mySwiper = null; //初始化一个全局mySwiper变量，方便实现页面的跳转
	
	// <template>
	//   <div class="main-container">
	//       <header>
	//           <ul>
	//               <li>
	//                   <b class="iconfont">&#xe605;</b>
	//                   <span>北京</span>
	//               </li>
	//               <li>斗米兼职</li>
	//               <li class="iconfont">&#xe66f;</li>
	//           </ul>
	//       </header>
	//       <div v-loading="isLoading" id="loading"></div>
	//       <section id="main-scroll" v-if="!isLoading">
	//           <div>
	//               <div class="head">
	//                     <img v-bind:src="imgArrow"/>
	//                     <span>下拉刷新...</span>
	//               </div>
	//               <div class="swiper-container" id="main-swiper">
	//                     <ul class="swiper-wrapper">
	//                         <li class="swiper-slide" v-for="nav in navlist"><img v-bind:src="nav.url" /></li>
	//                     </ul>
	//                     <div class="swiper-pagination"></div>
	//               </div>
	//               <ul class="main-nav">
	//                   <li>
	//                       <div>
	//                           <i class="iconfont">&#xe61f;</i>
	//                       </div>
	//                       <span>全部兼职</span>
	//                   </li>
	//                   <li>
	//                       <div>
	//                           <i class="iconfont">&#xe602;</i>
	//                       </div>
	//                       <span>企业担保</span>
	//                   </li>
	//                   <li>
	//                       <div>
	//                           <i class="iconfont">&#xe619;</i>
	//                       </div>
	//                       <span>在线兼职</span>
	//                   </li>
	//                   <li>
	//                       <div>
	//                           <i class="iconfont">&#xe633;</i>
	//                       </div>
	//                       <span>签到赚钱</span>
	//                   </li>
	//               </ul>
	//               <div class="main-content">
	//                   <div class="main-content-head">
	//                       <div>
	//                           <i class="iconfont">&#xe616;</i>
	//                           <b>猜你喜欢</b>
	//                       </div>
	//                       <span>更多>></span>
	//                   </div>
	//                   <ul class="content-center">
	//                       <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
	//                           <div class="content-left">
	//                               <img :src="l.url" />
	//                               <span>报名中</span>
	//                           </div>
	//
	//                           <div class="content-right">
	//                               <div>
	//                                   <span>{{l.name}}</span>
	//                                   <i>奖</i>
	//                               </div>
	//                               <div>
	//                                   <span>
	//                                       <i class="iconfont"></i>
	//                                       <b>{{l.address}}</b>
	//                                   </span>
	//                                   <i>{{l.price}}/天</i>
	//                               </div>
	//                                <div>
	//                                   <span>
	//                                       <i class="iconfont"></i>
	//                                       斗米担保
	//                                   </span>
	//                                   <i>{{l.date}}</i>
	//                               </div>
	//                           </div>
	//                       </li>
	//                   </ul>
	//               </div>
	//               <div class="foot">
	//                   <img v-bind:src="imgArrow"/>
	//                   <span>上拉加载更多...</span>
	//                </div>
	//           </div>
	//       </section>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            navlist: [],
	            list: [],
	            curIndex: 0,
	            imgArrow: './images/arrow.png',
	            isLoading: true
	        };
	    },
	
	    directives: {
	        loading: _vueLoading2.default
	    },
	
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    ready: function ready() {
	        var _this = this;
	
	        var that = this;
	        this.change(0);
	        this.$http.get('/rest/navlist').then(function (res) {
	            _this.navlist = res.data.data;
	            console.log(_this.navlist);
	            _this.isLoading = false;
	            Vue.nextTick(function () {
	                mySwiper = new Swiper("#main-swiper", {
	                    loop: true,
	                    pagination: '.swiper-pagination',
	                    direction: 'horizontal',
	                    autoplay: '1500'
	                });
	            });
	        });
	
	        this.$http.get('/rest/list').then(function (res) {
	            _this.list = res.data.data;
	            console.log(_this.list);
	            // DOM 更新后，图片加载完 实例化 IScroll
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('#main-scroll', function () {
	                    var myScroll = new IScroll('#main-scroll', {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	                    myScroll.scrollTo(0, -45);
	
	                    var head = $('.head img'),
	                        topImgHasClass = head.hasClass('up');
	                    var foot = $('.foot img'),
	                        bottomImgHasClass = head.hasClass('down');
	
	                    myScroll.on('scroll', function () {
	                        //滑动时触发事件
	                        var y = this.y,
	                            //滑动距离
	                        maxY = this.maxScrollY - y; //距离底部距离
	                        if (y >= 0) {
	                            !topImgHasClass && head.addClass('up');
	                            return '';
	                        }
	                        if (maxY >= 0) {
	                            !bottomImgHasClass && foot.addClass('down');
	                            return '';
	                        }
	                    });
	
	                    myScroll.on('scrollEnd', function () {
	                        if (this.y >= -45 && this.y < 0) {
	                            myScroll.scrollTo(0, -45);
	                            head.removeClass('up');
	                        } else if (this.y >= 0) {
	                            head.attr('src', './images/ajax-loader.gif');
	
	                            // ajax下拉刷新数据
	                            that.$http.get('/rest/listrefresh').then(function (res) {
	                                that.list = res.data.data.concat(that.list);
	                                myScroll.scrollTo(0, -45);
	                                head.removeClass('up');
	                                head.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                });
	                            });
	                        }
	
	                        var self = this;
	                        var maxY = this.maxScrollY - this.y;
	                        if (maxY > -45 && maxY < 0) {
	                            myScroll.scrollTo(0, self.maxScrollY + 45);
	                            foot.removeClass('down');
	                        } else if (maxY >= 0) {
	                            foot.attr('src', './images/ajax-loader.gif');
	                            // ajax上拉加载数据
	                            that.$http.get('/rest/listmore').then(function (res) {
	                                that.list = that.list.concat(res.data.data);
	                                foot.removeClass('down');
	                                foot.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                    myScroll.scrollTo(0, self.maxScrollY + 45);
	                                });
	                            });
	                        }
	                    });
	                });
	            });
	        });
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"main-container\">\n    <header>\n        <ul>\n            <li>\n                <b class=\"iconfont\">&#xe605;</b>\n                <span>北京</span>\n            </li>\n            <li>斗米兼职</li>\n            <li class=\"iconfont\">&#xe66f;</li>\n        </ul>\n    </header>\n    <div v-loading=\"isLoading\" id=\"loading\"></div>\n    <section id=\"main-scroll\" v-if=\"!isLoading\">\n        <div>\n            <div class=\"head\">\n                  <img v-bind:src=\"imgArrow\"/>\n                  <span>下拉刷新...</span>\n            </div>\n            <div class=\"swiper-container\" id=\"main-swiper\">\n                  <ul class=\"swiper-wrapper\">\n                      <li class=\"swiper-slide\" v-for=\"nav in navlist\"><img v-bind:src=\"nav.url\" /></li>\n                  </ul>\n                  <div class=\"swiper-pagination\"></div>\n            </div>\n            <ul class=\"main-nav\">\n                <li>\n                    <div>\n                        <i class=\"iconfont\">&#xe61f;</i>\n                    </div>\n                    <span>全部兼职</span>\n                </li>\n                <li>\n                    <div>\n                        <i class=\"iconfont\">&#xe602;</i>\n                    </div>\n                    <span>企业担保</span>\n                </li>\n                <li>\n                    <div>\n                        <i class=\"iconfont\">&#xe619;</i>\n                    </div>\n                    <span>在线兼职</span>\n                </li>\n                <li>\n                    <div>\n                        <i class=\"iconfont\">&#xe633;</i>\n                    </div>\n                    <span>签到赚钱</span>\n                </li>\n            </ul>\n            <div class=\"main-content\">\n                <div class=\"main-content-head\">\n                    <div>\n                        <i class=\"iconfont\">&#xe616;</i>\n                        <b>猜你喜欢</b>\n                    </div>\n                    <span>更多>></span>\n                </div>\n                <ul class=\"content-center\">\n                    <li v-for=\"l in list\" v-link=\"{name: 'detail', params: {id: l.id}}\">\n                        <div class=\"content-left\">\n                            <img :src=\"l.url\" />\n                            <span>报名中</span>\n                        </div>\n\n                        <div class=\"content-right\">\n                            <div>\n                                <span>{{l.name}}</span>\n                                <i>奖</i>\n                            </div>\n                            <div>\n                                <span>\n                                    <i class=\"iconfont\"></i>\n                                    <b>{{l.address}}</b>\n                                </span>\n                                <i>{{l.price}}/天</i>\n                            </div>\n                             <div>\n                                <span>\n                                    <i class=\"iconfont\"></i>\n                                    斗米担保\n                                </span>\n                                <i>{{l.date}}</i>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"foot\">\n                <img v-bind:src=\"imgArrow\"/>\n                <span>上拉加载更多...</span>\n             </div>\n        </div>\n    </section>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\teg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-30ced050/teg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <div class="teg-container">
	//       <header>
	//           <h3>斗米特工</h3>
	//       </header>
	//     <nav>
	//       <ul id="teg-swiper-nav">
	//         <li v-for="nav in tegNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//       </ul>
	//     </nav>
	//     <section>
	//       <div class="swiper-container" id="teg-swiper">
	//         <div class="swiper-wrapper">
	//           <div class="swiper-slide">
	//             <section id="teg-scroll">
	//               <div>
	//                 <div class="head">
	//                     <img v-bind:src="imgArrow"/>
	//                     <span>下拉刷新...</span>
	//                 </div>
	//                 <ul class="content-center">
	//                     <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
	//                         <div class="content-left">
	//                             <img :src="l.url" />
	//                             <span>报名中</span>
	//                         </div>
	//
	//                         <div class="content-right">
	//                             <div>
	//                                 <span>{{l.name}}</span>
	//                                 <i>奖</i>
	//                             </div>
	//                             <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     <b>{{l.address}}</b>
	//                                 </span>
	//                                 <i>{{l.price}}/天</i>
	//                             </div>
	//                              <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     斗米担保
	//                                 </span>
	//                                 <i>{{l.date}}</i>
	//                             </div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//                 <div class="foot">
	//                   <img v-bind:src="imgArrow"/>
	//                   <span>上拉加载更多...</span>
	//                 </div>
	//               </div>
	//             </section>
	//           </div>
	//           <div class="swiper-slide">
	//             <section id="teg-scroll2" v-if="!isLoading">
	//               <div>
	//                 <ul class="content-center">
	//                     <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
	//                         <div class="content-left">
	//                             <img :src="l.url" />
	//                             <span>报名中</span>
	//                         </div>
	//
	//                         <div class="content-right">
	//                             <div>
	//                                 <span>{{l.name}}</span>
	//                                 <i>奖</i>
	//                             </div>
	//                             <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     <b>{{l.address}}</b>
	//                                 </span>
	//                                 <i>{{l.price}}/天</i>
	//                             </div>
	//                              <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     斗米担保
	//                                 </span>
	//                                 <i>{{l.date}}</i>
	//                             </div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//               </div>
	//             </section>
	//           </div>
	//         </div>
	//       </div>
	//     </section>
	//   </div>
	//   </div>
	// </template>
	// <script>
	var mySwiper = null;
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    data: function data() {
	        return {
	            list: [],
	            beautylist: [],
	            imgArrow: './images/arrow.png',
	            curIndex: 0,
	            tegNav: ['全部特工', '新手入门']
	        };
	    },
	    ready: function ready() {
	        var _this = this;
	
	        this.change(1);
	        var that = this;
	        // 足球现场：
	        this.$http.get('/rest/list').then(function (res) {
	            _this.list = res.data.data;
	            _this.isLoading = false;
	            // DOM 更新后，图片加载完 实例化 IScroll
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('#teg-scroll', function () {
	                    var myScroll = new IScroll('#teg-scroll', {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	                    var myScroll2 = new IScroll('#teg-scroll2', {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	
	                    myScroll.scrollTo(0, -35);
	
	                    var head = $('.head img'),
	                        topImgHasClass = head.hasClass('up');
	                    var foot = $('.foot img'),
	                        bottomImgHasClass = head.hasClass('down');
	
	                    myScroll.on('scroll', function () {
	                        var y = this.y,
	                            maxY = this.maxScrollY - y;
	                        if (y >= 0) {
	                            !topImgHasClass && head.addClass('up');
	                            return '';
	                        }
	                        if (maxY >= 0) {
	                            !bottomImgHasClass && foot.addClass('down');
	                            return '';
	                        }
	                    });
	
	                    myScroll.on('scrollEnd', function () {
	                        if (this.y >= -35 && this.y < 0) {
	                            myScroll.scrollTo(0, -35);
	                            head.removeClass('up');
	                        } else if (this.y >= 0) {
	                            head.attr('src', './images/ajax-loader.gif');
	
	                            // ajax下拉刷新数据
	                            that.$http.get('/rest/listrefresh').then(function (res) {
	                                that.list = res.data.data.concat(that.list);
	                                myScroll.scrollTo(0, -35);
	                                head.removeClass('up');
	                                head.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                });
	                            });
	                        }
	
	                        var self = this;
	                        var maxY = this.maxScrollY - this.y;
	                        if (maxY > -35 && maxY < 0) {
	                            myScroll.scrollTo(0, self.maxScrollY + 35);
	                            foot.removeClass('down');
	                        } else if (maxY >= 0) {
	                            foot.attr('src', './images/ajax-loader.gif');
	                            //ajax上拉加载数据
	                            that.$http.get('/rest/listmore').then(function (res) {
	                                that.list = that.list.concat(res.data.data);
	                                foot.removeClass('down');
	                                foot.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                    myScroll.scrollTo(0, self.maxScrollY + 35);
	                                });
	                            });
	                        }
	                    });
	                });
	            });
	        });
	
	        mySwiper = new Swiper("#teg-swiper", {
	            onSlideChangeStart: function onSlideChangeStart() {
	                that.curIndex = mySwiper.activeIndex;
	            }
	        });
	    },
	
	
	    methods: {
	        switchSwiper: function switchSwiper(index) {
	            this.curIndex = index;
	            mySwiper.slideTo(index);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"teg-container\">\n    <header>\n        <h3>斗米特工</h3>\n    </header>\n  <nav>\n    <ul id=\"teg-swiper-nav\">\n      <li v-for=\"nav in tegNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n    </ul>\n  </nav>\n  <section>\n    <div class=\"swiper-container\" id=\"teg-swiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\">\n          <section id=\"teg-scroll\">\n            <div>\n              <div class=\"head\">\n                  <img v-bind:src=\"imgArrow\"/>\n                  <span>下拉刷新...</span>\n              </div>\n              <ul class=\"content-center\">\n                  <li v-for=\"l in list\" v-link=\"{name: 'detail', params: {id: l.id}}\">\n                      <div class=\"content-left\">\n                          <img :src=\"l.url\" />\n                          <span>报名中</span>\n                      </div>\n\n                      <div class=\"content-right\">\n                          <div>\n                              <span>{{l.name}}</span>\n                              <i>奖</i>\n                          </div>\n                          <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  <b>{{l.address}}</b>\n                              </span>\n                              <i>{{l.price}}/天</i>\n                          </div>\n                           <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  斗米担保\n                              </span>\n                              <i>{{l.date}}</i>\n                          </div>\n                      </div>\n                  </li>\n              </ul>\n              <div class=\"foot\">\n                <img v-bind:src=\"imgArrow\"/>\n                <span>上拉加载更多...</span>\n              </div>\n            </div>\n          </section>\n        </div>\n        <div class=\"swiper-slide\">\n          <section id=\"teg-scroll2\" v-if=\"!isLoading\">\n            <div>\n              <ul class=\"content-center\">\n                  <li v-for=\"l in list\" v-link=\"{name: 'detail', params: {id: l.id}}\">\n                      <div class=\"content-left\">\n                          <img :src=\"l.url\" />\n                          <span>报名中</span>\n                      </div>\n\n                      <div class=\"content-right\">\n                          <div>\n                              <span>{{l.name}}</span>\n                              <i>奖</i>\n                          </div>\n                          <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  <b>{{l.address}}</b>\n                              </span>\n                              <i>{{l.price}}/天</i>\n                          </div>\n                           <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  斗米担保\n                              </span>\n                              <i>{{l.date}}</i>\n                          </div>\n                      </div>\n                  </li>\n              </ul>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\news.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-89a6fdfe/news.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <div class="news-container">
	//       <header>
	//           <h3>消息</h3>
	//       </header>
	//       <section id="news-scroll">
	//         <ul>
	//           <li v-for="item in news">
	//             <img v-bind:src="item.url" />
	//             <div class="secright">
	//                 <b>{{item.name}}</b>
	//                 <span>{{item.text}}</span>
	//             </div>
	//           </li>
	//         </ul>
	//       </section>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      news: []
	    };
	  },
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.change(2);
	    this.$http.get('/rest/news').then(function (res) {
	      _this.news = res.data.data;
	      Vue.nextTick(function () {
	        _commonUtil2.default.isAllLoaded('#news-scroll', function () {
	          var myScroll = new IScroll('#news-scroll', {
	            probeType: 3,
	            mouseWheel: true,
	            click: true
	          });
	        });
	      });
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"news-container\">\n    <header>\n        <h3>消息</h3>\n    </header>\n    <section id=\"news-scroll\">\n      <ul>\n        <li v-for=\"item in news\">\n          <img v-bind:src=\"item.url\" />\n          <div class=\"secright\">\n              <b>{{item.name}}</b>\n              <span>{{item.text}}</span>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4f1c3cda/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _actions = __webpack_require__(5);
	
	module.exports = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  ready: function ready() {
	    this.change(3);
	  }
	};
	
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div>
	//     <div class="my-container">
	//       <div class="my-header">
	//          <img src="/images/sec01.png"/>
	//          <div>
	//             <b>登陆/</b>
	//             <b>注册</b>
	//          </div>
	//       </div>
	//       <div class="my-section">
	//          <ul>
	//             <li>
	//               <em>我的兼职</em>
	//               <span>></span>
	//             </li>
	//             <li>
	//               <em>我的简历</em>
	//               <span>></span>
	//             </li>
	//             <li>
	//               <em>我的收藏</em>
	//               <span>></span>
	//             </li>
	//             <li>
	//               <em>章鱼俱乐部</em>
	//               <b>加入会员享积分奖励<span>></span></b>
	//             </li>
	//             <li>
	//               <em>推荐给朋友</em>
	//               <i>成功推荐积分奖励<span>></span></i>
	//             </li>
	//             <li>
	//               <em>联系客服</em>
	//               <b>4007-3333-00<span>></span></b>
	//             </li>
	//          </ul>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"my-container\">\n    <div class=\"my-header\">\n       <img src=\"/images/sec01.png\"/>\n       <div>\n          <b>登陆/</b>\n          <b>注册</b>\n       </div>\n    </div>\n    <div class=\"my-section\">\n       <ul>\n          <li>\n            <em>我的兼职</em>\n            <span>></span>\n          </li>\n          <li>\n            <em>我的简历</em>\n            <span>></span>\n          </li>\n          <li>\n            <em>我的收藏</em>\n            <span>></span>\n          </li>\n          <li>\n            <em>章鱼俱乐部</em>\n            <b>加入会员享积分奖励<span>></span></b>\n          </li>\n          <li>\n            <em>推荐给朋友</em>\n            <i>成功推荐积分奖励<span>></span></i>\n          </li>\n          <li>\n            <em>联系客服</em>\n            <b>4007-3333-00<span>></span></b>\n          </li>\n       </ul>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e9419c02/detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myScroll = null; // <template>
	//     <div>
	//       <div class="detail-container">
	//         <header>
	//             <span v-link="{path: '/index'}"><</span>
	//             <h3>斗米兼职</h3>
	//         </header>
	//         <div class="detail-box" id="detail-box">
	//           <div class="detail-wrap">
	//             <nav>
	//               <img src="/images/detail.jpg">
	//             </nav>
	//               <section>
	//                 <ul class="content-center">
	//                     <li>
	//                         <div class="content-left">
	//                             <img :src="detailInfo.url" />
	//                             <span>报名中</span>
	//                         </div>
	//
	//                         <div class="content-right">
	//                             <div>
	//                                 <span>{{detailInfo.name}}</span>
	//                                 <i>奖</i>
	//                             </div>
	//                             <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     <b>{{detailInfo.address}}</b>
	//                                 </span>
	//                                 <i>{{detailInfo.price}}/天</i>
	//                             </div>
	//                              <div>
	//                                 <span>
	//                                     <i class="iconfont"></i>
	//                                     斗米担保
	//                                 </span>
	//                                 <i>{{detailInfo.date}}</i>
	//                             </div>
	//                         </div>
	//                     </li>
	//                 </ul>
	//               </section>
	//               <div class="gift">
	//                   <span class="iconfont">&#xe606;&ensp;点击领取兼职大礼包~</span>
	//               </div>
	//               <div class="info">
	//                   <span>古星电子</span>
	//                   <div>
	//                       <b>类型：</b><em>话务客服</em>
	//                   </div>
	//                   <div>
	//                       <b>人数：</b><em>100人，男女不限</em>
	//                   </div>
	//                   <div>
	//                       <b>日期：</b><em>10.25~01:00 每周休一天</em>
	//                    </div>
	//                    <div>
	//                        <b>薪资：</b><em>每月结算</em>
	//                    </div>
	//                    <div class="safe">
	//                        <strong>斗米担保</strong>
	//                        <i>斗米担保职位工资按时结算，适用斗米用户权益保障担保赔付条款</i>
	//                     </div>
	//               </div>
	//               <div class="place">
	//                   <div class="ptop">
	//                      <b>工作地点</b>
	//                      <span>更多(2)>></span>
	//                   </div>
	//                   <div class="pbottom">
	//                       <b>地址：</b><i>{{detailInfo.place}}</i>
	//                   </div>
	//               </div>
	//               <div class="info-detail">
	//                 <div class="info-detail-top">
	//                   <span>职位描述：</br><b v-html="detailInfo.info"></b></span>
	//                   <span></br>面试地点：</br><b v-html="detailInfo.place"></b></span>
	//                 </div>
	//               </div>
	//               <div class="work-more">
	//                   <div class="work-more-top">
	//                     <span>推荐职位</span>
	//                     <b>更多>></b>
	//                   </div>
	//                   <ul class="content-center">
	//                       <li v-for="m in more">
	//                           <div class="content-left">
	//                               <img :src="m.url" />
	//                               <span>报名中</span>
	//                           </div>
	//
	//                           <div class="content-right">
	//                               <div>
	//                                   <span>{{m.name}}</span>
	//                               </div>
	//                               <div>
	//                                   <span>
	//                                       <i class="iconfont"></i>
	//                                       <b>{{m.address}}</b>
	//                                   </span>
	//                                   <i>{{m.price}}/天</i>
	//                               </div>
	//                                <div>
	//                                   <span>
	//                                       <i class="iconfont"></i>
	//                                       斗米担保
	//                                   </span>
	//                                   <i>{{m.date}}</i>
	//                               </div>
	//                           </div>
	//                       </li>
	//                   </ul>
	//               </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      title: '',
	      detailInfo: {},
	      more: []
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/rest/list').then(function (res) {
	      _this.more = res.data.data;
	      console.log(_this.more);
	    });
	    // console.log(this.$route.params.id);
	    this.$http.get('/rest/detail').then(function (res) {
	      console.log(res);
	      res.data.data.forEach(function (_ref) {
	        var id = _ref.id;
	        var url = _ref.url;
	        var name = _ref.name;
	        var address = _ref.address;
	        var price = _ref.price;
	        var date = _ref.date;
	        var info = _ref.info;
	        var place = _ref.place;
	
	        if (id == _this.$route.params.id) {
	          that.detailInfo = { id: id, url: url, name: name, address: address, price: price, date: date, info: info, place: place };
	          Vue.nextTick(function () {
	            _commonUtil2.default.isAllLoaded('#detail-box', function () {
	              myScroll = new IScroll('#detail-box', {
	                probeType: 3,
	                mouseWheel: true,
	                click: true
	              });
	            });
	          });
	          return;
	        }
	      });
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"detail-container\">\n    <header>\n        <span v-link=\"{path: '/index'}\"><</span>\n        <h3>斗米兼职</h3>\n    </header>\n    <div class=\"detail-box\" id=\"detail-box\">\n      <div class=\"detail-wrap\">\n        <nav>\n          <img src=\"/images/detail.jpg\">\n        </nav>\n          <section>\n            <ul class=\"content-center\">\n                <li>\n                    <div class=\"content-left\">\n                        <img :src=\"detailInfo.url\" />\n                        <span>报名中</span>\n                    </div>\n\n                    <div class=\"content-right\">\n                        <div>\n                            <span>{{detailInfo.name}}</span>\n                            <i>奖</i>\n                        </div>\n                        <div>\n                            <span>\n                                <i class=\"iconfont\"></i>\n                                <b>{{detailInfo.address}}</b>\n                            </span>\n                            <i>{{detailInfo.price}}/天</i>\n                        </div>\n                         <div>\n                            <span>\n                                <i class=\"iconfont\"></i>\n                                斗米担保\n                            </span>\n                            <i>{{detailInfo.date}}</i>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n          </section>\n          <div class=\"gift\">\n              <span class=\"iconfont\">&#xe606;&ensp;点击领取兼职大礼包~</span>\n          </div>\n          <div class=\"info\">\n              <span>古星电子</span>\n              <div>\n                  <b>类型：</b><em>话务客服</em>\n              </div>\n              <div>\n                  <b>人数：</b><em>100人，男女不限</em>\n              </div>\n              <div>\n                  <b>日期：</b><em>10.25~01:00 每周休一天</em>\n               </div>\n               <div>\n                   <b>薪资：</b><em>每月结算</em>\n               </div>\n               <div class=\"safe\">\n                   <strong>斗米担保</strong>\n                   <i>斗米担保职位工资按时结算，适用斗米用户权益保障担保赔付条款</i>\n                </div>\n          </div>\n          <div class=\"place\">\n              <div class=\"ptop\">\n                 <b>工作地点</b>\n                 <span>更多(2)>></span>\n              </div>\n              <div class=\"pbottom\">\n                  <b>地址：</b><i>{{detailInfo.place}}</i>\n              </div>\n          </div>\n          <div class=\"info-detail\">\n            <div class=\"info-detail-top\">\n              <span>职位描述：</br><b v-html=\"detailInfo.info\"></b></span>\n              <span></br>面试地点：</br><b v-html=\"detailInfo.place\"></b></span>\n            </div>\n          </div>\n          <div class=\"work-more\">\n              <div class=\"work-more-top\">\n                <span>推荐职位</span>\n                <b>更多>></b>\n              </div>\n              <ul class=\"content-center\">\n                  <li v-for=\"m in more\">\n                      <div class=\"content-left\">\n                          <img :src=\"m.url\" />\n                          <span>报名中</span>\n                      </div>\n\n                      <div class=\"content-right\">\n                          <div>\n                              <span>{{m.name}}</span>\n                          </div>\n                          <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  <b>{{m.address}}</b>\n                              </span>\n                              <i>{{m.price}}/天</i>\n                          </div>\n                           <div>\n                              <span>\n                                  <i class=\"iconfont\"></i>\n                                  斗米担保\n                              </span>\n                              <i>{{m.date}}</i>\n                          </div>\n                      </div>\n                  </li>\n              </ul>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = { // 创建一个对象来保存应用启动时的初始状态
	  tabIndex: 0
	};
	
	var mutations = {
	  // 创建一个对象存储一系列我们接下来要写的 mutation 函数
	  CHANGETAB: function CHANGETAB(state, currentTabindex) {
	    // 放置我们的状态变更函数
	    state.tabIndex = currentTabindex;
	  }
	};
	
	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	exports.default = new Vuex.Store({
	  state: state, //state:state
	  mutations: mutations
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["vue-loading"] = e() : t["vue-loading"] = e();
	}(undefined, function () {
	  return function (t) {
	    function e(o) {
	      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    "use strict";
	    function o(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
	        i = o(r);n(19), e["default"] = { params: ["loadingOptions"], handleShow: function handleShow() {
	        var t = window.getComputedStyle(this.el).position;"static" !== t && "" !== t || (this["static"] = !0, this.el.style.position = "relative");var e = document.createElement("div");e.className = "vue-loading", e.style.backgroundColor = this.options.bg, this.el.appendChild(e);var n = document.createElement("div");n.className = "vue-loading-msg", n.textContent = this.options.text, e.appendChild(n), window.requestAnimationFrame(function () {
	          e.style.opacity = 1;
	        }), this.loadingBox = e;
	      }, handleHide: function handleHide() {
	        var t = this;this.loadingBox.addEventListener("transitionend", function () {
	          t.loadingBox.remove(), t["static"] && t.el.style.removeProperty("position");
	        }), this.loadingBox.style.opacity = 0;
	      }, bind: function bind() {
	        this["static"] = !1, this.loadingBox = null, this.first = !0, this.options = { text: "Loading ...", bg: "rgba(230, 233, 236, 0.8)" }, this.params.loadingOptions && (0, i["default"])(this.options, this.params.loadingOptions);
	      }, update: function update(t) {
	        if (t) this.first = !1, this.handleShow();else {
	          if (this.first) return void (this.first = !1);this.handleHide();
	        }
	      } };
	  }, function (t, e) {
	    var n = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    t.exports = { "default": n(3), __esModule: !0 };
	  }, function (t, e, n) {
	    n(15), t.exports = n(1).Object.assign;
	  }, function (t, e) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, e) {
	    var n = {}.toString;t.exports = function (t) {
	      return n.call(t).slice(8, -1);
	    };
	  }, function (t, e, n) {
	    var o = n(4);t.exports = function (t, e, n) {
	      if (o(t), void 0 === e) return t;switch (n) {case 1:
	          return function (n) {
	            return t.call(e, n);
	          };case 2:
	          return function (n, o) {
	            return t.call(e, n, o);
	          };case 3:
	          return function (n, o, r) {
	            return t.call(e, n, o, r);
	          };}return function () {
	        return t.apply(e, arguments);
	      };
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, e, n) {
	    var o = n(10),
	        r = n(1),
	        i = n(6),
	        s = "prototype",
	        a = function a(t, e, n) {
	      var u,
	          c,
	          f,
	          l = t & a.F,
	          p = t & a.G,
	          d = t & a.S,
	          h = t & a.P,
	          g = t & a.B,
	          v = t & a.W,
	          b = p ? r : r[e] || (r[e] = {}),
	          y = p ? o : d ? o[e] : (o[e] || {})[s];p && (n = e);for (u in n) {
	        c = !l && y && u in y, c && u in b || (f = c ? y[u] : n[u], b[u] = p && "function" != typeof y[u] ? n[u] : g && c ? i(f, o) : v && y[u] == f ? function (t) {
	          var e = function e(_e) {
	            return this instanceof t ? new t(_e) : t(_e);
	          };return e[s] = t[s], e;
	        }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((b[s] || (b[s] = {}))[u] = f));
	      }
	    };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	  }, function (t, e) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (e) {
	        return !0;
	      }
	    };
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e, n) {
	    var o = n(5);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == o(t) ? t.split("") : Object(t);
	    };
	  }, function (t, e) {
	    var n = Object;t.exports = { create: n.create, getProto: n.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: n.getOwnPropertyDescriptor, setDesc: n.defineProperty, setDescs: n.defineProperties, getKeys: n.keys, getNames: n.getOwnPropertyNames, getSymbols: n.getOwnPropertySymbols, each: [].forEach };
	  }, function (t, e, n) {
	    var o = n(12),
	        r = n(14),
	        i = n(11);t.exports = n(9)(function () {
	      var t = Object.assign,
	          e = {},
	          n = {},
	          o = Symbol(),
	          r = "abcdefghijklmnopqrst";return e[o] = 7, r.split("").forEach(function (t) {
	        n[t] = t;
	      }), 7 != t({}, e)[o] || Object.keys(t({}, n)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = r(t), s = arguments, a = s.length, u = 1, c = o.getKeys, f = o.getSymbols, l = o.isEnum; a > u;) {
	        for (var p, d = i(s[u++]), h = f ? c(d).concat(f(d)) : c(d), g = h.length, v = 0; g > v;) {
	          l.call(d, p = h[v++]) && (n[p] = d[p]);
	        }
	      }return n;
	    } : Object.assign;
	  }, function (t, e, n) {
	    var o = n(7);t.exports = function (t) {
	      return Object(o(t));
	    };
	  }, function (t, e, n) {
	    var o = n(8);o(o.S + o.F, "Object", { assign: n(13) });
	  }, function (t, e, n) {
	    e = t.exports = n(17)(), e.push([t.id, ".vue-loading{top:0;left:0;z-index:1000;padding:0;width:100%;height:100%;border:none;background-color:rgba(230,233,236,.8);opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.vue-loading,.vue-loading-msg{position:absolute;margin:0;cursor:wait}.vue-loading-msg{box-sizing:content-box!important;z-index:1001;padding:0 35px;height:40px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;background-color:#f4f4f4;border-radius:4px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid #bbb;-webkit-transform:translateX(-50%);transform:translateX(-50%)}", ""]);
	  }, function (t, e) {
	    t.exports = function () {
	      var t = [];return t.toString = function () {
	        for (var t = [], e = 0; e < this.length; e++) {
	          var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
	        }return t.join("");
	      }, t.i = function (e, n) {
	        "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	          var i = this[r][0];"number" == typeof i && (o[i] = !0);
	        }for (r = 0; r < e.length; r++) {
	          var s = e[r];"number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
	        }
	      }, t;
	    };
	  }, function (t, e, n) {
	    function o(t, e) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n],
	            r = d[o.id];if (r) {
	          r.refs++;for (var i = 0; i < r.parts.length; i++) {
	            r.parts[i](o.parts[i]);
	          }for (; i < o.parts.length; i++) {
	            r.parts.push(c(o.parts[i], e));
	          }
	        } else {
	          for (var s = [], i = 0; i < o.parts.length; i++) {
	            s.push(c(o.parts[i], e));
	          }d[o.id] = { id: o.id, refs: 1, parts: s };
	        }
	      }
	    }function r(t) {
	      for (var e = [], n = {}, o = 0; o < t.length; o++) {
	        var r = t[o],
	            i = r[0],
	            s = r[1],
	            a = r[2],
	            u = r[3],
	            c = { css: s, media: a, sourceMap: u };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
	      }return e;
	    }function i(t, e) {
	      var n = v(),
	          o = m[m.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);else {
	        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
	      }
	    }function s(t) {
	      t.parentNode.removeChild(t);var e = m.indexOf(t);e >= 0 && m.splice(e, 1);
	    }function a(t) {
	      var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
	    }function u(t) {
	      var e = document.createElement("link");return e.rel = "stylesheet", i(t, e), e;
	    }function c(t, e) {
	      var n, o, r;if (e.singleton) {
	        var i = y++;n = b || (b = a(e)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
	      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), o = p.bind(null, n), r = function r() {
	        s(n), n.href && URL.revokeObjectURL(n.href);
	      }) : (n = a(e), o = l.bind(null, n), r = function r() {
	        s(n);
	      });return o(t), function (e) {
	        if (e) {
	          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
	        } else r();
	      };
	    }function f(t, e, n, o) {
	      var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
	        var i = document.createTextNode(r),
	            s = t.childNodes;s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
	      }
	    }function l(t, e) {
	      var n = e.css,
	          o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
	        for (; t.firstChild;) {
	          t.removeChild(t.firstChild);
	        }t.appendChild(document.createTextNode(n));
	      }
	    }function p(t, e) {
	      var n = e.css,
	          o = e.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
	          i = t.href;t.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
	    }var d = {},
	        h = function h(t) {
	      var e;return function () {
	        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
	      };
	    },
	        g = h(function () {
	      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	      );
	    }),
	        v = h(function () {
	      return document.head || document.getElementsByTagName("head")[0];
	    }),
	        b = null,
	        y = 0,
	        m = [];t.exports = function (t, e) {
	      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = r(t);return o(n, e), function (t) {
	        for (var i = [], s = 0; s < n.length; s++) {
	          var a = n[s],
	              u = d[a.id];u.refs--, i.push(u);
	        }if (t) {
	          var c = r(t);o(c, e);
	        }for (var s = 0; s < i.length; s++) {
	          var u = i[s];if (0 === u.refs) {
	            for (var f = 0; f < u.parts.length; f++) {
	              u.parts[f]();
	            }delete d[u.id];
	          }
	        }
	      };
	    };var x = function () {
	      var t = [];return function (e, n) {
	        return t[e] = n, t.filter(Boolean).join("\n");
	      };
	    }();
	  }, function (t, e, n) {
	    var o = n(16);"string" == typeof o && (o = [[t.id, o, ""]]);n(18)(o, {});o.locals && (t.exports = o.locals);
	  }]);
	});
	//# sourceMappingURL=vue-loading.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map