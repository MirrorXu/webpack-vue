<template>
    <h1>
        <a :href="'#'+title">{{ title }}</a>
    </h1>
</template>

<script>
    export default {
        props:{
            title:{
                type:String
            }
        }
    }
</script>

<style scoped>
    h1{
      text-align: center;
    }
    h1 a{
        color: #f60;
        font-size: 30px;
    }
</style>