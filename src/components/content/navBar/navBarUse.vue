<template>
    <div id="navBarUse">
        <nav-bar color="#eeeeee">
        <nav-bar-item v-for = "item in linkList" :tit="item.tit" :link = "item.link" slot="center" :key="item.link">
        </nav-bar-item>
            <log-and-name slot ='right' @toLog="logSubmit" ></log-and-name>
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

        data(){
           return {
               linkList:[{tit:'首页',link:'/index'},{tit:'喜欢的音乐',link:'/playList'},
                   {tit:'歌曲推荐',link:'/hotSongs'},{tit:'搜索歌曲',link:'/search'}]
           }

        },
        methods:{
            logSubmit(){
                console.log('navbar');
                this.$emit('logSubmit')
            }
        },
        created() {
            this.$store.commit('showLogBox',false)
        }
    }
</script>

<style scoped>

</style>