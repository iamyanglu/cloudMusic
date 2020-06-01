<template>
    <div v-if="flag">
        <div class="musicBox">
            <div class="funBox"><div @click="shuffle">随机播放</div><div @click="order">顺序播放</div></div>




            <div class="music_list" v-if="isflesh"><cloud-item v-for="(item,key)  in   currentList" @play="play" :songName="item.name" :id="item.id" :playId="id"
                                                               :key="item.id" @pause="pause"></cloud-item>
            </div>
            <paging class="pageing" v-show="showPage && isflesh" :totalPage="songsList.length / 6-1" @page="page"></paging>

        </div>


    </div>
</template>

<script>
   import {getRecommend,getMusic} from "../../network/musicRequest";
   import cloudItem from "../../components/content/cloud/cloudItem";

    import Paging from "../../components/common/paging/paging";


    export default {
        name: "toDayHot",
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
                isflesh:true,
                flag:false


            }
        },
        methods:{
            shuffle(){
                console.log('洗牌');
            },
            order(){
                console.log('顺序')
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
                let preId = this.id;
                if(preId !==0){
                    this.isflesh = false
                    setTimeout(()=>{
                        this.isflesh = true
                    },0)
                }
                this.id = id;
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
            init(){
               this.flag=  window.localStorage.getItem('logStatus')
             if(this.flag)
             {
                 getRecommend().then(res=>{
                     if(res.data.code === 200)
                     {
                         let  data = res.data
                         this.songsList.push(...data.data.dailySongs)
                         this.currentList = this.toPage(0,6,this.songsList)
                     }
                 })
             }
             else{
                 this.$store.commit('showLogBox',true)
             }
            }

        },
        created() {
        this.init()

        },
        beforeDestroy() {

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
   .funBox {
       width: 100%;
       display: flex;
      justify-content: space-between;
   }
    .funBox div{
        border: 1px dotted black ;
        margin-right: 100px;
        padding: 10px;

    }
    .music_list{
        width: 100%;
        height: 70%;
        margin-bottom: 80px;

    }


</style>