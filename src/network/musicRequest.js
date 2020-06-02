import axios from 'axios'
let music = axios.create({
    baseURL:'http://127.0.0.1:3000'
})


export  function getMusic(id) {
    return music({
        url:'/song/url',
        params:{

            id:id
        }
    })

}

export  function getIdList(key) {
    return music({

        url:'/search',
        params:{
           keywords:key
        }
    })

}
export function getSongLIst(id) {
    return music({
        url:'/user/playlist',
        params:{
            uid:id
        }
    })

}
export function getLovedSongs(id){
    return music({
        url:'/likelist',
        params:{
            uid:id
        }


    })

}
export function getRecommend(){
    return music({
        url:'/recommend/songs',
        params:{
            cookie:JSON.parse(window.localStorage.getItem('cloudPer')).cookie
        }
    })
}