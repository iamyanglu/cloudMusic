<template>
    <div id="index">

<div class="intro"  v-show="!showSong">
    <div>
        当前并无歌曲播放！
        <br/>  <br/>  <br/>  <br/>
        欢迎来到极致简约风格的一个小小音乐网站，根据网易云音乐API编写，祝你生活愉快!
    </div>
</div>
        <div class="songText" v-show="showSong">
            一个描绘单调歌曲的网站
        </div>
    </div>
</template>

<script>

    import logUse from "../log/logUse";


    export default {
        name: "index",
        components:{

            logUse
        },
        data(){
            return {
                isLog:false,


            }
        },
        computed:{
            showSong(){
                return this.$store.state.playId > 0
            }
        },
        methods:{
            init(
            ){

            },
            showLog(){
                this.isLog = true

            },
            disLog(){
                this.isLog = !this.isLog;


            }
        },
        created() {
            this.$store.commit('showLogBox',false)
        }
    }
</script>

<style scoped>
    .intro{
        width: 60%;
        height: 200px;
        padding: 50px;
        border: 1px white solid;
        margin: 50px auto;
        font-size: 60px;
        font-weight: bolder;
        color: red;
    }
    #index{
        height: 750px;

    }

</style>