<template>
    <div id="index" :style="todark">

<div class="intro"  v-show="!showSong">
    <div>
       <h1> 当前并无歌曲播放！</h1>
        <br/>  <br/>  <br/>  <br/>
        欢迎来到极致简约风格的一个小小音乐网站，根据网易云音乐API编写，祝你生活愉快!
    </div>
</div>
        <div class="songText" v-show="showSong">
            <div class="songItem" v-for="item in lyricArray"
                 :style="showTxt(item.name)" >{{item.value}}</div>
        </div>
    </div>
</template>

<script>
    import {getLyric} from "../../network/musicRequest";
    import logUse from "../log/logUse";


    export default {
        name: "index",
        components:{

            logUse
        },
        data(){
            return {
                isLog:false,
                id:0,
                lyric:'',
                lyricArray:[],
                currentTime:'',
                timer:null

            }
        },
        computed:{
            todark(){
                if(this.$store.state.showLog)
                {
                    return { 'background-image': 'linear-gradient(#000000,#ffffff)',opacity:'0'}
                }

            },
            showTxt(){
              return function (item) {
                  if(parseFloat(item)  < parseFloat(this.currentTime))
                  {
                      return{color:'red'}
                  }
                  else{
                      return  {}
                  }
              }
            },
            showSong(){
                if(this.id !== this.$store.state.playId)
                {

                    this.id =  this.$store.state.playId
                }
                return this.$store.state.playId > 0
            },
            showLyric(){
                return this.lyric
            }
        },
        methods:{
            listenAudio(){
                if(this.$store.state.playId > 0)
                {
                    this.$store.state.Audio.addEventListener('timeupdate',()=>{
                        let Audio = this.$store.state.Audio;
                       let time = Audio.currentTime;
                        this.currentTime= time
                    })
                }
            },
            init(
            ){
               if(this.showSong)
               {
                   this.id = this.$store.state.playId;
                   getLyric(this.id).then(res=>{
                        try{
                            this.lyric = res.data.lrc.lyric
                            this.handleLyric(    this.lyric)
                        }catch (e) {
                            window.alert('歌词加载不出来，抱歉 请选择其他歌曲')
                        }
                   })

               }

            },
            showLog(){
                this.isLog = true
            },
            disLog(){
                this.isLog = !this.isLog;
            },
            handleLyric(txt){
                   let timeArray =  txt.match(/\[.*?]/g);
                    let lyricArray = txt.match(/\].*?\n/g);
                    let   lyrictxt = lyricArray.toString().replace(/\]/g,'');
                       let timeTxt=  timeArray.toString().replace(/\[|]/g,'')
                timeArray =timeTxt.split(',')
                lyricArray= lyrictxt.split(',')

                timeArray.forEach((item,index,array)=>{
                    let [mhand,shand]=item.split(':')
                    mhand  = parseInt(mhand)*60;
                    shand  = parseFloat(shand).toFixed(3)
                    shand = parseFloat(shand)
                    let time =  (mhand + shand).toFixed(3)
                    array[index] = time
                })

                let lyric =[]
                        timeArray.forEach((item,index)=>{
                            let lyricObj ={}
                            lyricObj.name= item;
                            lyricObj.value= lyricArray[index];
                            lyric.push(lyricObj)
                         })
                    this.lyricArray = lyric



            }
        },
        created() {
            this.$emit('loaded',false)
            this.$store.commit('showLogBox',false)
            this.init()
            this.listenAudio()

        },
        watch:{
            showSong:function (val) {
                this.init()
                return val

            }
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
        min-height: 600px;

    }
    .songItem{
        width: 20%;

        margin: 10px auto;
    }

</style>