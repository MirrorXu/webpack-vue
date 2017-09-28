<template>
    <div>
        hello {{ name }}
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img src="./imgs/big.jpg" alt="" style="width: 200px">
        </p>
    </div>
</template>
<script>
    import  vTitle from './title.vue';
    import vButton from './button.vue';
    export default{
        components:{
            vTitle : vTitle,
            vButton:vButton
        },
        data(){
            return {
                name :'---Vue.js ES6'
            }
        },
        methods:{
            handleClick(e){
                console.log(e);
                alert('事件被打印')
            }
        }
    }




//    export default {
//        data:function () {
//            return{
//                name: '--- Vue.js  ES5'
//            }
//        }
//    }

</script>

<style scoped>
    *{
        text-align: center;
    }
    div{
        color: aquamarine;
        font-weight: bold;
        font-family: "Times New Roman";
        text-align: center;
        font-size: 60px;
    }
</style>