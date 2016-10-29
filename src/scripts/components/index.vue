<template>
  <div>
    <div class="index-container" id="index-container">
        <router-view :transition="transitionName" transition-mode="out-in"></router-view>
    </div>
    <footer id=footer>
        <ul>
            <li
            v-for="tab in tablist"
            v-bind:class="tabIndex == $index ? 'active' : ''"
            v-on:click="navigatorTo($index)"
            v-link="{path:tab.path}">
                <i class='iconfont' v-html='tab.icon'></i>
                <b v-html='tab.name'></b>
            </li>
           </ul>
    </footer>
  </div>
</template>
<script>
    import { tabChanger } from '../vuex/actions';
    import { getTabindex } from '../vuex/getters';
    export default {
        vuex: {
          actions: {
            change: tabChanger
          },
          getters: {
            tabIndex: getTabindex
          }
        },
        data() {
            return {
                cur:0,
                tablist:[
                    {path: '/index',icon:'&#x3478;',name:'首页'},
                    {path: '/index/teg',icon:'&#xe61f;',name:'特工'},
                    {path:'/index/news',icon:'&#xe630;',name:'消息'},
                    {path:'/index/my',icon:'&#xe641;',name:'我的'}
                ],
                transitionName: 'fade'
            }
        },
        methods: {
          navigatorTo(index){
            this.change(index);
          }
        }
    }
</script>
