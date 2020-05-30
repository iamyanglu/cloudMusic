<template>
    <div>
        <nav-bar color="#eeeeee">
        <nav-bar-item v-for = "item in linkList" :tit="item.tit" :link = "item.link" slot="center" :key="item.link">
        </nav-bar-item>
            <log-and-name slot ='right' @toLog="logSubmit" :is-log="isLog"></log-and-name>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from "../../common/aboutNav/navBar";
    import navBarItem from "../../common/aboutNav/navBarItem";
    import LogAndName from "../../common/aboutLog/logAndName";
    export default {
        name: "navBarUse",
        components:{
            LogAndName,
            navBarItem,navBar
        },
        props:['isLog'],
        data(){
           return {
               linkList:[{tit:'首页',link:'/index'},{tit:'我的歌单',link:'/mySonList'},
                   {tit:'今日热歌',link:'/hotSongs'},{tit:'搜索歌曲',link:'/search'}]
           }

        },
        methods:{
            logSubmit(){
                console.log('navbar');
                this.$emit('logSubmit')
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>