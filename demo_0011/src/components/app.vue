<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<style lang="sass">
    $qwe: #098;
    body {
        background-color: $qwe;
        h1 {
            background-color: #eee;
            color:red;
            transform: translate(10%, 10%); / *测试自动添加前缀 */
            }
        h1:hover{
             height:100px;
            }
            h2 {
            background-color: #999;
            }
    }
</style>
<script>
    export default{
        el: "#app",
        data() {
            return {
                name: "ggg",
                age: "2q1"
            }
        }
    }
</script>
