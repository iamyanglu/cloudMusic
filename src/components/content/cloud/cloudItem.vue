<template>




    <div class="songItem">


        <div class="playButton" @click="starPlay"><img src="../../../assets/img/play.png" v-show="play"/>
            <img src="../../../assets/img/pause.png" v-show="!play"></div>

        <div class="songName">{{songName}}</div><div class="songInfo"></div>
        <div v-show="showAdd" title="添加歌曲" class="addLoved"><img src="../../../assets/img/addLoved.png"  @click='put' height="15" width="15"/></div>
    </div>

</template>

<script>
    import {putLoved} from "../../../network/musicRequest";

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

            showAdd:{
                type:Boolean,
                default:true
            }
        },
        computed:{
         play(){

            this.playId =this.$store.state.playId
             if(this.playId === this.id)
             {
                 console.log('playId',this.playId)
                 this.isPlay = true
             }
             else {
                 this.isPlay = false
             }
             return this.playId === this.id
         }


        },
        methods:{
            put(){

               putLoved(this.id)
                {

                    if (this.$store.state.isLog)
                    {
                        putLoved(this.id).then(res=>{
                            if(res.data.code === 200)
                            {
                                window.alert('喜欢成功')
                            }
                            else{
                                window.alert('喜欢失败')
                            }
                        })
                    }
                    else{
                        window.alert('还未登录 不能喜欢哦')
                    }
                }
            },
            starPlay(){


                if(!this.isPlay)
                {

                    this.$emit('play',this.id)
                    this.$store.commit('playId',  this.id )
                    this.$store.commit('songName',  this.songName )
                }

               else if(this.isPlay)
                {
                    this.$emit('pause',this.id)
                    this.$store.commit('playId',  0 )
                }
                this.isPlay = !this.isPlay
            }
        },
        mounted() {

        },
        created(){
            console.log(this.playId);
        },
        data(){
            return {
                isPlay:false,
                playId:0
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
    .songItem .addLoved{

        margin-left: auto;
    }

</style>