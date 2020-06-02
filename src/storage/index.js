import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({

    state:{
        isLog:false,
        showLog:false,
        nickName:'',
        userId:0,
        Audio:null,
        playId:0,
        name:'无',
    },
    getter:{},
    mutations:{
        showLogBox(state,logStatus){
            state.showLog= logStatus

        },
        log(state){
            state.isLog = true
        },
        getName(state,name){
            state.nickName = name
        },
        toUSerId(state,id){
            state.userId =id
        },
        myAudio(state,playLoad){ //对Audio 进行管理
             if(playLoad.src){
                 state.Audio.src = playLoad.src

             }
             if(playLoad.behavior === 'play')
             {

                 setTimeout(
                 ()=> state.Audio.play(),

             )
             }
             if(playLoad.behavior === 'pause')
             {

                 setTimeout(
                 ()=> state.Audio.pause()
                 )
             }

        },
        initAudio(state){
            state.Audio = document.createElement('Audio')
        },
        playId(state,id)
        {

            state.playId = id
        },
        songName(state,name){
            state.name=name
        }

    },
    actions:{

    }


})
export  default store