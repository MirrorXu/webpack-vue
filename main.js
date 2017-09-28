// webpack 基本使用
// import './style.css';
// var dom = document.getElementById('app');
//    dom.innerHTML = ' hello webpack *_*' ;




import Vue from  'vue';

import App from './app.vue';

new Vue({
    el :'#app',
    render : h => h(App)
});
