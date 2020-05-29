<template>
    <div>
        <nav-bar color="#eeeeee">
        <nav-bar-item v-for = "item in linkList" :tit="item.tit" :link = "item.link" slot="center">
        </nav-bar-item>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from "../../common/aboutNav/navBar";
    import navBarItem from "../../common/aboutNav/navBarItem";
    export default {
        name: "navBarUse",
        components:{
            navBarItem,navBar
        },
        data(){
           return {
               linkList:[{tit:'首页',link:'/index'},{tit:'我的歌单',link:'/mySonList'},{tit:'今日热歌',link:'/index'}]
           }

        }
    }
</script>

<style scoped>

</style>