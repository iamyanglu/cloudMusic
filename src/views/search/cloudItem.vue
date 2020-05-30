<template>

    <div class="songItem">
        <div class="playButton" @click="starPlay"><img src="../../assets/img/play.png"  v-if="isPlay"/>
            <img src="../../assets/img/pause.png" v-else></div>
        <div class="songName">{{songName}}</div><div class="songInfo"></div>
    </div>

</template>

<script>
    export default {
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


        },
        methods:{
            isPlayed(){

               if(this.id === this.playId){
                   this.isPlay = true
               }
               else {
                   this.isPlay =false

               }
            },
            starPlay(){

                if(!this.isPlay)
                {

                    this.$emit('play',this.id)
                }

               else if(this.isPlay)
                {
                    this.$emit('pause',this.id)
                }
                this.isPlay = !this.isPlay

            }
        },
        mounted() {
            this.isPlayed()
        },
        created(){
            console.log(this.name,'被创建了');
        },
        data(){
            return {


                isPlay:false
            }
        },
        beforeDestroy() {
            console.log(this.name,'被销毁了');
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