
//require("../styles/usage/page/app.scss");
import "../styles/usage/page/app.scss";
import commonUtil from "./utils/common.util.js";

// 自定义 scroll 指令
commonUtil.dirScroll();

//views 引入组件 ES6语法
import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import teg from "./components/teg.vue";
import news from "./components/news.vue";
import my from "./components/my.vue";
import detail from "./components/detail.vue";

//开启debug模式
Vue.config.debug = true;

// 在根组件加入 store，让它的子组件和 store 连接
import store from './vuex/store';

let App = Vue.extend({    //根组件
    store:store          // 在根组件加入 store，让它的子组件和 store 连接
});

let router = new VueRouter();

router.map({     //定义路由映射
    '/':{
        component:guide,
    },
    '/index':{
        name:'index',   //定义路由的名字，方便使用
        component:index,
        subRoutes:{
            '/':{           //进入子路由页面
                component:main
            },
            '/teg':{
                component:teg
            },
            '/news':{
                component:news
            },
            '/my':{
                component:my
            }
        }
    },
    '/detail/:id':{
            name:'detail',
            component:detail
        }
});

router.start(App,'#app');   //启动路由
