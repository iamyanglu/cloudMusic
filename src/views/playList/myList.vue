<template>
    <div v-if="isflag && flag">
        <div class="musicBox">
            <div class="funBox"><div @click="shuffle" title="随机播放30首歌曲">随机播放</div><div @click="order" title="按顺序播放30首歌曲">顺序播放</div></div>




            <div class="music_list" ><cloud-item :show-add='false' v-for="(item,key)  in   currentList" @play="play" :songName="item.name" :id="item.id" :playId="id"
                                                 :key="item.id" @pause="pause"></cloud-item>
            </div>
            <paging class="pageing" v-show="showPage && isflesh" :totalPage="Math.ceil(songsList.length / 6-1)" @page="page"></paging>

        </div>


    </div>
</template>

<script>
    import {getLovedSongs,getMusic,getDetail} from "../../network/musicRequest";
    import cloudItem from "../../components/content/cloud/cloudItem";

    import Paging from "../../components/common/paging/paging";


    export default {
        name: "myList",
        components:{
            Paging,
            cloudItem
        },
        computed:{
            showPage(){
                return this.currentList.length> 0
            },
            isflag(){

                this.flag = false
                setTimeout(()=>{
                    this.flag=true
                    this.init()
                })
                return this.$store.state.isLog
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
                flag:false,
                idsList:[]


            }
        },
        methods:{
            shuffle(){
                let  randomArray=[];
                let srcArray=[];
                srcArray.push(...this.songsList)
                while(srcArray.length > 0){
                    let rand = Math.floor(Math.random()*srcArray.length)
                    randomArray.push(srcArray[rand]);
                    srcArray.splice(rand,1)
                }
                this.$store.commit('myAudio',{
                    behavior:'pause'
                })
                this.randomPlay(randomArray)
            },
            randomPlay(array,i){
                if(i===undefined)
                {
                    i=0

                    getMusic(array[0].id).then(res=>{
                        this.id = array[0].id
                        this.$store.commit('playId',  this.id )
                        this.$store.commit('songName',   array[0].name )
                        this.$store.commit('myAudio',{
                            src:res.data.data[0].url,
                            behavior:'pause'
                        })

                        this.$store.commit('myAudio',{
                            behavior:'play'
                        })
                        this.$store.state.Audio.addEventListener('ended',()=>{
                            this.randomPlay(array,i+=1)
                        })
                    })

                }
                else{
                    if(i<30)
                    {
                        getMusic(array[i].id).then(res=>{
                            this.id = array[i].id
                            this.$store.commit('playId',  this.id )
                            this.$store.commit('songName', array[i].name )

                            this.$store.commit('myAudio',{
                                src:res.data.data[0].url,
                                behavior:'pause'
                            })
                            this.$store.commit('myAudio',{
                                behavior:'play'
                            })
                            this.$store.state.Audio.addEventListener('ended',()=>{
                                this.randomPlay(array,i+=1)
                            })
                        })
                    }

                    else{
                        console.log(i);
                        return
                    }
                }
            },
            order(){
                let newArray =this.songsList
                this.randomPlay(newArray)
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


                    this.currentList = this.toPage(Math.ceil(this.songsList.length/6-1),6,this.songsList)
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
                this.id= 0

            },

            play(id){
                let preId = this.id;

                this.id = id;
                getMusic(this.id).then(res=>{

                    this.$store.commit('myAudio',{
                        src:res.data.data[0].url,
                        behavior:'pause'
                    })
                    this.$store.commit('myAudio',{
                        behavior:'play'
                    })
                    if(preId !==0){
                        this.isflesh = false
                        setTimeout(()=>{
                            this.isflesh = true
                        },0)
                    }
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
                    let id = JSON.parse(window.localStorage.getItem('cloudPer')).userId
                  getLovedSongs(id).then(res=>{
                        if(res.data.code === 200)
                        {
                            this.idsList = res.data.ids
                            getDetail(this.idsList.toString()).then(res=>{
                            this.songsList = res.data.songs;
                            this.currentList = this.toPage(0,6,this.songsList)


                            })

                        }
                    })
                }
                else{
                    this.$store.commit('showLogBox',true)
                }
            },
            byIdsgetsL(list,i) {

                if (i === undefined)
                { i = 0;
                    getMusic(list[0]).then(res=>{
                        console.log(res.data);
                        this.songsList.push(res.data)
                        this.byIdsgetsL(list,1)
                    })
                }
                else{
                    if(i === list.length)
                    {

                        return
                    }
                    getMusic(list[i]).then(
                        res=>{
                            this.songsList.push(res.data)
                            this.byIdsgetsL(list,i+1)

                        }
                    )
                }

            }

        },
        created() {
            this.init()
            this.id = this.$store.state.playId;


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
        cursor: pointer;

    }
    .music_list{
        width: 100%;
        height: 70%;
        margin-bottom: 80px;

    }


</style>