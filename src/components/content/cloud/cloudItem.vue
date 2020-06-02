<template>




    <div class="songItem">


        <div class="playButton" @click="starPlay"><img src="../../../assets/img/play.png" v-show="play"/>
            <img src="../../../assets/img/pause.png" v-show="!play"></div>

        <div class="songName">{{songName}}</div><div class="songInfo"></div>
        <div title="添加歌曲">+</div>
    </div>

</template>

<script>
    export default {
        //被点击时判断状态
        name: "cloudItem",
        props:{
            id:{
                type:Number,
                default: 0
            },
            songName:{
                type:String,
                default:'小歌曲'
            },
            playId:{
                type:Number,
                default: 0

            }
        },
        computed:{
         play(){
             if(this.playId === this.id)
             {
                 this.isPlay = true
             }
             else {
                 this.isPlay = false
             }
             return this.playId === this.id
         }


        },
        methods:{

            starPlay(){


                if(!this.isPlay)
                {

                    this.$emit('play',this.id)
                    this.$store.commit('playId',  this.id )
                }

               else if(this.isPlay)
                {
                    this.$emit('pause',this.id)
                    this.$store.commit('playId',  0 )
                }
                this.isPlay = !this.isPlay
                console.log('我改变状态为',this.isPlay);

            }
        },
        mounted() {

        },
        created(){
            console.log(this.playId);
        },
        data(){
            return {
                isPlay:false
            }
        },
        beforeDestroy() {
            this.isPlay=false
        }
    }
</script>

<style scoped>
.songItem{
    width: 100%;
    border-bottom: 1px saddlebrown solid;
    margin-top: 10px;
    height: 49px;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.5s;
}
.playButton{

    margin-left: 50px;
    margin-right: 50px;
    width: 20px;
    height: 20px;
    display: inline-block;
}
.playButton img{

        width: 20px;
        height: 20px;
        display: inline-block;
    }
.songItem div{
    display: inline-block;
}

</style>