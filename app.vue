<template>
    <div>
        hello {{ name }}
    </div>

</template>
<script>
    export default {
        data(){
            return {
                name:'Vue.js'
            }
        }
    }

</script>

<style scoped>
    div{
        color: aquamarine;
        font-weight: bold;
        font-family: "Times New Roman";
        text-align: center;
        font-size: 60px;
    }
</style>