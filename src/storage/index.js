import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({

    state:{
        isLog:false,
        showLog:false,
        nickName:'',
        userId:0,
        Audio:null
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
                 console.log('src赋值完毕');
             }
             if(playLoad.behavior === 'play')
             {
                 console.log('play');
                 setTimeout(
                 ()=> state.Audio.play(),

             )
             }
             if(playLoad.behavior === 'pause')
             {
                 console.log('pause');
                 setTimeout(
                 ()=> state.Audio.pause()
                 )
             }

        },
        initAudio(state){
            state.Audio = document.createElement('Audio')
        }

    },
    actions:{

    }


})
export  default store