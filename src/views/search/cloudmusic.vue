<template>
    <div class="searchDiv">
        <div class="musicBox">
            <div class="searchBlank">
            <input v-model.number="keyWords" class="musicKey" autofocus="autofocus" /><a class="search"   @click="searchMusic">搜索</a>
            </div>



            <div class="music_list" ><cloud-item v-for="(item,key)  in   currentList" @play="play" :songName="item.name" :id="item.id" :playId="id"
                    :key="item.id" @pause="pause"></cloud-item>
            </div>
            <paging class="pageing" v-show="showPage " :totalPage="songsList.length / 6-1" @page="page"></paging>

        </div>


    </div>
</template>

<script>
    import {getIdList,getMusic} from "../../network/musicRequest";
    import cloudItem from "../../components/content/cloud/cloudItem";
    import Paging from "../../components/common/paging/paging";


    export default {
        name: "cloudmusic",
        components:{
            Paging,
            cloudItem
        },
        computed:{
           showPage(){
               return this.currentList.length> 0
           }


        },
        data(){
            return {

                 keyWords:'',
                songsList:[],
                totalPage:0,
                id:0,
                currentPage:0,
                currentList:[],
                Audio:null,



            }
        },
        methods:{
            init(){
                let sear = document.querySelector('.searchDiv'
                )
                console.log(sear);
                let w = document.documentElement.clientWidth;
                let h = document.documentElement.clientHeight+'px'
                sear.style.width =w;
                sear.style.height = h;
            },
            page(obj){

                if(obj.fun===0)
                {
                    this.currentList = this.toPage(0,6,this.songsList)
                }
                else if(obj.fun ===1){
                    this.currentList = this.toPage(obj.page,6,this.songsList)
                }
                else if(obj.fun ===2){
                    this.currentList = this.toPage(obj.page,6,this.songsList)
                }
                else if(obj.fun ===3 ){
                    this.currentList = this.toPage(this.songsList.length/6-1,6,this.songsList)
                }
                else if(obj.fun ===4){
                    this.currentList = this.toPage(obj.page,6,this.songsList)
                }
            },
            alert(str){
                window.alert(str)

            },
            pause(){
                this.$store.commit('myAudio',{
                    behavior:'pause'
                })
            },


            play(id){

                this.id = id;
                console.log(this.id);
                getMusic(this.id).then(res=>{

                   this.$store.commit('myAudio',{
                       src:res.data.data[0].url,
                       behavior:'pause'
                   })
                    this.$store.commit('myAudio',{
                        behavior:'play'
                    })
                })

            },

            toPage(page,count,allList){
                this.currentPage = page;
                return allList.slice(page*count,page*count+count)

            },
            searchMusic(){
                getIdList(this.keyWords).then
                (res=>{

                    if(res.data.code === 200){
                        let songs = res.data.result

                        this.songsList = songs.songs
                        this.currentList = this.toPage(0,6,this.songsList)

                    }
                    else{
                        console.log(res.data);
                    }
                    }
                )

            }

        },
        created() {
            this.$store.commit('showLogBox',false)


        },
        mounted() {
            this.init()
        },
        beforeDestroy() {

        }
    }
</script>

<style scoped>
    .searchDiv{
        width: 100%;
        height: 100%;
    }
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


</style>