<template>
    <div>
        <div class="musicBox">
            <div class="searchBlank">
            <input v-model.number="keyWords" class="musicKey" autofocus="autofocus" /><a class="search"   @click="searchMusic">搜索</a>
            </div>



            <div class="music_list" v-if="isflesh"><cloud-item v-for="(item,key)  in    currentList" @play="play" :songName="item.name" :id="item.id" :playId="id"
                    :key="item.id" @pause="pause"></cloud-item>
            </div>

            <div class="paPage" v-show="show && isflesh">
                <a @click="toPage(0)">首页</a> <a @click="currentPage > 0 ? toPage(currentPage - 1) :alert('已是首页')">上一页</a>
                <a @click="currentPage+1 < (totalSongs/6) ? toPage(currentPage + 1) :alert('已到最后一页')">下一页</a><a @click="toPage(totalSongs/6 - 1)">尾页</a><div><input v-model.Number="whPage"><div class="btnPage" @click="(totalSongs/6) >= whPage?toPage(whPage-1):alert('最多为'+totalSongs/6)">跳转</div></div>
            </div>

        </div>


    </div>
</template>

<script>
    import {getIdList,getMusic} from "../../network/musicRequest";
    import cloudItem from "./cloudItem";


    export default {
        name: "cloudmusic",
        components:{
            cloudItem
        },
        computed:{
            show(){
                return this.songsList.length > 0
            }


        },
        data(){
            return {
                whPage:'',
                 keyWords:'',
                totalSongs:0,
                songsList:[],
                totalPage:0,
                id:0,
                currentPage:0,
                currentList:[],
                Audio:null,
                isflesh:true


            }
        },
        methods:{
            alert(str){
                window.alert(str)

            },
            pause(){
                this.Audio.pause()
            },
            init(){
                this. Audio = document.createElement('Audio')
            },

            play(id){
                let preId = this.id;

                this.id = id;
                getMusic(this.id).then(res=>{

                    this.Audio.src = res.data.data[0].url

                    this.Audio.play()

                })
                if(preId !==0){
                    this.isflesh = false
                  setTimeout(()=>{
                      this.isflesh = true
                  },1)
                }
            },
            toPage(page){

               this.currentList = this.songsList.slice(page*6,page*6+6);
                this.currentPage = page

            },

            searchMusic(){
                getIdList(this.keyWords).then
                (res=>{

                    if(res.data.code === 200){
                        let songs = res.data.result
                        this.totalSongs = songs.songs.length
                        this.songsList = songs.songs
                          this.toPage(this.currentPage)

                    }
                    else{
                        console.log(res.data);
                    }
                    }
                )

            }

        },
        created() {
            this.init()
            this.$emit('loaded');
        },
        beforeDestroy() {
            this.Audio.pause()
        }
    }
</script>

<style scoped>
    .musicBox{
        padding: 50px;
        width: 60%;
        margin: 20px auto;
        border: 1px #eeeeee solid;
        cursor: pointer;
    }
    .musicKey{
        width: 800px;
        font-size: 25px;
        height: 50px;

        box-shadow: 0px 1px saddlebrown;
    }
    .search{
        text-align: center;
        line-height:50px ;
        margin-left: 90px;
        display: inline-block;
        width: 100px;
        height: 50px;
        cursor: pointer;
        border-shadow: 0px 1px #eeeeee;
        transition: all 0.5s;


    }
    .searchBlank{

    }
    .search:hover{
        border: 0  solid lightblue;
        box-shadow: 1px 1px lightblue;
    }
    .music_list{
        width: 100%;
        height: 70%;
        margin-bottom: 80px;

    }
    .searchBlank{
        width: 100%;
        display: flex;
        height: 49px;
    }
    .paPage{


        height: 39px;
        display: flex;


    }
    .paPage a{
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        line-height: 35px;
        width: 58px;
        height: 35px;
        border: 1px black solid;
    }
    .paPage input{
        height: 35px;
        border: none;
        margin-right: 10px;
        border-bottom: 1px solid black;
    }
    .paPage div{
        display: inline-block;
    }
    .paPage .btnPage
    {    display: inline-block;
        margin-right: 20px;
        text-align: center;
        line-height: 35px;
        width: 58px;
        height: 35px;
        border: 1px black solid;
    }
</style>